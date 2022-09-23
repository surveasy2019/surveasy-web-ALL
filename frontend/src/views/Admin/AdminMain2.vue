<template>
  <div id="admin-container">
    <div v-if="this.$store.state.isAdmin == false">
      <input v-model="passInput" type="text" placeholder="AdminPassword" @keyup.enter="adminCheck(this.passInput)">
      <br>
      Admin Password
      <button @click="adminCheck(this.passInput)">확인하기</button>
    </div>
    
    <div v-if="this.$store.state.isAdmin">

      <div v-if="show==true">
        <h4>{{this.thisId}}</h4>
        <p>{{this.headCount}}</p>
      </div>
      
      <div>
        <!-- <p>{{computedAdmin}}</p> -->
        <h2>CONFIRM ME !</h2>
        <router-link to="/adminalert"><button>알림 보내기</button></router-link>
        <router-link to="/adminapp"><button>App 어드민 가기</button></router-link>
          <table class="table-admin">
            <tr>
              <th>ID</th>
              <th>lastIDChecked</th>
              <th>주문번호</th>
              <th>제목</th>
              <th>가격</th>
              <th>참여 인원</th> 
              <th>응답수</th>
              <th>소요시간</th>
              <th>대상</th>
              <th>링크</th>
              <th>주문 날짜</th>
              <th>업로더</th>
              <th>업로더 이메일</th>
              <th>선택한 iden</th>
              <th>현재 iden</th>
              <th>마감날짜</th>
              <th class="progress-admin">progress</th>
              <th class="btn-progress-admin">설문 진행 변경</th>
              
            </tr>

            <tr v-for="item in (this.$store.state.adminData)" :key="item.id" class="tds" :class="{red:item.progress==0 || item.progress==1, green: item.progress==2, gray: item.progress==3 || item.progress==4}">
            
              <td>{{item.id}}</td>
              <td>{{item.lastIDChecked}}</td>
              <td>{{item.orderNum}}</td>
              <td>{{item.title}}</td>
              <td>{{item.price}}</td>
              <td><router-link :to="`/panelproof/${item.id}`" target="_blank">{{item.respondedPanel.length}}명</router-link></td>
              
              <td>{{item.requiredHeadCount}}</td>
              <td>{{item.spendTime}}</td>
              <td>{{item.target}}</td>
              <td><a :href="item.link" target="_blank">Link</a></td>
              <td>{{item.uploadDate}} {{item.uploadTimeTime}}</td>
              <td>{{item.uploader}}</td>
              <td>{{item.uploaderEmail}}</td>
              <td>{{((item.priceIdentity)+"").substring(0,4)}}</td>
              <td>{{((item.uploaderIdentity)+"").substring(0,5)}}</td>
              <!-- <td><button @click="updateApproved(item)">결제 확인</button></td> -->
              <!-- <td>{{item.adminApproved}}</td> -->
              <td>{{item.dueDate}} {{item.dueTimeTime}}</td>
              <!-- <td><input type="text" placeholder="참여보상설정" v-model="panelReward"><button @click="changeReward(item.id, this.panelReward)">확인</button></td> -->
              <td class="progress-admin">{{item.progress}}</td>
              <td class="btn-progress-admin"><button class="progress-button1"  @click="changeProgress1(item.id)">1</button> 

               <!-- <button @click="changeProgress2(item.id)" class="progress-button2" >2</button> -->
              <router-link :to="`/admindetail/${item.id}`" target="_blank"><button class="progress-button2">2</button></router-link>
             
               <!-- <router-link :to="`/admindetail/${item.id}`"><button @click="changeProgress2(item.id)" class="progress-button2" >2</button></router-link> -->


               <button class="progress-button3" @click="changeProgress3(item.id)">3</button></td>
            

            </tr>
          </table>
          <p>{{dueDate}}</p>



      </div>
      <hr>
      <div>
        <h1>신분 인증 요청 !!!</h1>
        <hr>
        
        <table>
          <tr>
            <th>name</th>
            <th>email</th>
            <th>요청 identity</th>
            <th>수락 여부</th>
            <th>수락하기</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataIdentity)" :key="item.requestName" class="tds" :class="{red:item.requestApproved==false}">
            <td>{{item.requestName}}</td>
            <td>{{item.requestEmail}}</td>
            <td>{{item.requestIdentity}}</td>
            <td>{{item.requestApproved}}</td>
            <td><button @click="requestIdentityApprove(item)">확인</button></td>

          </tr>
        </table>
      </div>

      <div>
        <h1>B2B ~!~!~!</h1>
       
        <table>
          <tr>
            <th>ID</th>
            <!-- <th>uploadTime</th> -->
            <th>company</th>
            <th>email</th>
            <th>name</th>
            <th>응답 여부</th>
            <th>변경</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataB2B)" :key="item.B2BID" class="tds" :class="{red:item.isresponded==false}">
            <td>{{item.B2BID}}</td>
            <!-- <td>{{item.uploadTime}}</td> -->
            <td>{{item.company}}</td>
            <td>{{item.email}}</td>
            <td>{{item.name}}</td>
            <td>{{item.isresponded}}</td>
            <td><button @click="B2BRespond(item)">변경</button></td>

          </tr>

        </table>
        <button @click="fetchB2BID()">asdfasdf</button>
      </div>

      <div>
        <h1>검수후에수정가능하게~</h1>
      </div>

      <div>
        <h1>리스트 데이터 추가하기</h1>

        <div>
          <div>
            <input type="text" placeholder="설문 제목" v-model="UploadInputData.title">
          </div>
          <div>
            <input type="text" placeholder="설문 업로더" v-model="UploadInputData.uploader">  
          </div>
          <div>
            <input type="text" placeholder="설문 주제" v-model="UploadInputData.theme">  
          </div>
          <div>
            <input type="text" placeholder="요구 응답 수" v-model="UploadInputData.requiredHeadCount">
          </div>
          <div>
            <input type="text" placeholder="예상 소요시간" v-model="UploadInputData.spendTime">  
          </div>
          <div>
            <input type="text" placeholder="설문 기관" v-model="UploadInputData.surveyInstitute">
          </div>
          <div>
            <input type="text" placeholder="설문 링크" v-model="UploadInputData.surveyLink">         
          </div>
          <div>
            <input type="text" placeholder="설문 대상" v-model="UploadInputData.target">         
          </div>
        </div>

        <button @click="addPastData(this.UploadInputData)">리스트에 추가하기</button>
      </div>

      <hr>
      <div>
        <h2>템플릿 서비스 응답 구역</h2>

        <table>
          <tr>
            <th>주문 날짜</th>
            <th>uploader</th>
            <th>이름</th>
            <th>type</th>
            <th>email</th>
            <th>etc type</th>
            <th>응답여부</th>
            <th>응답여부변경</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminDataTemplate)" :key = "item.name" class="tds" :class="{red:item.isresponded==false}">
            <td>{{item.uploadDate}}</td>
            <td>{{item.uploader}}</td>            
            <td>{{item.name}}</td>
            <td>{{item.type}}</td>
            <td>{{item.email}}</td>
            <td>{{item.etc}}</td>
            <td>{{item.isresponded}}</td>
            <th><button @click="templateRespond(item)">변경</button></th>

          </tr>
        </table>
      </div>
      
    </div>
  </div>
</template>

<script>
import { getFirestore,collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc,query, where } from 'firebase/firestore'
//어드민 페이지 접근을 어떻게 해야할지 고민중..
//일단은 어드민 주소는 접근은 가능하되 비번을 맞게 쳐야 뒤에 부분들이 보이게 하려고함.
export default {
data(){
  return{
    passInput:'',
    nowDate: Date.now(),
    val:'',
    showTwo : false,
    UploadInputData:{
      title:'',
      theme:'',
      requiredHeadCount:'',
      spendTime:'',
      pastData: true,
      surveyInstitute:'',
      surveyLink: '',
      uploader:'',
      target:'',
      
      
    },
    headCount: '',
    show: false,
    thisId:''
  }
},

methods:{
  async showHeadcount(id){
    var db = this.$store.state.db
    const q = query(collection(db, "surveyData"), where("id", "==", id));
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) =>{
      
      this.headCount = doc.data().respondedPanel.length
      console.log(this.headCount)
      

    })
    return this.headCount
    
  },
  async adminCheck(passInput){
    const db = this.$store.state.db
    const pwRef = doc(db, "adminPassword", "adminmainPW")
    
    const docSnap = await getDoc(pwRef)
    
    if (docSnap.exists()) {
      
      if (passInput == docSnap.data().password){
        
        this.$store.commit('setAdminState')
        this.fetchAdminData()
      } else {
        alert('wrong input')
      }
    } else {alert('error')}
    // if (this.passInput == this.$store.state.AdminPassword) {
    //   alert('ok')
    //   this.$store.commit('setAdminState')
    //   this.fetchAdminData()
    //   // console.log(this.$store.state.userData)
    // } else {
    //   alert('check it again')
    // }
  },
  async fetchAdminData(){
    const db = this.$store.state.db
    const adminData = this.$store.state.adminData
    const adminDataIdentity = this.$store.state.adminDataIdentity
    const adminDataB2B = this.$store.state.adminDataB2B
    const adminDataTemplate = this.$store.state.adminDataTemplate
    // 설문 확인 데이터 받기
    const querySnapshot = await getDocs(collection(db,"surveyData"))
    querySnapshot.forEach((doc) => {
      if(doc.id>213){
        adminData.push(doc.data())
      }
      
    })
    const sorted = adminData.sort(function(a,b){return b.id - a.id })
    this.$store.state.adminData = sorted
    // 신분 전환 요청 데이터 받기
    const querySnapshot2 = await getDocs(collection(db, "identityVerifyRequired"))
    querySnapshot2.forEach((doc) => {
      adminDataIdentity.push(doc.data())
    })
    const querySnapshot3 = await getDocs(collection(db, "B2BData"))
    querySnapshot3.forEach((doc) => {
      adminDataB2B.push(doc.data())
    })
    const sortedB2B = adminDataB2B.sort(function(a,b){return b.B2BID - a.B2BID })
    this.$store.state.adminDataB2B = sortedB2B
    const querySnapshot4 = await getDocs(collection(db, "TemplateData"))
    querySnapshot4.forEach((doc) => {
      adminDataTemplate.push(doc.data())
    })
    
    
  },
  async updateApproved(payload) {
    var db = this.$store.state.db
    const docref = doc(db, "surveyData", payload.id.toString())
    await updateDoc(docref ,{
      adminApproved : true
    })
    this.$store.state.adminData = [];
    this.fetchAdminData()
  },
  async requestIdentityApprove(payload){
    var db = this.$store.state.db
    const docref = doc(db, "userData", payload.requestEmail.toString())
    const docref2 = doc(db, "identityVerifyRequired", payload.requestEmail)
    
    await updateDoc(docref, {
      identity: payload.requestIdentity,
      identity_responded: true
    })
    await updateDoc(docref2, {
      requestApproved: true
      
    }).then(alert('ok'))
    // await deleteDoc(doc(db, "identityVerifyRequired", payload.requestEmail.toString())).then(alert('ok')) 
  },
  async fetchLastID(){
        const db = this.$store.state.db
        const lastID = []
        const querySnapshot = await getDocs(collection(db, "lastID"))
        querySnapshot.forEach((doc) => {
          lastID.push(doc.data())
        })
        // console.log('fetch LastID')
        // console.log(lastID[0].lastID)
        return lastID[0].lastID
      },
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
  
  async addPastData(dataset){
    var db = this.$store.state.db
    var lastID = await this.fetchLastID()
    await setDoc(doc(db, "surveyData", lastID.toString()), {
      id : lastID,
      title : dataset.title,
      theme : dataset.theme,
      requiredHeadCount: dataset.requiredHeadCount,
      spendTime : dataset.spendTime,
      pastData : dataset.pastData,
      surveyInstitute : dataset.surveyInstitute,
      surveyLink : dataset.surveyLink,
      uploader : dataset.uploader,
      progress : 3,
      target: dataset.target,
      dueDate:"2021-12-31",
      dueTimeTime:"00:00"
      
      // surveyTitle:'',
      // theme:'',
      // requireHeadCount:'',
      // spendTime:'',
      // pastData: true,
      // surveyInstitute:'',
      // surveyLink: '',
      // uploader:''
    }).then(alert('완료'))
    var idDocref = doc(db, "lastID", "lastID")
    
    await updateDoc(idDocref, {
      lastID : (lastID + 1)
    })
    console.log('완료')
  },
  async changeProgress1(targetID){
    var db = this.$store.state.db
    var idDocref = doc(db, "surveyData", targetID.toString())
    await updateDoc( idDocref, {
      progress : 1
    })
    window.alert('완료')
  },
  async changeProgress2(targetID){
    var db = this.$store.state.db
    var lastIDChecked = await this.fetchLastIDChecked()
    var lastIDRef = doc(db,"lastID","lastIDChecked")
    var idDocref = doc(db, "surveyData", targetID.toString())
    await updateDoc( idDocref, {
      progress : 2,
      lastIDChecked : lastIDChecked
    })
    await updateDoc (lastIDRef, {
      lastIDChecked : (lastIDChecked + 1)
    })
    window.alert('완료')
    
    
  },
  async changeProgress3(targetID){
    var db = this.$store.state.db
    var idDocref = doc(db, "surveyData", targetID.toString())
    await updateDoc( idDocref, {
      progress : 3
    })
    window.alert('완료')
  },
  async changeReward(targetID, panelReward){
    var db = this.$store.state.db
    var idDocref = doc(db, "surveyData", targetID.toString())
    await updateDoc(idDocref, {
      panelReward: Number(panelReward)
    })
    window.alert('완료')
  },
  async templateRespond(item){
    var db = this.$store.state.db
    var templateDocref = doc(db, "TemplateData", item.identifyTime.toString())
    await updateDoc(templateDocref, {
      isresponded: true
    })
    window.alert('완료')
  },
  async B2BRespond(item){
    var db = this.$store.state.db
    var B2BDocref = doc(db, "B2BData", item.B2BID.toString())
    await updateDoc(B2BDocref, {
      isresponded : true
    })
    window.alert('완료')
  },

  
  
},
computed:{
  dueDate(){
    
    var time = this.$store.localSurveyState.dueTime
    var milli = new Date(date+" "+time);
    var diff = milli.getTime() - Date.now()
    var due = diff/3600000
      
      
      if(due<24){
        val =  "D-1"
      }else if(due<48){
        val =  "D-2"
      }else{
        val =  "진행중"
      }
      // console.log(val)
      return val
  },
    
  }
}
</script>

<style>
/* .progress-button1{
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
.progress-button1:hover{
  color: white;
  background-color: rgb(211, 52, 52);
}
.progress-button2:hover{
  color: white;
  background-color: rgb(31, 65, 0);
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
.tds.green{
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
} */
</style>