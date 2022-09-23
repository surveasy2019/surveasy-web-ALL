<template>
<div id="knohow-container">
  
  <KnowHowMain/>
  
  <!-- <KnowHowItem />
  <KnowHowClosed /> -->

</div>
</template>

<script>
import KnowHowMain from '../components/KnowHow/KnowHowMain.vue'
import KnowHowItem from '../components/KnowHow/KnowHowItem.vue'
import KnowHowClosed from '../components/KnowHow/KnowHowClosed.vue'


export default {
  components:{
    KnowHowMain,
    KnowHowItem,
    KnowHowClosed
    
  },
  mounted() {
    window.scrollTo(0,0)
  },
}
</script>

<style>
  #knowhow-container{
  min-width: 1190px;
  margin-left: auto;
  margin-right: auto;
  }
  
</style>