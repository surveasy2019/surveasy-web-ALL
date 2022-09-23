<template>
<div id="FAQ-container">
  <div><h1>자주 묻는 질문</h1></div>
  <div class="FAQ-router-link-container">
    <button class="FAQ-btn" v-for="(Category,i) in Category" :key="i" @click="button(i)" :class="{active: clickEvent[i]}">{{Category}}</button>
  </div>
</div> 

<div id="FAQ-detail-container">
    <div v-if="FAQbutton === 0">
    <FAQmodal v-for="(a, i) in $store.state.RespondService" :key="i" :i="i" :FAQData="$store.state.RespondService" />
    </div>
    <div v-if="FAQbutton === 1">
    <FAQmodal v-for="(a, i) in $store.state.Template" :key="i" :i="i" :FAQData="$store.state.Template" />
    </div>
    <div v-if="FAQbutton === 2">
    <FAQmodal v-for="(a, i) in $store.state.MemberInfo" :key="i" :i="i" :FAQData="$store.state.MemberInfo" />
    </div>
    <div v-if="FAQbutton === 3">
    <FAQmodal v-for="(a, i) in $store.state.Payment" :key="i" :i="i" :FAQData="$store.state.Payment" />
    </div>
</div>

</template>

<script>
import FAQmodal from './FAQmodal.vue';
export default {
  data() {
    return {
    Category : ['설문 응답 서비스','설문 템플릿','회원 정보','결제 / 환불'],
    clickEvent: [true,false,false,false],
    showDetail: false,
    FAQbutton: 0,
    }
  },

  components : {
    FAQmodal: FAQmodal,
  },

  methods:{

    button(num){
      this.FAQbutton = num;
      for(var i = 0; i < this.clickEvent.length; i++){
        this.clickEvent[i] = false}
      this.clickEvent[num] = true;
      }
    }

  }

</script>

<style>
  #FAQ-container .FAQ-router-link-container{
    display: flex;
    justify-content: center;
    
  }
.FAQ-btn{
    background-color: white;
     cursor: pointer;
     margin-bottom: 15px;
     width: 200px;
     height: 77px;
     font-size: 20px;
     border: none;
   }

#FAQ-container .FAQ-btn:hover{
    font-weight: 600;
    border-bottom: 5px solid #0AAC00;
   }

#FAQ-container .active {
    font-weight: 600;
    border-bottom: 5px solid #0AAC00;
   } 
#FAQ-container .default{
    font-weight: 600;
    border-bottom: 5px solid #0AAC00;
    }
    
#FAQ-detail-container{
      max-width: 800px;
      margin-right: auto;
      margin-left: auto;
      text-align: left;
    }


 
</style>