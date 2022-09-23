<template>
<div id="template-container">
  <div class="template-image">
    <img class="templateimg" src="@/assets/Home/template.png" >
  </div>
  <div class="template-content">
    <p>
      <span class="template-none">제로 베이스에서 설문조사를 만드는 것에 어려움을 겪고 계신가요?</span>
      <br>
      <span class="template-bold"><span class="template-green">설문 템플릿</span>을 무료로 제공받아 사용해보세요!</span>
    </p>
    <router-link to="/surveytemplate"><button class="HomeSurveyTemplate-btn" id="template-btn">설문 템플릿 보기</button></router-link>
  </div>
    
  </div>
  
</template>

<script>
export default {

}
</script>

<style>
  #template-container{
    padding: 40px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EEEEEE 0% 0% no-repeat padding-box;
    border-radius: 24px;
    margin-bottom: 50px;
  }

  #template-container .template-content{
    text-align: left;
    margin-left: 90px;
    font-family: 'Noto Sans KR', sans-serif;
    font-size: 1.4rem;
    
    

  }
  
  .templateimg{
    margin-left : 60px;
    width: 20rem;
    
  }

  #template-container .template-bold{
    font-weight: 900;
  } 
  #template-container .template-green{
    color: #fff;
    font-weight: 900;
    background-color: #0AAC00;
  }  
  .HomeSurveyTemplate-btn{
    margin-top: 42px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #0AAC00;
    background-color: #EEEEEE;
    border: 1px solid #0AAC00;
    padding: 9px 20px;
    border-radius: 24px;
    font-size: 1rem;
}

.HomeSurveyTemplate-btn:hover{
  background-color: #0AAC00;
  color: #fff;  
}
</style>