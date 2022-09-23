<template>
<div id="adminAlert-container">
    
  <div class="notification">
    *알림 제목 설정<br>
    <textarea type="text" placeholder="알림 제목" v-model="notiTitle" required class="fcm-contents"></textarea><br>
    *알림 내용 설정<br>
    <textarea type="text" placeholder="알림 내용" v-model="notiContent" required class="fcm-contents"></textarea>
  </div>
  

  <button @click="pushAlert">알림보내기</button>

</div>

</template>

<script>
import { getFirestore,collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'
export default {
  data() {
    return {
      
      notiTitle : "",
      notiContent : "",
      
    }
  },
  methods: {

    async pushAlert(){
      const db = this.$store.state.db
      
      var docN = doc(db, "NotificationData",this.id.toString())
      await setDoc(docN, {
        title : this.notiTitle,
        body : this.notiContent
      })      

      if(confirm("업로드 성공")){
        this.$router.push("/adminmain")
      }
    },
    
  }

}
</script>

<style>
#adminAlert-container{
  height: 400px;
  margin-top: 100px;
}
.fcm-contents, .notice-text{
  width: 300px;
}
.reward-input,  .notice, .fcm-contents{
  margin-bottom: 30px;
}
</style>