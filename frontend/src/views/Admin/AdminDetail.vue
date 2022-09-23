<template>
<div id="adminDetail-container">
  <div>
    <h4>{{id}}</h4>
  </div>
  <div class="reward-input">
    *참여보상 설정<br>
    <input type="number" placeholder="reward" v-model="reward" required>
  </div>
  
  <div class="notice">
    패널 유의사항<br>
    고객 입력 : {{currentNotice}} <br><br>
    <textarea type="text" placeholder="패널 유의사항" v-model="noticeToPanel" class="notice-text"></textarea>
  </div>
  <div class="notice">
    설문 링크 수정<br>
    <input type="text" placeholder="설문 링크" v-model="link" class="notice-text">
    <a :href="link" target="_blank">링크 확인</a>
  </div>

  <div class="notice">
    현재 duetimetime : {{this.duetimetime}} <br>
    <input type="text" placeholder="duetimetime" v-model="newDuetimetime" class="notice-text">
  </div>

  <button @click="uploadInfo">업로드하기</button>

</div>

</template>

<script>
import { getFirestore,collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'
export default {
  data() {
    return {
      id : this.$route.params.id,
      reward : 0,
      currentNotice:"",
      noticeToPanel : "",
      link : "",
      duetimetime: "",
      newDuetimetime : ""
    }
  },
  mounted() {
    this.getNotice()
    this.getDue()
  },
  methods: {

    async fetchLastIDChecked() {
    const db = this.$store.state.db
    const lastIDChecked= []
    const docRef = doc(db,"lastID", "lastIDChecked") 
    const docSnap = await getDoc(docRef)
    if (docSnap.exists()) {
      lastIDChecked.push(docSnap.data())
      return lastIDChecked[0].lastIDChecked
    }
  },

    async uploadInfo(){
      const db = this.$store.state.db
      const surveyRef = doc(db,"surveyData",this.id.toString())
      await updateDoc(surveyRef, {
        panelReward: parseInt(this.reward),
        noticeToPanel : this.noticeToPanel
      })

      var lastIDChecked = await this.fetchLastIDChecked()
      var lastIDRef = doc(db,"lastID","lastIDChecked")
      var idDocref = doc(db, "surveyData", this.id.toString())
      // var linkDocref = doc(db,"surveyData",this.id.toString())
      if(this.link.length>5){
        await updateDoc (idDocref, {
          link : this.link.toString()
        })
      }
      if(this.duetimetime.length<3 && this.newDuetimetime.length>3){
        await updateDoc( idDocref, {
        dueTimeTime : this.newDuetimetime.toString()
      })
      }

      await updateDoc( idDocref, {
        progress : 2,
        lastIDChecked : lastIDChecked,
        
      })
      await updateDoc (lastIDRef, {
        lastIDChecked : (lastIDChecked + 1)
      }).then(alert('업로드 완료'))
      
    },
    async getNotice(){
      const db = this.$store.state.db
      const noticeRef = doc(db,"surveyData",this.id.toString())
      const docSnap = await getDoc(noticeRef)
      if(docSnap.exists()){
        
        this.currentNotice = docSnap.data().notice
      }
    },
    async getDue(){
      const db = this.$store.state.db
      const timeRef = doc(db,"surveyData",this.id.toString())
      const docSnap = await getDoc(timeRef)
      if(docSnap.exists()){
        
        this.duetimetime = docSnap.data().dueTimeTime
      }
    }
    
  }

}
</script>

<style>
#adminDetail-container{
  height: 500px;
}
.fcm-contents, .notice-text{
  width: 300px;
}
.reward-input,  .notice, .fcm-contents{
  margin-bottom: 30px;
}
</style>