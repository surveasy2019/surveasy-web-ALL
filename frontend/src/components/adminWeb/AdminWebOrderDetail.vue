<template>
  <div v-if="progress2Modal==true" class="p2-modal">
    <div class="p2-contentsbox">
      <div id="p2-top">
        <div @click="$emit('close')" class="p2-close"><i class="fas fa-times"></i></div>
        <p class="p2-title">설문 상세정보</p>
      </div>
      
      <div id="p2-container">
        <div id="p2-id"><div>ID :  {{id}}</div></div>

        <div class="detail-col">
          <div id="detail-title">* Reward 설정</div>
          <div><input id="detail-input" type="text" placeholder="reward (숫자만)" v-model="reward" required></div>
        </div>
    
        <div class="detail-col">
          <div id="detail-title">(선택) 패널 유의사항 질문형으로 수정</div> 
          <div>            
            <input id="detail-input" type="text" placeholder="패널 유의사항" v-model="noticeToPanel">
            <div id="detail-col2">고객 입력 : {{notice}}</div>
          </div>
          
        </div>

        <div class="detail-col">
          <div id="detail-title">(선택) 설문 링크 수정</div>
          <div>
            <input id="detail-input" type="text" placeholder="미단축 링크" v-model="link">
            <div id="link-btn"><button><a :href="link" target="_blank">링크 확인</a></button></div>
          </div>
          
        </div>

        <div class="detail-col">
          <div id="detail-title">(선택) dueTimeTime 추가</div>
          <div>
            <input id="detail-input" type="text" placeholder="duetimetime" v-model="newDuetimetime">
            <div id="detail-col2">현재 duetimetime : {{due}} </div>
          </div>
          
        </div>
        
      </div>
      <button id="p2-fin-btn" @click="uploadInfo">업로드 완료하기</button>
      
    </div>
      
  </div>
</template>

<script>
import AdminWebOrderVue from './AdminWebOrder.vue'
import { getFirestore,collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'

export default {
  name: AdminWebOrderVue,
  props: {
    progress2Modal : {
      typeof: Boolean,
      require: true,
      default: false
    },

    id: { typeof: Number },
    notice: { typeof: String },
    due: { typeof: String },
    uploaderEmail: { typeof: String }

  },

  data() {
    return {
      reward : "",
      noticeToPanel : "",
      link : "",
      newDuetimetime : ""
    }
  },

  methods: {
    async fetchLastIDChecked() {
      const db = this.$store.state.db
      const lastIDChecked= []
      const docRef = doc(db,"lastID", "lastIDChecked") 
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        lastIDChecked.push(docSnap.data())
        console.log(lastIDChecked[0].lastIDChecked)
        return lastIDChecked[0].lastIDChecked
      }
    },

    async uploadInfo(){
      const db = this.$store.state.db
      const surveyRef = doc(db,"surveyData", this.id.toString())
      await updateDoc(surveyRef, {
        panelReward: parseInt(this.reward),
        noticeToPanel : this.noticeToPanel
      })

      var lastIDChecked = await this.fetchLastIDChecked()
      var lastIDRef = doc(db,"lastID","lastIDChecked")
      var idDocref = doc(db, "surveyData", this.id.toString())
      var userDocRef = doc(db, "userData", this.uploaderEmail.toString())

      if(this.link.length>5) {
        await updateDoc (idDocref, {
          link : this.link.toString()
        })
      }

      if(this.due.length<3 && this.newDuetimetime.length>3) {
        await updateDoc( idDocref, {
          dueTimeTime : this.newDuetimetime.toString()
        })
      }


      // await updateDoc(userDocRef, {
      //   respondArray: arrayUnion(lastIDChecked)
      // })


      await updateDoc( idDocref, {
        progress : 2,
        lastIDChecked : lastIDChecked,
        
      })

      await updateDoc (lastIDRef, {
        lastIDChecked : (lastIDChecked + 1)
      }).then(alert('업로드 완료'))
      
      

    },
    
  }
}
</script>

<style>
.p2-modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 3140px;
  background-color: rgba(255, 255, 255, 0.02);
  display: table;
  transition: opacity .3s ease;
}
.p2-contentsbox {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  width: 680px;
  height: 530px;
  margin: 150px auto;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(56, 56, 56, 0.042);
  transition: all .3s ease;
  z-index: 2;
}
#p2-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
}
.p2-title {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: bold;
  margin: 5px;
  color: #626161;
}
#p2-id {
  font-family: 'Noto Sans KR', sans-serif;
  color:#0CAE02;
  font-size: 18px;
}
.p2-close {
  display: flex;
  flex-direction: row;
  justify-content: right;
  cursor: pointer;
  color: #626161;
}
.detail-col {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 40px;
}
#detail-col2 {
  display: flex;
  justify-content: left;
  font-size: 15px;
  color: #a9a9a9;
  font-weight: lighter;
}
#detail-title {
  font-size: px;
  color: #000000;
}
#detail-input {
  width: 400px;
  height: 25px;
}
#link-btn {
  display: flex;
  justify-content: right;
}
#p2-fin-btn {
  padding: 5px 70px;
  margin: 37px 180px 0px 180px;
  color:#0CAE02;
  background-color: #FFFFFF;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
#p2-fin-btn:hover{
  color: white;
  background: #0AAB00;
}
</style>