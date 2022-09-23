<template>
<div class="t-modal-container-box" v-if="showTempModal">
<div id="t-modal-container">
  <img class="checkimg" src="@/assets/check.png" width="100">
  <p class="green">템플릿 공유 신청이 완료되었습니다.</p>
  <p class="template-notice">입력해주신 이메일 주소로 공유될 예정이며, <br>최대 1일(24시간)의 시간이 소요될 수 있습니다.</p>
  <div><button class="template-modal-btn" @click="goHome()">홈 화면으로 가기</button></div>
</div>  
</div>
</template>

<script>
export default {
  name: 'template-modal',
  props: { 
    showTempModal: {
      type: Boolean,
      require: true,
      default: false 
    }
  },

  methods: {
    goHome()  {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.t-modal-container-box{
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.524);
  display: table;
  transition: opacity .3s ease;
}
#t-modal-container{
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 500px;
  height: 350px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  box-shadow: 0px 0px 20px #00000026;
  font-family: 'Noto Sans KR', sans-serif;
 
}
#t-modal-container .checkimg{
  margin-left: 200px;
  margin-top: 45px;
  margin-bottom: 20px;
  
}
#t-modal-container #close-icon{
  margin-top: 20px;
  display: flex;
  justify-content: right;
  margin-right: 30px;
  cursor: pointer;
}
#t-modal-container .ContactModal-btn{
  color:#0AAC00;
  border: 1px solid #0AAC00;
  background-color: #fff;
  padding: 7px 15px;
  border-radius: 24px;
  opacity: 1;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 25px;
  margin-top: 20px;
}
#t-modal-container .ContactModal-btn:hover{
  background-color: #0AAC00;
  color: #fff;
}
#t-modal-container .green{
  color : #0AAC00;
}
.template-notice {
  color: grey;
  font-size: 13px;
  margin-top: 0;
}
.template-modal-btn {
  font-family: 'Noto Sans KR', sans-serif;
  width: 160px;
  height: 30px;
  margin-top: 20px;
  border: 1px solid #0AAC00;
  border-radius: 15px;
  background-color: white;
  font-size: 14px;
  color: #0AAC00;
  cursor: pointer;
}

.template-modal-btn:hover{
  color: white;
  background-color: #0AAC00;
}


</style>