<template>
<div class="ServiceOption">
  <div class="serviceOption-container">
      <div id="service-option-title">설문 응답 서비스</div>
        <div>
          <select class="selectbox" v-model="priceRequireHeadCount">
            <option :value=0 selected disabled hidden>요구 응답수</option>
            <option :value=1>30명</option>
            <option :value=2>40명</option>
            <option :value=3>50명</option>
            <option :value=4>60명</option>
            <option :value=5>70명</option>
            <option :value=6>80명</option>
            <option :value=7>90명</option>
            <option :value=8>100명 (최대 응답수)</option>
          </select>

          <select class="selectbox" v-model="priceSpendTime">
            <option :value=0 selected disabled hidden>소요 시간</option>
            <option :value=1>1분 이내</option>
            <option :value=2>1-3분</option>
            <option :value=3>4-6분</option>
            <option :value=4>7-10분</option>
            <option :value=5>11-15분</option>
            <option :value=6>16-20분</option>
          </select> 

          <br>
          <li class="hasTitleOption">
            <span class="option-title">마감기한 지정</span>
            <input type="Date" class="date" :min="getDateStr_min" :max="getDateStr_max" v-model="aa" required> 
            <input type="time" class="time" v-model="bb" required>
            <p class="warn-msg">마감날짜와 마감시간 중 공란이 존재할 경우 <br> 설문 게시가 어려울 수 있습니다.</p>
          </li>


          <!-- 설문 대상 타겟팅 관련 -->
          <li class="hasTitleOption">
            <span class="option-title">설문 대상</span>
            
              <select class="selectbox-target" id="target_age" v-model="targetAgeOption">
              <option :value=0 selected disabled hidden>대상 연령</option>
              <option :value=1>전 연령</option>
              <option :value=2>20대</option>
              <option :value=3>20세 이상 24세 이하</option>
              <option :value=4>25세 이상 29세 이하</option>
              <option :value=5>20세 이상 39세 이하</option>
              <option :value=6>20세 이상 49세 이하</option>
            </select>
            <select class="selectbox-target" id="target_gender" v-model="targetGenderOption">
              <option :value=0 selected disabled hidden>대상 성별</option>
              <option :value=1>성별 무관</option>
              <option :value=2>남성</option>
              <option :value=3>여성</option>
            </select>
            <p id="service-option-notice">다음 주문 페이지에서 설문 대상 상세정보를 기입할 수 있습니다.</p>   
          </li>

          <li class="hasTitleOption">
            <span class="option-title">영어설문</span> 
            <label class="switch">
              <input v-model="addENTarget" @click="EngOptionCal" type="checkbox" class="EngRadio" name="Eng">
              <span class="slider"></span>
            </label>
            <span class="Eng-text">{{ this.EngText }}</span>
          </li>
          
    
        
          <select class="selectbox" v-model="priceIdentity">
            <option :value=0 selected disabled hidden>대학생 / 대학원생 할인 여부</option>
            <option :value=1>중/고등학생입니다.</option>
            <option :value=2>대학생입니다.</option>
            <option :value=3>대학원생입니다.</option>
            <option :value=4>할인대상이 아닙니다.</option>
          </select>

          <p id="service-option-notice">결제 페이지에서 대학생 및 대학원생임을 인증해야만</p>
          <p id="service-option-notice">할인을 받으실 수 있습니다.</p>
        
          <br>
        
          <div class="show-price-container">
            <span class="service-option-totalprice-word">총 금액</span>
            <span class="service-option-totalprice-price">
              {{ this.priceToString(this.calculate) }}원</span>
          </div>
        
          <div>
            
            <button class="goServicePay-btn" @click="setOption1()">설문 정보 입력하러 가기</button>
            
          </div>
      </div>
  </div>
</div>
  
</template>


<script>
import { arrayUnion, doc, collection, setDoc, updateDoc, getDocs } from '@firebase/firestore';
export default {
  data() {
    return {
      currentTime : new Date(),
      priceIdentity:0,
      priceSpendTime:0,
      priceRequireHeadCount:0,
      addENTarget:0,
      timeOption:0,
      targetAgeOption: 0,
      targetGenderOption: 0,


      price: 0,
      identity: '',
      spendTime: '',
      requiredHeadCount: '',
      ENTarget: '',
      dueTime: '',

      EngText: '',

      ex: 0,

      today: new Date().toISOString().substring(0,10),
      min: new Date().toLocaleDateString().substring(0,10),

      aa:'12:00:00',
      bb:'',
      cc: this.aa+' '+this.bb,
      dd: new Date(),

    }
  },

  mounted() {
    this.fetchUserData_point()
    this.fetchAdminData_coupon()
  },

  computed :{
    getDateStr_min(){
      var today = new Date()
      var todayPlus9 = today.setHours(today.getHours()+9)
      var todayPlus9Date = new Date(todayPlus9)
      var min = todayPlus9Date.toISOString()
      var dddd= min.split('T')
      var ddddd = dddd[0]
      //console.log(ddddd)
      var dddddd= ddddd.split('-')

      
      
      var year = dddddd[0]
      var month = dddddd[1]
      var day = dddddd[2]

      month = month.length == 2 ? month : '0' + month
      day = day.length == 2 ? day : '0' + day

      var D = year + '-' + month + '-' + day
      // console.log(D)
      return D
    },

    getDateStr_max(){
      var today = new Date()
      var a = today.setDate(today.getDate()+7)
      var ad = new Date(a)
      var aa = ad.setHours(ad.getHours()+9)
      var m = new Date(aa)
      
      var max = m.toISOString()
      

      var dddd= max.split('T')
      var ddddd = dddd[0]
      
      var dddddd= ddddd.split('-')

      
      var year = dddddd[0]
      var month = dddddd[1]
      var day = dddddd[2]

      month = month.length == 2 ? month : '0' + month
      day = day.length == 2 ? day : '0' + day

      var D = year + '-' + month + '-' + day
      // console.log(D)
      return D
    },

    getTimeStr(){
      var time = new Date()
      var utc = time.getTime() + (time.getTimezoneOffset() *60 *1000)
      var kr_diff = 9*60*60*1000
      var krr = new Date(utc+(kr_diff))
      var now = krr.toString().substring(16,21)
      // console.log(now);
      return now
    },
    
    timeOptionCal(){
      var ab = this.aa + ' ' + this.bb
      var asdf = new Date(ab).getTime()
      var hourGap = parseInt((asdf - this.dd.getTime())/3600000) 
      var hourOptionIndex = 0

      if (hourGap >= 18 && hourGap < 24){
        hourOptionIndex = 1
      } else if (hourGap >= 24 && hourGap < 36){
        hourOptionIndex = 2
      } else if (hourGap >= 36 && hourGap < 48){
        hourOptionIndex = 3
      } else if (hourGap >= 48 && hourGap < 72){
        hourOptionIndex = 4
      } else if (hourGap >= 72){
        hourOptionIndex = 5
      } else if (hourGap <18) {
        hourOptionIndex = 6
      }

      return hourOptionIndex
    }, 

    EngOptionCal() {
      var EngIndex = 0
      var HeadCount = this.priceRequireHeadCount
      var Eng = this.addENTarget

      if(Eng==false) {
        EngIndex = 0
        this.EngText = "영어 설문이 아닙니다."
      }
      else if((HeadCount<=3) && (Eng==true)) {
        EngIndex = 1
        this.EngText = "영어 설문입니다."
      }
      else if((HeadCount>3) && (Eng==true)) {
        EngIndex = 2
        this.EngText = "영어 설문입니다."
      }
      return EngIndex
    },

    calculate() {
      var p = parseFloat(parseFloat(this.$store.state.priceTable[this.priceSpendTime][this.priceRequireHeadCount])
                      * parseFloat(this.$store.state.IdentityOptionArray[this.priceIdentity])
                      * parseFloat(this.$store.state.EngOptionArray[this.EngOptionCal])
                      * parseFloat(this.$store.state.AgeOptionArray[this.targetAgeOption])
                      * parseFloat(this.$store.state.genderOptionArray[this.targetGenderOption])
                      + parseFloat(this.$store.state.TimeOptionArray[this.timeOptionCal])
                    ).toFixed(0)
      
      this.price = p
      return p
    }
  },
  methods: {    

    setOption1() {
      
      if((this.priceIdentity==0) || (this.priceSpendTime==0) || (this.priceRequireHeadCount==0) || (this.timeOptionCal==0) || (this.targetAgeOption==0) || (this.targetGenderOption==0)) {
        alert("모든 옵션을 입력해주세요.")
      }

      else if(this.timeOptionCal==6) {
        alert("마감 기한은 최소 18시간 이상부터 선택 가능합니다.")
      }

      else {       
        this.timeOption = this.timeOptionCal;
        this.addENTarget = this.EngOptionCal;
      
        this.requiredHeadCount = String(this.$store.state.priceTextTable[0][this.priceRequireHeadCount]);
        this.spendTime = String(this.$store.state.priceTextTable[1][this.priceSpendTime]);
        this.dueTime = String(this.$store.state.priceTextTable[2][this.timeOption]);
        this.ENTarget = String(this.$store.state.priceTextTable[3][this.addENTarget]);
        this.identity = String(this.$store.state.priceTextTable[4][this.priceIdentity]);
      
      
        this.$store.commit('setSurveyMutation1', {
          price: this.price, 
          beforeCouponPrice: this.price, 
          requiredHeadCount: this.requiredHeadCount, 
          spendTime: this.spendTime, 
          dueTime: this.dueTime, 
          ENTarget: this.ENTarget, 
          identity: this.identity, 
          dueDate: this.aa, 
          dueTimeTime: this.bb,
          targetingAge : this.targetAgeOption,
          targetingGender: this.targetGenderOption
        });

        this.$store.commit('setSurveyDueTime', {dueDate: this.aa, dueTime: this.bb})

        this.$store.commit('setCouponDiscountEmpty')
        this.$store.commit('setPointDiscountEmpty')
        

        if(this.$store.state.loginState.isLoggedIn==false) {
          alert('로그인이 필요한 서비스입니다.')
          this.$store.state.notLoggedInService = false
          // console.log('notLoggedInService')
          this.$router.push('/login')
          
        }
        if(this.$store.state.loginState.isLoggedIn==true) {
          
          this.$router.push('/servicepay');
          // console.log('isLoggedInService')
        }

        this.fetchUserData_point()
        //this.fetchAdminData_coupon()
        
      

        }
        
      },

      async fetchAdminData_coupon() {
        const db = this.$store.state.db

          this.$store.state.adminCoupon = []
          this.$store.state.myCoupon = []
        
        const adminCoupon = this.$store.state.adminCoupon
        
        const querySnapshot = await getDocs(collection(db, "couponData"))
        querySnapshot.forEach((doc) => {
          adminCoupon.push(doc.data())
        })

        const myCoupon_group_X = adminCoupon.filter(item => item.forGroup===false &&(item.user===this.$store.state.loginState.currentUser.email) && item.isUsed===false && item.outOfDate===false)
        const myCoupon_group_O = []

        const Coupon_group_O_yet = adminCoupon.filter(item => item.forGroup===true && item.isUsed===false && item.outOfDate===false)
        
        for(var i=0 ; i<Coupon_group_O_yet.length ; i++) {
            for(var j=0 ; j<Coupon_group_O_yet[i].user.length ; j++) {

              if(Coupon_group_O_yet[i].user[j].user == this.$store.state.loginState.currentUser.email && Coupon_group_O_yet[i].user[j].used == false) {
                //console.log(Coupon_group_O_yet[i])
                myCoupon_group_O.push(Coupon_group_O_yet[i])
              }

            }
          
          }

          const myCoupon = myCoupon_group_X.concat(myCoupon_group_O)
          this.$store.state.myCoupon = myCoupon
        //console.log(this.$store.state.myCoupon)
        this.check_outOfDate()
      },

      async check_outOfDate() {
          var db = this.$store.state.db
        
          for(var i=0 ; i<this.$store.state.myCoupon.length ; i++) {
            const docref = doc(db, "couponData", this.$store.state.myCoupon[i].code) 
            var duedate = this.$store.state.myCoupon[i].duedate
            var due = new Date(duedate + ' 24:00:00')
            var diff = due.getTime()/3600000 - Date.now()/3600000
            var diffdate = Math.floor(diff/24)
      
            await updateDoc(docref, { 
                duediff: diffdate
              })
            
            if(diff<0) {
              await updateDoc(docref, { 
                outOfDate: true
              })
            }
          }
      },

      async fetchUserData_point(){
        const db = this.$store.state.db
        this.$store.state.userData = []
        this.$store.state.PointUserData = []
        const userData = this.$store.state.userData
        const querySnapshot = await getDocs(collection(db,"userData"))
        querySnapshot.forEach((doc) => {
          userData.push(doc.data())
        })
        const PointUserData = userData.filter(item => item.email===this.$store.state.loginState.currentUser.email)
        this.$store.state.PointUserData = PointUserData
        // console.log('***pointUser: ')
        // console.log(PointUserData[0])
        this.getPointInfo()
      },

      getPointInfo() {
        var c = this.$store.state.PointUserData[0].point_current
        var t = this.$store.state.PointUserData[0].point_total

        this.$store.state.localPointState.point_current = c
        this.$store.state.localPointState.point_total = t

        // console.log('current point: ' + this.$store.state.localPointState.point_current)
      },

      priceToString(price) {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      }
    
 
    }     
  
  }
</script>

<style>
.ServiceOption {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: auto;
  max-width: 500px;
  min-width: 500px;
  height: 5468px;
  font-family: 'Noto Sans KR', sans-serif;
  
}
.serviceOption-container {
  position: sticky;
  top: 108px;
  z-index: 1;
  height: 650px;
  border-radius: 10px;
  margin: 80px 80px 135px 10px;
  background-color: #EEEEEE;
  border-radius: 10px;
}
#service-option-title {
  text-align: left;
  color: #0CAE02;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 30px 0 30px 40px;
  font-family: 'Noto Sans KR', sans-serif;
}
.selectbox {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  margin: 8px;
  padding-left: 5px;
  width: 330px;
  height: 30px;
  background-color: #fafafa;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
.selectbox:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.selectbox-target {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  margin: 4px;
  padding-left: 3px;
  height: 30px;
  background-color: #fafafa;
  font-size: 14px;
  cursor: pointer;
  border: none;
}
#target_age {
  width: 150px;
  margin-left: 10px;
}
#target_gender {
  width: 100px;
}
.hasTitleOption {
  text-align: left;
  margin: 25px 0 20px 0;
  display: block;
  
}
.hasTitleOption .option-title {
  font-family: 'Noto Sans KR', sans-serif;
  text-align: left;
  font-size: 14px;
  font-weight: bolder;
  margin: 10px 0 0 41px;
}
.hasTitleOption .date {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 135px;
  height: 22px;
  margin-left: 6px;
  margin-right: 3px;
  margin-bottom: 6px;
  border: none;
}
.hasTitleOption .date:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.hasTitleOption .time {
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: lighter;
  background-color: #fafafa;
  width: 105px;
  height: 22px;
  border: none;
}
.hasTitleOption .time:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.hasTitleOption .Eng-text {
  font-size: 14px;
  color: rgb(137, 135, 135);
  font-weight: lighter;
}
#service-option-notice {
  text-align: left;
  color: rgba(219, 21, 21, 0.822);
  font-size: 11.5px;
  margin: 1px 0 0 42px;
  font-weight: 300;
}
.show-price-container {
  margin-top: 10px;
  padding: 15px;
  text-align: right;
  color:#0CAE02;
}
.show-price-container  .service-option-totalprice-word {
  position: absolute;
  top: 540px;
  left: 160px;
  font-size: 18px;
}
.show-price-container  .service-option-totalprice-price {
  position: absolute;
  top: 533px;
  right: 1px;
  margin: 0 45px 0 0;
  font-size: 25px;
  font-weight: bold;
}
.goServicePay-btn {
  padding: 5px 70px;
  margin-top: 20px;
  color:#0CAE02;
  background-color: #EEEEEE;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.goServicePay-btn:hover{
  color: white;
  background: #0AAB00;
}
.option-target {
  display: flex;
  flex-direction: row;
}


/* Eng switch */
.switch {
  position: relative;
  display: inline-block;
  width: 38px;
  height: 20px;
  margin-left: 45px;
  margin-right: 10px;
}
.switch input { 
  opacity: 0;
  width: 0;
  height: 0;
}
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 34px;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
}
.slider:before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  left: 4px;
  bottom: 2.5px;
  border-radius: 50%;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
}
input:checked + .slider {
  background-color: #0CAE02;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(16px);
}
.warn-msg{
  color: rgba(219, 21, 21, 0.822);
  font-weight: 300;
  font-size: 0.7rem;
  text-align: left;
  margin-left: 130px;
  margin-top: 0;
  margin-bottom: 0;
}

</style>