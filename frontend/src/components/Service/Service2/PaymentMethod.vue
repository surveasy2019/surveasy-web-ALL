<template>
  <div class="PaymentMethod">
    <div class="PaymentMethod-container">
      <ul id="PaymentMethod-title">결제 방법</ul>
      <ul>
        <span id="Account-title">입금 계좌</span>
        <span id="Account-address">카카오뱅크 3333-11-5235460 (송다예)</span>
      </ul>
      
      <ul><div><input v-model="accont_userName" @change="setOption3()" id="Account-input" placeholder="입금자명"></div></ul>
      
      <button class="Payment-btn" @click="payDone()">결제하기</button>
    </div>
  </div>  
</template>

<script>
import { arrayUnion, doc, collection, setDoc, updateDoc, getDocs } from '@firebase/firestore';
export default {
  data() {
    return {
      accont_userName: '',
      uploader: '',
      uploaderIdentity: '',

      userList: [],
      new_userList: [],

      point_add: 0,

    }
  },

  methods: {
    setOption3() {
      this.uploader = this.$store.state.loginState.currentUser.name
      this.uploaderIdentity = this.$store.state.loginState.currentUser.identity
      // console.log('identity: ',this.uploaderIdentity)

      this.$store.commit('setSurveyMutation3', {account_userName: this.accont_userName, uploader: this.uploader, uploaderIdentity: this.uploaderIdentity})
      // console.log(this.$store.state.localSurveyState)
    },

    async payDone() {
      var PaymentEmptyNotice = [ ' 설문 제목', ' 설문 대상', ' 설문 기관', ' 설문 링크', ' 입금자명' ]

      var emptyTarget = []

      if(this.$store.state.localSurveyState.title=='' || this.$store.state.localSurveyState.institute=='' 
      || this.$store.state.localSurveyState.link=='' || this.accont_userName=='') {

        var emptyTarget = []

        if(this.$store.state.localSurveyState.title=='') {
          emptyTarget.push(PaymentEmptyNotice[0])
        }

        if(this.$store.state.localSurveyState.institute=='') {
          emptyTarget.push(PaymentEmptyNotice[2])
        }

        if(this.$store.state.localSurveyState.link=='') {
          emptyTarget.push(PaymentEmptyNotice[3])
        }

        if(this.accont_userName=='') {
          emptyTarget.push(PaymentEmptyNotice[4])
        }

        alert(emptyTarget + '의 입력이 필요합니다.')
      }

      

      else {
        this.couponIsUsed()
        this.pointIsUsed()
        this.pointADD()
        this.sendToAdmin(this.$store.state.localSurveyState)
        this.$store.state.localSurveyState.coupon_use = false
        this.$store.state.localSurveyState.point_use = false
        // console.log('else')
      }

      
    },


    async couponIsUsed() {
      var db = this.$store.state.db

      if(this.$store.state.localSurveyState.selectedCoupon.code != '') {
        //console.log(this.$store.state.localSurveyState.selectedCoupon.forGroup)
        if(this.$store.state.localSurveyState.selectedCoupon.forGroup == false) {
          
          const docref = doc(db, "couponData", this.$store.state.localSurveyState.selectedCoupon.code)

          await updateDoc(docref, { 
            isUsed: true,
          })
        }

        else {
          for(var i=0 ; i<this.$store.state.myCoupon.length ; i++) {
            
            if(this.$store.state.localSurveyState.selectedCoupon.code == this.$store.state.myCoupon[i].code) {
              //console.log(this.$store.state.myCoupon[i].user)
              
              this.userList = this.$store.state.myCoupon[i].user
              //console.log(this.userList)
              for(var j=0 ; j<this.userList.length ; j++) {
                if(this.userList[j].user == this.$store.state.loginState.currentUser.email) {
                  this.userList.splice(j, 1)
                  this.userList.push({user: this.$store.state.loginState.currentUser.email, used: true})

                  const docref = doc(db, "couponData", this.$store.state.localSurveyState.selectedCoupon.code)

                  await updateDoc(docref, { 
                    user: this.userList
                  })
                }
                
              }
              
            }
          }
          
          
        }
        
      }

        this.$store.state.adminCoupon = []
        this.$store.state.myCoupon = []
        this.fetchAdminData_coupon()
      
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
            myCoupon_group_O.push(Coupon_group_O_yet[i])
          }

        }
       
      }

      const myCoupon = myCoupon_group_X.concat(myCoupon_group_O)
      this.$store.state.myCoupon = myCoupon
    //  console.log(this.$store.state.myCoupon)
   },

    async pointIsUsed() {
      var db = this.$store.state.db
      const docref = doc(db, "userData", this.$store.state.loginState.currentUser.email)

      this.$store.state.loginState.currentUser.point_current = this.$store.state.loginState.currentUser.point_current - this.$store.state.localSurveyState.pointDiscount

      //this.$store.state.localPointState.point_current = this.$store.state.currentUser.point_current
     // this.$store.state.localPointState.point_total = this.$store.state.currentUser.point_total

      await updateDoc(docref, { 
          point_current: this.$store.state.loginState.currentUser.point_current,
    
        })

      this.$store.state.userData = []
      this.fetchUserData_point()
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

    async pointADD() {
      var db = this.$store.state.db
      var currentUserEmail = this.$store.state.loginState.currentUser.email
      var point_addValue = 0
      const docref = doc(db, "userData", currentUserEmail)


      if(this.$store.state.loginState.currentUser['uploadIndex'].length<=2) {
        point_addValue = Math.floor(this.$store.state.localSurveyState.price * 0.01)
      }

      else if(this.$store.state.loginState.currentUser['uploadIndex'].length>=3 && this.$store.state.loginState.currentUser['uploadIndex'].length<=9) {
        point_addValue = Math.floor(this.$store.state.localSurveyState.price * 0.02)
      }

      else if(this.$store.state.loginState.currentUser['uploadIndex'].length>=10) {
        point_addValue = Math.floor(this.$store.state.localSurveyState.price * 0.03)
      }

      this.point_add = point_addValue

      this.$store.state.loginState.currentUser.point_current = this.$store.state.loginState.currentUser.point_current + point_addValue
      this.$store.state.loginState.currentUser.point_total = this.$store.state.loginState.currentUser.point_total + point_addValue

      //this.$store.state.localPointState.point_current = this.$store.state.currentUser.point_current
      //this.$store.state.localPointState.point_total = this.$store.state.currentUser.point_total


      await updateDoc(docref, { 
          point_current: this.$store.state.loginState.currentUser.point_current,
          point_total: this.$store.state.loginState.currentUser.point_total
        })

      this.$store.state.userData = []
      this.fetchUserData_point()
    },


    async sendToAdmin(dataset) {
      var lastID = await this.fetchLastID()
      var db = this.$store.state.db
      // var localLastID = this.$store.state.lastID[0].lastID
      var currentUserEmail = await this.$store.state.loginState.currentUser.email
      var surveySelectedIdentity = await this.$store.state.localSurveyState.identity
      var nowDate = new Date()
      // var fullYear = (""+nowDate.getFullYear()).substring(2,4)
      // var month = ""+(nowDate.getMonth()+1)
      // var date = ""+nowDate.getDate()
      // var orderNum = fullYear + month + date + (""+lastID)  
      
      var orderNum = (nowDate.getFullYear()).toString().substring(2,4) + (nowDate.getMonth()+1).toString() + (nowDate.getDate()).toString() + lastID.toString()
      console.log(orderNum)
      
      
      
      var today = new Date()
      var todayPlus9 = today.setHours(today.getHours()+9)
      var todayPlus9Date = new Date(todayPlus9)
      //console.log(todayPlus9Date)
      var min = todayPlus9Date.toISOString()
      

      var dddd= min.split('T')
      var ddddd = dddd[0]
      //console.log(ddddd)
      
      var dddddd= ddddd.split('-')
      
      var t = dddd[1]
      var tt = t.substring(0, 5)
      
      var year = dddddd[0]
      var month = dddddd[1]
      var day = dddddd[2]

      month = month.length == 2 ? month : '0' + month
      day = day.length == 2 ? day : '0' + day

      var D = year + '-' + month + '-' + day 
      //console.log(D)

      
        await setDoc(doc(db, "surveyData", lastID.toString()), {
          price : dataset.price,
          beforeCouponPrice : dataset.beforeCouponPrice,
          couponDiscount : dataset.couponDiscount,
          requiredHeadCount : dataset.requiredHeadCount,
          spendTime: dataset.spendTime,
          dueTime: dataset.dueTime,
          ENTarget: dataset.ENTarget,

          title: dataset.title,
          target: dataset.target,
          institute : dataset.institute,
          link : dataset.link,
          notice : dataset.notice,
          noticeToPanel : '',
          
          account_userName : dataset.account_userName,
          uploaderIdentity: dataset.uploaderIdentity,
          uploaderEmail:currentUserEmail,
          
          adminApproved : dataset.adminApproved,
          uploader : dataset.uploader,
          uploadDate : D,
          uploadTimeTime: tt,
          id : lastID,
          dueDate: dataset.dueDate,
          dueTimeTime: dataset.dueTimeTime,
          dueTimeTimeTime: dataset.dueTimeTimeTime,
          priceIdentity: dataset.identity,
          targetingAge : dataset.targetingAge,
          targetingGender : dataset.targetingGender,


          lastIDChecked: 0,
          panelReward: 0,

          orderNum: orderNum,

          progress : 0,

          point_add: this.point_add,

          respondedPanel: []

                
        })

        


        var idDocref = doc(db, "lastID", "lastID")
        var currentUserRef = doc(db, "userData", currentUserEmail)
        await updateDoc(idDocref, {
          lastID : (lastID + 1)
        }).then(
          // console.log('LastID 올리기 완료')
          )

        await updateDoc(currentUserRef, {
          uploadIndex: arrayUnion(lastID)
        })

        // console.log(dataset)

        if(surveySelectedIdentity=='할인 대상이 아닙니다.') {
          this.$router.push('/servicepaydone')
        }

        else {
          this.$router.push('/serviceidentity')
        }
        
        this.$store.state.localSurveyState.couponDiscount = 0

        this.$store.dispatch('setCurrentUser', {
            payload: this.$store.state.loginState.currentUser.email
          })

        this.$store.state.localSurveyState.pointDiscount = 0

      },

      async fetchLastID(){
        const db = this.$store.state.db
        const lastID = []
        const querySnapshot = await getDocs(collection(db, "lastID"))
        querySnapshot.forEach((doc) => {
          lastID.push(doc.data())
        })
        // console.log(lastID)
        // console.log(lastID[1])
        // console.log(lastID[1].lastID)
        return lastID[1].lastID
      },



  },
  
  

}
</script>

<style>
.PaymentMethod {
  background: #EEEEEE 0% 0% no-repeat padding-box;
  margin-top: 20px;
  margin-left: 20px;
  border-radius: 15px;
  font-family: 'Noto Sans KR', sans-serif;
}
.PaymentMethod-container {
  width: 380px;
  padding-top: 20px;
  z-index: 1;
}
.PaymentMethod-container ul{
  text-align: left;
  font-size: 13px;
  margin: 0;
  padding-left: 45px;
}
#PaymentMethod-title {
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  margin: 27px 0 30px 0;
  font-size: 19px;
  font-weight: bold;
}
#Account-title {
  font-family: 'Noto Sans KR', sans-serif;
  color: black;
  font-size: 14px;
  font-weight: bold;
  margin-right: 33px;
}
#Account-input {
  font-family: 'Noto Sans KR', sans-serif;
  background-color: #EEEEEE;
  justify-content: center;
  width: 282px;
  height: 10px;
  border-radius: 9px;
  margin-top: 25px;
  border: 1px solid rgb(187, 187, 187);
  padding: 15px;
  font-size: 14px;
 
}
#Account-input:focus{
  outline: none;
  border: 1.5px solid #0AAB00;
}
.PaymentMethod-container input::placeholder {
  text-align: left;
  font-family: 'Noto Sans KR';
  font-size: 15px;
  letter-spacing: 0px;
  color: #BCBCBC;
  opacity: 1;
}
.PaymentMethod-text {
  font-family: 'Noto Sans KR';
  font-size: 11px;
  font-weight: normal;
  margin-top: 25px;
  line-height: 19px;
}
.Payment-btn {
  background-color: #EEEEEE;
  border: 1px solid #0CAE02;
  padding: 10px 20px;
  margin-top: 35px;
  color: #0CAE02;
  font-family: 'Noto Sans KR';
  font-size: 1.1rem;
  font-weight: medium;
  border-radius: 26px;
  cursor: pointer; 
}
.Payment-btn:hover{
  color: white;
  background-color: #0AAB00;
}
</style>