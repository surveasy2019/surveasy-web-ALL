<template>
<h1 class="admin-title">홈 컨텐츠</h1>
<div class="home_contents">

  <div>
    <h3>당신의 의견은?</h3>
    <div class="opinion-container">
      <input type="text" v-model="opinionQuestion" placeholder="새내기때 꼭 해봐야 하는 것은?" class="opinion-question"><br>
      <textarea v-model="opinionContent1" placeholder="도무지 뭘하면 좋을지 모르겠는 새내기들을 위해 1학년때 해보면 좋을 것들을 추천해주세요!" class="opinion-content"></textarea><br>
      <textarea v-model="opinionContent2" placeholder="작성해주신 답변은 새내기를 위한 컨텐츠로 제작되어 발행됩니다." class="opinion-content"></textarea>
    </div>
    <button @click="uploadOpinion">업로드 하기</button>
    <!-- <button @click="fetchLastOpinionID">last id</button> -->
  </div>

  <div>
    <h3>우리가 함께 기여한 연구</h3>
    <div class="contribution-container">
      <input type="text" v-model="contributionTitle" placeholder="연구 제목" class="contribution-title"><br>
      <input type="text" v-model="contributionJournal" placeholder="연구 등재 학술지" class="contribution-title"><br>
      <input type="text" v-model="contributionInstitute" placeholder="연구 기관" class="contribution-title"><br>
      <input type="text" v-model="contributionSource" placeholder="출처 링크" class="contribution-title"><br>
      <input type="text" v-model="contributionImg" placeholder="이미지 Storage 링크" class="contribution-title"><br>
      <input type="text" v-model="contributionDate" placeholder="설문 진행 날짜 (2022.01)" class="contribution-title"><br>
      <textarea v-model="contributionContent" placeholder="내용" class="contribution-content"></textarea>
    </div>
    <button @click="uploadContribution">업로드 하기</button>
    <!-- <button @click="fetchLastContributionID">last id</button> -->
  </div>

</div>






</template>

<script>
import { getFirestore,collection, getDocs, updateDoc, doc, deleteDoc, setDoc, getDoc } from 'firebase/firestore'
export default {
  data() {
    return {
      lastID : [],
      lastOpinionID: 0,
      previousID: 0,
      opinionQuestion: '',
      opinionContent1: '',
      opinionContent2: '',

      lastID2: [],
      lastContributionID: 0,
      contributionTitle: '',
      contributionJournal: '',
      contributionInstitute: '',
      contributionSource: '',
      contributionImg: '',
      contributionDate: '',
      contributionContent: '',
    }
  },

  methods: {

    async fetchLastOpinionID() {
      const db = this.$store.state.db
      const lastID = []
      const docRef = doc(db, "lastID", "lastOpinionID")
      const docSnap = await getDoc(docRef) 

      if(docSnap.exists()) {
        lastID.push(docSnap.data())
        this.lastOpinionID = lastID[0].lastOpinionID
        this.previousID = this.lastOpinionID - 1
        

        console.log("opinion id: " + this.lastOpinionID)
        console.log("opinion previous id: " + this.previousID)
      }
      
    },

    async uploadOpinion(){
      await this.fetchLastOpinionID()

      const db = this.$store.state.db

      var docRef = doc(db, "AppOpinion", this.lastOpinionID.toString())
      var previousRef = doc(db, "AppOpinion", this.previousID.toString())
      var lastDocRef = doc(db, "lastID", "lastOpinionID")

      await updateDoc(previousRef, {
        isValid: false
      })

      await setDoc(docRef, {
        id: this.lastOpinionID,
        question: this.opinionQuestion,
        content1: this.opinionContent1,
        content2: this.opinionContent2,
        isValid: true,
        opinions: []
      })

      await updateDoc(lastDocRef, {
        lastOpinionID : this.lastOpinionID + 1
      })

      window.alert("업로드 완료")
    },


    async fetchLastContributionID() {
      const db = this.$store.state.db
      const lastID = []
      const docRef = doc(db, "lastID", "lastContributionID")
      const docSnap = await getDoc(docRef) 

      if(docSnap.exists()) {
        lastID.push(docSnap.data())
        this.lastContributionID = lastID[0].lastContributionID

        console.log("contribution id: " + this.lastContributionID)
      }
      
    },

    async uploadContribution(){
      await this.fetchLastContributionID()

      const db = this.$store.state.db

      var docRef = doc(db, "AppContribution", this.lastContributionID + ") " + this.contributionTitle)
      var lastDocRef = doc(db, "lastID", "lastContributionID")

      await setDoc(docRef, {
        id: this.lastContributionID,
        title: this.contributionTitle,
        institute: this.contributionInstitute,
        journal: this.contributionJournal,
        img: this.contributionImg,
        source: this.contributionSource,
        date: this.contributionDate,
        content: this.contributionContent
      })

      await updateDoc(lastDocRef, {
        lastContributionID : this.lastContributionID + 1
      })

      window.alert("업로드 완료")
    },

  },

}
</script>

<style>
.home_contents {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 50px;
  padding-top: 15px;
}
.opinion-container, .contribution-container {
  margin: 20px;
}
.opinion-question, .contribution-title {
  width: 400px;
  height: 30px;
}
.opinion-content{
  width: 400px;
  height: 100px;
}
.contribution-content {
  width: 400px;
  height: 280px;
}


</style>