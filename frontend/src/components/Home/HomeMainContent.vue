<template>
<div id="main-content-container">
  <div class="main-left">
    <div class="maincontent-title">
    <p><span id="title-none">설문조사,</span> <span id="title-underline">아직도 카톡방에 뿌리고 지인에게 부탁하시나요?</span> 
    <br>

    <span id="title-green">서베이지 설문 응답 서비스 </span><span id="title-bold">로 한 번에 30개 이상의 응답을 받아가세요.</span></p>

    </div>
    <div class="maincontent-list">
      <p><img class="checkimg" src="@/assets/check.png" width="25"> 타사 대비 <span id="list-green">저렴한 가격으로</span></p>
      <p><img class="checkimg" src="@/assets/check.png" width="25"> <span id="list-green">24</span> 시간 <span id="list-green"></span> 내에 빠르게</p>
      <p><img class="checkimg" src="@/assets/check.png" width="25"> 설문조사 <span id="list-green">의뢰, 업로드, 결제</span>까지 원스톱으로 편리하게</p>
    </div>
    <div class="HomeMainContent-btns">
      <button class="HomeMainContent-btn" id="response-btn" @click="goService()">서비스 이용하기</button>
      <button class="HomeMainContent-btn" id="calculator-btn" @click="handle_Modal()">내 설문은 얼마일까?</button>
      <HomeCalculator :showCalculator="showCalculator" @close="handle_Modal()" />
    </div>
  </div>
  <div class="main-right">
    <img class="maincontentimg" src="@/assets/Home/maincontent.png">
  </div>
  
</div>
</template>


<script>
import HomeCalculator from './HomeCalculator.vue'
export default {
  data() {
    return {
      showCalculator: false
    }
  },

  components: { HomeCalculator },

  methods: {
    handle_Modal() {
      this.showCalculator = !this.showCalculator
    },

    goService() {
      this.$router.push('/service') 
    }
  }

}
</script>

<style>
#main-content-container {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  
}

#main-content-container .main-right .maincontentimg{
  width: 34rem;
}

#main-content-container .main-left{
  display: flex;
  flex-direction: column;
  justify-content: center;
  
}



#main-content-container .maincontent-title p {
  font-size: 1.4rem;
  text-align: left;
}

#main-content-container .maincontent-list p{
  font-size: 1.3rem;
  text-align: left;
}

#main-content-container #title-none{
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 500;
}

#main-content-container #title-underline{
  font-family: 'Noto Sans KR', sans-serif;
  text-decoration: underline;
}

#main-content-container #title-green{
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #0AAC00;
  color: #fff;
  font-weight: 900;
}

#main-content-container #title-bold{
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 900;
  letter-spacing: -0.5px;
  
}

#main-content-container .maincontent-list p{
  font-family: 'Noto Sans KR', sans-serif;
}

#main-content-container .maincontent-list .checkimg{
  margin-right: 10px;
}

#main-content-container #list-green{
  font-family: 'Noto Sans KR', sans-serif;
  color:#0AAC00;
}

#main-content-container .HomeMainContent-btns{
  display: flex;
  justify-items: left;
  margin-top: 40px;
}

#main-content-container #response-btn{
  margin-right: 15px;
}

</style>