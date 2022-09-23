<template>
  <div id="WebEtc-container">

    <div id="WebEtc-container-title">
      <div class="WebEtc-title" @click="setListType(0)" :class="{black:this.listType==0, grey:this.listType==1||this.listType==2}">템플릿</div>
      <div class="WebEtc-title">|</div>
      <div class="WebEtc-title" @click="this.setListType(1)" :class="{black:this.listType==1, grey:this.listType==0||this.listType==2}">B2B</div>
      <div class="WebEtc-title">|</div>
      <div class="WebEtc-title" @click="this.setListType(2)" :class="{black:this.listType==2, grey:this.listType==0||this.listType==1}">신분요청</div>
    </div>


    <div id="WebEtc-container-table">
      <div v-if="this.listType==0" id="WebEtc-container-table-template">
        <table id="WebEtc-table" class="admin-table">
          <tr>
            <th>신청일</th>
            <th>신청자</th>
            <th>email</th>
            <th>type</th>
            <th>etc</th>
            <th>전송 여부</th>
            <th>변경</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataTemplate_yet)" :key="item.identifyTime" :class="{blue:item.isresponded==false}">
            <td>{{item.uploadDate}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.type.substring(0, 5)}}</td>
            <td>{{item.etc}}</td>
            <td>{{item.isresponded}}</td>
            <td><button @click="changeTemplate(item.identifyTime)">변경</button></td>
          </tr>
        </table>


        <div><button @click="this.setTemplateBtn(showTemplate_history)" id="history-btn">{{this.showTemplateText}}</button></div>
        <table v-if="this.showTemplate_history" id="WebEtc-table" class="admin-table">
          <tr>
            <th>신청일</th>
            <th>신청자</th>
            <th>email</th>
            <th>type</th>
            <th>etc</th>
            <th>전송 여부</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataTemplate_history)" :key="item.identifyTime" :class="{blue:item.isresponded==false}">
            <td>{{item.uploadDate}}</td>
            <td>{{item.name}}</td>
            <td>{{item.email}}</td>
            <td>{{item.type.substring(0, 5)}}</td>
            <td>{{item.etc}}</td>
            <td>{{item.isresponded}}</td>
          </tr>
        </table>

      </div>


      <div v-if="this.listType==1" id="WebEtc-container-table-B2B">
        <table id="WebEtc-table" class="admin-table">
          <tr>
            <th>ID</th>
            <th>회사명</th>
            <th>email</th>
            <th>신청자</th>
            <th>응답 여부</th>
            <th>변경</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataB2B)" :key="item.B2BID" :class="{blue:item.isresponded==false}">
            <td>{{item.B2BID}}</td>
            <td>{{item.company}}</td>
            <td>{{item.email}}</td>
            <td>{{item.name}}</td>
            <td>{{item.isresponded}}</td>
            <td><button @click="changeB2B(item.B2BID)">변경</button></td>
          </tr>
        </table>
      </div>


      <div v-if="this.listType==2" id="WebEtc-container-table-identity">
        <table id="WebEtc-table" class="admin-table">
          <tr>
            <th>신청자</th>
            <th>email</th>
            <th>요청 신분</th>
            <th>수락 여부</th>
            <th>변경</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataIdentity_yet)" :key="item.requestEmail" :class="{blue:item.requestApproved==false}">
            <td>{{item.requestName}}</td>
            <td>{{item.requestEmail}}</td>
            <td>{{item.requestIdentity}}</td>
            <td>{{item.requestApproved}}</td>
            <td><button @click="changeIdentity(item.requestEmail, item.requestIdentity)">수락</button></td>
          </tr>
        </table>

        <button @click="this.setIdentityBtn(showIdentity_history)" id="history-btn">{{this.showIdentityText}}</button>
        <table v-if="this.showIdentity_history" id="WebEtc-table" class="admin-table">
          <tr>
            <th>신청자</th>
            <th>email</th>
            <th>요청 신분</th>
            <th>수락 여부</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataIdentity_history)" :key="item.requestEmail" >
            <td>{{item.requestName}}</td>
            <td>{{item.requestEmail}}</td>
            <td>{{item.requestIdentity}}</td>
            <td>{{item.requestApproved}}</td>
          </tr>
        </table>
      </div>

    </div>


    

  </div>

  
</template>

<script>
import {doc, query, where, collection, getDocs, updateDoc, deleteDoc} from 'firebase/firestore'
export default {
  data() {
    return {
      listType: 0,

      showTemplateText: "지난 기록 보기",
      showTemplate_history: false,

      showIdentityText: "지난 기록 보기",
      showIdentity_history: false,

      templateList: [],
      B2BList: [],
      identityList: []
    }
  },

  mounted() {
    this.fetchTemplate_yet()
    this.fetchB2B()
    this.fetchIdentity_yet()
  },

  methods: {
    setListType(type) {
      this.listType = type;
    },

    setTemplateBtn(showTemplate_history) {
      if(showTemplate_history == false) {
        this.showTemplateText = "지난 기록 숨기기"
        this.showTemplate_history = !this.showTemplate_history;
        this.fetchTemplate_history()
      } 
      else {
        this.showTemplateText = "지난 기록 보기"
        this.showTemplate_history = !this.showTemplate_history;
      }
    },

    setIdentityBtn(showIdentity_history) {
      if(showIdentity_history == false) {
        this.showIdentityText = "지난 기록 숨기기"
        this.showIdentity_history = !this.showIdentity_history;
        this.fetchIdentity_history()
      } 
      else {
        this.showIdentityText = "지난 기록 보기"
        this.showIdentity_history = !this.showIdentity_history;
      }
    },



    // Template
    async fetchTemplate_yet() {
      this.templateList = []
      const db = this.$store.state.db
      const docRef = collection(db, "TemplateData")
      const q = query(docRef, where("isresponded", "==", false))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        this.templateList.push(doc.data())
      })
      this.$store.state.adminDataTemplate_yet = this.templateList
    },

    async fetchTemplate_history() {
      this.templateList = []
      const db = this.$store.state.db
      const docRef = collection(db, "TemplateData")
      const q = query(docRef, where("isresponded", "==", true))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        this.templateList.push(doc.data())
      })

      this.$store.state.adminDataTemplate_history = this.templateList
    },

    async changeTemplate(identifyTime) {
      const db = this.$store.state.db
      const docRef = doc(db, "TemplateData", identifyTime.toString())

      await updateDoc(docRef, {
        isresponded : true
      })
      window.alert("변경 완료")
    },



    // B2B
    async fetchB2B() {
      this.B2BList = []
      const db = this.$store.state.db
      const docRef = collection(db, "B2BData")
      const q = query(docRef)

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        this.B2BList.push(doc.data())
      })

      this.$store.state.adminDataB2B = this.B2BList
    },

    async changeB2B(B2BID) {
      const db = this.$store.state.db
      const docRef = doc(db, "B2BData", B2BID.toString())

      await updateDoc(docRef, {
        isresponded : true
      })
      window.alert("변경 완료")
    },



    // Identity
    async fetchIdentity_yet() {
      this.identityList = []
      const db = this.$store.state.db
      const docRef = collection(db, "identityVerifyRequired")
      const q = query(docRef, where("requestApproved", "==", false))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        this.identityList.push(doc.data())
      })

      this.$store.state.adminDataIdentity_yet = this.identityList
    },

    async fetchIdentity_history() {
      this.identityList = []
      const db = this.$store.state.db
      const docRef = collection(db, "identityVerifyRequired")
      const q = query(docRef, where("requestApproved", "==", true))

      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        this.identityList.push(doc.data())
      })

      this.$store.state.adminDataIdentity_history = this.identityList
    },

    async changeIdentity(email, requestIdentity) {
      const db = this.$store.state.db
      const docRef = doc(db, "userData", email.toString())
      const docRef2 = doc(db, "identityVerifyRequired", email.toString())

      await updateDoc(docRef, {
        identity_responded : true,
        identity : requestIdentity
      })

      await updateDoc(docRef2, {
        requestApproved: true
      })
      window.alert("수락 완료")
    },

  }

}
</script>

<style>
#WebEtc-container-title {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;
}
.WebEtc-title {
  font-size: 30px;
  color: #9b9b9b;
  margin-left: 30px;
  margin-bottom: 55px;
  cursor: pointer;
}
.WebEtc-title.black {
  font-size: 30px;
  color: #000000;
  font-weight: bold;
}
.WebEtc-title.grey {
  font-size: 30px;
  color: #9b9b9b;
  font-weight: lighter;
}
#WebEtc-container-table {
  display: flex;
  justify-content: center;
}
#WebEtc-container-table-template, #WebEtc-container-table-B2B, #WebEtc-container-table-identity{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
}
.blue{
  color: rgb(86, 111, 221);
}
#history-btn {
  width: 400px;
  height: 50px;
  margin: 50px;
  color:#000000;
  background-color: #FFFFFF;
  border: 1.5px solid #000000;
  border-radius: 15px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}

</style>