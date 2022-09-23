<template>
  <div id="knowhow-main-container">
  
    <p class="knowhow-subtitle">서베이지의 EASY한 꿀팁</p>
    <vueper-slides class="slide-container"
    :perView="3"
    bound="false"
    :slide-ratio="1/4"
    :visible-slides="4"
    :arrows="true" 
    :infinite="true"
    :bullets="false"
    :arrows-outside="true"
    :slideMultiple="true"

>
      <vueper-slide v-for="(slide, i) in this.$store.state.slides" 
      class="slide-content"
      @click="cl(i)"
      :key="i" 
      
      :image="slide.image" />
    </vueper-slides>

    <p class="knowhow-subtitle">다른 리서치도 EASY하게</p>
    <vueper-slides
      class="slide-container"
      :arrows="true"
      :perView=3
      :visible-slides="4"
      :bound="true"
      :dragging-distance="40"
      :slideMultiple="true"
      :arrows-outside="false"
      :infinite="true"
    >
      <vueper-slide v-for="i in 11" :key="i" :title="i.toString()"></vueper-slide>
    </vueper-slides>


    <p class="knowhow-subtitle">서베이지의 매거진 : CHECK</p>
    <vueper-slides class="slide-container"
    :visible-slides="4" 
    :slide-ratio="1/4"
    :dragging-distance="200"
    :arrows="true" 
    :infinite="false"
    :bullets="true"
    :arrows-outside="true"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
    :slideMultiple="true">
      <vueper-slide v-for="(slide, i) in slides" 
      class="slide-content"
      @click="cl(i)"
      :key="i" 
      
      :image="slide.image" />
    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      slides: [
      {
        title: '#1',
        
        image: require('@/assets/knowhow/02.png'),
        link: "https://codesandbox.io/s/62i2s?file=/src/App.vue"
      },
      {
        title: '#1',
        
        image: require('@/assets/knowhow/02.png'),
        link: "https://codesandbox.io/s/62i2s?file=/src/App.vue"
      },
      {
        title: '#1',
        
        image: require('@/assets/knowhow/02.png'),
        link: "https://antoniandre.github.io/vueper-slides/"
      },
      {
        title: '#1',
        
        image: require('@/assets/knowhow/02.png'),
        link: "https://antoniandre.github.io/vueper-slides/"
      },
      {
        title: '#1',
        
        image: require('@/assets/knowhow/02.png'),
        link: "https://antoniandre.github.io/vueper-slides/"
      },
  
    ]
    }
  },
  methods: {
    cl(i){
      this.$router.push('/mypage/dashboard')
    },
    
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
.slide-container{
  width: 900px;
  height: 200px;
  margin-bottom: 100px;
  margin-left: auto;
  margin-right: auto;

  
}
.slide-content{
  margin-right: 10px;
  align-items: center;
  cursor: pointer;
}
.knowhow-subtitle{
  font-family: 'Noto Sans KR', sans-serif;
  color: #0AAB00;
  font-size: 25px;
  text-align: left;
  margin-left: 50px;
}

/* 
.vueperslide:nth-of-type() {
  width: 100% !important;
}
.vueperslide:last-of-type {
  width: 200% !important;
}
/* .vueperslide__image:nth-of-type(1) {
  width: 50% !important;
} */ 



</style>