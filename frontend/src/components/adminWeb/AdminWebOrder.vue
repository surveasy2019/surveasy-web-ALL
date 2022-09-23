<template>
  <div class="WebOrder-container">
    <div id="WebOrder-title-container">
      <div class="WebOrder-title" @click="setListType(0)" :class="{black:this.listType==0, grey:this.listType==1}">주문 목록</div>
      <div class="WebOrder-title">|</div>
      <div class="WebOrder-title" @click="this.setListType(1)" :class="{black:this.listType==1, grey:this.listType==0}">상세 목록</div>
    </div>


      <table id="WebOrder-table-order" class="admin-table" v-if="this.listType==0">
        <th>Pro</th>
        <th>P 관리</th>
        <th>lastID</th>
        <th>ID</th>
        <th>참여인원</th>
        <th>응답수</th>
        <th>D-day</th>
        <th>마감일</th>
        <th>고객명</th>
        <th>가격</th>
        <th>소요시간</th>
        <th>제목</th>
        <th>대상</th>
        <th>나이-성별</th>
        <th>선택신분</th>

        <tr v-for="item in (this.$store.state.adminDataSurvey)" :key="item.id" class="tds" :id="item.id"
          :class="{red:item.progress==0 || item.progress==1, green2: item.progress==2, gray: item.progress==3 || item.progress==4}">
          <td style="font-weight:bold;">{{item.progress}}</td>
          <td class="btn-progress-admin">
            <button class="progress-buttonX" @click="show_deleteModal(item.id, item.progress)">X</button>
            <AdminWebOrderDelete :deleteModal="deleteModal" :id_delete="id_delete" :progress_delete="progress_delete" @closeD="close_deleteModal()"></AdminWebOrderDelete>
            <button class="progress-button1" @click="changeProgress1(item.id)">1</button> 
            <button class="progress-button2" @click="show_Modal(item.id, item.notice, item.dueTimeTime, item.uploaderEmail)">2</button>
            <AdminWebOrderDetail :progress2Modal="progress2Modal" :id="id" :notice="notice" :due="due" :uploaderEmail="uploaderEmail" @close="close_Modal()"></AdminWebOrderDetail>
            <button class="progress-button3" @click="changeProgress3(item.id)">3</button>
          </td>
          <td>{{item.lastIDChecked}}</td>
          <td>{{item.id}}</td>
          <td>
            <router-link :to="`/adminmain/adminwebpanelproof/${item.id}`" target="_blank" class="tds" :class="{red:item.progress==0 || item.progress==1, green2: item.progress==2, gray: item.progress==3 || item.progress==4}">
              {{item.respondedPanel.length}}명
            </router-link>
          </td>
          <td>{{item.requiredHeadCount}}</td>
          <td>{{this.calTime(item.dueDate, item.dueTimeTime)}}</td>
          <td>{{item.dueDate}} {{item.dueTimeTime}}</td>
          <td>{{item.uploader}}</td>
          <td>{{item.price}}</td>
          <td>{{item.spendTime}}</td>
          <td><a :href="item.link" target="_blank" class="tds"
          :class="{red:item.progress==0 || item.progress==1, green2: item.progress==2, gray: item.progress==3 || item.progress==4}">{{item.title}}</a></td>
          <td>{{item.target}}</td>
          <td>{{this.$store.state.targetingTable[0][Number(item.targetingAge)]}} / {{this.$store.state.targetingTable[1][Number(item.targetingGender)]}}</td>
          <td :title=item.uploaderIdentity>{{item.priceIdentity.substring(0, 4)}}</td>
        </tr>
      </table>



      <table id="WebOrder-table-detail" class="admin-table" v-if="this.listType==1">
        <th>lastID</th>
        <th>제목</th>
        <th>업로드일</th>
        <th>마감일</th>
        <th>참여인원</th>
        <th>응답수</th>
        <th>소요시간</th>
        <th>기관</th>
        <th>가격</th>
        <th>Reward</th>
        <th>고객명</th>
        <th>현재신분</th>
        <th>유입경로</th>
        <th>유입상세</th>
        <th>설문개수</th>
        
        
        <tr v-for="item in (this.$store.state.adminDataSurvey_detail)" :key="item.info.id" class="tds"
          :class="{red:item.progress==0 || item.progress==1, green: item.progress==2, gray: item.progress==3 || item.progress==4}">
          <td>{{item.info.lastIDChecked}}</td>
          <td>{{item.info.title}}</td>
          <td>{{item.info.uploadDate}} {{item.info.uploadTimeTime}}</td>
          <td>{{item.info.dueDate}} {{item.info.dueTimeTime}}</td>
          <td>
            <router-link :to="`/adminmain/adminwebpanelproof/${item.id}`" target="_blank" class="tds" :class="{red:item.progress==0 || item.progress==1, green: item.progress==2, gray: item.progress==3 || item.progress==4}">
              {{item.info.respondedPanel.length}}명
            </router-link>
          </td>
          <td>{{item.info.requiredHeadCount}}</td>
          <td>{{item.info.spendTime}}</td>
          <td>{{item.info.institute}}</td>
          <td>{{item.info.price}}</td>
          <td>{{item.info.panelReward}}</td>
          <td>{{item.info.uploader}}</td>
          <td>{{item.identity.substring(0, 5)}}</td>
          <td>{{item.funnel}}</td>
          <td>{{item.funnel_detail}}</td>
          <td>{{item.validIndexNum}}</td>
          
          
        </tr>
      </table>


    </div>
    
</template>

<script>
import { doc, collection, query, getDoc, getDocs, updateDoc, orderBy, limit, startAfter } from "firebase/firestore"
import AdminWebOrderDetail from './AdminWebOrderDetail.vue'
import AdminWebOrderDelete from './AdminWebOrderDelete.vue'


export default {
  data() {
    return {
      listType: 0,
      surveyList: [],
      detailList: [],

      deleteModal: false,
      id_delete: 0,
      progress_delete: 0,

      progress2Modal: false,
      id: 0,
      notice: '',
      due: '',
      uploaderEmail: '',
    }
  },

  components: { AdminWebOrderDetail, AdminWebOrderDelete },

  mounted() {
    this.fetchSurveyData()
  },



  methods: {

    setListType(type) {
      this.listType = type;

      // 상세목록의 [현재신분, 유입경로, 유입상세, 설문개수] 따로 fetch FROM userData
      if(type==1) this.fetchUserData(this.surveyList)
    },


    async fetchSurveyData() {
      this.$store.state.adminDataSurvey = []

      const db = this.$store.state.db
      const docRef = collection(db, "surveyData")
      
      const q = query(docRef, orderBy("id", "desc"), limit(20))
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((doc) => {
        if(doc.data().id > 340) this.surveyList.push(doc.data())
        
      })

      this.$store.state.adminDataSurvey = this.surveyList
    },


    async fetchUserData(surveylist) {
      if(this.detailList.length == 0) {
        const surveyList = surveylist
        const db = this.$store.state.db
        
        for(var i=0 ; i<surveyList.length ; i++) {
          const email = surveyList[i].uploaderEmail
          const docRef = doc(db, "userData", email.toString())
          const querySnapshot = await getDoc(docRef)
          if(querySnapshot.exists()) {     
            const uploadIdx = querySnapshot.data().uploadIndex 
            const validIndexNum = await this.fetchValidIndex(uploadIdx)  
            const item = { info: surveyList[i], identity : querySnapshot.data().identity, funnel : querySnapshot.data().funnel, funnel_detail : querySnapshot.data().funnel_detail, uploadIndex : querySnapshot.data().uploadIndex, validIndexNum : validIndexNum }
            this.detailList.push(item)
            //console.log(item)
          }

          this.$store.state.adminDataSurvey_detail = this.detailList
        }
      }

      
    },

    async fetchValidIndex(uploadIdx) {
      const db = this.$store.state.db
      const uploadIndex = uploadIdx
      var validIndexNum = 0
      
      for(var i=0 ; i<uploadIndex.length ; i++) {
        const id = uploadIndex[i]
        const docRef = doc(db, "surveyData", id.toString())
        const querySnapshot = await getDoc(docRef)
        if(querySnapshot.exists()) {
          if(querySnapshot.data().lastIDChecked != 0) {
            validIndexNum++
          }
        }
      }

      console.log(validIndexNum)
      return validIndexNum
    },

    calTime(date,time){
      var due = new Date(date)
      var timeHour = time.substring(0,2)
      var dateDiff = due.getTime()/3600000 - Date.now()/3600000 + (timeHour-8)
      var Dday = ''
      
      if(dateDiff<0){
        Dday='마감'
      }
      else if(dateDiff<24 && dateDiff>1){
        Dday = Math.floor(dateDiff)+'시간'
      }else if(dateDiff<48){
        Dday = 'D-1'
      }else if(dateDiff<72){
        Dday = 'D-2'
      }else if(dateDiff<96){
        Dday = 'D-3'
      }else if(dateDiff<120){
        Dday = 'D-4'
      }else if(dateDiff<144){
        Dday = 'D-5'
      }else if(dateDiff<168){
        Dday = 'D-6'
      }else if(dateDiff<192){
        Dday = 'D-7'
      }
      return Dday
    },

    async changeProgress1(id) {
      const db = this.$store.state.db
      const docRef = doc(db, "surveyData", id.toString())

      await updateDoc(docRef, {
        progress : 1
      })

      window.alert('완료')
    },

    async changeProgress3(id) {
      const db = this.$store.state.db
      const docRef = doc(db, "surveyData", id.toString())

      await updateDoc(docRef, {
        progress : 3
      })

      window.alert('완료')
    },


    show_Modal(itemId, itemNotice, itemDue, itemUploaderEmail) {
      this.id = itemId
      this.notice = itemNotice
      this.due = itemDue
      this.uploaderEmail = itemUploaderEmail
      this.progress2Modal = true
      
    },

    close_Modal() {
      this.progress2Modal = false
    },

    show_deleteModal(itemId, itemProgress) {
      this.id_delete = itemId
      this.progress_delete = itemProgress
      this.deleteModal = true
    },

    close_deleteModal() {
      this.deleteModal = false
    }



  }

}
</script>

<style>
.WebOrder-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 30px;
}
#WebOrder-title-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-size: 27px;
  font-weight: bolder;
  color: black;
  margin-bottom: 20px;
}
.WebOrder-title {
  margin-left: 20px;
  margin-bottom: 25px;
  cursor: pointer;
  color: #9b9b9b;
  font-size: 30px;
  font-weight: lighter;
}
.WebOrder-title.black {
  font-size: 30px;
  color: #000000;
  font-weight: bold;
}
.WebOrder-title.grey {
  font-size: 30px;
  color: #9b9b9b;
  font-weight: lighter;
}
#WebOrder-table-order #WebOrder-table-detail {
  margin-top: 15px;
}
.admin-th{
  background: #a3a1a1;
}
.btn-progress-admin {
  width: 80px;
  margin: 1px;
}
.progress-buttonX{
  color: white;
  background-color: rgb(181, 181, 181);
  border: 0;
  cursor: pointer;
}
.progress-button1{
  color: white;
  background-color: rgb(243, 147, 147);
  border: 0;
  cursor: pointer;
}
.progress-button2{
  color: white;
  background-color: rgb(115, 192, 44);
  border: 0;
  cursor: pointer;
}
.progress-button3{
  color: white;
  background-color:#555454;
  border: 0;
  cursor: pointer;
}
.progress-buttonX:hover{
  color: white;
  background-color: rgb(141, 141, 141);
}
.progress-button1:hover{
  color: white;
  background-color: rgb(211, 52, 52);
}
.progress-button2:hover{
  color: white;
  background-color: rgb(69, 140, 2);
}
.progress-button3:hover{
  color: white;
  background-color: #0c0c0c;
}
#admin-container table{
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}
.tds.red{
  color: rgb(243, 147, 147);
}
.tds.green2{
  color: rgb(115, 192, 44);
}
.tds.gray{
  color: #555454;
}
.progress-admin{
  margin-left: 50px;
}
.progress-admin{
  font-weight: bold;
}
.progress-two-container{
  position: absolute;
  height: 300px;
  width: 500px;
}
</style>