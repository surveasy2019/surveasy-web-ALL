<template>
<div id="app" :class="{backactive: this.$store.state.showModal}">
  <div class="cookies-modal" v-if="show==true">
    <p class="cookies-title">Surveasy 홈페이지는 모바일 환경 및 Safari 브라우저를 지원하지 않습니다. <span id="small-f">* Chrome, Edge, Whale 권장.</span></p>
    <p class="cookies-none" @click="setCookie">7일동안 숨기기</p>
  </div>
  <div id="nav">
    <div class="one">
    <router-link to="/" @click="indexC(0)"><img class="logoimg" src="@/assets/logo.png" width="190"></router-link> 
  </div>
    <div class="nav-links">

      <div class="my-dropdown" >
        <span class="nav-element" id="nav-service" :class="{active: this.$store.state.indexColor==1}">서비스 이용
          <span class="nav-icon" >
            <i class="fas fa-chevron-down"></i>
          </span>
        </span>        
        <div class="my-dropdown-content" id="service-dropdown">
          <router-link to="/service"  @click="indexC(1)">설문 응답 서비스</router-link>
          <router-link to="/surveytemplate">설문 템플릿</router-link>
        </div>
       </div>
      <span class="nav-element-">|</span>
      <router-link to="/surveylist"><span class="nav-element" @click="indexC(2)">설문 리스트</span></router-link> 
      <span class="nav-element-">|</span>
      <router-link to="/knowhow"><span class="nav-element" @click="indexC(2)">리서치 노하우</span></router-link> 
      <span class="nav-element-">|</span>
      <router-link to="/story"><span class="nav-element" @click="indexC(2)">브랜드 스토리</span></router-link> 
      <span class="nav-element-">|</span>
      <router-link to="/contact"><span class="nav-element" @click="handleFAQ, indexC(2)">문의</span></router-link> 
    </div>
    <!-- <div class="nav-login" > -->
     <div class="right-login">
      <span v-if="this.$store.state.loginState.isLoggedIn == false" >
        <router-link to="/login" ><span class="nav-element" id="nav-login" @click="indexC(3)">LOGIN</span></router-link> 
      </span>
      <span v-else>
        <div class="my-dropdown" id="right-drop">
          <p class="my-dropdown-btn" >안녕하세요 {{this.$store.state.loginState.currentUser.name}}님</p>
          <div class="my-dropdown-content" id="dropdown-margin">
            <p @click="goMypage">마이페이지</p>
            <p @click="logout" id="logout-dropdown">로그아웃</p>
            
          </div>
        </div>
      <!-- </div> -->
      
    </span>
   </div>
    
  
    
    
  </div>
  <router-view/>
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
      <router-link class="link-underline" to="/b2bcontact"><p><span id="sitemap-none">B2B 문의</span></p></router-link>
      <router-link class="link-underline" to="/contact"><p><span id="sitemap-none">FAQ</span></p></router-link>
    </p>
    
    
    </div>
    
  </div>

  <div id="footer-container">
    <div class="footer-contents">
      <p>서베이지 Surveasy</p>
      <p>상호 : 서베이지</p>
      <p>이메일 : surveasy2019@yonsei.ac.kr</p>
      <p><router-link :to="{name: 'Term1'}" target="_blank">이용약관</router-link> | 
    <router-link :to="{name: 'Term2'}" target="_blank">개인정보처리방침</router-link></p>
  </div>
  <div class="footer-icons" >
    <span class="footer-icon"><img class="footerimg" src="@/assets/Footer/IHEI.jpg" width="130"></span>
    <span class="footer-icon"><a href="https://www.instagram.com/surveasy/" target="_blank"><img class="footerimg" src="@/assets/Footer/insta.jpg" width="31.3"></a></span>
    <span class="footer-icon"><a href="https://www.facebook.com/Surveasy/posts/260019768814699/" target="_blank"><img class="footerimg" src="@/assets/Footer/facebook.jpg" width="32.05"></a></span>
    <span class="footer-icon"><a href="https://blog.naver.com/surveasy" target="_blank"><img class="footerimg" src="@/assets/Footer/blog.jpg" width="32.05"></a></span>
    <span class="footer-icon"><a href="http://pf.kakao.com/_xfialK/chat" target="_blank"><img class="footerimg" src="@/assets/Footer/kakao.jpg" width="33.86"></a></span>
    <span class="footer-icon"><a href="https://www.youtube.com/c/Surveasy/featured" target="_blank"><img class="footerimg" src="@/assets/Footer/youtube.jpg" width="34.09"></a></span>
    
  </div>
  </div>
</div>
</template>
<script>
import { initializeApp } from 'firebase/app'
import { getFirestore,collection, getDocs } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
// import browserDetect from 'vue-browser-detect-plugin'
// import { event } from 'vue-gtag'
// import { orderBy,sortBy } from 'lodash'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import _ from 'lodash'
import VueCookies from 'vue-cookies'

export default {
  data() {
    return {
      show: true
    }
  },
  mounted(){
    const firebaseApp = initializeApp(this.$store.state.firebaseConfig)
    const db = getFirestore();
    const analytics = getAnalytics()
    this.$store.commit('setDB', db)
    this.fetchUserData()
    this.fetchSurveyData()
    this.getCookie()
    window.scrollTo(0,0)
    // this.bd()
    // alert(this.$browserDetect.meta.name)
    // this.fetchLastID()
    // const mount = () => {
    //   event('login', { method: 'Google' })
    // }
    // mount()
    
  },
  methods:{
    setCookie(){
      VueCookies.set("none","n","7d")
      console.log(VueCookies.get("none"))
      this.show=false
      
    },
    getCookie(){
      if(VueCookies.isKey("none")){
        this.show=false
      }else{
        this.show=true
      }
      console.log(VueCookies.get("none"))
     //VueCookies.remove("none")
    },
    async fetchUserData(){
      const db = this.$store.state.db
      const userData = this.$store.state.userData
      const querySnapshot = await getDocs(collection(db,"userData"))
      
      querySnapshot.forEach((doc) => {
        userData.push(doc.data())
      })
      
    },

    async fetchSurveyData(){
      const db = this.$store.state.db
      const surveyData = this.$store.state.surveyData
      const querySnapshot = await getDocs(collection(db, "surveyData"))
      querySnapshot.forEach((doc)=> {
        var dataSet = []
        if (doc.data().progress >= 3 || doc.data().progress == 2) {
          dataSet.push(doc.data())
          surveyData.push(dataSet)
        }
        // dataSet.push(doc.data(), upTime, dueTime, {'docID':docID})
        
      })
      
      const sorted = this.$store.state.surveyData.sort(function(a,b){return b[0].id - a[0].id })
      // const sorted = sortBy(this.$store.state.surveyData, [function(o) {return o.docID}])
      // var test = sorted.sort(function(a,b){return b[0].id - a[0].id })
      // console.log(test)
      this.$store.state.surveyData = sorted
      // console.log((this.$store.state.surveyData).length)
      
      
    },
    

    

    logout(){
      this.$router.push('/')
      this.$store.dispatch('logout')
    },
    handleFAQ(){
      this.$store.state.FAQbutton=0
    },
    goMypage(){
     
      this.$router.push('/mypage/dashboard')
      this.$store.state.indexColor=4
    },
    indexC(num){
      this.$store.state.indexColor = num
    }
    }
}
</script>



<style>
#app{

  min-width: 1190px;
  margin-left: auto;
  margin-right: auto;

  margin-left : auto;
  margin-right: auto;
  min-width: 1190px;

}
body {

  margin: 0;
}
#app .router-link-active{
  color: #0CAE02 !important;
}
#nav {
  z-index: 500;
  display: flex;
  justify-content: space-around;
}
#nav .nav-links {
  flex:1;
  margin-top: 57px;
  height: 27px;
  width: 918px;
  font-size: 1rem;
  padding-bottom: 30px;
  white-space:nowrap;
  /* margin-left: 15px; */

}

.nav-links a {
  padding-left: 30px;
  padding-right: 30px;
  
}

#home {
  max-width: 1190px;
  margin-left: auto;
  margin-right: auto;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  background-color: #fff;
  padding: 20px;
  height: 70px;
  display: flex;
  align-items: center;
  position: sticky;
  z-index: 2;
  top:0;
  
}
.cookies-modal{
  display: flex;
  justify-content: space-evenly;
  background-color: #c7e2b9;
  position: sticky;
}

.cookies-modal p{
  font-size: 0.9rem;
  font-weight: bold;
  letter-spacing: 0.5px;
}
.cookies-none{
  cursor: pointer;
  text-decoration: underline;
}

#small-f{
  font-size: 0.7rem;
}


#nav a {
  font-weight: bold;
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  
  
}
#nav .nav-element{
  
  color: #2c3e50;
  padding: 10px;
  text-decoration: none;
  margin-right: 30px;
  margin-left: 30px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  
}
#nav .nav-icon{
  margin-left: 15px;
}
#nav .nav-element:hover {
  color: #0CAE02;
}


#footer {
  height: 100px;
}


.link-underline{

  text-decoration: none;
}

.link-underline:hover {
  text-decoration: underline;

}
.logoimg{
  margin-top: 25px;
  margin-left: 60px;
  height: 44px;
}

#nav-login{
  text-align: right;
  letter-spacing: 1.5px;
  font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  /* margin-left: 30px; */
  margin-top: 100px !important
  /* padding-bottom: 30px; */

}
.right-login{
  
  padding-top: 25px;
  padding-right: 25px;
  
}
#right-drop{
  padding-top: 17px;
  padding-right: 30px;
}
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
    color: #6D6D6D;
  }
  #footer-container .footer-icons{
    display: flex;
    padding-right: 50px;
  }
  #footer-container .footer-icon{
    padding: 15px;
    color: #42b983;
  }
  #service-dropdown{
    margin-left: 30px;
    margin-top: 7px;
  }

  .my-dropdown{
    position: relative;
    display: inline-block;
    
    
  }
  
  .my-dropdown .my-dropdown-btn{
    white-space:nowrap;
    font-family: 'Noto Sans KR', sans-serif;
    margin-top: 0;
    position: relative;
    font-family: 'Noto Sans KR', sans-serif;
  font-weight: 400;
  font-size: 1.1rem;
  }
  .my-dropdown:hover .my-dropdown-content{
    display: block;
    font-family: 'Noto Sans KR', sans-serif;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .33);
  }

  .my-dropdown-content a {
  color: black;
  
  text-decoration: none;
  display: block;
}
.my-dropdown-content a:hover {background-color: #aaa;}

  .my-dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    margin-left: 10px;
  }
  .my-dropdown:hover #dropdown-margin{
    margin-top: 0;
  }

  .my-dropdown-content p {
    cursor: pointer;
    color: black;
    margin: 0;
    text-decoration: none;
    display: block;
    font-weight: bold;
    padding: 12px 16px;
    text-align: center;
  }
  .my-dropdown-content p:hover {
    background-color: #aaa;
  }
 

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
    padding-left: 500px;
  }
   #site-map-container .map-contents p{
     color: black;
   }
   #site-map-container #sitemap-bold{
     font-family: 'Noto Sans KR', sans-serif;
     font-size: 1rem;
     font-weight: 500;
   }
   #site-map-container #sitemap-none{
     font-family: 'Noto Sans KR', sans-serif;
     font-size: 0.8rem;
     font-weight: 300;
   }
   /* #nav .nav-links a.router-link-exact-active {
  color: #0f5219;
} */
  .router-link-active.router-link-exact-active .nav-element{
    
    color: #0CAE02 !important;
  }
/*.backactive{
  background: rgb(202, 202, 202);
  width: 100%;
  height: 100%;
  
  }*/
  .nav-element.active{
    color: #0CAE02 !important;
  }
  .my-dropdown-btn.active{
    color: #0CAE02 !important;
  }

</style>
