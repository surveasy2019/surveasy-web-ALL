<template>
  <div class="ServicePayDone">
    <img id="paydone-check-img" src='@/assets/check.png' width="50">
    <div class="paydone-title">주문 완료되었습니다!</div>
    <div class="paydone-green">안내된 계좌로 입금을 완료하셔야 서비스 이용이 가능합니다.</div>
    <div class="paydone-green">설문은 입금 확인과 빠른 검수 후 패널들에게 전달됩니다.</div>
    <div class="paydone-contentsbox">
      <ul id="paydone-subtitle">결제 정보</ul>
      <ul class="paydone-detail">
        <div id="paydone-detail-text">총 결제 금액</div> 
        <div id="paydone-detail-value-green">{{ priceToString(this.$store.state.localSurveyState.price) }} 원</div>
      </ul>
      <ul class="paydone-detail">
        <div id="paydone-detail-text">입금자</div> 
        <div id="paydone-detail-value">{{ this.$store.state.localSurveyState.account_userName }}</div>
      </ul>
      <ul class="paydone-detail">
        <div id="paydone-detail-text">계좌번호</div> 
        <div id="paydone-detail-value">카카오뱅크 3333-11-5235460 (송다예)</div>
      </ul>
    </div>
    <div class="paydone-notice">설문조사의 진행 상황은 마이 페이지에서 확인하실 수 있습니다.
    <br>문의 사항은 카카오채널 @surveasy로 보내주세요.</div>
    <br>
    <router-link to="/mypage/dashboard"><button class="goMyPage-btn">마이 페이지 가기</button></router-link>
  </div>

   
</template>
<script>
export default {
  mounted() {
    window.scrollTo(0,0)
  },
  methods: {
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
}
</script>
<style>
.ServicePayDone {
  font-family: 'Noto Sans KR';
  height: 650px;
  padding: 80px;
}
.paydone-title {
  font-family: 'Noto Sans KR';
  font-size: 25px;
  font-weight: bold;
  margin: 15px 0 15px 0;
  color: #000000;
}
.paydone-green {
  font-family: 'Noto Sans KR';
  font-size: 16px;
  font-weight: 400;
  line-height: 25px;
  color: #0CAE02;
  margin-bottom: 0px;
}
.paydone-contentsbox {
  display: inline-block;
  width: 506px;
  height: 250px;
  margin: 30px;
  background: #EEEEEE 0% 0% no-repeat padding-box;
  border-radius: 15px;
}
#paydone-subtitle {
  font-size: 20px;
  margin-top: 28px;
  margin-bottom: 35px;
}
.paydone-detail {
  display: flex;
  flex-direction: row;
}
.paydone-contentsbox ul {
  display: flex;
  justify-content: space-between;
  font-family: 'Noto Sans KR';
  text-align: left;
  color: black;
  font-size: 17px;
  margin-bottom: 25px;
  padding-left: 45px;
}
#paydone-detail-value {
  display: inline-block;
  text-align: right;
}
#paydone-detail-value-green {
  font-family: 'Noto Sans KR';
  color: #0CAE02;
  font-weight: bold;
  font-size: 20px;
  margin-right: 55px;
}
#paydone-detail-value {
  font-family: 'Noto Sans KR';
  font-weight: normal;
  margin-right: 55px;
}
.paydone-notice {
  font-family: 'Noto Sans KR';
  font-size: 15px;
  color: #000000;
  margin-top: 5px;
}
.detail{
  font-weight: 400;
  color:#0AAB00;
  margin-bottom: 40px;
}
.goMyPage-btn {
  padding: 10px 30px;
  margin: 5px;
  border: 1px solid #0AAB00;
  border-radius: 24px;
  opacity: 1;
  background-color: white;
  color: #0AAB00;
  font-family: 'Noto Sans KR';
  font-size: 1.2rem;
  font-weight: normal;
}
.goMyPage-btn:hover{
  background-color: #0AAB00;
  color:white;
}
.end-detail{
  font-weight: 400;
  margin-top: 60px;
}
</style>