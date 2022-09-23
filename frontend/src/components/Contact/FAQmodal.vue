<template>
<div id="FAQ-Modal">
    <div class="FAQ-title" @click="toggle(i)" :class="{active: showDetail}">
        <p>{{FAQData[i].title}}
          <span v-if="showDetail==false"><i v-if="showDetail==false" class="right fas fa-chevron-down"></i></span>
          <span v-if="showDetail==true"><i v-if="showDetail==true" class="right fas fa-chevron-up"></i></span>
        </p>
    </div>
    <div class="FAQ-detail" v-if="showDetail==true">
        <p v-html="dataToHTML(FAQData[i].detail)"></p>
    </div>
</div>
</template>

<script>
export default {
data() {
    return{
    showDetail: false,
    }
},

props: {
    i: Number,
    FAQbutton: Number,
    FAQData: String,

},

methods :{
  
    dataToHTML(detail){
      return String(detail)
    },

    toggle(){
      if(this.showDetail == false){
        this.showDetail = true;
      }else{
        this.showDetail = false;
      }
}



}
}
</script>

<style>
#FAQ-Modal .right{
  float: right;
  padding-top: 6px;

}


#FAQ-Modal{
  outline-style: Solid;
  outline-color: #0AAC00;
  outline-width: 1px;
  border-radius: 15px;
  box-shadow:0 1px 2px rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07);
  transition: 0.3s;
}

#FAQ-Modal .FAQ-detail{
    font-weight: 300;
    font-size: 20px;
    color: Black;
    padding: 10px 20px 20px 30px;
    transition: 0.3s;
    border-top: 1px solid #0AAC00;
   }

#FAQ-Modal .FAQ-title{
      font-weight: 400;
      font-size: 20px;
      padding: 10px 20px 10px 30px;
      border-radius: 15px;
      cursor: pointer;
      justify-content: space-between;
      margin-top: 45px;
      transition: 0.3s;
    }

#FAQ-Modal .FAQ-title:hover{
      color: #0AAC00;

}

#FAQ-Modal .active{
      color: #0AAC00;

}
</style>