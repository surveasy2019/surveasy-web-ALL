<template>

<div id="WebOrder-title-container">
  <div class="WebOrder-title" @click="setPanelType(0)" :class="{black:this.panelType==0, grey:this.panelType==1}">패널 관리</div>
  <div class="WebOrder-title">|</div>
  <div class="WebOrder-title" @click="setPanelType(1)" :class="{black:this.panelType==1, grey:this.panelType==0}">패널 정보</div>
</div>

<div id="panelInfo-container">
  <div v-if="this.panelType==0">
    <h2 style="color: #0AAB00;">패널 검색하기</h2>
    <div>
      <input id="panel-search-input" type="text" v-model="uid" placeholder="찾고 싶은 패널의 uid를 입력하세요">
      <button id="panel-search-button" @click="searchPanel(this.uid)">검색</button>
    </div>

    <div id="panel-search-notice">{{this.message}}</div>
    <div v-if="this.individual_panel.length != 0">
      <table class="admin-table" style="margin-top:40px">
        <tr id="th">
          <th>uid</th>
          <th>이름</th>
          <th>메일</th>
          <th>전화번호</th>
          <th>성별</th>
          <th>출생년도</th>
          <th>정산 총액</th>
          <th>유입경로</th>
          <th>탈퇴</th>
        </tr>

        <tr>
          <td>{{this.individual_panel[0].uid}}</td>
          <td>{{this.individual_panel[0].name}}</td>
          <td>{{this.individual_panel[0].email}}</td>
          <td>{{this.individual_panel[0].phoneNumber}}</td>
          <td>{{this.individual_panel[0].gender}}</td>
          <td>{{this.individual_panel[0].birthDate.substring(0,4)}}</td>
          <td>{{this.individual_panel[0].reward_total}}</td>
          <td>{{this.individual_panel[0].inflowPath}}</td>
          <td><button @click="withdraw(this.individual_panel[0].uid)">X</button></td>
        </tr>
      </table>
    </div>
  </div>


  <div class="admin-info-container" v-if="this.panelType==1">
    <table class="admin-table" id="admin-info-table">
      <tr id="th">
        <th>uid</th>
        <th>이름</th>
        <th>메일</th>
        <th>전화번호</th>
        <th>성별</th>
        <th>출생년도</th>
        <th>정산 총액</th>
        <th>유입경로</th>
        <th>대학</th>
        <th>영어 설문</th>
        <th>가구형태</th>
        <th>가구형태(ios)</th>
        <th>마케팅 수신동의</th>
      </tr>


      <tr v-for="item in (this.$store.state.adminAppUserData)" :key="item.info[0].name">
        <td>{{item.info[0].uid}}</td>
        <td>{{item.info[0].name}}</td>
        <td>{{item.info[0].email}}</td>
        <td>{{item.info[0].phoneNumber}}</td>
        <td>{{item.info[0].gender}}</td>
        <td>{{item.info[0].birthDate.substring(0,4)}}</td>
        <td>{{item.info[0].reward_total}}</td>
        <td>{{item.info[0].inflowPath}}</td>
        <td>{{item.FirstSurvey[0].university}}</td>
        <td>{{item.FirstSurvey[0].EngSurvey}}</td>
        <td>{{item.FirstSurvey[0].family}}</td>
        <td>{{item.FirstSurvey[0].housingType}}</td>
        <td>{{item.info[0].marketingAgree}}</td>

        <!-- <td></td>
        <td>{{item.info[0].marketingAgree}}</td> -->

      </tr>
    </table>
  </div>
</div>
</template>

<script>
import { query, where, collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc, getAuth, de } from 'firebase/firestore'
export default {
  data() {
    return {
      panelType: 0,
      uid: '',
      individual_panel: [],
      message:  '',
    
    }
  },

  mounted() {
    
  },

  methods: {
    setPanelType(type) {
      this.panelType = type;

      if(type==1) {
        if(this.$store.state.adminAppUserData = []) this.fetchPanelInfo()
      }
    },

    async searchPanel(uid) {
      this.individual_panel = []
      const db = this.$store.state.db
      const _uid = uid
      const docRef = doc(db, "panelData", _uid.toString())
      console.log(uid)
      console.log(this.individual_panel.length)
      const docSnap = await getDoc(docRef)

      if(docSnap.exists()) {
        this.message = ""
        this.individual_panel.push(docSnap.data())
      }
      else {
        this.message = "해당 uid를 가진 패널이 없습니다."
        this.uid = ""
      }
    },

    async withdraw(uid) {
      const db = this.$store.state.db
      const reason = ["강제 탈퇴"]

      await setDoc(doc(db, "AndroidWithdrawData", uid.toString()), {
        reason: reason
      })

      await deleteDoc(doc(db, "panelData", uid.toString()))
      window.alert('탈퇴가 완료되었습니다.')
    },

    async fetchPanelInfo(){
      const db = this.$store.state.db
      const adminAppUserData = this.$store.state.adminAppUserData

      const q = query(collection(db, "panelData"), where("didFirstSurvey", "==", true))
      
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        var info = []
        info.push(doc.data())
        this.fetchPanelMyList(doc.data().uid, info)
        // console.log(doc.data().name)
      })
      
    },

    async fetchPanelMyList(uid, info) {
      const db = this.$store.state.db
      const adminAppUserData = this.$store.state.adminAppUserData

      var respondedSurvey = []
      var FirstSurvey = []
      
      const querySnapshot = await getDocs(collection(db, "panelData", uid, "UserSurveyList"))
      querySnapshot.forEach((doc) => {
          if(doc.data().isSent == false) {
            respondedSurvey.push(doc.data().id)
          }
      })

      const q = query(collection(db, "panelData", uid, "FirstSurvey"))
      const querySnapshot2 = await getDocs(q)
      if(querySnapshot2 != null) {
        querySnapshot2.forEach((doc) => {
          FirstSurvey.push(doc.data())
          console.log(doc.data().EngSurvey)
        })
      }
      

      var panel = { uid: uid, info: info, respondedSurvey : respondedSurvey, FirstSurvey : FirstSurvey }
      adminAppUserData.push(panel)
      console.log(panel)
    }


  },
}
</script>

<style>
#panelInfo-container {
  padding-top: 20px;
  display: inline-block;
  justify-content: center;
  width: 80%;
  padding-bottom: 70px;
}
.admin-title {
  margin: 30px 0 40px 0;
  color: #000000;
}
#admin-info-table {
  width: 100%;
}
#panel-search-notice {
  margin-top: 15px;
  font-size: 15px; 
  color: #a09f9f; 
  font-weight: lighter;
}
#panel-search-input {
  width: 300px;
  height: 30px;
  padding-left: 5px;
}
#panel-search-button {
  width: 60px;
  height: 35px;
  font-weight: bold;
  color: #0AAB00;
  background-color: white;
  border: 1px solid #0AAB00;
  cursor: pointer;
}
#panel-search-button:hover{
  color: white;
  background-color: #0AAB00;
}


</style>