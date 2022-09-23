<template>

<div id="review-container">
  <div class="review-content">
    <div class="review">
      <p><img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40">
      <img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40"></p>
      <p>
       <span class="review-bold">“원하는 기간 내에 많은 응답자를 <br>모을 수 있어서 정말 만족스러웠습니다!”</span> 
       <br>
       <br>
        <span class="review-none">- 사회학과 전공수업 조별과제를 위해 사용한 고객</span> 
      </p>
    </div>
    <div class="review">
      <p><img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40">
      <img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40"></p>
      <p>
       <span class="review-bold">“팀플할 때 ‘서베이지에 올릴까?’가 익숙해졌다” <br><br> <span class="review-none">- 개인 연구 프로젝트를 위해 사용한 고객</span> </span> 
      </p>
    </div>
    <div class="review">
      <p><img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40">
      <img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40"><img class="starimg" src="@/assets/Home/star.png" width="40"></p>
      <p>
       <span class="review-bold">“빠른 시간 내에 원하는 응답자 수를 <br>얻을 수 있었고, 무엇보다도 가격이 저렴해서 <br>대학생이 부담 없이 이용할 수 있는 서비스”</span> 
       <br><br>
        <span class="review-none">- 논문대회 참여를 위해 사용한 고객</span> 
      </p>
    </div>
  </div>
  <div class="review-group">
      <img class="groupimg" src="@/assets/Home/MARP.jpg" width="133">
      <img class="groupimg" src="@/assets/Home/ISSU.png" width="111">
      <img class="groupimg" id="groupimgleft" src="@/assets/Home/BIT.jpg" width="155">
      <img class="groupimg-" src="@/assets/Home/yonsei.jpg" width="80">
      <img class="groupimg-" src="@/assets/Home/kor.jpg" width="54">
      <img class="groupimg-" src="@/assets/Home/hong.jpg" width="80">
      <img class="groupimg-" src="@/assets/Home/sung.jpg" width="89">
      <img class="groupimg-" src="@/assets/Home/cau.jpg" width="101">
  </div>

</div>
</template>

<script>
export default {
  
}
</script>

<style>
  #review-container{
    height: 560px;
    display: flex;
    flex-direction: column;
    margin-top: 125px;
    
  }

  #review-container .starimg{
    background:transparent;
  }
  #review-container .review-content{
    display: flex;
    justify-content: space-around;
    align-items: center;
    
  }

  #review-container .review-bold{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 1.2rem;
  }
  #review-container .review-none{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 300;
    font-size: 1rem;
  }

  #review-container .groupimg{
    margin-left: 25px;
    padding-bottom: 20px;
    margin-top: 110px;

  }
  #review-container #groupimgleft{
    margin-right: 70px;
  }
  #review-container .groupimg-{
    margin-left: 35px;
    margin-top: 110px;
    
  }
</style>