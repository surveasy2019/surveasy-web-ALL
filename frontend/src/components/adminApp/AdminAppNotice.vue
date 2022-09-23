<template>
<h1 class="admin-title">공지사항 & PUSH</h1>
<div id="admin-adminNotice">
  
  <div class="admin-adminNotice-container">
    <h3>공지사항 게시</h3>
    <div class="notice-content">
      <input type="text" v-model="noticeTitle" placeholder="제목" class="notice-title"><br>
      <textarea v-model="noticeContents" placeholder="내용" class="notice-contents"></textarea>
    </div>
    <div class="notice-content-fixed">
      <input type="checkbox" value=true v-model="noticeFixed" id="checked">
      <label for="checked">fixed 여부</label>
    </div>
    <button @click="uploadNotice">업로드하기</button></div>
    <div>
  </div>

  <div class="admin-adminNotice-container">
    <h3>PUSH 알림 </h3>
    <div class="alert-notice-container">
      <input type="text" v-model="notificationTitle" placeholder="알림제목" class="notice-title"><br>
      <input type="text" v-model="notificationContent" placeholder="알림내용" class="notice-contents">
    </div>
    <br>
    <button @click="notificationNotice">알림 보내기</button>
  </div>
</div>  



</template>

<script>
import { getFirestore,collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'
export default {
  data() {
    return {
      lastNoticeID : 0,

      type : "survey",

      noticeTitle : '',
      noticeContents: '',
      fixed: [],
      noticeFixed: false,

      timestamp : '',
      notificationTitle : '',
      notificationContent : ''
    }
  },
  created() {
    this.fetchLastNoticeID
  },
  methods: {
    async fetchLastNoticeID() {
      const db = this.$store.state.db
      const lastID = []
      const docRef = doc(db, "lastID", "lastNoticeID")
      const docSnap = await getDoc(docRef) 

      if(docSnap.exists()) {
        lastID.push(docSnap.data())
        this.lastNoticeID = lastID[0].lastNoticeID

        console.log(this.lastNoticeID)
        console.log("fixed : " + this.noticeFixed)
      }
      
    },

    async uploadNotice(){
      await this.fetchLastNoticeID()

      const db = this.$store.state.db

      var today = new Date()
      var todayPlus9 = today.setHours(today.getHours()+9)
      var todayPlus9Date = new Date(todayPlus9)
      var min = todayPlus9Date.toISOString()
      
      var d= min.split('T')
      var dd = d[0]
      var ddd= dd.split('-')
      
      var year = ddd[0]
      var month = ddd[1]
      var day = ddd[2]

      month = month.length == 2 ? month : '0' + month
      day = day.length == 2 ? day : '0' + day
      var D = year + '. ' + month + '. ' + day 

      console.log(this.noticeFixed)


      var docN = doc(db, "AppNotice", this.lastNoticeID + ") " + this.noticeTitle.toString())
      var lastDocRef = doc(db, "lastID", "lastNoticeID")

      await setDoc(docN, {
        id: this.lastNoticeID,
        title : this.noticeTitle,
        date : D,
        content : this.noticeContents,
        fixed : this.noticeFixed
      })

      await updateDoc(lastDocRef, {
        lastNoticeID : this.lastNoticeID + 1
      })

      window.alert("업로드 완료")
      this.fetchLastNoticeID()
    },


    async notificationNotice() {
      const db = this.$store.state.db
      this.timestamp = new Date().toISOString().toString()
      
      var docNt = doc(db, "NotificationData",this.timestamp + this.notificationTitle.toString())
      await setDoc(docNt, {
        title : this.notificationTitle,
        body : this.notificationContent,
        type : this.type
      })
      window.alert("전송 완료")
      this.fetchLastNoticeID()
    },

    
  },

}
</script>

<style>
#admin-adminNotice {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 55px;
  padding-bottom: 30px;
}
.admin-adminNotice-container {
  margin-left: 20px;
  margin-right: 20px;
}
.notice-contents, .notice-title{
  width: 300px;
}
.notice-contents{
  height: 200px;
}
.notice-content-fixed {
  margin: 10px;
  size: 10px;
  font-weight: bold;
}
</style>