<template>
<div id="story">
  
  <StoryPainPoint />
  <StoryStoryTelling />
  <StoryTwo />
  <StoryLine />
  <StoryPicture />
  <StoryMembers />


  
</div>
</template>

<script>
import StoryMembers from '../components/Story/StoryMembers.vue'
import StoryPainPoint from '../components/Story/StoryPainPoint.vue'
import StoryStoryTelling from '../components/Story/StoryStoryTelling.vue'
import StoryTwo from '../components/Story/StoryTwo.vue'
import StoryLine from '../components/Story/StoryLine.vue'
import StoryPicture from '../components/Story/StoryPicture.vue'



export default {
  components :{
    StoryMembers,
    StoryPainPoint,
    StoryStoryTelling,
    StoryTwo,
    StoryLine,
    StoryPicture,
   
    
    
  },
  mounted() {
    window.scrollTo(0,0)
  },
}
</script>

<style>
#story{
  max-width: 1190px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 200px;
}
</style>