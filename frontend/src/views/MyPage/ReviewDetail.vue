<template>

<div id="ReviewDetail-container">
  <div class="rev-title">
    <p><span id="rev-green">자세한 후기</span> 작성하기</p>
  </div>
  <p class="notice-re">자세한 후기(비공개)를 작성해주시면 <span id="no-green">적립금 500원</span>을 추가 지급해드립니다. </p>
  <div class="rev-black-light">
      <span class="rev-black-bold"><span v-if="reviewDetailData.title.length>34">[{{reviewDetailData.title.substring(0,35)}}...]</span> 
    <span v-else>[{{reviewDetailData.title}}]</span>설문 의뢰 서비스에 대해 조금 더 자세한 후기를 알려주세요. 
        <br>답변하시는 모든 내용은 비공개 처리됩니다. 작성시, 감사한 마음을 담아 적립금을 드립니다.</span>
      
  </div>
  <div class="rev-contents">
    <div class="rev-column">
    <p class="rev-black-bold">1. 서베이지의 가장 큰 장접은 무엇이라고 생각하시나요? (복수 선택 가능) *</p>
    
      <div class="rev-option">
        <input type="checkbox" class="check" name="good" id="A1" v-model="reviewDetailData.Q1" value="A1" >
        <label class="check-text">빠른 시간 내에 응답을 모아줌</label> 
      </div>
      <div class="rev-option">
        <input type="checkbox" class="check"  id="A2" v-model="reviewDetailData.Q1" value="A2" >
        <label class="check-text">내가 원하는 응답 수만큼 응답을 모아줌</label> 
      </div>
      <div class="rev-option">
        <input type="checkbox" class="check" name="good" id="A3" v-model="reviewDetailData.Q1" value="A3" >
        <label class="check-text">간편한 이용방법</label> 
      </div>
      <div class="rev-option">
        <input type="checkbox" class="check" name="good" id="A4" v-model="reviewDetailData.Q1" value="A4" >
        <label class="check-text">저렴한 가격</label> 
      </div>
      <div class="rev-option">
        <input type="checkbox" class="check" name="good" id="A5" v-model="reviewDetailData.Q1" value="A5" >
        <label class="check-text">잦은 이벤트</label> 
      </div>
      <div class="rev-option">
        <input type="checkbox" class="check" name="good" id="A6" v-model="reviewDetailData.Q1" value="A6" >
        <label class="check-text">높은 신뢰도</label> 
      </div>
      <div class="rev-option">
        <input type="checkbox" class="check" name="good" id="A7" v-model="reviewDetailData.Q1" value="A7" >
        <label class="check-text">기타: </label> <br>
        <input type="text" class="text-etc" v-model="reviewDetailData.Q1etc">
      </div>
      
  
  </div>

  <div class="rev-column">
    <p class="rev-black-bold">2. 서베이지의 설문 응답 서비스가 개선해야 할 점은 무엇인가요?</p>
    <input type="text" class="text-box" v-model="reviewDetailData.Q2">
  </div>
  <div class="rev-column">
    <p class="rev-black-bold">3. 서베이지만으로 원하는 응답 수를 채우실 수 있었나요? 추가적으로 응답을 얻어야했던 경우, <br><span class="margin-re">어떠한 경로로 얻어내셨나요? (최소 10자 이상) *</span></p>
    <input type="text" class="text-box" v-model="reviewDetailData.Q3">
  </div>
  <div class="rev-column">
    <p class="rev-black-bold">4. 서베이지 외 타 유료 설문 응답 서비스를 사용해보신 적이 있나요? <br><span class="margin-re">있다면, 해당 서비스 이름을 알려주세요.</span></p>
    <input type="text" class="text-box" v-model="reviewDetailData.Q4">
  </div>

  <div id="btn-rev">
    <button class="btn-rev" @click="addData(this.reviewDetailData)">작성완료</button>
  </div>

</div>
</div>
</template>

<script>
import { getDocs, setDoc, updateDoc, doc, collection } from 'firebase/firestore';
export default {
  mounted() {
    window.scrollTo(0,0)
  },
  data() {
    return {
      reviewDetailData: {
        title: this.$route.params.title,
        id: this.$route.params.id,
        Q1: [],
        Q1etc:'',
        Q2: '',
        Q3: '',
        Q4: ''
  }
    }
  },
  methods: {
    async addData(reviewDetailData){
      // console.log(reviewDetailData)
      var db = this.$store.state.db
      if(reviewDetailData.Q1.length==0 || reviewDetailData.Q3.length<10){
        alert('필수 항목을 올바르게 채워주세요.')
      }else{
        await setDoc(doc(db, "reviewDetailData", reviewDetailData.id.toString()),{
          surveyID: reviewDetailData.id,
          surveyTITLE: reviewDetailData.title,
          Q1: reviewDetailData.Q1,
          Q1etc: reviewDetailData.Q1etc,
          Q2: reviewDetailData.Q2,
          Q3: reviewDetailData.Q3,
          Q4: reviewDetailData.Q4
        }),
        this.$router.push(`/reviewdetaildone/${this.$route.params.id}/${this.$route.params.title}`)
        this.pointADD()
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
      //console.log('***pointUser: ')
      //console.log(PointUserData[0])
      this.getPointInfo()
    },

    getPointInfo() {
      var c = this.$store.state.PointUserData[0].point_current
      var t = this.$store.state.PointUserData[0].point_total
      this.$store.state.localPointState.point_current = c
      this.$store.state.localPointState.point_total = t


      // console.log('current point: ' + this.$store.state.PointUserData[0].point_current)
    },


     async pointADD() {
      var db = this.$store.state.db
      var currentUserEmail = this.$store.state.loginState.currentUser.email
      const docref = doc(db, "userData", currentUserEmail)
      const docref2 = doc(db, "surveyData", this.$route.params.id.toString())

      this.$store.state.PointUserData[0].point_current = this.$store.state.PointUserData[0].point_current + 500
      this.$store.state.PointUserData[0].point_total = this.$store.state.PointUserData[0].point_total + 500

      await updateDoc(docref, { 
          point_current: this.$store.state.PointUserData[0].point_current,
          point_total: this.$store.state.PointUserData[0].point_total
      }),

      await updateDoc(docref2, {
        progress : 5
      })


      this.fetchUserData_point()

      // console.log("500")

      
    },
  },
  
}
</script>

<style>
#ReviewDetail-container{
  width: 1190px;
  margin-left: auto;
  margin-right: auto;
  text-align: left;
  padding-left: 450px;
  
}
.rev-title{
  padding-top: 80px;
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.7rem;
  font-weight: 600;
}
#rev-green{
  color: #0AAC00;
  
}
.rev-black-light{
  margin-bottom: 50px;
}
.rev-contents .check{
  margin-bottom: 20px;
  margin-top: 20px;
  margin-left: 20px;
}
.text-etc{
  margin-left: 45px;
  height: 30px;
  width: 450px;
  
  }
.rev-contents .check-text{
  margin-left: 10px;
}
.rev-column{
  margin-bottom: 70px;
}

.text-box{
  width:600px;
  padding-top: 10px;
  padding-left: 6px;
  padding-bottom: 90px;
}
.margin-re{
  margin-left: 18px;
}
.btn-rev{
  margin-left: 260px;
  border: 1px solid #0AAC00;
  border-radius: 24px;
  padding: 7px 20px;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.9rem;
  background-color: white;
  color: #0AAC00;
  margin-bottom: 70px;
}
.btn-rev:hover{
  color: white;
  background-color: #0AAC00;
}
.notice-re{
  margin-bottom: 20px;
}
#no-green{
  color: #0AAC00;
}
</style>