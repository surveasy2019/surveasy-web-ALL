<template>
<div class="AdminMain-container" v-if="this.$store.state.loginState.currentUser.email=='surveasy2019@yonsei.ac.kr'">

  <div class="AdminMain-menu">
    <div class="AdminMain-menu-web">
      <router-link to="/adminmain/adminweborder"><div id="menu-detail-item">주문 목록</div></router-link> 
      <router-link to="/adminmain/adminwebetc"><div id="menu-detail-item">템플릿 / B2B</div></router-link>
      <router-link to="/adminmain/adminwebcoupon"><div id="menu-detail-item">쿠폰 관리</div></router-link>
    </div>

    <div class="AdminMain-menu-app">
      <div id="AdminMain-menu-app-detail">
        <router-link to="/adminmain/adminapppanelsent"><div id="menu-detail-item">정산하기</div></router-link>
        <router-link to="/adminmain/adminapppanelinfo"><div id="menu-detail-item">패널 관리</div></router-link>
        <router-link to="/adminmain/adminappnotice"><div id="menu-detail-item">공지사항 / PUSH</div></router-link>
        <router-link to="/adminmain/adminapphome"><div id="menu-detail-item">홈 컨텐츠</div></router-link>
      </div>
    </div>
  </div>

  <div style="weight: 100%; height: 1.5px; background: #8aa083;"></div>
  

  <div class="AdminMain-Component">
    <router-view></router-view>
  </div>

</div>

  
    
</template>

<script>

export default {
  data() {

  },

  methods: {
    mounted() {
      
    },

    async fetchSurvey() {
      
    }
  }
}
</script>

<style>
.AdminMain-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 15px;
}
.AdminMain-menu {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-right: 300px;
  padding-left: 300px;
}
.AdminMain-menu-web, .AdminMain-menu-app {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 10px;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
}
.AdminMain-menu-web {
    width: 80%;
    background: #8aa083;
    margin-right: 12px;
}
.AdminMain-menu-app {
    width: 100%;
    background: #a7c19f;
}
#AdminMain-menu-app-detail {
    display: flex;
    flex-direction: row;
    justify-content: center;
    
}
#menu-detail-item {
  margin-left: 15px;
  margin-right: 15px;
  font-size:17px; 
  font-weight:bold; 
  color: #ffffff;
}

.AdminMain-Component {
  padding-top: 25px;
}

.admin-table {
  width: 100%;
  border: 0.5px solid #5e5e5e;
  border-collapse: collapse;
  font-size: 15px;
}
.admin-table th{
  border: 0.5px solid #c3c3c3;
  background: #dfe4dd95;
}
.admin-table td{
  border: 0.5px solid #797979;
}
</style>