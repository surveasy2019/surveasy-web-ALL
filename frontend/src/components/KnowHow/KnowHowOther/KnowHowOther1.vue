<template>
<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light-other">다른 리서치도 EASY하게</p>
      <p class="green">2022년 6월 트렌디한 리서치 주제</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/two/research1thumbnail.png" width="500"></p>
      <p class="black-bold-">2022년 6월, 서베이지에 가장 많이 의뢰된 리서치 주제는<br>(1)대학생활, (2)SNS, (3)메타버스였습니다!<br>하나씩 살펴볼까요?</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">1. 대학생과 관련된 주제</p>
      <p class="black-light">'대학생'의 생활이나 학업, 자신감/우울감 등에 대해 물어보는 다양한 설문들이 많았습니다! 코로나19와 대학생활의 상관관계를 묻는다거나, 대학생의 학업 스트레스와 인터넷 쇼핑 간의 상관관계를 연구하거나, 대학생의 동아리, 학회 등의 단체 활동 실태 조사가 있었습니다. 대학생의 팀 프로젝트 무임승차에 대한 조사도 굉장히 흥미로운 주제 중 하나였습니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">2. SNS와 관련된 주제</p>
      <p class="black-light">워낙 MZ세대에서 다양한 SNS들이 유행하다 보니, SNS에 대한 사용 실태, 중독 여부 혹은 인식에 대해서 묻는 설문들이 많았습니다. 그 예로 Tiktok(틱톡)을 지속적으로 사용하는 이유가 무엇인지 묻거나, 유튜브 채널 중 선호하는 장르나 DJ가 무엇인지 묻는 조사가 있었습니다. 또 특정 SNS를 지정하지 않고, 숏폼 동영상에 대한 인식을 조사하는 설문조사도 존재하는 등 최근 SNS의 이용 트렌드를 볼 수 있었습니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">3. 메타버스의 인식/이용 관련 조사</p>
      <p class="black-light">여전히 메타버스 또한 연구하기 핫한 주제입니다. 시사적인 의미도 있고, 아직은 많은 연구가 이루어지지 않은 분야이기 때문이 아닐까 싶습니다. 서베이지에는 '메타버스의 활용이 소비자 행태에 미치는 영향', '대학생활과 대학 비교과 활동이 메타버스 상에서 이루어지는 것에 대한 인식 조사'등의 주제로 설문조사가 업로드되었습니다.</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">4. 기타</p>
      <p class="black-light">이외에도 특이한 주제의 리서치가 굉장히 많았습니다. 아마 본인이 정말 궁금하고 연구하고 싶은 주제에 대해 진행하는 설문조사들이겠죠?</p>
      <p><img class="img" src="@/assets/knowhow/two/research1image(1).png" width="800"></p>
      <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">여러분들도 평소에 관심 있던 사회적인 이슈나 주제를 떠올리고, 이를 활용하여 인과관계나 상관관계를 연구해 보면 어떨까요?<br>
        설문조사 주제 정한 후에, 설문 응답이 필요할 때는 서베이지를 찾아주세요!<br>
        누구보다 빠르고 간편하게 설문 응답을 모아드립니다.<br><br>
        <router-link to="/service"><span id="click-go">이용하러 가기</span></router-link></p>

    </div>
  </div>
</div>

</template>
 
<script>
export default {
  methods: {
   
  }
}
</script>
<style>

  #knowhow-item-container{
    width: 1190px;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 60px;
    text-align: center;
  }

  #knowhow-item-container .knowhow-title p{
   font-size: 1.5rem;
   margin-right: 30rem;
   font-weight: 500;
   color: #0AAB00;
   margin-top: 6px;
  }
  #knowhow-item-container .knowhow-title .black-light-other{
    font-size: 1.2rem;
    margin-right: 42.5rem;
    
    font-weight: 300;
    color:black;
    margin-bottom: 0;
  }
  #knowhow-item-container .img1{
    margin-top: 50px;
  }
  #knowhow-item-container .img{
    margin-top:30px;
    padding-left: 0 !important;
  }
  .knowhow-content {
    margin-bottom: 120px;
  }
  .knowhow-content .black-light{
    font-weight: 300;
    text-align: left;
    margin-left: 12rem !important;
    margin-right: 12rem !important;
    font-size: 1.1rem;
  }
  .knowhow-content .black-bold{
    font-weight: 700;
    font-size: 1.3rem;
    text-align: left;
    margin-left: 12rem !important;
  }
  .knowhow-content .img2{
    margin-top:100px;
    padding-left: 0 !important;
    margin-bottom: 20px;
  }
  .black-bold-{
    
    color: gray;
    font-weight: 400;
  }
 .green{
    margin-left: 9.9rem;
    text-align: left;
  }
</style>
