<template>
<div id="site-map-container">
  <div class="map-contents">
    <p><span id="sitemap-bold">사이트맵</span></p>
    <p><span id="sitemap-bold">서비스</span>
      <router-link class="link-underline" to="/service"><p><span id="sitemap-none">설문 응답 서비스</span></p></router-link>
      <router-link class="link-underline" to="/surveylist"><p><span id="sitemap-none">설문 리스트</span></p></router-link>
      <router-link class="link-underline" to="/surveytemplate"><p><span id="sitemap-none">설문 템플릿</span></p></router-link>
      <router-link class="link-underline" to="/knowhow"><p><span id="sitemap-none">설문 노하우</span></p></router-link>
    </p>
    <p><span id="sitemap-bold">회사</span>
      <router-link class="link-underline" to="/story"><p><span id="sitemap-none">브랜드 스토리</span></p></router-link>
    </p>
    <p><span id="sitemap-bold">문의</span>
      <router-link class="link-underline" to="/contact"><p><span id="sitemap-none">1:1 문의</span></p></router-link>
      <router-link class="link-underline" to="/contact"><p><span id="sitemap-none">B2B 문의</span></p></router-link>
      <router-link class="link-underline" to="/contact"><p><span id="sitemap-none">FAQ</span></p></router-link>
    </p>
    
    
    
    
  </div>
  

</div>
</template>

<script>
export default {

}
</script>

<style>
  #site-map-container{
    background: #E3E3E3 0% 0% no-repeat padding-box;;
    border:none;
    text-align: left;
    height: 300px;
  }
  #site-map-container .map-contents{
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-top: 35px;
    padding-left: 1000px;
  }
   #site-map-container .map-contents p{
     color: black;
   }
   #site-map-container #sitemap-bold{
     font-family: 'Noto Sans KR', sans-serif;
     font-size: 18px;
     font-weight: 500;
   }
   #site-map-container #sitemap-none{
     font-family: 'Noto Sans KR', sans-serif;
     font-size: 18px;
     font-weight: 300;
     
   }


</style>