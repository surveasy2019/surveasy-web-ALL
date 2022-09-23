<template>
<div id="footer-container">
  <div class="footer-contents">
    <p>서베이지 Surveasy</p>
    <p>상호 : 서베이지</p>
    <p>사업자등록번호 : 000-00-00000</p>
    <p>이메일 : surveasy2019@yonsei.ac.kr</p>
    
  </div>
  <div class="footer-icons" style="font-size: 1.5rem;">
    <span class="footer-icon"><i class="fab fa-facebook-square"></i></span>
    <span class="footer-icon"><i class="fab fa-instagram"></i></span>
    <span class="footer-icon"><i class="fab fa-google"></i></span>
    <span class="footer-icon"><i class="fas fa-comment"></i></span>
  </div>
</div>  
</template>

<script>
export default {

}
</script>

<style>
  #footer-container{
    display: flex;
    justify-content: space-between;
    align-items:center;
  }
  #footer-container .footer-contents{
    display:flex;
    flex-direction: column;
    text-align: left;
    
    padding: 20px 50px;

  }
  #footer-container .footer-contents p{
    margin: 5px;
    font-size: 14px;
    font-weight: bold;
  }
  #footer-container .footer-icons{
    display: flex;
    padding-right: 50px;
  }
  #footer-container .footer-icon{
    padding: 15px;
    color: #0CAE02;
  }
</style>