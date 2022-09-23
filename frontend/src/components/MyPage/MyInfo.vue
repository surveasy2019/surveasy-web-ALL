<template>
  <div id="myinfo-container">
    <!-- <h1>myinfo</h1>
    <p>{{this.$store.state.currentUser}}</p>
    <div>
      <p>닉네임 : {{this.$store.state.currentUser['nickname']}}</p>
      <p>핸드폰번호 : {{this.$store.state.currentUser['phoneNumber']}}</p>
      <p>이메일 : {{this.$store.state.currentUser['email']}}</p>
      <p>신분 : {{this.$store.state.currentUser['identity']}}</p>
      <p>패널 여부 : {{this.$store.state.currentUser['isPanel']}}</p>
      <p>업로드 설문 : {{this.$store.state.currentUser['uploadIndex']}}</p>
    </div>
    
    <div>
      <hr>
      <h1>신분 인증 요청하기</h1>
      <p>{{identityRequest.request}}</p>
      <div>
        <select name="" id="" v-model="identityRequest">
          <option disabled >요청할 신분을 선택하세요</option>
          <option :value="{request: 'undergraduate'}">대학생 (학부생)</option>
          <option :value="{request: 'postgraduate'}">대학원생</option>
        </select>
        <br>
        <button @click="sendRequestVerifyIdentity(this.identityRequest)">요청 보내기</button>
        <br>
        <router-link to="/withdraw" class="go-link">회원 탈퇴하기 ></router-link>
      </div>

    </div> -->
    <div class="top-box">
      <p class="green-title">회원 정보</p>
      <div class="info-content">
      <div class="info-contents1">
        <p class="info-title">이메일</p>
        <!-- <p class="info-title">비밀번호</p> -->
        <p class="info-title">이름</p>
        <p class="info-title">휴대폰 번호</p>
        <p class="info-title">생년월일</p>
        <p class="info-title">할인대상</p>
       
      </div>
      <div class="info-contents2">
        <p class="info-detail">{{this.$store.state.loginState.currentUser['email']}}</p>
        <!-- <p class="info-detail">비밀번호</p> -->
        <p class="info-detail">{{this.$store.state.loginState.currentUser['name']}}</p>
        <p class="info-detail">{{this.$store.state.loginState.currentUser['phoneNumber']}}</p>
        <p class="info-detail">{{this.$store.state.loginState.currentUser['birth']}}</p>
        <p class="info-detail">{{this.$store.state.PointUserData[0].identity}}</p>
        <!-- <p class="info-detail">환불 계좌</p> -->
        <!-- 환불계좌 언제 작성하게 하는지? -->
      </div>
      </div>
      <!-- <div class="btn">
        <button class="btn-info">회원정보수정</button>
        router로 해야하는지..? 
      </div> -->
      <p class="edit-ment">회원정보 수정을 원하실 경우 <a id="k-link" href="http://pf.kakao.com/_xfialK/chat" target="_blank">서베이지 카카오톡 채널</a>로 문의 바랍니다.</p>
      
    </div>

    <!-- <div class="middle-box"> 
      <p class="green-title">대학(원)생 인증 완료 요청 보내기 </p>
      <select name="" id="middle-select" v-model="identityRequest">
          <option :value="{request: ''}" selected disabled >인증하려는 할인 대상을 선택하세요</option>
          <option :value="{request: '대학생'}">대학생 (학부생)</option>
          <option :value="{request: '대학원생'}">대학원생</option>
      </select>
      <button class="mi-btn" @click="sendRequestVerifyIdentity(this.identityRequest)">요청 보내기</button>
      <p class="mi-detail">상단의 <span id="info-green">'대학(원)생 인증하러 가기'</span>를 통해 카카오톡으로 대학(원)생임을 확인할 수 있는 자료를 보내주세요.
        <br>자료 전송 후 인증 완료 <span id="info-green">'요청 보내기'</span>까지 눌러주셔야 원활한 인증이 가능합니다.
      </p>
    </div> -->


    <div class="bottom-box">
      <p class="green-title">수신 설정</p>
      <div class="info-contents">
        <p class="info-title">이벤트 혜택 (마케팅 정보 수신)
        <span class="info-detail-gray">구매 정보, 회원정보 수정, 공지, CS 알림은 수신설정에 상관없이 발송됩니다.</span></p>
        <div class="input-">
          <input type="checkbox" name="message" v-model="marketingTF.marketingSMS"> SMS / 카카오톡
          <input type="checkbox" name="mail" v-model="marketingTF.marketingEmail"> 이메일
          
        </div>
        
      </div>
      <div class="btn">
      <button @click="marketingAgree(this.marketingTF)" class="btn-info">저장</button>
      </div>
    </div>
    <div class="more">
      <router-link to="/withdraw">회원 탈퇴하기 ></router-link>
      <!-- 회원탈퇴 7일 내에 재로그인 <- 어떤 방식으로 할건지 -->
    </div>
  </div>
</template>

<script>

import {doc, collection, getDocs, updateDoc, setDoc} from 'firebase/firestore'


export default {
  data(){
    return {
      // identityRequest: '',
      marketingTF:{
        marketingSMS: false,
        marketingEmail: false
      },

      identity: ''
      
    }
  },

  mounted() {
    this.fetchUserData_point()
  },


  methods: {
    async fetchUserData(){
      const db = this.$store.state.db
      const userData = this.$store.state.userData
      const querySnapshot = await getDocs(collection(db,"userData"))
      querySnapshot.forEach((doc) => {
        userData.push(doc.data())
      })
      
    },

    async fetchUserData_point(){
      const db = this.$store.state.db
      this.$store.state.userData = []
      this.$store.state.PointUserData = []
      const userData = this.$store.state.userData
      const querySnapshot = await getDocs(collection(db,"userData"))
      querySnapshot.forEach((doc) => {
        userData.push(doc.data())
      })
      const PointUserData = userData.filter(item => item.email===this.$store.state.loginState.currentUser.email)
      this.$store.state.PointUserData = PointUserData
      // console.log('***pointUser: ')
      // console.log(PointUserData[0])
      this.getPointInfo()
    },

    getPointInfo() {
      var c = this.$store.state.PointUserData[0].point_current
      var t = this.$store.state.PointUserData[0].point_total
      this.$store.state.localPointState.point_current = c
      this.$store.state.localPointState.point_total = t

      // console.log('current point: ' + this.$store.state.localPointState.point_current)
    },


    // async sendRequestVerifyIdentity(requestInfo) {
    //   const db = this.$store.state.db
    //   const currentUser = this.$store.state.loginState.currentUser

    //   if(this.$store.state.loginState.currentUser.identity == 'default' && this.$store.state.loginState.currentUser.identity_request == false) {
    //     // console.log(this.$store.state.loginState.currentUser.identity)


    //     await setDoc(doc(db, "identityVerifyRequired", currentUser.email.toString()), {
    //       requestIdentity: requestInfo.request,
    //       requestApproved: false,
    //       requestName: currentUser.name,
    //       requestEmail : currentUser.email
        
    //     })
    //     await updateDoc(doc(db, "userData", currentUser.email.toString()), {
    //       identity_request: true
        

    //   }).then(
    //     alert("요청이 전송되었습니다 !")
    //   )
    //   this.$store.state.userData = []
    //     await this.fetchUserData()
    //     // console.log(this.$store.state.loginState.currentUser.identity_request)
    //   }
    //   else {
    //     alert('이미 인증을 완료하셨습니다.')
    //   }
    // },

    async marketingAgree(TF) {
      const db = this.$store.state.db
      const currentUser = this.$store.state.loginState.currentUser
      await updateDoc(doc(db, "userData", currentUser.email.toString()), {
        marketingSMS : TF.marketingSMS,
        marketingEmail : TF.marketingEmail
      }).then(
        alert('저장되었습니다.')
      )

    },

    
  },


}
</script>

<style>
#myinfo-container{
  min-width: 1190px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  font-family: 'Noto Sans KR', sans-serif;
  padding-bottom:50px;
}
.top-box, .bottom-box{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #0000000D;
  border-radius: 15px;
  opacity: 1;
  width: 650px;
  margin-top: 20px;
  margin-bottom: 30px;
  margin-left: 50px;
  padding-left: 50px;
  padding-top: 25px;
  padding-bottom: 25px;
}
.green-title{
  color: #0AAC00;
  font-size: 1rem;
  margin-bottom: 25px;
}
.info-title{
  font-size: 0.9rem;
  display: flex;
  margin-bottom: 25px;
}
.info-detail{
  font-size: 0.9rem;
  font-weight: 300;
  margin-bottom: 25px;
}
.info-content{
  display: flex;
  
}
.info-contents1{
  margin-right: 100px;
}
.btn-info{
  font-family: 'Noto Sans KR', sans-serif;
  padding: 7px 20px;
  font-size: 0.95rem;
  border: 1px solid #11AC04;
  border-radius: 26px;
  opacity: 1;
  color: #0AAC00;
  background-color: white;
  margin-top: 10px;

}
.btn{
  text-align: center;
}
.btn-info:hover{
  color: white;
  background-color: #0AAC00;
}
.top-box{
  margin-bottom: 30px;
}
.info-detail-gray{
  margin-left: 10px;
  color: #848484;
  font-size: 0.8rem;
  margin-top: 2px;
}
.info-contents .input-{
  font-weight: 300;
  font-size: 0.9rem;
  margin-bottom: 20px;
}
.more{
  margin-left: 600px;  
  
}
.edit-ment{
  font-size: 0.8rem;
  text-align: center;
  color: #848484;
}
/* #middle-select{
  border-radius: 10px;
  width: 250px;
  height: 28px;
  margin-bottom: 20px;
  padding: 3px 5px;
  font-family: 'Noto Sans KR', sans-serif;
  border: 0.1px solid black;
}
.middle-box .green-title{
  margin-top: 10px;
  
} */
.mi-detail{
  font-size: 0.8rem;
}
/* .mi-btn{
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #0AAC00;
  border-radius: 10px;
  opacity: 1;
  font-size: 0.8rem;
  padding: 5px 10px;
  color: #0AAC00;
  background-color: white;
  margin-left: 20px;
}
.mi-btn:hover{
  color: white;
  background-color: #0AAC00;
} */
#info-green{
  color: #0AAC00;
}
.mi-detail{
  color: #848484;
}
#k-link{
  color: black;
  text-decoration: underline;
}
</style>