<template>
<div id="RegisterDone">
  <img class="login-checkimg" src="@/assets/check.png" width="110">
  <p>Survey를 Easy하게,<br> Surveasy의 
    회원이 되신 것을 환영합니다!</p>
  
  <div class="button">
    <router-link to="/login">
      <button class="goButton">로그인 하러가기</button>
    </router-link>
    
    <router-link to="/story">
      <button class="goButton">서베이지 둘러보기</button>
    </router-link>
    
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0,0)
  },
}
</script>

<style>
#RegisterDone{
  padding-top: 60px;
  margin: 100px;
  height: 500px;
  
}
#RegisterDone p{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
}
.button .goButton{
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
.button .goButton:hover{
  color: white;
    background-color:#0CAE02;
}
</style>