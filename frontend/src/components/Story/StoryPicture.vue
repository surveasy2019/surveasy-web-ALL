<template>
<div id="picture-container">
  <div class="picture-contents">
    <img class="logoimg" src="@/assets//logo.png">  
    <p class="black">2019년 5월, 설문조사 제작, 배포 참여 과정을 개선하고자 대학생을 위한 설문조사 <br>
      플랫폼 Surveasy를 만들었으며 현재는 패널 모집 후 대학생, 대학원생, 기업을 위한 <br>
      설문 응답 서비스와 설문 템플릿을 운영하고 있습니다.</p> 

      <p class="green"><img class="checkimg" src="@/assets/check.png" width="17">설문 배포 과정 개선을 위한 설문 응답 서비스 </p>
      <p class="green"><img class="checkimg" src="@/assets/check.png" width="17">설문 응답 과정 개선을 위한 패널 시스템  </p>
      <p class="green" id="bottom"><img class="checkimg" src="@/assets/check.png" width="17">설문 제작을 돕기 위한 설문 템플릿 </p>  

      <p><span class="green-">MISSON</span> <span class="black">설문조사 제작, 배포, 참여 과정을 정확하고 편리하게 </span></p>
      <p><span class="green-">SLOGAN</span> <span class="black">Survey를 Easy하게, Surveasy </span></p>  
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style>
  #picture-container{
    margin-top: 100px;
   max-width: 1190px;
    margin-right: auto;
   margin-left: auto;
   height: 580px;
   background: transparent url('~@/assets/brandstory/브랜드스토리2.png') no-repeat padding-box;
   background-size: cover;
   border-radius: 24px;
  
}
#picture-container .logoimg{
  width: 250px;
  height: auto;
  margin-top: 70px;
  margin-bottom: 15px;
}
#picture-container .picture-contents{
  display: flex;
  flex-direction: column;
  text-align: left;

}
#picture-container .picture-contents p{
  font-family: 'Noto Sans KR', sans-serif;
  margin-left: 60px;
  
}
#picture-container .picture-contents .black{
  font-weight: 200;
}
#picture-container .picture-contents .green {
  color: #0AAB00;
  margin-bottom: 3px;
}
#picture-container .picture-contents .checkimg{
  margin-right: 9px;
}
#picture-container .picture-contents #bottom{
  margin-bottom: 30px;
}
#picture-container .picture-contents .green- {
  color: #0AA600;
  
}

</style>