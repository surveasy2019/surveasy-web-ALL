<template>

<div id="number-marketing-container">
  <div class="number-contents">
    <p><span id="number-bold">134명</span>
      <br>
      <br>
      <span id="number-none">현재 대기 중인 패널</span>
    </p>
    <p><span id="number-bold" >{{survey}}</span>
      <br>
      <br>
      <span id="number-none">지금까지 설문 응답 서비스를 </span>
      <br>
      <span id="number-none">이용한 의뢰 개수</span>
    </p>
    <p><span id="number-bold">1시간 12분</span>
      <br>
      <br>
      <span id="number-none">50개 응답까지 걸린 최단 시간 </span>
      <br>
      <span id="number-none">(실사례이나, 모든 설문에 해당되지는 않음)</span>
    </p>
  </div>
  

</div>
</template>

<script>
import { collection, doc, getDoc, getDocs, getFirestore, setDoc } from "firebase/firestore"

export default {
  data() {
    return {
      survey : "• • •",
      
    }
  },
  mounted() {
    this.surveyCount()
  },
  methods: {
    async surveyCount(){
      const db = this.$store.state.db
      const docRef = doc(db, "lastID", "lastIDChecked")
      const docSnap = await getDoc(docRef)
      if(docSnap.exists()){
        
        this.survey = docSnap.data().lastIDChecked + 57 + "개"
      }
      
    }
  },

}
</script>

<style>
#number-marketing-container{
  background: #0AAC00 0% 0% no-repeat padding-box;
  
  margin-top: 60px;
  border:none;
  border-radius: 24px;
  

}
#number-marketing-container .number-contents{
  margin-left: 0px;
  margin-right:0;
  display: flex;
  justify-content: space-evenly;
  padding-top: 90px;
  color: #fff;
  padding: 60px 40px;
  
}

#number-marketing-container #number-none{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1.1rem;
  font-weight: 500;
  

}

#number-marketing-container #number-bold{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 4rem;
  font-weight: 900;
}



</style>