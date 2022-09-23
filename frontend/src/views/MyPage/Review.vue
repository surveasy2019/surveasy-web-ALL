<template>
<div id="Review-container">
  <div class="review-title">
    <p><span id="re-green">공개후기</span> 작성하기</p>
  </div>
  <div class="review-contents">
    <p class="con-title"><span v-if="reviewData.title.length>34">[{{reviewData.title.substring(0,35)}}...]</span> 
    <span v-else>[{{reviewData.title}}]</span> 설문 의뢰는 어땠나요?</p>
    <div class="star">
      <img v-if="reviewData.score<1" class="starimg" src="@/assets/myPage/restar.png" width="40" @click="plusScore(1)">
      <img v-if="reviewData.score>=1" class="starimg" src="@/assets/myPage/refullstar.png" width="40" @click="change(0)">

      <img v-if="reviewData.score<2" class="starimg" src="@/assets/myPage/restar.png" width="40" @click="plusScore(2)">
      <img v-if="reviewData.score>=2" class="starimg" src="@/assets/myPage/refullstar.png" width="40" @click="change(1)">
      <img v-if="reviewData.score<3" class="starimg" src="@/assets/myPage/restar.png" width="40" @click="plusScore(3)">
      <img v-if="reviewData.score>=3" class="starimg" src="@/assets/myPage/refullstar.png" width="40" @click="change(2)">
      <img v-if="reviewData.score<4" class="starimg" src="@/assets/myPage/restar.png" width="40" @click="plusScore(4)">
      <img v-if="reviewData.score>=4" class="starimg" src="@/assets/myPage/refullstar.png" width="40" @click="change(3)">
      <img v-if="reviewData.score<5" class="starimg" src="@/assets/myPage/restar.png" width="40" @click="plusScore(5)">
      <img v-if="reviewData.score>=5" class="starimg" src="@/assets/myPage/refullstar.png" width="40" @click="change(4)">
    </div>
    <textarea class="review-text" v-model="reviewData.reviewText" placeholder="설문 의뢰 후기를 작성해주세요. 여러분의 후기는 서베이지의 다른 고객에게 공개되어 서비스 이용에 도움이 됩니다."></textarea>
    <div class="btn-review">
      <button class="btn-r" @click="addData(this.reviewData)">작성 완료</button>
    </div>
  </div>
</div>
</template>

<script>
import { getDocs, setDoc, updateDoc, doc, collection } from 'firebase/firestore';
export default {
  data() {
    return {
      
      reviewData: {
        title: this.$route.params.title,
        id: this.$route.params.id,
        score: 0,
        reviewText: '',
      }
      
    }
  },
  methods: {
    change(num){
      this.reviewData.score = num
    },
    plusScore(num){
      this.reviewData.score = num
    },
    async addData(reviewData){
        // console.log(reviewData)
        var db = this.$store.state.db
        const docref2 = doc(db, "surveyData", this.$route.params.id.toString())


        if(reviewData.score==0){
          alert('점수는 1점 이상부터 작성 가능합니다.')
        }else if(reviewData.reviewText.length==0){
          alert('후기 작성란에 후기를 작성해주세요.')
        }
        else{
          
    
        await setDoc(doc(db, "reviewData", reviewData.id.toString()),{
          title: reviewData.title,
          id: reviewData.id,
          reviewGrade: reviewData.score,
          reviewDetail: reviewData.reviewText,
          check: false
        }),

        await updateDoc(docref2, {
          progress: 4
        })
        
        this.$router.push(`/reviewdone/${this.$route.params.id}/${this.$route.params.title}`)
        }
        
      
      
      
     
    },
  },
   mounted() {
    window.scrollTo(0,0)
  
    
  }

}
</script>

<style>
#Review-container{
  height: 600px;
  width: 1190px;
  margin-left: auto;
  margin-right: auto;
}
.review-title{
  font-size: 1.1rem;
  text-align: left;
  margin-left: 300px;
  margin-top: 50px;
}
#re-green{
  color:#0AAB00;
}
.con-title{
  margin-top: 30px;
  margin-bottom: 40px;
}
.review-text{
  width: 550px;
  padding-bottom: 100px;
  padding-top: 10px;
  padding-left: 10px;
  margin-top: 50px;
  font-family: 'Noto Sans KR', sans-serif;

}
.starimg{
  color: green;
  margin-right: 7px;
}
.btn-r{
  margin-top: 40px;
  padding: 5px 20px;
  font-size: 0.9rem;
  font-family: 'Noto Sans KR', sans-serif;
  border: 1px solid #0AAC00;
  border-radius: 24px;
  opacity: 1;
  background: white;
  color: #0AAC00;

}
.btn-r:hover{
  background-color: #0AAC00;
  color: white;
}
</style>