<template>
<!-- 지금 css만 -->
<div id="Withdraw-container">
  <div class="wi-title">
    <p><span id="wi-green">서베이지</span> 회원 탈퇴</p>
  </div>

  
  <div class="black-light">
      <span class="black-bold">고객님께서 회원탈퇴를 원하신다니 서베이지의 서비스가 부족하고 미흡했나 봅니다. 
      <br>불편하셨던 점이나 불만사항을 알려주시면, 적극 반영하겠습니다.</span>
      <br>
      <br>
      <span class="black-bold">회원 탈퇴 전, 아래 사항을 숙지해주시기 바랍니다. </span><br>
      1. 회원 탈퇴 시 쿠폰, 적립금, 회원 등급의 데이터는 삭제됩니다. <br>
      2. 회원 탈퇴 시 작성하신 후기 및 [설문리스트] 페이지의 설문 데이터는 삭제되지 않습니다. <br><span id="margin">삭제를 희망하시는 경우, 탈퇴 전 직접 삭제하셔야 합니다.</span> <br>
      3. 회원 탈퇴 후에는 해당 계정으로 로그인이 불가합니다.
  </div>
  <div class="password">
    <span class="black-bold">비밀번호</span> <br>
    <input type="password" v-model="withDrawPW">
    <button @click="checkPassword(this.withDrawPW)" class="btn-check">비밀번호 확인</button>
    <div v-if="this.$store.state.withDrawCheckTF == false">
      <p class="check-ment">비밀번호를 확인해주세요</p>
    </div>
    <div v-else>
      <p class="check-ment" id="checked">비밀번호가 확인되었습니다.</p>
    </div>
  </div>

  <div class="check">
    <span class="black-bold">무엇이 불편하셨나요?</span> <br>
    <input type="checkbox" v-model="withDrawReason.reason1" > 서비스 가격 및 옵션 불만<br>
    <input type="checkbox" v-model="withDrawReason.reason2"> 고객 서비스 (상담, 환불 등) 불만<br>
    <input type="checkbox" v-model="withDrawReason.reason3"> 방문 빈도가 낮음<br>
    <input type="checkbox" v-model="withDrawReason.reason4"> 사이트 신뢰도 불만<br>
    <input type="checkbox" v-model="withDrawReason.reason5"> 개인 정보 유출 우려
  </div>

  <div id="btn-center">
    <button class="btn-withdraw" @click="withDrawUser(this.withDrawReason)">탈퇴하기</button>
  </div>

</div>
</template>

<script>
import { getAuth, deleteUser, signInWithEmailAndPassword } from 'firebase/auth' 
import { doc, deleteDoc } from "firebase/firestore";
export default {
  mounted() {
    window.scrollTo(0,0)
    this.resetTF()

    
  },
  data(){
    return{
      withDrawPW:'',
      
      withDrawReason: {
        reason1:false,
        reason2:false,
        reason3:false,
        reason4:false,
        reason5:false
      }
    }
  },

  methods:{
    
    checkPassword(pw){

      
        const email = this.$store.state.loginState.currentUser.email
        const password = pw
        const auth = getAuth()
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            this.$store.state.withDrawCheckTF = true
            alert('비밀번호가 확인 되었습니다.')
            // console.log('ok')
          })
          .catch((error) => {
            alert('비밀번호가 맞지 않습니다.')
            const errorCode = error.code;
            const errorMessage = error.message;

            console.log(errorCode)
            console.log(errorMessage)
        });
      },
    async withDrawUser(dataSet){

      if ((this.$store.state.withDrawCheckTF == false) || ((dataSet.reason1 == false) && (dataSet.reason2 == false) && (dataSet.reason3 == false) && (dataSet.reason4 == false) && (dataSet.reason5 == false))){
        alert('비밀번호 확인과 탈퇴 사유 선택을 모두 진행해주세요.')
      } 
      else {
        // firebase withDrawData 넣는 부분 추가하기
        const auth = getAuth();
        const user = auth.currentUser
        const db = this.$store.state.db
        const currentUserEmail = this.$store.state.loginState.currentUser.email
        await deleteDoc(doc(db, "userData", currentUserEmail.toString())).then(() => {
          deleteUser(user).then(() => {
          this.$store.state.loginState.currentUser = null;
          this.$store.state.loginState.isLoggedIn = false;
          
          window.alert('탈퇴가 완료되었습니다.')
          this.$router.replace('/')
        }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(errorCode)
          console.log(errorMessage)
        });
        })
      }
    },

    resetTF(){
      this.$store.state.withDrawCheckTF = false

    }
      
      
    
  }
}
</script>

<style>
#Withdraw-container{
  width: 1190px;
  height: 900px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 570px;
  text-align: left;
  margin-top: 100px;
  font-family: 'Noto Sans KR', sans-serif;
}
.wi-title{
  font-size: 2rem;
  font-weight: 600;
  
}
#wi-green{
  color:#0AAB00 ;
}
.black-light, .check{
  font-weight: 300;
}
.black-bold{
  font-weight: 500;
}
.password{
  margin-top: 50px;
}
.btn-check{
  font-family: 'Noto Sans KR', sans-serif;
  padding: 5px 15px;
  border: 1px solid #0AAC00;
  margin-left: 10px;
  border-radius: 3px;
  color: #0AAB00;
  background-color: white;
}
.btn-check:hover{
  color: white;
  background-color: #0AAC00;
}
.password input{
  margin-top: 10px;
  margin-left: 5px;
  width: 500px;
  height: 23px;
  
  
  
}
#checked{
  color: #0AAB00;
}
#margin{
  margin-left: 17px;
}
.check input{
  margin-top: 17px;
  margin-left: 20px;
}
.btn-withdraw{
  margin-top: 50px;
  border: 1px solid #0AAC00;
  border-radius: 24px;
  padding: 8px 27px;
  font-size: 1rem;
  color: #0AAC00;
  background-color: white;
  font-weight: 500;
  font-family: 'Noto Sans KR', sans-serif;
  
}
#btn-center{
  margin-left: 220px;
}
.btn-withdraw:hover{
  color: white;
  background-color: #0AAC00;
  
}
.check-ment{
  font-size: 0.9rem;
  font-weight: 300;
  margin-left: 10px;
  margin-top: 5px;
}
</style>