<template>
  <div class="home-calculator" v-if="showCalculator">
    <div class="home-calculator-contentsbox">
      <p class="calc-title">내 설문은 얼마일까?
        <button class="modal-close-button" id="cal-button" @click="$emit('close'), clear()"><i class="fas fa-times" id="calc-close"></i></button>
      </p> 
      <div class="calc-option-container">
          <div class="respond-content">
            <span class="calc-option-title" id="first-t">요구 응답 수</span>
            <div class="calc-option">
              <div class="pro-one" :class="{active: priceRequireHeadCount>=2}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=1}" @click="HeadCount(1)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=1}">30명</div>
              </div>
              <div class="pro-one" :class="{active: priceRequireHeadCount>=3}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=2}" @click="HeadCount(2)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=2}">40명</div>
              </div>
              <div class="pro-one"  :class="{active: priceRequireHeadCount>=4}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=3}" @click="HeadCount(3)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=3}">50명</div>
              </div>
            <div class="pro-one" :class="{active: priceRequireHeadCount>=5}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=4}" @click="HeadCount(4)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=4}">60명</div>
              </div>
              <div class="pro-one" :class="{active: priceRequireHeadCount>=6}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=5}" @click="HeadCount(5)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=5}">70명</div>
              </div>
              <div class="pro-one" :class="{active: priceRequireHeadCount>=7}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=6}" @click="HeadCount(6)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=6}">80명</div>
              </div>
              <div class="pro-one" :class="{active: priceRequireHeadCount>=8}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=7}" @click="HeadCount(7)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=7}">90명</div>
              </div>
              <div class="pro-one" id="one-last" :class="{active: priceRequireHeadCount==9}">
                <div class="step-counter" :class="{active: priceRequireHeadCount>=8}" @click="HeadCount(8)"></div>
                <div class="step-name" :class="{active: priceRequireHeadCount>=8}">100명</div>
              </div>
            </div>
            
          
        </div>

        <div class="respond-content">
            <span class="calc-option-title">소요시간</span>
            <div class="calc-option" id="calc-time-op">
              <div class="pro-one" :class="{active: priceSpendTime>=2}">
                <div class="step-counter" :class="{active: priceSpendTime>=1}" @click="TimeCount(1)"></div>
                <div class="step-name" :class="{active: priceSpendTime>=1}">1분 이내</div>
              </div>
              <div class="pro-one" :class="{active: priceSpendTime>=3}">
                <div class="step-counter" :class="{active: priceSpendTime>=2}" @click="TimeCount(2)"></div>
                <div class="step-name" :class="{active: priceSpendTime>=2}">1-3분</div>
              </div>
              <div class="pro-one" :class="{active: priceSpendTime>=4}">
                <div class="step-counter" :class="{active: priceSpendTime>=3}" @click="TimeCount(3)"></div>
                <div class="step-name" :class="{active: priceSpendTime>=3}">4-6분</div>
              </div>
              <div class="pro-one" :class="{active: priceSpendTime>=5}">
                <div class="step-counter" :class="{active: priceSpendTime>=4}" @click="TimeCount(4)"></div>
                <div class="step-name" :class="{active: priceSpendTime>=4}">7-10분</div>
              </div>
              <div class="pro-one" :class="{active: priceSpendTime>=6}">
                <div class="step-counter" :class="{active: priceSpendTime>=5}" @click="TimeCount(5)"></div>
                <div class="step-name" :class="{active: priceSpendTime>=5}">11-15분</div>
              </div>
              <div class="pro-one" id="two-last" :class="{active: priceSpendTime>=7}">
                <div class="step-counter" :class="{active: priceSpendTime>=6}" @click="TimeCount(6)"></div>
                <div class="step-name" :class="{active: priceSpendTime>=6}">16-20분</div>
              </div>
            </div>
        </div>
       
        <div>
          <div class="date-content">
            <div class="calc-option-title">마감기한 지정</div>
            <div class="date-select">
              <input type="Date"  :min="getDateStr_min" :max="getDateStr_max" v-model="aa" required>
              <input type="time"  v-model="bb" required>
              <p class="warn-m">마감날짜와 마감시간 중 공란이 존재할 경우 가격 계산이 정확히지 않을 수 있습니다.</p>
            </div>
            
          </div>
          
        
          <div class="eng-content">
            <div class="calc-option-title">영어설문</div>
            <label class="switch">
              <input v-model="addENTarget" @click="EngOptionCal" type="checkbox" class="EngRadio" name="Eng">
              <span class="slider"></span>
            </label>
            <span class="Eng-text">{{ this.EngText }}</span>
          </div>

          
          <div class="target-content">
            <div class="calc-option-title">설문 대상</div>
            <div class="date-select">
              <select id="select-age" v-model="targetAgeOption">
              <option :value=0 selected disabled hidden>대상 연령</option>
              <option :value=1>전 연령</option>
              <option :value=2>20대</option>
              <option :value=3>20세 이상 24세 이하</option>
              <option :value=4>25세 이상 29세 이하</option>
              <option :value=5>20세 이상 39세 이하</option>
              <option :value=6>20세 이상 49세 이하</option>
            </select>
            <select id="select-gender" v-model="targetGenderOption">
              <option :value=0 selected disabled hidden>대상 성별</option>
              <option :value=1>성별 무관</option>
              <option :value=2>남성</option>
              <option :value=3>여성</option>
            </select>
            <p class="warn-m-target">다음 주문 페이지에서 설문 대상 상세정보를 기입할 수 있습니다.</p> 
            </div>
          </div>
       
          <div class="discount-content">
            <div class="calc-option-title" id="margin-right">대학생/대학원생 할인</div>
                
            <div class="select-discount">
              <div class="radio">
                <input type="radio" id="one" name="discount" value="one" checked @click="discount(1)">
                <label for="one">중/고등학생입니다.</label>
              </div>
              
              <div class="radio">
                <input type="radio" id="two" name="discount" value="two" @click="discount(2)">
                <label for="two">대학생입니다.</label>
              </div>

              <div class="radio">
                <input type="radio" id="three" name="discount" value="three" @click="discount(3)">
                <label for="three">대학원생입니다.</label>
              </div>

              <div>
                <input type="radio" id="four" name="discount" value="four" @click="discount(4)">
                <label for="four">할인대상이 아닙니다.</label>
              </div>
            </div>
          </div>
        
        
          <div class="price-content">
            <div class="calc-option-title" id="total">총 금액</div>
            <span class="service-option-totalprice-price">
              {{ this.priceToString(this.calculate) }}원</span>
          </div>
        
          
           
              <button id="go-btn" @click="setOption1()">설문 업로드하러 가기</button>
        
            
            
          
    </div>
    
    

    </div>
  </div>  
  </div>
</template>

<script>
export default {
  name: 'home-calculator',
  props: {
    showCalculator: {
      type: Boolean,
      require: true,
      default: false
    }
  },
   data() {
    return {
      currentTime : new Date(),
      priceIdentity:1,
      priceSpendTime:1,
      priceRequireHeadCount:1,
      addENTarget:0,
      timeOption:0,
      targetAgeOption:0,
      targetGenderOption:0,

      price: 0,
      identity: '',
      spendTime: '',
      requiredHeadCount: '',
      ENTarget: '',
      dueTime: '',

      EngText: "영어 설문이 아닙니다.",

      ex: 0,

      today: new Date().toISOString().substring(0,10),
      min: new Date().toISOString().substring(0,10),

      aa:'',
      bb:'',
      cc: this.aa+' '+this.bb,
      dd: new Date(),

    }
  },
  computed :{
    getDateStr_min(){
      var today = new Date()
      var todayPlus9 = today.setHours(today.getHours()+9)
      var todayPlus9Date = new Date(todayPlus9)
      //console.log(todayPlus9Date)
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
      // var today = new Date()
      // var a = today.setDate(today.getDate()+7)
      // var m = new Date(a)
      // var max = m.toISOString().substring(0,10) 
      // return max

      var today = new Date()
      var a = today.setDate(today.getDate()+7)
      var ad = new Date(a)
      var aa = ad.setHours(ad.getHours()+9)
      var m = new Date(aa)
      // var max = m.toLocaleDateString()
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

      // console.log('time', hourOptionIndex)
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
      // console.log(EngIndex)
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
          targetingGender: this.targetGenderOption});

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
      }
      
    },
    
    HeadCount(Person){
      this.priceRequireHeadCount = Person
    },
    TimeCount(Time){
      this.priceSpendTime= Time
    },
    discount(select){
      this.priceIdentity = select
    },
    clear(){
      this.priceIdentity = 0
      this.priceRequireHeadCount = 1
      this.priceSpendTime = 1
      this.aa = ''
      this.bb = ''
      this.addENTarget =0
      this.targetAgeOption = 0
      this.targetGenderOption = 0
    },
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  
   
}
</script>

<style>
.home-calculator {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}
.home-calculator-contentsbox {
  font-family: 'Noto Sans KR', sans-serif;
  width: 900px;
  height: 600px;
  margin: 140px auto;
  padding-top: 20px;
  padding-bottom: 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  z-index: 2;
}
.calc-title {
  color: #0AAB00;
  font-size: 1.18rem;
  margin-bottom: 40px;
  margin-left: 60px;
}
.modal-close-button {
  float: right;
  color: grey;
  font-size: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding-right: 40px;
  margin-right: 30px;
}
.respond-content {
  display: flex;
  flex-direction: row;
  width: 90%;
}
.calc-option {
  display: flex;
  flex-direction: row;
  flex: 1;
}
.pro-one {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.pro-one:before {
  position: absolute;
  content: "";
  border-bottom: 3px solid #ccc;
  width: 100%;
  top: 5px;
  left: 50%;
 
  z-index: 2;
}
.pro-one:after {
  position: absolute;
  content: "";
  border-bottom: 3px solid #ccc;
  width: 100%;
  top: 5px;
  right: -50%;
 
  z-index: 2;
}
.pro-one .step-counter {
  position: relative;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 13px;
  border-radius: 50%;
  background: #ccc;
  margin-bottom: 6px;
}
.pro-one.active::after {
  position: absolute;
  content: "";
  border-bottom: 3px solid #0AAB00;
  width: 100%;
  top: 5px;
  left: 50%;
  z-index: 3;
}
.step-name.active {
  font-weight: bold;
  color:#0AAB00;
}
.pro-one:first-child::before {
  content: none;
  border-bottom: none;
}
.pro-one:last-child::after {
  content: none;
  border-bottom: none;
}
#calc-time-op{
  margin-left: 10px;
}
#one-last::before{
  content: none;
   border-bottom: none;
}
#two-last::before{
  content: none;
   border-bottom: none;
}

.step-counter.active {
  background-color: #0AAB00;
  
}
.calc-option-container {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  
  border-radius: 10px;
}
.calc-option-title {
  text-align: left;
  margin: 0px 10px 25px 10px;
  color: black;
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 50px;
  padding-left: 30px;
  
}

.calc-show-price-container {
  text-align: right;
  color:#0CAE02;
}

.calc-option-totalprice-price {
  margin-right: 25px;
  font-size: 20px;
  font-weight: bold;
}
.calc-goServiceInputForm-btn {
  width: 70%;
  height: 22px;
  margin: 15px;
  color:#0CAE02;
  background-color: rgb(231, 231, 231);
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 12px;
  cursor: pointer;
}
.date-content {
  display: flex;
  margin-top: 5px;
}
.eng-content {
  display: flex;
  margin-top: 10px;
  height: 40px;
}
.date-content input{
  margin-right: 10px;
  padding: 5px 10px;
}
.target-content {
  display: flex;
  margin-top: 10px;
  height: 60px;
}
.target-content select {
  height: 30px;
  margin-left: 7px;
  padding-left: 5px;
}
#select-age {
  width: 200px;
  margin-left: 30px;
}
#select-gender {
  margin-left: 10px;
  width: 150px;
}
.discount-content {
  display: flex;
  height: 30px;
  margin-top: 19px;
  margin-bottom: 15px;
}
.radio{
  margin-right: 20px;
} 
.select-discount{
  display: flex;
  flex-direction: row;
  
}
.date-select{
  margin-left: 10px;
  text-align: left;
}
#margin-bottom{
  margin-bottom: 30px;
}
.calc-option-title{
  margin-right: 90px;
}
#margin-right{
  margin-right: 45px;
  margin-bottom: 35px;
}
.price-content {
  display: flex;
  justify-content: space-between;
  color: #0AAB00;
  font-weight: 500;
  background: #EAEAEA 0% 0% no-repeat padding-box;
  opacity: 1;
  width: 100%;
}
#total, .service-option-totalprice-price{
  margin-top: 15px;
  margin-bottom: 15px;
  color: #0AAB00;
}
.service-option-totalprice-price{
  margin-right: 50px;
  font-size: 1.3rem;
  font-weight: 700;
}
#go-btn{
  text-align: center;
  letter-spacing: 0px;
  color: #0AAC00;
  background: #fff;
  margin-top: 15px;
  border: 1px solid #0AAC00;
  border-radius: 24px;
  opacity: 1;
  padding: 7px 20px;
  font-size: 1rem;
  font-weight: 700;
}
#go-btn:hover{
  color: #fff;
  background: #0AAC00;
}
.warn-m{
  margin-top: 5px;
  font-size: 0.75rem;
  color: rgb(179, 7, 7);
  font-weight: 300;
}
.warn-m-target{
  margin-top: 5px;
  margin-left: 35px;
  font-size: 0.75rem;
  color: rgb(179, 7, 7);
  font-weight: 300;
}
#calc-close {
  padding-right: 10px
}

</style>