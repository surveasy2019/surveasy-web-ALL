<template>
<div class="login">
  <img class="login-checkimg" src="@/assets/check.png" width="110">
  <div class="loginform">
    <li>
      <input type="email" placeholder="아이디 (이메일)" v-model="email">
    </li>
    <li>
      <input type="password" placeholder="비밀번호" v-model="password" @keyup.enter="signIn">
    </li>
    
    <li>
      <div class="error">{{ error }}</div>
    </li>
    <li>
      <div class="lgn-notice">{{ notice }}</div>
    </li>
    <li>
      <button type="submit" class="loginbtn" @click="signIn">로그인하기</button>
    </li>
    
    
  </div>
  <div class="sublogin">
    <router-link to="/find-pw"><span class="sublogin-element">비밀번호 찾기</span></router-link> 
    <span class="sublogin-element">|</span> 
    <router-link to="/register"><span class="sublogin-element">회원가입</span></router-link> 
     
    
  </div>
  
</div>
  
 
  
  
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { doc, setDoc, collection, getDocs, updateDoc } from '@firebase/firestore'
export default {
  data(){
    return{
      email:'',
      password:'', 
      error: '',
      notice: '',

    }
  },
  mounted() {
    window.scrollTo(0,0)
  },

  methods:{
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


    signIn(){
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          
          const user = userCredential.user
          this.$store.state.loginState.currentUser = user
          // console.log('current User: ', user)
          this.$store.state.loginState.isLoggedIn = true
          // console.log('여기부터 currentUser 메소드 실험 -----')
          // console.log(auth.currentUser.email)
          // console.log(this.$store.state.loginState.currentUser.email)
          // console.log('앞')
          this.$store.dispatch('setCurrentUser', {
            payload: auth.currentUser.email
          })
          // console.log('뒤')
          // .then(this.$store.dispatch('setUploadInfo', {
          // }))
          this.$store.state.adminCoupon = []
          this.$store.state.myCoupon = []
          this.$store.state.userData = []
          this.fetchAdminData_coupon()
          this.fetchUserData_point()

          if(this.$store.state.notLoggedInService==false) {
            // console.log('옵션 살리면서 로그인 성공')
            this.$store.commit('setnotLoggedInService')
            this.$router.push('/servicepay')
          }

          else if(this.$store.state.notLoggedInService==true) {
            if(this.$store.state.notLoggedInTemplate==false) {
              // console.log('템플릿 도중 로그인')
              this.$store.commit('setnotLoggedInTemplate')
              // console.log(this.$store.state.notLoggedInTemplate)
              this.$router.push('/surveytemplate')
            }

            else {
              // console.log('걍')
              this.$router.push('/')
            }
          }

          

        })
        .catch((error) => {
          // 이 부분 alert 말고 다른 디자인 적용해도 좋을 듯.
          const errorCode = error.code;
          const errorMsg = error.message;

          // console.log(errorCode)

          if(error.code=="auth/invalid-email") {
            this.error = "유효하지 않은 이메일 형식입니다."
          }

          if(error.code=="auth/user-not-found") {

            this.error = "가입되지 않은 이메일 주소입니다." 
            this.notice = "웹사이트 리뉴얼로 인해, 기존 회원분들도 새로운 회원가입이 필요합니다."

          }

          if(error.code=="auth/wrong-password") {
            this.error = "잘못된 비밀번호입니다."
          }

        })
        

      
      
    },
    // enterkey(e){
      
    //     document.getElementsByClassName('loginbtn').click()
      
    // }

  }
}
</script>

<style>
.login {
  padding-top: 60px;
  margin: 100px;
  height: 500px;


}
.login-checkimg {
  margin-bottom: 30px;
}
.loginform li {
  list-style-type: none;
  margin: 10px;
}
.loginform li input {
  width: 360px;
  height: 30px;
  padding: 4px;
  padding-left: 10px;
  margin: 5px;
  border: 1.5px solid rgb(44, 37, 37);
  border-radius: 4px;
  opacity: 1;
  color: #848484;
  font: normal normal 300 17px/20px Noto Sans KR;
  font-size: 0.8rem;
  
}
.loginform li input:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
  
}
.lgn-notice {
  font-size: 0.65rem;
  color: rgb(225, 5, 5);
  font-family: 'Noto Sans KR', sans-serif;
}
.error {
  color: rgb(225, 5, 5);
  font-size: 0.65rem;
  font-family: 'Noto Sans KR', sans-serif;
}
.loginbtn {
  padding: 5px 30px;
  margin: 20px;
  color:#0CAE02;
  background-color: #fff;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 1rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
.loginbtn:hover {
  background-color: #0CAE02;
  color: #fff;
}
.sublogin {
  margin: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  
}
.sublogin .sublogin-element {
  font-size: 0.8rem;
  margin: 20px;
}
a {
  text-decoration: none;
  color: rgb(74, 74, 74);
}
</style>