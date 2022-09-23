<template>
  <div class="Coupon">
    <div class="Coupon-container">
      <ul id="Coupon-title">쿠폰/적립금</ul>

      <ul id="Coupon-detail">
        <ul class="Coupon-detail-text">쿠폰</ul>
          <select class="Coupon-selectbox" v-model="selectedCoupon">
            <option class="select-placeholder" :value="defaultCoupon" disabled selected>사용 가능 쿠폰 {{ this.$store.state.myCoupon.length }}장</option>
            <option class="Coupon-option" v-for="item in (this.$store.state.myCoupon)" v-bind:value="{code: item.code, rate: item.rate, forGroup: item.forGroup}" :key="item">{{ item.name }}  : {{ item.duedate }} 까지</option>
          </select>
          <button class="Coupon-btn-" @click="useCoupon()">쿠폰 적용하기</button>
      </ul>

      <ul id="Coupon-detail">
        <ul class="Coupon-detail-text">적립금</ul>
        <div class="flex">
        <div class="point-detail-container">
          <div class="Point-box">
            <input class="Point-input" type="text" v-model="point_to_use" placeholder="사용하려는 적립금 액수를 입력하세요.">
            <div>
              보유 적립금 {{ show_point }}원    
              <button class="pointDelete-btn" @click="deletePoint"><i class="fas fa-times"></i></button>
            </div>
          </div>
          
          
        </div>
        <div>
          <button class="Coupon-btn-" id="point-btn-" @click="usePoint()">적립금 적용하기</button>
          </div>
          </div>
          <div class="info-detail-notice">* 적립금은 주문 금액의 최대 10%까지 사용 가능합니다.</div>
      </ul>

    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {

      selectedCoupon: {
        code: '',
        rate: 0,
        forGroup: false
      }, 

      defaultCoupon : {
        code: '',
        rate: 0,
        forGroup: false
      },

      point_to_use: '',

      point_apply: false,
      point_delete: false

    }
  },
  

  methods: {
    // Coupon methods
    useCoupon() {
      if(this.$store.state.localSurveyState.coupon_use==false) {
        this.$store.state.localSurveyState.selectedCoupon = this.selectedCoupon

        this.$store.state.localSurveyState.beforeCouponPrice = this.$store.state.localSurveyState.price
      
        if(this.selectedCoupon.rate == 5) {
          this.$store.state.localSurveyState.couponDiscount = this.$store.state.localSurveyState.price * 0.05
          this.$store.state.localSurveyState.price = this.$store.state.localSurveyState.price * 0.95
        }

        if(this.selectedCoupon.rate == 10) {
          this.$store.state.localSurveyState.couponDiscount = this.$store.state.localSurveyState.price * 0.1
          this.$store.state.localSurveyState.price = this.$store.state.localSurveyState.price* 0.9
        }

        if(this.selectedCoupon.rate == 20) {
          this.$store.state.localSurveyState.couponDiscount = this.$store.state.localSurveyState.price * 0.2
          this.$store.state.localSurveyState.price = this.$store.state.localSurveyState.price* 0.8
        }

        this.$store.state.localSurveyState.coupon_use = true
      }

      else if(this.$store.state.localSurveyState.coupon_use==true) {
        alert("쿠폰은 최대 1장까지 사용가능합니다.")
      }
      
    },
    
    // Point methods
    usePoint() {
      console.log(this.point_apply)
      var point_to_use_num = Number(this.point_to_use)
      if(this.$store.state.localSurveyState.point_use==false) {

        if(point_to_use_num <= this.$store.state.loginState.currentUser.point_current) {

          if(this.$store.state.localSurveyState.beforeCouponPrice < 10000) {
            alert('적립금은 결제 금액이 10,000원 이상인 경우에만 사용 가능합니다.')
            this.point_to_use = ''
          }
      
          else {            
            var maxpoint = this.$store.state.localSurveyState.beforeCouponPrice * 0.1

            if(maxpoint < point_to_use_num) {
              alert('적립금은 결제 금액의 최대 10%까지 사용 가능합니다.')
              this.point_to_use = ''
            }

            else {
              this.point_apply = true

              this.$store.state.localSurveyState.pointDiscount = point_to_use_num
              this.$store.state.localSurveyState.price = this.$store.state.localSurveyState.price - point_to_use_num

              this.$store.state.localSurveyState.point_use = true
              //console.log(this.point_apply)
            }

            
          }
        
        }

        else {
          alert('사용가능한 적립금 액수를 초과하였습니다.')
          this.point_to_use = ''
        }
      }

      else if(this.$store.state.localSurveyState.point_use==true) {
        alert("이미 적립금을 적용하셨습니다.")
        this.point_to_use = ''
      }
    },

    

  },

  computed: {
    show_point() {
      var c = this.$store.state.localPointState.point_current

      if(this.point_apply == false) {
        return c
      }
      else {
        return c - this.$store.state.localSurveyState.pointDiscount
      }
    },

    deletePoint() {
      if(this.point_apply == true) {
        this.$store.state.localSurveyState.price = this.$store.state.localSurveyState.price + this.$store.state.localSurveyState.pointDiscount
        this.$store.state.localSurveyState.pointDiscount = 0
        this.$store.state.localSurveyState.point_use = false
        this.point_apply = false

        this.show_point()
      }
      
    }
  }

}
</script>

<style>
.Coupon {
  background: #EEEEEE 0% 0% no-repeat padding-box;
  margin-top: 20px;
  border-radius: 15px;
  opacity: 1;
  font-family: 'Noto Sans KR', sans-serif;
}
.Coupon-container {
  width: 1123px;
  padding: 25px;
  z-index: 1;
}
.Coupon-container ul {
  text-align: left;
}
.Coupon-container #Coupon-title {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin: 25px 0 30px 0;
}
#Coupon-detail ul {
  display: block;
  margin-left: 3px;
}
.Coupon-detail-text {
  left: 187px;
  width: 200px;
  height: 25px;
  margin-top: 38px;
  margin-bottom: 15px;
  padding: 0;
  text-align: left;
  font-family: 'Noto Sans KR';
  font-size: 17px;
  font-weight: normal;
  letter-spacing: 0px;
  color: #000000;
  opacity: 1;
}
.Coupon-selectbox {
  left: 190px;
  width: 707px;
  height: 55px;
  border: 0.75px solid #afafaf;
  opacity: 1;
  background-color: #EEEEEE;
  font-size: 16px;
  padding: 12px;
  text-align: left;
  font-family: 'Noto Sans KR';
  letter-spacing: 0px;
  color: #a2a0a0;
  padding-top: 14px;
  padding-bottom: 13px;
  border-radius: 9px;
  
}
.Coupon-selectbox:focus {
  outline: none;
  border: 1.5px solid #0AAB00;
}
.Coupon-option {
  padding: 10px;
  font-size: 16px;
  color: #1c1c1c;
}
/* .Coupon-btn {
  background-color: #EEEEEE;
  border: 1px solid #0CAE02;
  font-weight: 400;
  margin-left: 20px;
  color: #0CAE02;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 26px;
  cursor: pointer;  
  padding: 13px 29px;
  font-family: 'Noto Sans KR' lighter;
  
}
.pPoint-btn{
  background-color: #EEEEEE;
  border: 1px solid #0CAE02;
  font-weight: 400;
  margin-left: 20px;
  color: #0CAE02;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 26px;
  cursor: pointer;  
  padding: 5px 20px;
  font-family: 'Noto Sans KR' lighter;
}
.Coupon-btn:hover, .pPoint-btn:hover{
  color: white;
  background-color: #0AAB00;
} */
.Coupon-btn-{
  height: 48px;
  width: 120px;
  color: #0AAB00;
  border: 1px solid #0AAB00;
  border-radius: 18px;
  font-family: 'Noto Sans KR';
  margin-left: 15px;
}
#point-btn-{
  margin-top: 3px;
}
.Coupon-btn-:hover{
  color: white;
  background-color: #0AAB00;
}
.point-detail-container {
  display: flex;
  flex-direction: row;
}
.Point-box {
  display: flex;
  justify-content: space-between;
  left: 190px;
  width: 680px;
  height: 26px;
  margin: 0;
  border: 0.75px solid #afafaf;
  opacity: 1;
  background-color: #EEEEEE;
  font-size: 16px;
  padding: 13px;
  text-align: left;
  font-family: 'Noto Sans KR' lighter;
  letter-spacing: 0px;
  color: #a2a0a0;
  padding-top: 14px;
  padding-bottom: 13px;
  border-radius: 9px;
}
.Point-input {
  width: 400px;
  background-color: #EEEEEE; 
  border: none;
  font-size: 16px;
  font-family: 'Noto Sans KR' lighter;
  color: #a2a0a0;
  padding-left: 5px;
}
.Point-input::placeholder {
  font-size: 16px;
  font-family: 'Noto Sans KR';
  color: #BCBCBC;
}
.Point-input:focus {
  border:none;
  outline: none;
}
.pointDelete-btn {
  display: inline-block;
  border: none;
  color: grey;
  cursor: pointer;
}
.flex{
  display: flex;
}
.select-placeholder{
  font-family: 'Noto Sans KR', sans-serif;
}
</style>