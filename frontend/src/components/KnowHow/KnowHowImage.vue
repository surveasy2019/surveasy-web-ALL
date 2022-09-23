<template>
  <div id="knowhow-image-container">

    <p class="knowhow-image-title">{{title(this.id)}}</p>
    <div v-if="this.id==1" class="knowhow-image-contents">
      <div class="grid" v-for="slide in this.$store.state.knowhowOne" :key="slide">
        <router-link :to="`/knowhowcontents/${slide.index}`"><img class="know-image" :src="slide.image"></router-link>

    </div>
    </div>
    <div v-if="this.id==2" class="knowhow-image-contents">
      <div class="grid" v-for="slide in this.$store.state.knowhowTwo" :key="slide">
        <router-link :to="`/knowhowcontents/${slide.index}`"><img class="know-image" :src="slide.image"></router-link>

    </div>
    </div>
    <div v-if="this.id==3" class="knowhow-image-contents">
      <div class="grid" v-for="slide in this.$store.state.knowhowThree" :key="slide">
        <router-link :to="`/knowhowcontents/${slide.index}`"><img class="know-image" :src="slide.image"></router-link>

    </div>
    </div>
    

  </div>
</template>

<script>
export default {

  data() {
    return {
      id: this.$route.params.id
    }
  },
  mounted() {
    window.scrollTo(0,0)
  },
  methods: {
    title(id){
      if(id==1){
        return "서베이지의 EASY한 서베이 꿀팁"
      }else if(id==2){
        return "다른 리서치도 EASY하게"
      }else{
        return "서베이지 매거진 : Check"
      }
    }
  },

}
</script>

<style>

#knowhow-image-container{
  max-width: 1190px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
  height: 1300px;
  place-items: center;
}
.knowhow-image-title{
  font-family: 'Noto Sans KR', sans-serif;
  color: #0AAB00;
  font-size: 25px;
  text-align: center;
  margin-bottom: 50px;
}
.grid{
  width: 250px;
  height: 250px;
}
.know-image{
  width: 250px;
  height: 250px;
  grid-area: 1/1/2/2;
}
.knowhow-image-contents{
  justify-content: center;
  align-items: center;
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 17em);
  grid-template-rows: repeat(2,18em);

}
.know-image:hover{
  filter: brightness(70%);
}


</style>