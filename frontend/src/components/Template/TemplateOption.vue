<template>
<div class="TemplateOption">
  <div class="TemplateOption-container">
      <div id="TemplateOption-title">설문 템플릿 서비스</div>
          <li>
            <div class="Template-option-text">템플릿 <span class="temp-green">*</span></div>
            <select class="selectbox" v-model="templateData.type">
              <option :value=0>1. 사용경험 설문조사</option>
              <option :value=1>2. 인식 설문조사</option>
            </select> 
          </li>

          <li>
            <div class="Template-option-text">이름 <span class="temp-green">*</span></div>
            <input v-model="templateData.name">
          </li>

          <li>
            <div class="Template-option-text">이메일 주소 <span class="temp-green">*</span></div>
            <input v-model="templateData.email">
          </li>

          <li>
            <div class="Template-option-text">서베이지에게 원하는 템플릿이 있으면 작성해주세요.</div>
            <input v-model="templateData.etc">
          </li>

          <div>
            <button class="Template-btn" @click="templateFin(templateData)">템플릿 신청</button>
            <TemplateFinModal :showTempModal="showTempModal" @closeTemplateModal="closeTemplateModal()" />
          </div>
      </div>
</div>
  
</template>


<script>
import { setDoc, doc } from 'firebase/firestore';
import TemplateFinModal from './TemplateFinModal.vue'
export default {
  data() {
    return {
      templateData: {
        type: 0,
        name: '',
        email: '',
        etc: ''
      },

      typeText: '',

      showTempModal: false
      

    }
    
  },

  components: { TemplateFinModal },


  methods: {
    templateFin(inputData) {
      if(this.$store.state.loginState.isLoggedIn==false) {
        alert('로그인이 필요한 서비스입니다.')
          this.$store.state.notLoggedInTemplate = false
          this.$router.push('/login')
      }

      else if(inputData.name=='' || inputData.email=='') {
        alert('필수항목을 모두 입력해주세요.')
      }

      else {

        // console.log('input fin')
        if(inputData.type == 0) {
          this.typeText = '1. 사용경험 설문조사'
        }
        else if(inputData.type == 1) {
          this.typeText = '2. 인식 설문조사'
        }

        // 템플릿 신청 날짜 계산
        var time = new Date().toISOString()
        


        var dddd= time.split('T')
        var ddddd = dddd[0]
        
        var dddddd= ddddd.split('-')

        
        var year = dddddd[0]
        var month = dddddd[1]
        var day = dddddd[2]
        month = month.length == 2 ? month : '0' + month
        day = day.length == 2 ? day : '0' + day
        var D = year + '-' + month + '-' + day


        if(this.$store.state.isLoggedIn==false) {
          alert('로그인이 필요한 서비스입니다.')
          this.$store.state.notLoggedInTemplate = false
          this.$router.push('/login')
        }

        else {
          this.$store.commit('setTemplateMutation', {type: this.typeText, name: inputData.name, email: inputData.email, etc: inputData.etc, uploader: this.$store.state.loginState.currentUser.name, uploadDate: D, identifyTime: time})
          this.addTemplateData(this.$store.state.localTemplateState)
        }
      }
    },

    async addTemplateData(templateData) {
        var db = this.$store.state.db

        await setDoc(doc(db, "TemplateData", templateData.identifyTime.toString()), {
          type: templateData.type,
          name: templateData.name,
          email: templateData.email,
          etc: templateData.etc,
          isresponded: false,
          uploader: templateData.uploader,
          uploadDate: templateData.uploadDate,
          identifyTime: templateData.identifyTime
        })

        this.closeTemplateModal()
    },
      
    closeTemplateModal() {
      this.showTempModal = !this.showTempModal 
    },   
  
  }
}
</script>

<style>
.TemplateOption {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  max-width: 500px;
  min-width: 500px;
  height: 5468px;
  font-family: 'Noto Sans KR', sans-serif;
}
.TemplateOption-container {
  font-family: 'Noto Sans KR';
  position: sticky;
  top: 108px;
  z-index: 1;
  height: 555px;
  border-radius: 10px;
  margin: 80px 80px 135px 10px;
  background-color: #EEEEEE;
  border-radius: 10px;
  width: 410px;
}
#TemplateOption-title {
  text-align: left;
  color: #0CAE02;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 30px 0 27px 35px;
}
.TemplateOption-container li {
  text-align: left;
  margin-bottom: 12px;
  display: block;
}
.Template-option-text {
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  font-size: 14px;
  font-weight: normal;
  margin: 20px 0 0 35px;
  padding: 0;
}
.temp-green {
  color: #0AAB00;
}
.TemplateOption-container select {
  margin: 13px 0 0 35px;
  padding: 5px;
  width: 190px;
  height: 45px;
  padding: 10px;
  background-color: #EEEEEE;
  font-size: 14px;
  cursor: pointer;
  border: 0.75px solid #BCBCBC;
  border-radius: 4px;
}
.TemplateOption-container select:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.TemplateOption-container select option {
  background-color: #EEEEEE;
}

.TemplateOption-container input {
  width: 325px;
  height: 42px;
  margin: 10px 0 0 35px;
  padding-left: 13px;
  background-color: #EEEEEE;
  border: 0.75px solid #BCBCBC;
  opacity: 1;
  border-radius: 4px;
}
.Template-option input:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.Template-btn {
  font-family: 'Noto Sans KR', sans-serif;
  width: 120px;
  height: 40px;
  margin-top: 20px;
  color:#0AAC00;
  background-color: #EEEEEE;
  border: 1.5px solid #0AAC00;
  border-radius: 30px;
  font-size: 15px;
  cursor: pointer;
}
.Template-btn:hover{
  color: white;
  background-color: #0AAC00;
}


</style>