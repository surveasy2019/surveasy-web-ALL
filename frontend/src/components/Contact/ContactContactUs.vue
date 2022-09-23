<template>
<div class="contactus-container" :class="{active:this.$store.state.showModal}">
  <p class="title">도움이 필요하신가요?</p>
  <div class="contactus-contents" >
    <div>
      <a href="http://pf.kakao.com/_xfialK/chat" target="_blank"><button class="ContactContactUs-btn">채팅하기</button></a>
      <p class="bold">@Surveasy 카카오톡 플러스 친구</p>
      <p class="light">추가 후 1:1 실시간 채팅으로 문의</p>
    </div>
    <div>
      <button @click="copyEmail" class="ContactContactUs-btn">이메일 복사하기</button>
      <p class="bold">surveasy2019@yonsei.ac.kr</p>
      <p class="light">이메일 문의</p>
      <input type="text" id="email" class="email-input">
    </div>
    <div>
      <a href="../b2bcontact/"><button class="ContactContactUs-btn">소개서 받기</button></a>
      <p class="bold">B2B 문의</p>
      <p class="light">기업 배너 광고, 설문 응답 서비스 등</p>
    </div>
  </div>    
</div>
</template>

<script>
export default {
  methods:{
    handleModal(){
      this.$store.state.showModal=true
      this.$store.state.showFinalModal=false
    },
    copyEmail(){
      const mail = document.getElementById("email")
      mail.value = "surveasy2019@yonsei.ac.kr"
      mail.select()
      document.execCommand("copy")
      alert("이메일 주소가 복사되었습니다.")
    }
  }
}
</script>

<style>
  .email-input{
    position: absolute;
    top:0.1px;
    left:0.1px;
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    cursor: default;
  }
  .contactus-container{
    max-width: 1190px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 100px;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border-radius: 15px;
    padding-top: 40px;
    padding-bottom: 40px;
  }
  .contactus-container .title{
    font-size: 1.7rem;
    font-weight: 700;
    
  }
  .contactus-container .contactus-contents .ContactContactUs-btn{
  color:#0CAE02;
  border: 1px solid #0AAC00;
  background-color: #EEEEEE;
  padding: 7px 15px;
  border-radius: 24px;
  opacity: 1;
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 25px;
  font-family: 'Noto Sans KR', sans-serif;
}
.contactus-container .contactus-contents .light{
  font-weight: 300;
  color:#848484;
}
.contactus-container .contactus-contents .ContactContactUs-btn:hover{
  background-color: #0AAC00;
  color: #fff;
}
  .contactus-container .contactus-contents {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content:space-evenly;

  }
  
  .contactus-container .contactus-contents .contactus-contents-text{
    text-align: left;
    margin-right:80px;
  }
 

  

</style>