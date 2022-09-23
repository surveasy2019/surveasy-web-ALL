<template>
<div>
  <div v-if="this.$store.state.isAdmin == false">
    <p>쿠폰 어드민 비밀번호 입력</p>
    <input v-model="passInput" type="text" placeholder="AdminPassword">
    <br>
    Admin Password
    <button @click="adminCheck(this.passInput)">확인하기</button>
  </div>

  <div v-else>
    <div class="coupon">
      <div class="coupon-register">
        <h2>쿠폰 발급</h2>
        <div class="coupon-type">
          <button @click="show(false)" :class="{active_green : (couponInfo.forGroup==false)}">개인 쿠폰</button>
          <button @click="show(true)" :class="{active_green : (couponInfo.forGroup==true)}">공유 쿠폰</button>
          <hr class="coupon-line">
        </div>
        
        <div v-if="couponInfo.forGroup==false">
          <span>개수 : </span>
          <input v-model="couponNum" type="number" placeholder="(숫자만)" id="couponInput_num">
          <br><br>
          <input v-model="couponInfo.code" type="text" placeholder="쿠폰코드 입력란 (맨끝 숫자 세자리 제외 앞부분만)" id="couponInput">
          <br>
          <input v-model="couponInfo.name" type="text" placeholder="쿠폰이름 입력란" id="couponInput">
          <br>
          <input v-model="couponInfo.duedate" type="date" id="couponInput">
          <br>
          <span>할인율</span>
          <select v-model="couponInfo.rate">
            <option :value=5>5%</option>
            <option :value=10>10%</option>
            <option :value=20>20%</option>
          </select>
          <br><br>
          <button @click="addCoupon_Individual(this.couponInfo)" class="finBtn">개인 쿠폰 발급하기</button>

        </div>

        <div v-if="couponInfo.forGroup==true">
          <br>
          <input v-model="couponInfo.code" type="text" placeholder="쿠폰코드 입력란" id="couponInput">
          <br>
          <input v-model="couponInfo.name" type="text" placeholder="쿠폰이름 입력란" id="couponInput">
          <br>
          <input v-model="couponInfo.duedate" type="date" id="couponInput">
          <br>
          <span>할인율</span>
          <select v-model="couponInfo.rate">
            <option :value=5>5%</option>
            <option :value=10>10%</option>
            <option :value=20>20%</option>
          </select>
          <br><br>
          <button @click="addCoupon_Group(this.couponInfo)" class="finBtn">공유 쿠폰 발급하기</button>

        </div>
        
        
      </div>


      <div class="coupon-list">
        <h2>쿠폰 리스트</h2>
        <!-- <button @click="fetchAdminData_coupon()">쿠폰 리스트 보기</button> -->
        <table>
          <tr>
            <th>공유 쿠폰 여부</th>
            <th>쿠폰 코드</th>
            <th>쿠폰 이름</th>
            <th>할인율</th>
            <th>등록 사용자</th>
            <th>유효 기간</th>
            <th>남은 기한(일)</th>
            <th>기한 만료</th>
            <th>사용 여부</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminCoupon)" :key="item.dueDate" class="cou-tds" :class="{valid: (item.outOfDate==false && item.isUsed==false), group: (item.forGroup==true) }">
            <td>{{ item.forGroup }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.rate }}</td>
            <td>{{ item.user }}</td>
            <td>{{ item.duedate }}</td>
            <td>{{ item.duediff }}</td>
            <td>{{ item.outOfDate }}</td>
            <td>{{ item.isUsed }}</td>
            
          </tr>
        </table>
      </div>

  <!-- <div class="coupon-mypage">
    <h2>쿠폰 등록하기</h2>
    <input type="text" placeholder="쿠폰 코드를 입력하시오." v-model="localCode">
    <button @click="addCoupon_user(localCode)">쿠폰 등록하기</button>
  </div>

  <div class="coupon-use">
    <h2>쿠폰 사용하기</h2>
    <h3>나의 쿠폰 리스트</h3>
    <table>
      <tr>
        <th>쿠폰 이름</th>
        <th>할인율</th>
        <th>유효 기간</th>
        <th>남은 기간(일)</th>
        <th>사용 여부</th>
      </tr>
      <tr v-for="item in (this.$store.state.myCoupon)" :key="item.isUsed">
        <td>{{ item.name }}</td>
        <td>{{ item.rate }}</td>
        <td>{{ item.duedate }}</td>
        <td>{{ item.duediff }}</td>
        <td>{{ item.isUsed }}</td>
      </tr>      
    </table>
    <br>
    <select v-model="selectedCoupon">
      <option v-for="item in (this.$store.state.myCoupon)" v-bind:value="{code: item.code, rate: item.rate}" :key="item">{{ item.name }}</option>
    </select>
    <button @click="useCoupon()">쿠폰 사용하기</button>
    <br>
    <div>결제금액: {{ this.price }}원</div>
    <br>
    <button @click="isUsed()">쿠폰 사용 완료</button>

    <br><br><br><br>
    <div>전달할 쿠폰을 선택하세요.</div>
    <select v-model="transferCoupon">
      <option v-for="item in (this.$store.state.myCoupon)" v-bind:value="{code: item.code, rate: item.rate}" :key="item">{{ item.name }}</option>
    </select>
    <br>
    <input type="text" v-model="receiver" placeholder="쿠폰을 받을 사용자의 이메일을 입력하시오."> 
    <br>
    <button @click="transferCP(transferCoupon)">쿠폰 전달하기</button>
  </div> -->

  </div>




</div>
</div>
</template>

<script>
import { doc, setDoc, collection, getDocs, updateDoc,getDoc } from '@firebase/firestore'
export default {
  data() {
    return {
      couponInfo: {
        forGroup: false,
        code: '',
        name: '',
        duedate: '',
        rate: 0,
        user: ''
      },

      couponNum : 1,

      localCode: '',
      couponUser: {user: '', used: false},

      selectedCoupon: {
        code: '',
        rate: 0
      },        
      price: 10000,
      
      receiver: '',
      transferCoupon: {
        code: '',
      },

      uploadDate: '',

    }
  },

  methods: {
    show(bool) {
      this.couponInfo.forGroup = bool
    },

    async adminCheck(passInput){
      const db = this.$store.state.db
      const pwRef = doc(db, "adminPassword", "couponadminPW")
      const docSnap = await getDoc(pwRef)

      if (docSnap.exists()) {
        if (passInput == docSnap.data().password){
          this.$store.commit('setAdminState')
          this.fetchAdminData_coupon()
        } else { alert('wrong input') }

      } else { alert('error') }

    },

   async addCoupon_Individual(couponInfo) {
    var db = this.$store.state.db 
    var due = new Date(couponInfo.duedate)
    var diff = Math.floor((due.getTime() - Date.now()) / (24*60*60*1000))

    for(var i=1 ; i<=this.couponNum ; i++) {
      var i_Str = i.toString()
      if(i_Str.length == 1)  i_Str = "00" + i_Str
      if(i_Str.length == 2)  i_Str = "0" + i_Str

      var code = couponInfo.code + i_Str

      await setDoc(doc(db, "couponData", code), {
        code: code,
        name: couponInfo.name,
        rate: couponInfo.rate,
        duedate: couponInfo.duedate,
        duediff: diff,
        user: '',
        isUsed: false,
        outOfDate: false,
        forGroup: false
      })

    }
      this.$store.state.adminCoupon = []
      this.$store.state.adminCouponValid = []

      this.fetchAdminData_coupon()

      alert("개인 쿠폰 발급 완료")

   },

   async addCoupon_Group(couponInfo) {
    var db = this.$store.state.db 
    var due = new Date(couponInfo.duedate)
    var diff = Math.floor((due.getTime() - Date.now()) / (24*60*60*1000))
    
      await setDoc(doc(db, "couponData", couponInfo.code.toString()), {
        code: couponInfo.code,
        name: couponInfo.name,
        rate: couponInfo.rate,
        duedate: couponInfo.duedate,
        duediff: diff,
        user: [],
        isUsed: false,
        outOfDate: false,
        forGroup: true
      })

      

      this.$store.state.adminCoupon = []
      this.$store.state.adminCouponValid = []

      this.fetchAdminData_coupon()

      alert("공유 쿠폰 발급 완료")

   },

   async fetchAdminData_coupon() {
     this.$store.state.adminCoupon = []
     this.$store.state.adminCouponValid = []

     const db = this.$store.state.db
     
     const adminCoupon = this.$store.state.adminCoupon
     
     const querySnapshot = await getDocs(collection(db, "couponData"))
     querySnapshot.forEach((doc) => {
       adminCoupon.push(doc.data())
     })

     const validCoupon = adminCoupon.filter(item => item.isUsed===false && item.outOfDate===false)
     this.$store.state.adminCouponValid = validCoupon
     this.check_outOfDate()
   },

   async check_outOfDate() {
      var db = this.$store.state.db
    
      for(var i=0 ; i<this.$store.state.adminCoupon.length ; i++) {
        const docref = doc(db, "couponData", this.$store.state.adminCoupon[i].code) 
        var duedate = this.$store.state.adminCoupon[i].duedate
        var due = new Date(duedate + ' 24:00:00')
        var diff = due.getTime()/3600000 - Date.now()/3600000
        var diffdate = Math.floor(diff/24)
  
        // console.log(due.getTime()/3600000)
        // console.log(Date.now()/3600000)
        // console.log(diff)
        // console.log(diffdate)
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

   // 쿠폰 넘겨주기
    async transferCP(transferCoupon) {
      var db = this.$store.state.db
      var validCoupon = false
      const docref = doc(db, "couponData", this.transferCoupon.code)
    
      for(var i=0 ; i<this.$store.state.adminCoupon.length ; i++) {
        if(this.$store.state.adminCoupon[i].code == transferCoupon.code 
        && this.$store.state.adminCoupon[i].isUsed==false && this.$store.state.adminCoupon[i].outOfDate==false) {
          validCoupon = true
        }
      }

      if(validCoupon == true) {
        await updateDoc(docref, { 
          user: this.receiver
        })
        // console.log(this.receiver)
      }

      else {
        alert('유효하지 않은 쿠폰입니다.')
      }

      this.receiver = ''

      this.$store.state.adminCoupon = []
      this.$store.state.adminCouponValid = []
      
      this.fetchAdminData_coupon()
    },


    

  }
}
</script>

<style>

.coupon {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px;
}
.coupon-register {
  margin: 80px;
}
.coupon-type button {
  width: 100px;
  margin-top: 15px;
  margin-left: 30px;
  margin-right: 30px;
  background: none;
  border: none;
  cursor: pointer;
}
.coupon-type .active_green {
  width: 100px;
  margin-left: 30px;
  margin-right: 30px;
  background: none;
  border: none;
  font-weight: bolder;
  font-size: 17px;
  color: rgb(126, 209, 66);
  cursor: pointer;
}
.coupon-line {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 2px;
  background: rgb(26, 226, 26);
}
#couponInput_num {
  width: 100px;
  height: 30px;
  margin-top: 5px;
  font-size: 15px;
}
#couponInput {
  width: 300px;
  height: 30px;
  margin-bottom: 20px;
  font-size: 13px;
}
.coupon-register select {
  width: 80px;
  height: 30px;
  margin-left: 20px;
  font-size: 15px;
}
.finBtn {
  margin: 20px;
  width: 200px;
  height: 40px;
  background-color: rgb(191, 243, 172);
  border: 1px solid grey;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}
.coupon-list {
  margin: 20px;
  font-size: 13px;
}
.coupon-list th {
  font-size: 17px;
  font-weight: bold;
}
.coupon-mypage {
  margin: 20px;
}
.coupon-use {
  margin: 20px;
}
.coupon-use input {
  width: 260px;
}
.cou-tds {
  color: rgb(191, 190, 190);
}
.cou-tds.valid{
  color: rgb(0, 0, 0);
}
.cou-tds.group{
  color: rgb(69, 149, 235);
}
</style>