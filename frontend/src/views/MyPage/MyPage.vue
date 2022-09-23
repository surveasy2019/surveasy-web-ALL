<template>
<div id="mypage-container">
  
  <div class="top-button">
    <button >의뢰자</button>
    <button id="client">패널</button>
    
  </div>
  <div class="back-same" v-if="this.$store.state.myPage==1">
    <div class="from">

   
  <div class="img">
    <span class="grade-img" v-if="grade<=2"><img src="@/assets/myPage/gradeOne.png" width="85"></span>
    <span class="grade-img" v-if="grade>=3&&grade<=9"><img src="@/assets/myPage/gradeTwo.png" width="85"></span>
    <span class="grade-img" v-if="grade>=10"><img src="@/assets/myPage/gradeThree.png" width="85"></span>
    <div class="client-grade-text" @click="showClientModal()"><i class="fas fa-question-circle"></i> 고객 등급 알아보기</div>

    <div class="client-grade-modal" v-if="showclientmodal==true">
      <div class="client-grade-container">
        <div class="client-grade-notice">
          <button class="client-grade-closeBTN" @click="showClientModal()"><i class="fas fa-times"></i></button>

          <p class="client-grade-green">서베이지 고객 등급 안내</p>
          <p class="grade-detail">고객 등급의 기준과 등급에 따른 혜택을 확인하세요!</p>
          <div class="grades">
            <img src="@/assets/myPage/gradeOne.png" width="120">
            <img src="@/assets/myPage/gradeTwo.png" width="120">
            <img src="@/assets/myPage/gradeThree.png" width="120">
          </div>
          <div class="grade-">
          <img  src="@/assets/myPage/client_grade.png" width="620"> 
          </div>

        </div>
      </div>
    </div>
  </div>
  <div class="title">
    안녕하세요, <span id="green">{{this.$store.state.loginState.currentUser['name']}}</span>님 
  </div>
  <div class="go-link">
    <router-link to="/serviceidentity_mypage" class="go-link">대학(원)생 인증하러가기 ></router-link>
  </div>
   </div>
      
    
  
  <div class="mypage-contents">
  <!-- <p>{{this.$store.state.currentUser}}</p> -->
  <div class="mypage-router-link-container">
    <router-link to="/mypage/dashboard" class="mypage-router-link">대시보드</router-link>
    <router-link to="/mypage/payment" class="mypage-router-link">주문 내역</router-link>
    <router-link to="/mypage/couponpoint" class="mypage-router-link">쿠폰/적립금</router-link>
    <router-link to="/mypage/myinfo" class="mypage-router-link">나의 정보</router-link>
  
  </div>
  <div class="mypage-router-view-container">
    <router-view></router-view>
  </div>
  
</div>
</div>
</div>
</template>

<script>
export default {
  data() {
    return {
      
     
      grade : this.$store.state.loginState.currentUser['uploadIndex'].length,

      showclientmodal: false
    }
  },
  methods: {
    

    showClientModal() {
      this.showclientmodal = !this.showclientmodal
    }
  },
 
  mounted() {
    window.scrollTo(0,0)
  
    
  }
}
</script>

<style>
#mypage-container{
  width: 1190px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 80px;
  margin-bottom: 100px;
}
.mypage-router-link.active{
  color: #0AAC00;
}
.from{
  display: flex;
  
}
.title{
  font-size: 2rem;
  margin-right: 20px;
  padding-top: 20px;
  margin-left: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  
}
.img{
  padding-left: 100px;
  
}
.client-grade-text {
  color: rgb(187, 185, 185);
  font-size: 12px;
  cursor: pointer;
}
.go-link{
  padding-top: 40px;
  margin-left: 10px;
}
#client{
  background-color: white;
}
#green{
  color: #0AAC00;
}
.top-button{
  text-align: left;
}
.top-button button{
  width: 100px;
  padding: 10px 10px;
  background-color: #EEEEEE;
  border: 0.5px solid #EEEEEE;
  font-family: 'Noto Sans KR', sans-serif;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin-bottom: 0.5px;
  

}
#mypage-container .back-same{
  padding-top: 70px;
  width: 1190px;
  margin: auto;
  height: auto;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 9px #0000001F;
  text-align: left;
  font-family: 'Noto Sans KR', sans-serif;
  padding-bottom: 50px;

}

.mypage-contents {
  
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 50px;
  
  
}

.mypage-router-link-container{
  width: 120px;
  height: 700px;
  
  font-size: 1rem;
  text-align: left;
  
}

.mypage-router-link{
  padding-bottom: 30px;
  padding-left: 30px;
  display: block;
  text-decoration-line: none;
}

/* .mypage-router-link.active{
  text-decoration-color: cadetblue;
} */


.mypage-router-view-container{
  width: 800px;
  
}

.client-grade-modal {
  display: center;
}
.client-grade-container {
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin-top: 85px;
  background-color: rgba(255, 255, 255, 0.279);
  display: table;
  transition: opacity .3s ease;
}
.client-grade-notice {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 700px;
  height: 500px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 0px 0px 20px #00000026;
  font-family: 'Noto Sans KR', sans-serif;
}
.client-grade-closeBTN {
  border: none;
  background-color: white;
  width: 20px;
  cursor: pointer;
}
.client-grade-checkimg {
  margin-top: 75px;
  margin-bottom: 20px;
}
.client-grade-green {
  color: #0AAB00;
  font-size: 25px;
  margin-bottom: 10px;
}
.client-grade-black {
  font-size: 16px;
}
.router-link-active.router-link-exact-active.mypage-router-link{
  color: #0AAC00;
}
.grades{
  display: flex;
  justify-content: space-around;
  margin-left: 130px;
  margin-right: 44px;
  margin-bottom: 10px;
}
.grade-{
  display: flex;
  justify-content: center;
}
.client-grade-green{
  font-family: 'Noto Sans KR', sans-serif;
  margin-top: 5px;
  font-weight: 700;
  padding-left: 40px;

}
.grade-detail{
  color: #848484;
  padding-left: 40px;
  margin-top: 0;
  font-weight: 300;
}
.client-grade-closeBTN{
  padding-left: 660px;
  font-size: 1.5rem;
  margin-bottom: 0;
  padding-top: 20px;
  background: transparent;
}
</style>