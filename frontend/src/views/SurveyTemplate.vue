<template>
  <div class="template-container">
      <TemplateDetail />
      <TemplateOption />
  </div>
  
</template>

<script>
import TemplateDetail from '../components/Template/TemplateDetail.vue'
import TemplateOption from '../components/Template/TemplateOption.vue'
export default {
  components:{
    TemplateDetail,
    TemplateOption
  },
  mounted() {
    window.scrollTo(0,0)
  },

}
</script>

<style>
.template-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  
}
</style>