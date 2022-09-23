<template>
  <div class="PaymentPrice">
    <div class="PaymentPrice-container">
      <ul id="PaymentPrice-title">결제금액</ul>
      <ul class="showPrice-detail-total">
        <span id="showPrice-text">주문금액</span> 
        <span id="showPrice-num">{{ priceToString(this.$store.state.localSurveyState.beforeCouponPrice) }} 원</span>
      </ul>
      <ul class="showPrice-detail-coupon">
        <span id="showPrice-text">쿠폰할인</span> 
        <span id="showPrice-num">{{ priceToString(this.$store.state.localSurveyState.couponDiscount) }} 원</span>
      </ul>
      <ul class="showPrice-detail-coupon">
        <span id="showPrice-text">적립금 사용</span> 
        <span id="showPrice-num">{{ priceToString(this.$store.state.localSurveyState.pointDiscount) }} 원</span>
      </ul>
    <hr align="left"> 
      <ul class="showPrice-final">
        <span id="showPrice-text">총 결제금액</span> 
        <span id="showPrice-num">{{ priceToString(this.$store.state.localSurveyState.price) }} 원</span>
      </ul>
    </div>
    </div>  
</template>

<script>
export default {
  methods: {
    priceToString(price) {
      return (""+price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
}
</script>

<style>
.PaymentPrice {
  background: #EEEEEE 0% 0% no-repeat padding-box;
  margin-top: 70px;
  margin-left: 20px;
  border-radius: 15px;
  font-family: 'Noto Sans KR', sans-serif;
}
.PaymentPrice-container {
  width: 380px;
  padding-top: 20px;
  z-index: 1;
}
.PaymentPrice-container ul{
  text-align: left;
  font-size: 13px;
  margin-bottom: 10px;
  padding-left: 45px;
}
#PaymentPrice-title {
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  margin: 25px 0 30px 0;
  font-size: 20px;
  font-weight: bold;
}
hr {
  width: 310px;
  margin-left: 45px;
  margin-bottom: 20px;
}
.showPrice-detail-total {
  display: flex;
  justify-content: space-between;
}
.showPrice-detail-total #showPrice-text {
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  font-size: 16px;
  margin-left: 5px;
  margin-right: 120px;
}
.showPrice-detail-total #showPrice-num{
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  font-size: 16px;
  margin-right: 30px;
}
.showPrice-detail-coupon {
  display: flex;
  justify-content: space-between;
}
.showPrice-detail-coupon #showPrice-text {
  font-family: 'Noto Sans KR', sans-serif;
  color: rgb(157, 157, 157);
  font-size: 16px;
  margin-left: 5px;
  margin-right: 160px;
}
.showPrice-detail-coupon #showPrice-num{
  font-family: 'Noto Sans KR', sans-serif;
  color: rgb(157, 157, 157);
  font-size: 16px;
  margin-right: 30px;
}
.showPrice-final {
  display: flex;
  justify-content: space-between;
}
.showPrice-final #showPrice-text {
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  font-size: 17px;
  font-weight: bold;
}
.showPrice-final #showPrice-num{
  font-family: 'Noto Sans KR', sans-serif;
  color: #0CAE02;
  font-size: 19px;
  font-weight: bold;
  margin-right: 30px;
}
</style>