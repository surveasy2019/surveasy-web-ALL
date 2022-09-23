<template>
<div id="ReviewDone">
  <img class="login-checkimg" src="@/assets/check.png" width="110">
  <p class="review-tit">공개 후기를 작성해주셔서 감사합니다.</p>

  <p><span class="review-green">자세한 후기</span>(비공개)를 추가로 작성해주시면,
    <br><span class="review-green">적립금 500원</span>을 드립니다.
  </p>
  
  <div class="button">
    <router-link to="/">
      <button class="goButton" id="goHomebtn">괜찮아요</button>
    </router-link>

    <router-link :to="`/reviewdetail/${this.$route.params.id}/${this.$route.params.title}`">

      <button class="goButton">적립금 500원 받기</button>
    </router-link>
    
  </div>
</div>
</template>

<script>
export default {
  mounted() {
    window.scrollTo(0,0)
  },
  
  methods: {
    reviewDetailTest(){
      // console.log(this.$store.state.reviewTempData)
    }
  }
}
</script>

<style>
#ReviewDone{
  height: 600px;
  margin-top: 100px;
  
}
#ReviewDone .review-tit{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
}
#ReviewDone p{
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