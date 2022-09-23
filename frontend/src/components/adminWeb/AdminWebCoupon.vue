<template>
  <div>
    <h1 class="admin-title">쿠폰 관리</h1>
    <div class="coupon">
      <div class="coupon-register">
        <h2 style="color:#000000;">쿠폰 발급</h2>
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
        <h1 style="color:#000000;">쿠폰 리스트</h1>
        <!-- <button @click="this.delete()">삭제</button> -->
        <!-- <button @click="fetchAdminData_coupon()">쿠폰 리스트 보기</button> -->
        <table class="admin-table">
          <tr>
            <th>공유</th>
            <th>CODE</th>
            <th>쿠폰명</th>
            <th>할인율</th>
            <th>등록 사용자</th>
            <th>유효 기간</th>
            <th>남은 기한(일)</th>
            <th>기한 만료</th>
            <th>사용 여부</th>
          </tr>

          <tr v-for="item in (this.$store.state.adminCoupon_individual)" :key="item.dueDate" class="cou-tds" :class="{valid: (item.outOfDate==false && item.isUsed==false)}">
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

          <tr v-for="item in (this.$store.state.adminCoupon_group)" :key="item.dueDate" class="cou-tds" :class="{valid: (item.outOfDate==false && item.isUsed==false), group: (item.forGroup==true) }">
            <td>{{ item.forGroup }}</td>
            <td>{{ item.code }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.rate }}</td>
            <td>
              <table id="groupCoupon-user-table">
                <tr v-for="item in item.user" :key="item.user">
                  <td>{{item.user}}</td>
                  <td>{{item.used}}</td>
                </tr>
              </table>
            </td>
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

</template>

<script>
import { doc, query, where, setDoc, collection, getDocs, updateDoc,getDoc, deleteDoc } from '@firebase/firestore'
export default {
  mounted() {
    this.check_outOfDate();
  },

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
    async delete() {
      const db = this.$store.state.db
      const couponList = this.$store.state.adminCoupon

      for(var i=30 ; i<50 ; i++) {
        const code = "CTK0" + i.toString()
        await deleteDoc(doc(db, "couponData", code))
      } 
    },


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



  // 개인 쿠폰 발급
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

    this.fetchAdminData_coupon()
    alert("개인 쿠폰 발급 완료")
  },


  // 공유 쿠폰 발급
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

    this.fetchAdminData_coupon()
    alert("공유 쿠폰 발급 완료")
  },




  // mounted : 쿠폰 outOfDate 여부 update
  async check_outOfDate() {
    const adminCoupon = []
    const db = this.$store.state.db

    const docRef = collection(db, "couponData")
    const q1 = query(docRef, where("isUsed", "==", false), where("outOfDate", "==", false))
    const querySnapshot1 = await getDocs(q1)
    querySnapshot1.forEach((doc) => {
      adminCoupon.push(doc.data())
      console.log(doc.data())
    })

    
    for(var i=0 ; i<adminCoupon.length ; i++) {
      const docref = doc(db, "couponData", adminCoupon[i].code) 
      var duedate = adminCoupon[i].duedate
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

    this.fetchAdminData_coupon()
  },



  // Fetch Coupons
  async fetchAdminData_coupon() {
    this.$store.state.adminCoupon = []
    this.$store.state.adminCoupon_individual = []
    this.$store.state.adminCoupon_group = []
    const adminCoupon = []

    const db = this.$store.state.db
    const docRef = collection(db, "couponData")

    // 전체 쿠폰 fetch
    const q = query(docRef, where("isUsed", "==", false, "&&", "outOfDate", "==", false))
    const querySnapshot = await getDocs(q)
    querySnapshot.forEach((doc) => {
      adminCoupon.push(doc.data())
    })
    
    this.$store.state.adminCoupon = adminCoupon
    this.$store.state.adminCoupon_individual = adminCoupon.filter(item => item.forGroup===false)
    this.$store.state.adminCoupon_group = adminCoupon.filter(item => item.forGroup===true)

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
  margin: 5px;
  padding: 30px;
}
.coupon-register {
  background: #ececec9a;
  border-radius: 10px;
  margin: 20px;
  padding: 20px;
  width: 400px;
  height: 500px;
}
.coupon-type button {
  width: 100px;
  margin-top: 15px;
  margin-left: 35px;
  margin-right: 35px;
  background: none;
  border: none;
  cursor: pointer;
  color: #000000;
  font-size: 15px;
}
.coupon-type .active_green {
  margin-left: 20px;
  margin-right: 20px;
  background: #ffffff;
  border: 1px solid rgb(104, 190, 42);
  border-radius: 10px;
  font-weight: bolder;
  font-size: 17px;
  color: rgb(104, 190, 42);
  cursor: pointer;
}
.coupon-line {
  display: block;
  margin-left: auto;
  margin-right: auto;
  border-style: inset;
  border-width: 1px;
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
  color: rgb(52, 134, 222);
}
.admin-table {
  width: 100%;
  border: 1px solid #5e5e5e;
  border-collapse: collapse;
}
.admin-table th{
  border: 0.5px solid #797979;
}
.admin-table td{
  border: 0.5px solid #797979;
}
</style>