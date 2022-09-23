<template>
<div class="ServicePay">
  <div class="ServicePay-col">
      <OptionInfo />
      <SurveyInfo />
      <CouponPoint />
      
      
    </div>  

  <div class="ServicePay-col">
      <PaymentPrice />
      <PaymentMethod />
    </div>
</div>
  
</template>

<script>
import OptionInfo from '../../components/Service/Service2/OptionInfo.vue'
import SurveyInfo from '../../components/Service/Service2/SurveyInfo.vue'
import CouponPoint from '../../components/Service/Service2/Coupon.vue'
import PaymentPrice from '../../components/Service/Service2/PaymentPrice.vue'
import PaymentMethod from '../../components/Service/Service2/PaymentMethod.vue'

export default {

  components: { OptionInfo, SurveyInfo, CouponPoint, PaymentPrice, PaymentMethod },
  mounted() {
    window.scrollTo(0,0)
  },
}
</script>

<style>
.ServicePay {
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 1950px;
}
.ServicePay-col {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
}

.OptionInfo {
  width: 950px;
  height: 440px;
}
.SurveyInfo {
  width: 950px;
  height: 860px;
}
.Coupon {
  width: 950px;
  height: 440px;
}
.PaymentPrice {
  width: 400px;
  height: 300px;
}
.PaymentMethod {
  width: 400px;
  height: 310px;
}
</style>