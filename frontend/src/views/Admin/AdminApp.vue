<template>
<div id="adminApp-continer">
  <br>
  <div class="admin-index">
    <router-link to="/adminapp/panelsent" class="adminApp-btn">정산</router-link>
    <router-link to="/adminapp/panelinfo" class="adminApp-btn">패널 정보</router-link>
    <router-link to="/adminapp/panelproofhome" class="adminApp-btn">패널 설문 인증</router-link>
    <router-link to="/adminapp/notice" class="adminApp-btn">공지사항</router-link>
    <router-link to="/adminapp/adminhome" class="adminApp-btn">홈 컨텐츠</router-link>
  </div>

  <div class="admin-view-container">
    <router-view></router-view>
  </div>

</div>  
</template>

<script>

export default {




}
</script>

<style>
.admin-view-container{

  margin-top: 30px;
}
.adminApp-btn{
  margin-right: 40px;
  font-size: 20px;
  font-weight: 700;

}

</style>