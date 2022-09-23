<template>
  <div class="service-container">
      <ServiceDetail />
      <ServiceOption />
  </div>
  
</template>

<script>
import ServiceDetail from '../../components/Service/Service1/ServiceDetail.vue'
import ServiceOption from '../../components/Service/Service1/ServiceOption.vue'
export default {
  components:{
    ServiceDetail,
    ServiceOption
  },
  mounted() {
    window.scrollTo(0,0)
  },

}
</script>

<style>
.service-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}
</style>