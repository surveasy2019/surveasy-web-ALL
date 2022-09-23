<template>
  <div id="knowhow-main-container">
  

    <p class="knowhow-subtitle">서베이지의 EASY한 서베이 꿀팁 
      <router-link :to="`/knowhowimage/${1}`"><span id="knowhow-more-btn">더보기</span></router-link></p>
      <div class="knowhow-main-contents">
        <div class="main-grid" v-for="slide in this.list1" :key="slide">
          <router-link :to="`/knowhowcontents/${slide.index}`"><img class="know-main-image" :src="slide.image"></router-link>

        </div>
      </div>

    <p class="knowhow-subtitle">다른 리서치도 EASY하게
      <router-link :to="`/knowhowimage/${2}`"><span id="knowhow-more-btn">더보기</span></router-link></p>
      <div class="knowhow-main-contents">
        <div class="main-grid" v-for="slide in this.list2" :key="slide">
          <router-link :to="`/knowhowcontents/${slide.index}`"><img class="know-main-image" :src="slide.image"></router-link>

        </div>
      </div>


    <p class="knowhow-subtitle">서베이지 매거진 : Check
      <router-link :to="`/knowhowimage/${3}`"><span id="knowhow-more-btn">더보기</span></router-link></p>
      <div class="knowhow-main-contents">
        <div class="main-grid" v-for="slide in this.list3" :key="slide">
          <router-link :to="`/knowhowcontents/${slide.index}`"><img class="know-main-image" :src="slide.image"></router-link>

        </div>
      </div>


  </div>
</template>

<script>

export default {
  
  data() {
    return {
      list1:[],
      list2:[],
      list3:[]
    }
  },
  mounted() {
    this.fetchOneList(),
    this.fetchTwoList(),
    this.fetchThreeList(),
    window.scrollTo(0,0)
  },
  methods: {
    fetchOneList(){
      for(var i=0; i<4; i++){
        if(this.$store.state.knowhowOne[i]!=null){
          this.list1.push(this.$store.state.knowhowOne[i])
        }
      }
      
    },
    fetchTwoList(){
      for(var i=0; i<4; i++){
        if(this.$store.state.knowhowTwo[i]!=null){
          this.list2.push(this.$store.state.knowhowTwo[i])
        }
      }
      
    },
    fetchThreeList(){
      for(var i=0; i<4; i++){
        if(this.$store.state.knowhowThree[i]!=null){
          this.list3.push(this.$store.state.knowhowThree[i])
        }
      }
      
    },
    changeIndex(num){
      this.$store.state.knowhowIndex = num
    }


  },
}
</script>

<style>
#knowhow-main-container{
  max-width: 1190px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  height: 1300px;
  
}

.knowhow-subtitle{
  font-family: 'Noto Sans KR', sans-serif;
  color: #0AAB00;
  font-size: 25px;
  text-align: left;

  margin-left: 80px;
}
#knowhow-more-btn{
  font-family: 'Noto Sans KR', sans-serif;
  color: #a8a7a7;
  font-size: 15px;
  font-weight: 400;
  margin-left: 10px;
  text-decoration: underline;
  
  
}
.main-grid{
  width: 200px;
  height: 200px;
}
.know-main-image{
  width: 230px;
  height: 230px;
  grid-area: 1/1/2/2;
}
.knowhow-main-contents{
  justify-content: left;
  align-items: left;
  display: grid;
  margin-left: 80px;
  place-items: center;
  padding-top: 10px;
  padding-bottom: 50px;
  grid-template-columns: repeat(4, 16em);

 

}

.know-main-image:hover{
  filter: brightness(70%);
}






</style>

