<template>
<div id="admin-panelProof">
  <h1 style="color:#000000">설문 인증 ( {{nowHeadCount}} / {{headCount}} )</h1>

  <div id="proof-id-container">
    <div id="proof-id">id : {{id}} </div>
    <div id="proof-id">lastID : {{this.lastIDChecked}}</div>
  </div>
  <div id="proof-token-container">
    <h3 style="color:#000000">Wrong Panel List</h3>
    <div class="wrong-notification" v-for="token in wrongTokens" :key="token">
      <ol>
        <li id="token"><input type="checkbox">{{token}}</li>

      </ol>
    </div>
    <button id="proof-fin-btn" @click="doneCheck">완료하기</button>
  </div>

  <div id="proof-img-container">
    <span v-for="item in urlList" :key="(item)">
      <img :src="item[0]" class="proof-image">

      <input type="checkbox" @click="cancelProof(item[1])">
      <span class="fileName" :class="{active: changeColor.indexOf(item[1].substring(4))!=-1}">
        {{item[1].substring(4, 8)}}_{{item[1].substring(38)}}
      </span>
      
      
    </span>
  </div>
  


</div> 
</template>

<script>
import { getStorage, ref, getDownloadURL, listAll, list, deleteObject } from "firebase/storage"
import { getDocs, getDoc, setDoc, updateDoc, doc, collection, arrayUnion, deleteDoc, arrayRemove } from 'firebase/firestore';

export default {
  data() {
    return {
      urlList : [],
      id : this.$route.params.id,
      lastIDChecked : -1,
      imgCheck : "",
      wrongProofInfo : "",
      userUid : "",
      wrongProofUserUid : [],
      userInfo : [],
      wrongTokens : [],
      fbSaveWrongInfo : [],
      changeColor : [],
      headCount : 0,
      nowHeadCount : 0
      
      //imageInfo : []
    }
  },

  mounted() {
    this.downLoad()
  },


  methods: {

    // (1) cancelProof : 선택한 캡쳐본의 user FCM TOKEN을 상단에 띄움
    async cancelProof(info){
      this.wrongProofInfo = info

      var start = this.wrongProofInfo.indexOf("/")
      var end = this.wrongProofInfo.indexOf("_")

      this.userUid = this.wrongProofInfo.substring(start+1,end)
      this.wrongProofUserUid.push(this.userUid)
      const db = this.$store.state.db

      this.fbSaveWrongInfo.push(info.substring(4))
      //console.log(this.fbSaveWrongInfo)

      const docSnap = await getDocs(collection(db,"panelData"))
      docSnap.forEach((doc) => {
        if(doc.id == this.userUid){
          this.userInfo.length = 0
          this.userInfo.push(doc.data())
          //console.log(this.userInfo[0].fcmToken)
          this.wrongTokens.push(this.userInfo[0].fcmToken)
        }
      })
    },

    // (2) downLoad : Storage에서 캡쳐본 전체 fetch
    async downLoad() {
      const storage = getStorage()
      const db = this.$store.state.db
      const docRef = doc(db, "WrongProof", this.id.toString())
      const docSnap = await getDoc(docRef)

      const docRef2 = doc(db, "surveyData", this.id.toString())
      const docSnap2 = await getDoc(docRef2)
      this.lastIDChecked = docSnap2.data().lastIDChecked
      this.headCount = docSnap2.data().requiredHeadCount
      this.nowHeadCount = docSnap2.data().respondedPanel.length

      var wrongFileName = []

      if(docSnap.exists()) {
        wrongFileName.push(docSnap.data().fileName)
        //console.log("doc",wrongFileName[0])
      }
      
      const listRef = ref(storage, this.id+"/")
      await listAll(listRef)
      .then((res) => {
        //window.alert("불러오는 중")
        res.prefixes.forEach((folderRef) => {
        //console.log(folderRef)
        });

        res.items.forEach((itemRef) => {
          //console.log(itemRef._location)
          const path = ref(storage, itemRef._location.path_)

          getDownloadURL(path).then((url) => {
            var list = [url,itemRef._location.path_]
            this.urlList.push(list)
            // console.log(list)
            var i =0
            //왜 안되는지 모르겠는데 숫자가 크면 됨.
            while(i<=wrongFileName.length+1000) {
              if(wrongFileName[0][i] == list[1].substring(4)){
                console.log(wrongFileName[0][i], list[1].substring(4))
                //console.log("done")
                this.changeColor.push(wrongFileName[0][i])
                i++
              } 
              else {
                //console.log(wrongFileName[0][i], list[1].substring(38))
                //console.log("not done")
                i++
              }
            } 
          })

        })

      }).catch((error) => {
      });
    },
    


    // (3) doneCheck : [완로하기] 버튼 클릭 시, 최종적으로 설문 인증 취소 
    async doneCheck() {
      const db = this.$store.state.db
      const docRef = doc(db, "WrongProof", this.id.toString())

      const docRef2 = doc(db, "surveyData", this.id.toString())
      const docSnap2 = await getDoc(docRef2)
      
      console.log(docSnap2.data().respondedPanel)
    
      const docSnap = await getDoc(docRef)
      var i =0
      if(docSnap.exists()) {
        console.log("yes")
        var i =0

        while(i < this.fbSaveWrongInfo.length) {
          await updateDoc(docRef,{
            fileName : arrayUnion(this.fbSaveWrongInfo[i])
          })
          i++
        } 
      }
      
      else {
        await setDoc(docRef,{
          fileName : this.fbSaveWrongInfo
        })
      }

      
      var i =0
      while(i < this.wrongProofUserUid.length) {
        await deleteDoc(doc(db, "panelData", this.wrongProofUserUid[i].toString(),"UserSurveyList",this.lastIDChecked.toString()))

        const dRef = await getDoc(doc(db,"panelData", this.wrongProofUserUid[i].toString()))
        var nowCurrentReward = dRef.data().reward_current
        var nowTotalReward = dRef.data().reward_total
        console.log(Number(nowCurrentReward - docSnap2.data().panelReward))

        await updateDoc(doc(db,"panelData", this.wrongProofUserUid[i].toString()),{
            reward_current : Number(nowCurrentReward - docSnap2.data().panelReward),
            reward_total : Number(nowTotalReward - docSnap2.data().panelReward)
        })

        await updateDoc(doc(db,"surveyData", this.id.toString()),{
            respondedPanel : arrayRemove(this.wrongProofUserUid[i].toString())
        })
        i++
      
      }
      window.alert("처리 완료")
      this.$router.go()
        
    }
    
    
  }

}
</script>

<style>
#admin-panelProof {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#proof-id-container{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
#proof-id {
  font-size: 20px;
  font-weight: bold;
  color: #4ebe22;
  margin-left: 20px;
  margin-right: 20px;
}
#proof-headcount {
  margin: 10px;
}
#proof-token-container {
  background: #e5f5df82;
  margin-top: 30px;
  margin-bottom: 30px;
  margin-left: 100px;
  margin-right: 100px;
  padding: 10px;
  border-radius: 20px;
}
.proof-image{
  width: 100px;
  height: 200px;
  margin-right: 10px;
}
#info-text{
  font-size: 10px;
  margin-right: 10px;
}
.proof-dialog{
  position: absolute;
  left: 50px;
  top: 50px;
  background: #c5c4c4;
}

.fileName.active{
  color: red;
}
#token{
  font-size: 13px;
}
#proof-fin-btn {
  padding: 5px 60px;
  margin: 15px;
  color:#0CAE02;
  background-color: #FFFFFF;
  border: 1.5px solid #0CAE02;
  border-radius: 10px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
#proof-fin-btn:hover{
  color: white;
  background: #0AAB00;
}

</style>