<template>
<div id="ReviewDetailDone">
  <img class="login-checkimg" src="@/assets/check.png" width="110">
  <p class="review-tit">자세한 후기를 작성해주셔서 감사합니다.</p>

  <p>작성해주신 후기는 더 나은 서비스를 제공하고
    <br>다른 고객이 이용하는데 도움이 됩니다.
  </p>
  <p>추가된 적립금은 [쿠폰/적립금] 메뉴에서 볼 수 있습니다.
  </p>
  
  <div class="button">
    
    
    <router-link to="/mypage/dashboard">
      <button class="goButton">대시보드 가기</button>
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
#ReviewDetailDone{
  height: 600px;
  margin-top: 120px;
  
}
#ReviewDetailDone .review-tit{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
}
#ReviewDetailDone p{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  font-weight: 400;
}
.button .goButton{
  padding: 7px 30px;
  margin: 20px;
  color:#0CAE02;
  background-color: #fff;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
  margin-top: 50px;

}
.button .goButton:hover{
  color: white;
    background-color:#0CAE02;
}
#goHomebtn{
  border: 1.5px solid #D6D6D6;
  color: #D6D6D6;
  margin-right: 30px;
}
#goHomebtn:hover{
  background-color: #D6D6D6;
  color: white;
}
.review-green{
  color: #0CAE02;
}
</style>