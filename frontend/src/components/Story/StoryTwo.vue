<template>
<div id="two-container">
  <div class="two-contents">
    <div class="client">
      <p class="black">설문</p>
      <p class="green">배포자</p>
       <p class="left"><img class="checkimg" src="@/assets/brandstory/checkblack.png" width="20"> 응답률 저조 및 표본 수 부족</p>
       <p class="left"> <img class="checkimg" src="@/assets/brandstory/checkblack.png" width="20"> 설문 제작 시 참고할 가이드 부재</p>
    </div>
    <div class="panel">
      <p class="black">설문</p>
      <p class="green">응답자</p>
       <p class="left"> <img class="checkimg" src="@/assets/brandstory/checkblack.png" width="20"> 설문 참여 시 리워드 부재</p>
       <p class="left"><img class="checkimg" src="@/assets/brandstory/checkblack.png" width="20"> 설문 리워드의 신뢰도 문제</p>
    </div>
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style>
  #two-container{
    margin-top: 100px;
    max-width: 1190px;
    margin-right: auto;
    margin-left: auto;
    
}
#two-container .two-contents{
  display: flex;
  justify-content: center;
}
#two-container .two-contents .left{
  text-align: left;
}
#two-container .two-contents .panel{
  margin-left: 120px;
}
#two-container .two-contents p{
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
}
#two-container .two-contents .green{
  font-family: 'Noto Sans KR', sans-serif;
  color:#0AA600;
  font-weight: 300;
  font-size: 2.1rem;
  margin-top: 0;
}

#two-container .two-contents .checkimg{
  margin-right: 7px;
  filter: grayscale(100%);
}


</style>