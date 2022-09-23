<template>
<div id="knowhowContents-container">
  <div v-if="this.id==11">
    <KnowHowTip1/>
  </div>
  <div v-if="this.id==12">
    <KnowHowTip2/>
  </div>
  <div v-if="this.id==13">
    <KnowHowTip3/>
  </div>
  <div v-if="this.id==14">
    <KnowHowTip4/>
  </div>
  <div v-if="this.id==15">
    <KnowHowTip5/>
  </div>
  <div v-if="this.id==16">
    <KnowHowTip6/>
  </div>
  <div v-if="this.id==17">
    <KnowHowTip7/>
  </div>
  <div v-if="this.id==21">
    <KnowHowOther1/>
  </div>
  <div v-if="this.id==31">
    <KnowHowCheck1/>
  </div>
  <!--
     <KnowHowItem />
  <KnowHowClosed /> -->

</div>
</template>

<script>
import KnowHowTip1 from '../components/KnowHow/KnowHowTip/KnowHowTip1.vue'
import KnowHowTip2 from '../components/KnowHow/KnowHowTip/KnowHowTip2.vue'
import KnowHowTip3 from '../components/KnowHow/KnowHowTip/KnowHowTip3.vue'
import KnowHowTip4 from '../components/KnowHow/KnowHowTip/KnowHowTip4.vue'
import KnowHowTip5 from '../components/KnowHow/KnowHowTip/KnowHowTip5.vue'
import KnowHowTip6 from '../components/KnowHow/KnowHowTip/KnowHowTip6.vue'
import KnowHowTip7 from '../components/KnowHow/KnowHowTip/KnowHowTip7.vue'
import KnowHowOther1 from '../components/KnowHow/KnowHowOther/KnowHowOther1.vue'
import KnowHowCheck1 from '../components/KnowHow/KnowHowCheck/KnowHowCheck1.vue'

export default {
  data() {
    return {
      id: this.$route.params.id
    }
  },
  components:{
    KnowHowTip1,
    KnowHowTip2,
    KnowHowTip3,
    KnowHowTip4,
    KnowHowTip5,
    KnowHowTip6,
    KnowHowTip7,
    KnowHowOther1,
    KnowHowCheck1
    
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