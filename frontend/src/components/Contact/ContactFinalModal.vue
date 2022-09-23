<template>
<div class="f-modal-container-box" v-if="this.$store.state.showFinalModal==true">
<div id="f-modal-container">
  <div></div>
  <img class="checkimg" src="@/assets/check.png" width="100">
  <p class="brandgreen">서베이지 B2B 소개서 신청이 완료되었습니다!</p>
  <p>입력해주신 이메일 주소로 1~2일 안에 보내드리겠습니다.</p>
  <div>
  <button class="ContactModal-btn" @click="closeModal">닫기</button>
  </div>
</div>  
</div>
</template>

<script>
import router from '../../router'

export default {
  methods:{
    closeModal(){
      this.$store.state.showModal=false
      this.$store.state.showFinalModal=false
      router.push('/')
    },
    
  }
}
</script>

<style>
.f-modal-container-box{
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
#f-modal-container{
  position: fixed;
  top: 30%;
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
#f-modal-container .checkimg{
  margin-top: 100px;
  margin-left: 300px;
  margin-bottom: 30px;
  
}
#f-modal-container #close-icon{
  margin-top: 20px;
  display: flex;
  justify-content: right;
  margin-right: 30px;
  
}
#f-modal-container .ContactModal-btn{
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
#f-modal-container .ContactModal-btn:hover{
  background-color: #0AAC00;
  color: #fff;
}
#f-modal-container .input-box{
  display: flex;
  width: 400px;
  
  flex-direction: column;
  margin-left: 150px;
  
  
}
#f-modal-container .input-box .box{
  margin-bottom: 30px;
  height: 30px;
  border: 1px solid #848484;
  padding-left: 7px;
}
#f-modal-container .brandgreen{
  color : #0AAC00;
}


</style>