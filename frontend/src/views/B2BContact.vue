<template>
<div id="b2b-container">
  <ContactFinalModal/>
  <div class="inner">
  <img class="checkimg" src="@/assets/check.png" width="100">
  <p class="brandgreen">서베이지 B2B 소개서를 받아보세요!</p>
  <p>입력해주시는 이메일 주소로 소개서를 발송하고 있습니다.<br>정확한 정보 입력 후, 메일함을 확인해주세요</p>
  <div class="input-box">
    <input type="text" placeholder="성함" class="box" v-model="infoData.name">
    <input type="text" placeholder="이메일" class="box" v-model="infoData.email">
    <input type="text" placeholder="회사" class="box" v-model="infoData.company">
    <label><input type="checkbox" v-model="checked"><span class="brandgreen"> 개인정보수집 </span>및<span class="brandgreen"> 이용약관</span>에 동의합니다.</label>
    <div>
      <button @click="validateB2B(this.infoData);" class="ContactModal-btn">소개서 받기</button>
    </div>
   </div>
   </div>
</div>
<!--bootstrap form--> <!--
<form style="width: 500px">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">성함</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">이메일</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">회사</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">개인정보수집 및 이용약관에 동의합니다.</label>
  </div>
  <button type="submit" class="btn btn-primary" @click="validateB2B(this.infoData);">소개서받기</button>
</form>
-->
</template>

<script>
import { setDoc, doc, updateDoc, getDoc } from 'firebase/firestore';
import ContactFinalModal from '../components/Contact/ContactFinalModal.vue';

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

  components: {
    ContactFinalModal,
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
      this.$store.state.showModal=false
      this.$store.state.showFinalModal=false
      router.push('/')
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
#b2b-container{
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 20px #00000026;
  font-family: 'Noto Sans KR', sans-serif;

}

.inner{
margin-top: 100px;
margin-bottom: 100px;
align-items: center;
}

#b2b-container #close-icon{
  margin-top: 30px;
  display: flex;
  justify-content: right;
  margin-right: 30px;
  
}
#b2b-container .ContactModal-btn{
  color:#0AAC00;
  border: 1px solid #0AAC00;
  background-color: #fff;
  padding: 7px 15px;
  border-radius: 20px;
  opacity: 1;
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 25px;
  margin-top: 20px;
}
#b2b-container .ContactModal-btn:hover{
  background-color: #0AAC00;
  color: #fff;
}
#b2b-container .input-box{
  display: flex;
  flex-direction: column;
  align-items: center;

}
#b2b-container .box{
  background-color: #f2f2f226;
  margin-bottom: 20px;
  height: 40px;
  font-size: 20px;
  border: 0.7px solid #0AAC00;
  padding-left: 15px;
  width: 80%;
  max-width: 400px;
  border-radius: 10px;
  border-radius: 15px;
  box-shadow:0 1px 2px rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.07);

}

input:target #b2b-container{

  border: 3px solid #0AAC00;

}
#b2b-container .brandgreen{
  color : #0AAC00;
}


</style>