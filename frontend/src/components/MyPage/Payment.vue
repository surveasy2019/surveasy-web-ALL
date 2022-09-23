<template>
  <div class="mypage">
    
    <div>
      <p>{{this.$store.state.currentUserUploadInfo2}}</p>
      <div class="spinner" v-if="show==0">
        <i class="fas fa-spinner"></i>
          불러오는 중
      </div>
      <div class="my-accountNum" >{{accountNum}}</div>
      <div class="empty-ment2">{{ment}} 
       <p> <router-link to="/service" class="btn-empty">{{go}}</router-link></p>
      </div>
      <!-- <div>
        <table>
          <tr v-if="show==1">
            <th>ID</th>
            <th>주문번호</th>
            <th>제목</th>
            <th>확인여부</th>
          </tr>

          <tr v-for="item in (currentUserUploadIndexInfo2)" :key="item.title">
            <td>{{item.id}}</td>
            <td>{{item.orderNum}}</td>
            <td>{{item.title}}</td>
            <td>{{item.adminApproved}}</td>

          </tr>
        </table>
      </div> -->
      
      <div class="repeat" v-for="item in (currentUserUploadIndexInfo2)" :key="item">
      <div class="sur-box"  :class="{active:item.progress==3||item.progress==4||item.progress==5}">
        <p class="su-title"><span v-if="item.title.length<39">{{item.title}}</span>
        <span v-else>{{item.title.substring(0,40)}}...</span> 
          
          <span class="gray">{{priceToString(item.price)}}원</span></p>
        <div class="su-contents">
          <div class="con1">
            <p class="su-">진행단계</p>
            <p class="su-">답변 수</p>
          </div>
          <div class="con2">
            
            <p class="light" v-if="item.progress==3 || item.progress==4">패널 응답 완료</p>
            <p class="light" v-if="item.progress==2">결제 완료</p>

            <p class="light" v-if="item.progress==0 || item.progress==1">검수 중</p>

            <p class="light">{{item.requiredHeadCount}}</p>
          </div>
          <div class="con3">
            <p class="su-">주문 날짜</p>
            <p class="su-">설문 기한</p>
          </div>
          <div class="con4">

            <p class="light">{{item.uploadDate}}</p>
            <p class="light">{{item.dueDate}}
            </p>
            </div>
            <!-- css 다시 -->

          
      </div>
        <router-link :to="`/review/${item.id}/${item.title}`" v-if="item.progress==3" class="goLink" id="go-green">후기 작성하기 ></router-link>
        <router-link :to="`/reviewdetail/${item.id}/${item.title}`" v-if="item.progress==4" class="goLink" id="go-green">후기 작성하기 ></router-link>
        <router-link to="/surveylist" v-if="item.progress==2" class="goLink" id="go-gray">설문 보러가기 ></router-link>
           
      </div>
      
      </div>
    </div>
  </div>
</template>

<script>
import { collection, getDocs, getDoc, doc } from '@firebase/firestore'
export default {
  data(){
    return {
      currentUserUploadIndexInfo:[],
      currentUserUploadIndexInfo2:[],
      show:0,
      ment:'',
      go:'',
      accountNum:'',
      
    }
  },
  mounted(){
    this.fetchMyPayment()

  },

  methods:{
    
    async fetchMyPayment(){
      const db = this.$store.state.db
      const currentUserUploadIndex = this.$store.state.loginState.currentUser['uploadIndex']
      

      for (var index in currentUserUploadIndex){
        
        var docRef = doc(db, "surveyData", currentUserUploadIndex[index].toString())
        
        var docSnap = await getDoc(docRef)
        

        if (docSnap.exists()) {
          
          this.currentUserUploadIndexInfo.unshift(docSnap.data())
          
        }
      }

      this.currentUserUploadIndexInfo2 = this.currentUserUploadIndexInfo;
      if (this.currentUserUploadIndexInfo2.length==0){
        this.ment = '아직 업로드한 설문이 없습니다.'
        this.go = '설문 업로드하러 가기 >'
        this.accountNum = ''
      }
      else {
        this.accountNum = '입금 계좌: 카카오뱅크 3333-11-5235460 (송다예)'
      }
      this.show=1
    },


    priceToString(price) {
      return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

    }
  }
  

}
</script>

<style>
.my-accountNum {
  margin-left: 50px;
  font-size: 0.9rem;
}
.spinner{
  text-align: center;
  font-size: 1.4rem;
  font-family: 'Noto Sans KR', sans-serif;
  color: #0AAC00;
  margin-top: 150px;
}
.sur-box{
  background: #FFFFFF 0% 0% no-repeat padding-box;
  box-shadow: 0px 0px 5px #0000000D;
  border-radius: 15px;
  width: 650px;
  margin-left: 50px;
  height: 180px;
}
.sur-box.active{
  background: #cccccc;
}
.sur-box .su-title{
  color: #0AAC00;
  padding-top: 30px;
  padding-left: 40px;

}
.sur-box .gray{
  color: black;
  font-weight: 300;
  margin-left: 30px;
}
.su-contents{
  padding-left: 40px;
  display: flex;
  
}
.con2{
  margin-right: 120px;
}
.con1, .con3{
  margin-right: 20px;
}
.light{
  font-weight: 300;
}
.goLink{
  position: relative;
  left: 530px;
  bottom: 40px;
  font-size: 0.9rem;  
  font-weight: 300;
}
#go-green{
  color: #3f693d;
  font-weight: 700;
}
#go-gray{
  color: #848484;
  font-weight: 700;
}
.empty-ment2{
  text-align: center;
  
  font-size: 1.2rem;
  margin-right: 70px;
}
.btn-empty{
  text-align: center;
  margin-top: 70px;
  font-size: 1rem;
  color: #0AAC00;
}

</style>