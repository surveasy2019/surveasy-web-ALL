<template>
<div id="brand-story-container">
  <div class="story-content">
    <p><span class="story-bold">"왜 대학생을 위한 설문조사 플랫폼은 없을까?"</span></p>
    <p><span class="story-none">설문 제작부터 배포, 분석까지. 대학생으로서 느낀 문제를 직접 해결하고자 시작된 서베이지의 이야기,</span>
      <br> <span id="story-none-bold">한번 들어보실래요?</span></p>
    <router-link to="/story"><button class="HomeBrandStory-btn">더 알아보기</button></router-link>
  </div>
  
</div>
</template>

<script>
export default {

}
</script>

<style>
  #brand-story-container{
    margin-top: 20px;
    padding: 55px 40px;
    background: transparent url('~@/assets/Home/brandstory.jpg') no-repeat padding-box;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 24px;
    margin-bottom: 150px;
  }
  #brand-story-container .story-bold{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 900;
    font-size: 1.5rem;
    color: #fff;
  }
  #brand-story-container .story-none{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 500;
    font-size: 1rem;
    color: #fff;
  }

  #brand-story-container #story-none-bold{
    font-family: 'Noto Sans KR', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    color: #fff;
  }

  #brand-story-container .HomeBrandStory-btn{
    margin-top: 42px;
    font-family: 'Noto Sans KR', sans-serif;
    color: #fff;
    background-color: transparent;
    border: 1px solid #fff;
    padding: 9px 20px;
    border-radius: 24px;
    font-size: 0.9rem;
}

#brand-story-container .HomeBrandStory-btn:hover{
  background-color: #fff;
  color: #0AAC00;  
}
</style>