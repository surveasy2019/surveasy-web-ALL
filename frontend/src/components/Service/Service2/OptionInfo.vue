<template>
  <div class="OptionInfo">
    <div class="OptionInfo-container">
      <ul id="info-title">옵션 정보</ul>
        <div class="option">
          <ul id="showOption-title">요구 응답 수</ul>
          <ul id="showOption-value">{{ this.$store.state.localSurveyState.requiredHeadCount }}</ul>
        </div>
        <div class="option">
          <ul id="showOption-title">소요 시간</ul>
          <ul id="showOption-value">{{ this.$store.state.localSurveyState.spendTime }}</ul>
        </div>
        <div class="option">
          <ul id="showOption-title">마감 기한 지정</ul>
        <ul id="showOption-value">{{ this.$store.state.localSurveyState.dueDate }}    {{ this.$store.state.localSurveyState.dueTimeTime }}</ul>
        </div>
        <div class="option">
          <ul id="showOption-title">영어 설문 여부</ul>
          <ul id="showOption-value">{{ this.$store.state.localSurveyState.ENTarget }}</ul>
        </div>
        <div class="option">
          <ul id="showOption-title">대학생 및 대학원생 할인</ul>
          <ul id="showOption-value">{{ this.$store.state.localSurveyState.identity }}</ul>
        </div>            
    </div>
  </div>  
</template>

<script>
export default {

}
</script>

<style>
.OptionInfo {
  background: #EEEEEE 0% 0% no-repeat padding-box;
  margin-top: 70px;
  border-radius: 15px;
  opacity: 1;
  font-family: 'Noto Sans KR', sans-serif;
}
.OptionInfo-container {
  width: 1123px;
  padding: 20px;
  z-index: 1;
}
.OptionInfo-container ul {
  text-align: left;
  font-size: 13px;
  margin: 0;
}
.OptionInfo-container #info-title {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 25px 0 30px 0;
}
.option {
  margin-bottom: 17px;
}
.OptionInfo-container #showOption-title {
  font-family: 'Noto Sans KR';
  font-weight: 200;
  font-size: 12px;
  color: grey;
}
.OptionInfo-container #showOption-value {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 17px;
  color: #0CAE02;
  margin-top: 2px;
}
</style>