<template>
<div id="Find"> 
  <p id="title">비밀번호 찾기</p>
  <p>서베이지에 가입했던 이메일을 입력해주시면<br>
     비밀번호 재설정 메일을 보내드립니다.</p>
  <p>{{resetEmail}}</p>
  <input type="text" v-model="resetEmail" placeholder="이메일">
  <div>
    <button @click="resetPassword(this.resetEmail)">비밀번호 재설정하기</button>
  </div>
  

</div>
  
</template>

<script>
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
export default {
  data(){
    return{
      resetEmail : '',
    }
  },
  mounted() {
    window.scrollTo(0,0)
  },
  methods :{
    resetPassword(email){
      const auth = getAuth();
      sendPasswordResetEmail(auth, email)
        .then(() => {
          alert('비밀번호 재설정 메일을 보냈습니다!')
          if(confirm){
            this.$router.push('/login')
          }
          
          
         })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode)
          
        // ..
        });
      
        
      }
  }


}
</script>

<style>
#Find{
  height: 400px;
  margin-top: 100px;
}
#title{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 2rem;
}
p{
  font-family: 'Noto Sans KR', sans-serif;
}
#Find input{
  margin-top: 30px;
  width: 380px;
  height: 25px;
  padding: 3px;
  margin-bottom: 15px;
  border: 1px solid #848484;
  border-radius: 4px;
  opacity: 1;
  color: #848484;
  font: normal normal 300 17px/20px Noto Sans KR;
  font-size: 0.9rem;
  padding-left: 15px;
}
#Find button{
  padding: 5px 30px;
  margin: 20px;
  color:#0CAE02;
  background-color: #fff;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
}
#Find button:hover{
  color: white;
  background-color:#0CAE02;
}
</style>