<template>
<div id="dashboard-container">
  <div class="top">
  <div class="top-left">
    <div class="first-box">
      <p class="black-title">진행 중인 설문</p>
      <div>
        <p class="spinner-" v-if="show==0">
        <i class="fas fa-spinner"></i>
          불러오는 중
      </p>
        <p class="green-bold" v-if="show==1">{{myCount1.length}}개</p>
        </div>
    </div>
    <div class="first-box">
      <p class="black-title">완료된 설문</p>
      <p class="spinner-" v-if="show==0">
        <i class="fas fa-spinner"></i>
          불러오는 중 
      </p>
      <p class="green-bold" v-if="show==1">{{myCount2.length}}개</p>
    </div>
  </div>
  <div class="top-right">
    <div class="third-box">
      <p class="black-title">쿠폰 / 적립금</p>
      <div class="green-box">
      <img class="couponimg" src="@/assets/myPage/coupon.png" width="50" height="30">

        <p class="coupon-title">쿠폰 {{ couponNum }}개</p></div>
        <div class="green-box">
          <img class="pointimg" src="@/assets/myPage/point.png" width="40" height="40">
      <p class="coupon-title">적립금 {{ priceToString(this.$store.state.PointUserData[0].point_current) }}원</p>
        </div>
        
    </div>
  </div>
    
  </div>
 
  <div class="bottom" >
    <p class="black-title">나의 설문</p>
    <div class="bottom-title">
      
      <p class="gray-title1" v-if="show==1">결제 금액</p>
      <p class="gray-title2" v-if="show==1">주문 상세</p>
    </div>
    <div class="dash-spinner" v-if="show==0">
        <i class="fas fa-spinner"></i>
          불러오는 중
      </div>
    <div class="empty-ment">
      {{ment}}
      </div>
    <div class="bottom-list" v-for="item in (currentUserUploadInfo4)" :key="item.title">
      <p class="list-detail" v-if="show==1">
        <span id="sur-date">{{item.uploadDate}}</span>
        <span id="sur-title" v-if="item.title.length<17">{{item.title}}</span>
        <span id="sur-title" v-else>{{(item.title).substring(0,18)}}...</span>
        <span id="sur-pay">{{priceToString(item.price)}}원</span>
        <router-link to="/surveylist" id="sur-detail" v-if="item.progress==2">설문 보러가기</router-link>
        <span id="sur-detail-" v-if="item.progress==0 || item.progress==1 ">설문 검수 중</span>
        <span id="sur-detail-fin" v-if="item.progress==5 || dueFin(item.uploadDate)>=10">설문 완료</span>
        <router-link :to="`/review/${item.id}/${item.title}`" id="sur-detail" v-if="item.progress==3">후기 작성하기</router-link>
        <router-link :to="`/reviewdetail/${item.id}/${item.title}`" v-if="item.progress==4 && dueFin(item.uploadDate)<10" id="sur-detail">후기 작성하기</router-link>
        
      </p>
      
    </div>
    
  </div>
  
  <!-- <p class="more">더보기 ></p> -->
</div>
</template>

<script>
import { collection, getDocs, getDoc, doc } from '@firebase/firestore'
export default {
  data(){
    return {
      currentUserUploadInfo3:[],
      currentUserUploadInfo4:[],
      couponNum : 0,
      show:0,
      ment:'',
      myCount1: [],
      myCount2: [],
      
     
      
      
      
    }
  },
  
  mounted(){
    this.$store.state.adminCoupon = []
    this.$store.state.myCoupon = []
    this.fetchAdminData_coupon()
    this.fetchUserData_point()

    this.fetchCount()
   

  },
  computed: {
    style(text){
      return text
    }
  },

  methods:{
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

    
    async fetchAdminData_coupon() { 
      const db = this.$store.state.db

      this.$store.state.adminCoupon = []
      this.$store.state.myCoupon = []
     
     const adminCoupon = this.$store.state.adminCoupon
     
     const querySnapshot = await getDocs(collection(db, "couponData"))
     querySnapshot.forEach((doc) => {
       adminCoupon.push(doc.data())
     })

     const myCoupon_group_X = await adminCoupon.filter(item => item.forGroup===false &&(item.user===this.$store.state.loginState.currentUser.email) && item.isUsed===false && item.outOfDate===false)
     const myCoupon_group_O = []

     const Coupon_group_O_yet = await adminCoupon.filter(item => item.forGroup===true && item.isUsed===false && item.outOfDate===false)
     
     for(var i=0 ; i<Coupon_group_O_yet.length ; i++) {
        for(var j=0 ; j<Coupon_group_O_yet[i].user.length ; j++) {

          if(Coupon_group_O_yet[i].user[j].user == this.$store.state.loginState.currentUser.email && Coupon_group_O_yet[i].user[j].used == false) {
            //console.log(Coupon_group_O_yet[i])
            myCoupon_group_O.push(Coupon_group_O_yet[i])
          }

        }
       
      }

      const myCoupon = await myCoupon_group_X.concat(myCoupon_group_O)
      this.$store.state.myCoupon = await myCoupon
      this.couponNum = await this.$store.state.myCoupon.length
      // console.log(this.$store.state.myCoupon)
      
   },

   async fetchUserData(){
      const db = this.$store.state.db
      const userData = this.$store.state.userData
      const querySnapshot = await getDocs(collection(db,"userData"))
      querySnapshot.forEach((doc) => {
        userData.push(doc.data())
      })
      
    },

    async getPointInfo() {
      this.$store.state.userData = []
      await this.fetchUserData()

      var c = this.$store.state.loginState.currentUser.point_current
      var t = this.$store.state.loginState.currentUser.point_total
      this.$store.state.localPointState.point_current = c
      this.$store.state.localPointState.point_total = t

      this.$store.state.loginState.currentUser.point_current = c
      this.$store.state.loginState.currentUser.point_total = t

      // console.log('current point: ' + this.$store.state.localPointState.point_current)
   },
    
    async fetchCount(){
      const db = this.$store.state.db
      const cIndex = this.$store.state.loginState.currentUser['uploadIndex']
      
      for (var index in cIndex){
        
        var docRef = doc(db, "surveyData", cIndex[index].toString())
        
        var docSnap = await getDoc(docRef)
        

        if (docSnap.exists()) {
          
          this.currentUserUploadInfo3.unshift(docSnap.data())
          
        }
      }
      this.currentUserUploadInfo4 = this.currentUserUploadInfo3;
      if (this.currentUserUploadInfo4.length==0){
        this.ment = '아직 업로드한 설문이 없습니다.'
      }
      this.show=1
      for(var i=0; i<this.currentUserUploadInfo3.length; i++){
        if(this.currentUserUploadInfo3[i].progress<=2){
          this.myCount1.push(this.currentUserUploadInfo3[i].progress)
          
        }else if(this.currentUserUploadInfo3[i].progress>=3){
          this.myCount2.push(this.currentUserUploadInfo3[i].progress)
        }
        // console.log(this.currentUserUploadInfo3[i].progress)
      }
      
      
      
    },
    // async fetchMyPayment2(){
    //   const db = this.$store.state.db
    //   const cIndex = this.$store.state.loginState.currentUser['uploadIndex']
      
    //   for (var index in cIndex){
        
    //     var docRef = doc(db, "surveyData", cIndex[index].toString())
        
    //     var docSnap = await getDoc(docRef)
        

    //     if (docSnap.exists()) {
          
    //       this.currentUserUploadInfo3.unshift(docSnap.data())
          
    //     }
    //   }

    //   this.currentUserUploadInfo4 = this.currentUserUploadInfo3;
      
     
    // },
    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    over(text){
      this.hoverStyle.color = black
    },
    dueFin(date){
      var due = new Date().getDate()
      var start = date.substring(8)
      return due-start
    }
    
    
  }
}
</script>

<style>
#dashboard-container{
  font-family: 'Noto Sans KR', sans-serif;
  
}
.top{
  display: flex;
  justify-content: center;
}
.top-left{
  margin-right: 20px;
}
.top .first-box{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #0000000D;
  border-radius: 15px;
  opacity: 1;
  width: 310px;
  height: 150px;
  padding-top: 10px;
  padding-left: 30px;
  margin-bottom: 15px;
}
.top .third-box{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #0000000D;
  border-radius: 15px;
  opacity: 1;
  width: 310px;
  height: 324px;
  padding-top: 10px;
  padding-left: 30px;
  
}
.green-bold{
  margin-left: 110px;
  margin-top: 15px;
  font-size: 2.5rem;
  color: #0AAC00;
  font-weight: 700;
}
.black-title{
  margin-bottom: 0;
}
.top-right .black-title{
  margin-bottom: 25px;;
}
.green-box{
  margin-left: 0;
  background: #0AAC00 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #02AF2F80;
  border-radius: 15px;
  
  opacity: 1;
  width: 280px;
  padding-top: 27px;
  padding-bottom: 27px;
  margin-bottom: 15px;
  color: white;
  display: flex;
  justify-content: center;
}
.bottom{
  width: 700px;
  margin: auto;
}
.bottom-title{
  display: flex;
  color: #848484;
  font-size: 0.9rem;
  margin-top: 4px;
}
.bottom-title .black-title{
  color: black;
  font-size: 1rem;
  margin-top: 12px;
}
.list-detail{
  display: flex;
  justify-content: space-between;
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #0000000D;
  border-radius: 15px;
  opacity: 1;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 0.9rem;
}
#sur-title{
  margin-right: 10px;
  color: #0AAC00;
  width: 220px;
}
#sur-date{
  margin-right: -10px;
  margin-left: 30px;
  width: 80px;
}
#sur-pay{
  /* margin-left: 40px; */

  width: 85px;
  text-align: right;
}
#sur-detail{
  text-decoration: underline;
  margin-right: 30px;
  width: 90px;
}
#sur-detail-{
  color: #848484;
  margin-right: 30px;
  width: 90px;
}
#sur-detail-fin{
  margin-left: 15px;
  margin-right: 15px;
  width: 90px;
  color: #848484;
}
.gray-title1{
  margin-left: 465px;
}
.gray-title2{
  margin-left: 70px;
}
.more{
  color: #848484;
  margin-top: 50px;
  margin-left: 680px;  
  font-size: 0.9rem;
  
}
.couponimg{
  padding-top: 13px;
}
.coupon-title{
  margin-left: 40px;
}
.pointimg{
  padding-top: 10px;
  padding-left: 10px;
}
.dash-spinner{
  text-align: center;
  font-family: 'Noto Sans KR', sans-serif;
  color: #0AAC00;
  margin-top: 50px;
}
.spinner-{
  color: #0AAC00;
  margin-top: 35px;
  margin-left: 90px;
}
.empty-ment{
  text-align: center;
  margin-top: 30px;
  color: #848484;
}


</style>