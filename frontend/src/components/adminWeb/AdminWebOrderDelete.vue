<template>
  <div v-if="deleteModal==true" class="delete-modal">
    <div class="delete-contentsbox">
      <div id="delete-top">
        <div @click="$emit('closeD')" class="delete-close"><i class="fas fa-times"></i></div>
        <p class="delete-title">설문을 삭제하시겠습니까?</p>
      </div>
      
      <div id="delete-container">
        <div id="delete-id"><div>ID :  {{id_delete}}</div></div>
        <div>Progress : {{progress_delete}}</div>
        
      </div>
      <button id="delete-fin-btn" @click="deleteSurvey(id_delete)">삭제하기</button>
      
    </div>
      
  </div>
</template>

<script>
import AdminWebOrderVue from './AdminWebOrder.vue'
import { doc, deleteDoc } from 'firebase/firestore'

export default {
  name: AdminWebOrderVue,
  props: {
    deleteModal : {
      typeof: Boolean,
      require: true,
      default: false
    },

    id_delete: { typeof: Number },
    progress_delete: { typeof: Number }
  },

  data() {
    return {
    }
  },

  methods: {
    async deleteSurvey(id_delete) {
      const db = this.$store.state.db

      await deleteDoc(doc(db, "surveyData", id_delete.toString()))
      window.alert("삭제 완료")
      
      this.$router.go('/adminmain')
    }
    
  }
}
</script>

<style>
.delete-modal {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 3140px;
  background-color: rgba(141, 141, 141, 0.026);
  display: table;
  transition: opacity .3s ease;
}
.delete-contentsbox {
  display: flex;
  flex-direction: column;
  padding: 20px;
  font-family: 'Noto Sans KR', sans-serif;
  width: 420px;
  height: 260px;
  margin: 300px auto;
  padding-top: 15px;
  padding-bottom: 30px;
  background-color: rgb(255, 255, 255);
  border-radius: 20px;
  box-shadow: 0 2px 3px rgba(56, 56, 56, 0.042);
  transition: all .3s ease;
  z-index: 2;
}
#delete-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
}
.delete-title {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 25px;
  font-weight: lighter;
  color: #585858;
  margin-top: 30px;
  margin-bottom: 7px;
}
#delete-id {
  font-family: 'Noto Sans KR', sans-serif;
  color:#0CAE02;
  font-size: 18px;
  margin-top: 0px;
}
.delete-close {
  display: flex;
  flex-direction: row;
  justify-content: right;
  cursor: pointer
}

#delete-fin-btn {
  padding: 5px 70px;
  margin: 30px 100px 0px 100px;
  color:#0CAE02;
  background-color: #FFFFFF;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
}
#delete-fin-btn:hover{
  color: white;
  background: #0AAB00;
}
</style>