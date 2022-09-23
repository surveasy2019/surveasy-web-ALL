<template>
<div class="modal-container-box" v-if="this.$store.state.showModal==true">
<div id="modal-container" > 
  <div id="close-icon" @click="closeModal"><i class="fas fa-times"></i></div>
  <img class="checkimg" src="@/assets/check.png" width="100">
  <p class="green">서베이지 B2B 소개서를 받아보세요!</p>
  <p>입력해주시는 이메일 주소로 소개서를 발송하고 있습니다. 
    <br>정확한 정보 입력 후, 메일함을 확인해주세요</p>
  <div class="input-box">
    <input type="text" placeholder="성함" class="box" v-model="infoData.name">
    <input type="text" placeholder="이메일" class="box" v-model="infoData.email">
    <input type="text" placeholder="회사" class="box" v-model="infoData.company">
 
    <label><input type="checkbox" v-model="checked"><span class="green">개인정보수집</span> 및 <span class="green">이용약관</span>에 동의합니다.</label>
    <div><button @click="validateB2B(this.infoData); " class="ContactModal-btn">소개서 받기</button></div>
   </div>
   </div>
</div>  


</template>

<script>
import { setDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
export default {
  data() {
    return {
      infoData:{
        name:null,
        email:null,
        company:null,
        
      },
      checked:false
      
    }
  },
  methods:{
    async fetchB2BID(){
      const lastID = []
      const db = this.$store.state.db
      const docRef = doc(db,"lastID", "numberB2B")
      const querySnapshot = await getDoc(docRef)
        if (querySnapshot.exists()){
          lastID.push(querySnapshot.data())
          
        }
        // console.log('fetch LastID')
        // console.log(lastID[0].lastID)
        return lastID[0].B2BID
  },
    closeModal(){
      this.$router.go('/contact')
      this.$store.state.showModal=false
      this.$store.state.showFinalModal=false
    },

    validateB2B(infoData){
      
      if(infoData.name==null || infoData.email==null || infoData.company==null || this.checked == false){
          alert('필수항목입니다')
      } else {
        this.addData(infoData)
      }
    },


    async addData(infoData){
      var db = this.$store.state.db
      var idDocref = doc(db, "lastID", "numberB2B")
      var lastID = await this.fetchB2BID() 
      console.log(lastID)
      

      await setDoc(doc(db, "B2BData", lastID.toString()),{
        name: infoData.name,
        email: infoData.email,
        company: infoData.company,
        isresponded: false,
        uploadTime: new Date(),
        B2BID : lastID
      }).then(

        this.$store.state.showModal=false,
        this.$store.state.showFinalModal=true,
        alert('완료되었습니다.')
      )

      await updateDoc(idDocref, {
        B2BID : lastID + 1
      })

      }
    
    
  }
}
</script>

<style>
.modal-container-box{
  position: absolute;
  z-index: 9998;
  top: 0;
  bottom: 300;
  left: 0;
  width: 100%;
  height: 2050px;
  background-color: rgba(255, 255, 255, 0.524);
  display: table;
  transition: opacity .3s ease;
}
#modal-container{
  position: absolute;
  top:24%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 700px;
  height: 600px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px #00000026;
  font-family: 'Noto Sans KR', sans-serif;
  
  
 
}
#modal-container .checkimg{
 
  margin-left: 300px;
}
#modal-container #close-icon{
  margin-top: 30px;
  display: flex;
  justify-content: right;
  margin-right: 30px;
  
}
#modal-container .ContactModal-btn{
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
#modal-container .ContactModal-btn:hover{
  background-color: #0AAC00;
  color: #fff;
}
#modal-container .input-box{
  display: flex;
  width: 400px;
  
  flex-direction: column;
  margin-left: 150px;
  
  
}
#modal-container .input-box .box{
  margin-bottom: 30px;
  height: 30px;
  border: 1px solid #848484;
  padding-left: 7px;
}
#modal-container .green{
  color : #0AAC00;
}


</style>