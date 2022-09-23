<template>
<div id="knowhow-item-container">
  <div class="knowhow-contents">
    <div class="knowhow-title">
      <p class="black-light">서베이지의 EASY한 서베이 꿀팁 #6</p>
      <p class="green">설문조사 데이터 분석하기 (feat.구글폼)</p>
    </div>
    <div class="knowhow-content">
      <p><img class="img1" src="@/assets/knowhow/02.png" width="500"></p>
      <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
      <p class="black-bold-">잘 만든 설문을 배포하고 응답이 쌓일수록 이 많은 데이터를<br>
          어떻게 정리하면 좋을지 고민되죠? 무료로 설문 배포할 수 있는<br>
        구글폼을 사용해 데이터 정리하고 분석하는 방법 몇 개를 알아봐요!</p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">응답 그래프</p>
      <p class="black-light">구글폼은 기본적으로 응답을 실시간으로 그래프화해서 보여주는데요, 설문지 수정 페이지에서 상단 중앙에<br>응답을
        클릭하면 객관식 질문에 대한 답변은 바로 그래프로 볼 수 있어요! 따로 표를 만들지 않아도 한눈에<br>정돈된 그래프를 볼 수 있어 데이터 분석하기 앞서 이 기능을 사용해봐요!</p>
        <p><img class="img3" src="@/assets/knowhow/03.png" width="800"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">일부 응답 그래프</p>
      <p class="black-light">응답 화면에서 우측 상단 구글 시트 아이콘을 클릭해 데이터를 스프레드 시트 형식으로 모아보기 설정하고<br>만들어진 구글시트 파일에서 원하는 데이터를 선택하고 삽입 → 차트를 클릭하면 일부 데이터에 관한<br>데이터를 자동으로 만들 수 있어요!</p>
        <p><img class="img" src="@/assets/knowhow/04.png" width="800"></p>
        <p><img class="img" src="@/assets/knowhow/05.png" width="800"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">차트 유형</p>
      <p class="black-light">차트 유형을 원형 차트만 선택할 수 있는게 아니에요! 원하는 차트를 더블 클릭하면 다양한 차트 유형에서<br>선택할 수 있어요.
        막대, 선형, 분산형 차트 등이 있으니 분석에 용이한 유형으로 차트를 만들어봐요!</p>
        <p><img class="img" src="@/assets/knowhow/05.png" width="800"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">스프레드시트 메모</p>
      <p class="black-light">만들어진 구글폼 스프레드시트에서 메모를 작성해야 한다면 설문조사 자체에 영향을 주지 않으면서 열과<br>행을 추가할 수 있어요! 
        원하는 열/행 위치에 오른쪽 클릭을 하고 열/행 추가하면 메모할 수 있는 란이 생겨요.<br>여기에 추가된 메모는 설문 자체에 반영되지 않아
        자유로운 수정이 가능해요.</p>
        <p><img class="img" src="@/assets/knowhow/06.png" width="800"></p>
    </div>
    <div class="knowhow-content">
      <p class="black-bold">응답 추출</p>
      <p class="black-light">특정 조건에 맞는 응답의 개수를 구해야 한다면? 한 문항에서 특정 응답을 한 응답자들이 다른 문항에서<br>어떤 응답을 했는지 추출하고 싶다면? 혹은 답변의 일부만 추출하고 싶다면? 
        <br>각각 <span class="green">=COUNTIF, =VLOOKUP/HLOOKUP, =MID/LEFT/RIGHT</span>  함수를 활용하면 됩니다. <br>
        이러한 함수들의 사용법은 "감자선배 궁금해요! 6탄"을 참조해주세요! 구글시트에서도 다양한 엑셀 함수를<br>응용한다면 더 효율적이고 유의미한
        데이터 분석을 할 수 있습니다.</p>
        <p><img class="img" src="@/assets/knowhow/06.png" width="800"></p>
        <p><img src="@/assets/knowhow/08.png" class="img2" width="30"></p>
        <p class="black-bold-">응답을 충분히 모았다고 해서 설문조사가 끝난건 아니에요! <br>
        모인 데이터를 잘 분석할 줄 알아야 진정한 유의미한 설문이었겠죠? <br>
        이번 서베이지 노하우에서 알아본 팁들로 데이터 분석이 조금 더 수월해지길 바라요!</p>
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
    margin-top: 120px;
    text-align: center;
  }
  #knowhow-item-container .knowhow-title p{
   font-size: 1.5rem;
   margin-right: 30rem;
   font-weight: 500;
   color: #0AAB00;
   margin-top: 6px;
  }
  #knowhow-item-container .knowhow-title .black-light{
    font-size: 1.2rem;
    margin-right: 37rem;
    font-weight: 300;
    color:black;
    margin-bottom: 0;
  }
  #knowhow-item-container .img1{
    margin-top: 20px;
  }
  #knowhow-item-container .img{
    margin-top:10px;
  }
  .knowhow-content {
    margin-bottom: 120px;
  }
  .knowhow-content .black-light{
    font-weight: 300;
    text-align: left;
    margin-left: 12.5rem;
    font-size: 1.1rem;
  }
  .knowhow-content .black-bold{
    font-weight: 700;
    font-size: 1.3rem;
    text-align: left;
    margin-left: 12.5rem;
  }
  .knowhow-content .img2{
    margin-top:70px;
  }
  
</style>