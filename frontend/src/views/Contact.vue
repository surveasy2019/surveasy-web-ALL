<template>
<div id="contact" >
    <ContactModal />
    <ContactFinalModal />
    <ContactFAQ />
    <ContactContactUs />

</div>

</template>

<script>
import ContactContactUs from '../components/Contact/ContactContactUs.vue'
import ContactFAQ from '../components/Contact/ContactFAQ.vue'
import ContactModal from '../components/Contact/ContactModal.vue'
import ContactFinalModal from '../components/Contact/ContactFinalModal.vue'


export default {
  
  components:{
    ContactContactUs,
    ContactFAQ,
    ContactModal,
    ContactFinalModal,

  },
  mounted() {
    window.scrollTo(0,0)
  },
}
</script>

<style>
#contact{
  max-width: 1190px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
}

#contact .f-modal{
  position: fixed;
  margin-top: 230px;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 700px;
  height: 300px;
  border-radius: 15px;
  
}


 

</style>