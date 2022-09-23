<template>
<div id="panelproofhome-container">
  <img class="proof-checkimg" src="@/assets/check.png" width="60">
  <div id="proof-title">설문 인증 HOME</div>
  <input type="text" placeholder="Survey ID" v-model="surveyID">
  
  <router-link :to="`/panelproof/${surveyID}`"><button>go</button></router-link>
</div>
</template>

<script>
export default {
  data() {
    return {
      surveyID : ''
    }
  },
  methods: {
  
  }

}
</script>

<style>
#panelproofhome-container {
  padding-top: 80px;
}
#proof-title {
  font-size: 25px;
  font-weight: bold;
  color: #0CAE02;
  margin-top: 5px;
  margin-bottom: 30px;
}
</style>