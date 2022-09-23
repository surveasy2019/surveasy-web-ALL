
import { createStore } from 'vuex'
import { doc, getDoc } from 'firebase/firestore'
import createPersistedState from 'vuex-persistedstate'
import loginState from './loginState.js'
import { getStorage } from 'firebase/storage'


export default createStore({
  state: {
    firebaseConfig : {
      apiKey: "AIzaSyDnID31w3NDNi96G-1ImjJ-5Iuz3j775zs",
      authDomain: "surveasy-workspace.firebaseapp.com",
      projectId: "surveasy-workspace",
      storageBucket: "surveasy-workspace.appspot.com",
      messagingSenderId: "1077091709710",
      appId: "1:1077091709710:web:0fb6f216a86dfd3a87dd5f",
      measurementId: "G-9XLHWG8GKQ",
    },
    // isLoggedIn:false,
    notLoggedInService: true,
    notLoggedInTemplate: true,
    db: null,
    userData: [],
    PointUserData: [{point_total:0, point_current: 0}],
    surveyData: [],

    adminDataSurvey: [],
    adminDataSurvey_detail: [],
    adminDataIdentity_yet:[],
    adminDataIdentity_history:[],
    adminDataB2B:[],
    adminDataTemplate_yet:[],
    adminDataTemplate_history:[],

    adminCoupon: [],
    adminCouponValid: [],
    myCoupon: [],

    //app admin
    adminAppUserData :[],
    adminAppUserSentData : [],


    adminAppNotice : [],
    
    
   
    priceTable:       
      [ [9000,	9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000],
        [9000,	9000, 12000, 15000, 18000, 21000, 24000, 27000, 30000],
        [27000, 27000, 36000, 45000, 54000, 63000, 72000,	81000, 90000],
        [54000, 54000, 72000, 90000, 108000, 126000, 144000, 162000, 180000],
        [90000, 90000, 120000, 150000, 180000, 210000, 240000, 270000, 300000],
        [135000, 135000, 180000, 225000, 270000, 315000, 360000, 405000, 450000],
        [180000, 180000, 240000, 300000, 360000, 420000, 480000, 540000, 600000] ],
    
    IdentityOptionArray: [0.6, 0.6, 0.6, 0.8, 1.0],
      
    EngOptionArray: [ 1.0, 1.8, 2.2 ],

    AgeOptionArray: [ 1.0, 1.0, 1.2, 1.3, 1.3, 1.1, 1.1],

    genderOptionArray: [1.0, 1.0, 1.4, 1.4],

    TimeOptionArray: [ 0, 12000, 10000, 8000, 3000, 0, 0 ],


    priceTextTable: [
      [ '', '30명', '40명', '50명', '60명', '70명', '80명', '90명', '100명' ],
      [ '', '1분 이내', '1~3분', '4~6분', '7~10분', '11~15분', '16~20분' ],
      [ '', '18~24시간', '24~36시간', '36~48시간', '48~72시간', '72시간~168시간' ],
      [ '선택 안함', '영어 설문 (50명 이하)', '영어 설문 (50명 초과)' ],
      [ '', '중/고등학생 할인', '대학생 할인', '대학원생 할인', '할인 대상이 아닙니다.' ],
    ],

    targetingTable: [
      ['','전 연령','20대', '20세 이상 24세 이하','25세 이상 29세 이하','20세 이상 39세 이하','20세 이상 49세 이하'],
      ['','성별 무관','남성', '여성']
    ],
      

    localSurveyState: {
      price: 0,
      requiredHeadCount: '',
      spendTime: '',
      dueTime: '',
      ENTarget: '',
      identity: '',
      targetingAge: 0,
      targetingGender: 0,
      
      title: '',
      target: '',
      institute: '',
      link: '',
      notice: '',

      account_userName:'',

      adminApproved: false,
      uploader: '',
      uploaderIdentity: '',

      dueDate: '',
      dueTimeTime: '',
      dueTimeTimeTime: '',

      selectedCoupon: {
        code: '',
        rate: 0,
        forGroup: false
      },
      beforeCouponPrice:0,
      couponDiscount:0,
      pointDiscount: 0,
      coupon_use: false,
      point_use: false,
      
    },

    localTemplateState: {
      type: '',
      name: '',
      email: '',
      etc: '',
      uploader: '',
      uploadDate: '',
      identifyTime: ''
    },

    localPointState: {
      point_current: 0,
      point_total: 0
    },
     


    showLinkModal: false,
    goServiceInputForm: false,
    checklink: null,

    // currentUser:null,
    surveyListStatus:["응답 완료","응답 인증","설문 마감"],
    showModal: false,
    showFinalModal: false,

    isAdmin: false,
    AdminPassword: 1111,
    
    currentUserUploadInfo:[],

    myPage: 1,
    indexColor: 0,

    withDrawCheckTF: false,

    reviewTempData:'',
    knowhowIndex:-1,

    knowhowOne:[
      {
        index : 17,
        image: require('@/assets/knowhow/one/surveytips7thumbnail.png')
      },
      {
        index : 16,
        image: require('@/assets/knowhow/one/surveytips6thumbnail.png')
      },
      {
        index : 15,
        image: require('@/assets/knowhow/one/surveytips5thumbnail.png')
      },
      {
        index : 14,
        image: require('@/assets/knowhow/one/surveytips4thumbnail.png')
      },
      {
        index : 13,
        image: require('@/assets/knowhow/one/surveytips3thumbnail.png')
      },
      {
        index : 12,
        image: require('@/assets/knowhow/one/surveytips2thumbnail.png')
      },
      {
        index : 11,
        image: require('@/assets/knowhow/one/main-1.png')
      }
    
    ],
    knowhowTwo:[
      {
        index : 21,
        image:  require('@/assets/knowhow/two/research1thumbnail.png')
      },
     
    ],
    knowhowThree:[
      
      {
        index : 31,
        image:  require('@/assets/knowhow/three/check1thumbnail.png'),
      },
    
    ],
    
    //faq data

    RespondService : [
      {"title" : "대학생만 설문을 올릴 수 있나요?", "detail" : `대학생, 대학원생, 일반, 기업 등 모두 설문을 업로드 하여 설문 응답 서비스를 이용하실 수 있습니다.` },
      {"title" : "원했던 응답 수만큼 응답이 모이지 않는 경우도 있나요?", "detail" : "설문 대상, 문항 수, 소요 시간 등에 따라 요청하신 응답 수에 도달하지 못하는 경우가 있을 수 있습니다. 응답 수 미달의 경우, 부족한 응답 수만큼 환불해드립니다." },
      {"title" : "설문을 업로드하면 누가 응답해주나요?", "detail" : "서베이지가 자체 보유하고 있는 패널이 설문에 응답해드립니다." },
      {"title" : "설문 응답 서비스 이용가격은 어떻게 되나요?", "detail" : "화면 상단의 ‘서비스 이용’의 ‘설문 응답 서비스’ 클릭 시, 화면 우측 주문창에서 옵션별로 가격을 확인하실 수 있습니다." },
      {"title" : "설문 응답 서비스를 이용하면 보통 며칠 정도 소요되나요?", "detail" : "설정해주신 마감 기한에 따라 서비스 이용 가격이 달라집니다.<br>설문 주문 시간 기준 18시간 이후부터 일주일 사이에 원하시는 마감 기한을 설정해주시면 기한 내에 설문 응답을 수집해드립니다." },
      {"title" : "현재 몇 개의 응답 수가 모였는지 어떻게 확인하나요?","detail":"홈페이지의 ‘설문 리스트’ 페이지에서 확인 가능하십니다."},
      {"title" : "설문 응답지가 어디있나요?","detail":"설문 응답지나 설문 결과 분석을 따로 제공해드리고 있지 않습니다."},
      {"title" : "설문 응답 결과를 어떻게 확인하나요?","detail":"고객님께서 서베이지와 공유해주신 설문지(구글폼, 네이버폼, 서베이몽키, Qualtrics 등)의 자체적인 결과 페이지를 통해 객관식과 주관식 문항에 대한 설문 응답 결과를 확인하실 수 있습니다."},
      {"title" : "설문 응답 서비스 페이지에서 옵션을 모두 선택했는데도 주문이 다음 단계로 넘어가지 않아요.","detail":"서베이지 홈페이지는 모바일 환경 및 Safari 브라우저를 지원하지 않고 있기에, 해당 브라우저를 사용 중이시라면 서비스 이용에 어려움을 겪으실 수 있습니다.<br>사용 중이신 브라우저 확인 부탁드리며, Chrome, Edge, 또는 Whale 사용을 권장드립니다."},      
    ],

    Template : [    
      {"title" : "어떤 설문 템플릿이 있나요?","detail":"현재 ‘사용 경험 설문조사’, ‘인식 설문조사’ 두 가지 템플릿을 보유하고 있습니다."},
      {"title" : "설문 템플릿 가격은 어떻게 되나요?","detail":"더 많은 초보 설문 제작자들이 편하게 설문을 제작하기를 바라는 마음을 담아, 모두 무료로 배포하고 있습니다."},
      {"title" : "어떻게 설문 템플릿을 공유받을 수 있나요?","detail":"설문 템플릿을 신청하시면 작성해주신 이메일로 템플릿 링크를 공유해드립니다.<br>최대 하루 정도 소요되므로, 이 점 유의하시어 서비스 이용 부탁드립니다."},
      {"title" : "설문 템플릿에 있는 문항을 바꿔도 되나요?","detail":"구글폼 권한이 '편집자'로 설정되어있기에 공유 받으신 설문 템플릿은 추후 고객님께서 자유롭게 문항 수정, 추가, 삭제 모두 가능합니다.<br>단, 설문 템플릿은 서베이지 저작물로, 제3자와의 공유는 절대 불가합니다."},
    ],

    MemberInfo : [
      { "title" : "아이디/비밀번호는 어디서 변경할 수 있나요?", "detail":"<b>[아이디 변경]</b> 서베이지 카카오톡 채널 @surveasy로 연락주시면 도와드리겠습니다.<br><b>[비밀번호 변경]</b> LOGIN 페이지에서 ‘비밀번호 찾기’ 버튼을 누르신 뒤 안내에 따라 비밀번호를 변경하시면 됩니다."},
      { "title" : "결제 내역은 어디서 확인할 수 있나요?", "detail":"로그인 후, 화면 상단 우측에 뜨는 본인의 아이디를 클릭하여 ‘마이페이지’로 이동하신 후 ‘결제 내역’에서 확인하실 수 있습니다."},

    ],

    Payment : [
      { "title" : "어떻게 결제하나요?", "detail":"1. 화면 상단의 ‘서비스 이용’의 ‘설문 응답 서비스’ 클릭 시, 화면 우측 주문창에 설문 옵션을 선택해주세요.<br>2. 설문 기본 옵션을 모두 선택하셨다면 ‘상세 정보 입력하기’를 클릭한 뒤 주문을 완료해주세요.<br>3. 알림창에 있는 계좌로 설문 금액을 입금해주시면 됩니다."},
      { "title" : "결제 후 전액 환불이 가능한가요?","detail":"설문 진행이 어려운 경우를 제외하고, 설문이 바로 패널에게 전달되므로 전액 환불은 불가합니다.<br>단, 진행이 어려운 설문의 경우, 전액 환불을 위해 설문 검수 과정에서 저희가 따로 연락드리고 있습니다."},
      { "title" : "응답 수가 미달될 경우, 환불 절차는 어떻게 되나요?","detail":"응답 수가 미달될 경우, 미달된 응답수에 해당하는 비율만큼 부분 환불을 도와드리고 있습니다.<br>환불 절차는 회원가입 시 기입하신 연락처 또는 카카오톡 채널(@surveasy)을 통해 안내드립니다.<br><br><i>환불 예시: 응답 수 30명 요청, 20명 응답 시 → 결제 금액의 1/3 환불 진행</i>"},
    ],


  },

  mutations: {
    setDB(state, payload){
      state.db = payload
    },


    setSurveyMutation1(state, payload) {
      state.localSurveyState.price = payload.price,
      state.localSurveyState.beforeCouponPrice = payload.beforeCouponPrice,
      state.localSurveyState.identity = payload.identity,
      state.localSurveyState.spendTime = payload.spendTime,
      state.localSurveyState.requiredHeadCount = payload.requiredHeadCount,
      state.localSurveyState.dueTime = payload.dueTime,
      state.localSurveyState.ENTarget = payload.ENTarget,
      state.localSurveyState.dueDate = payload.dueDate,
      state.localSurveyState.dueTimeTime = payload.dueTimeTime,
      state.localSurveyState.targetingAge = payload.targetingAge,
      state.localSurveyState.targetingGender = payload.targetingGender
     
    },
    
    setSurveyMutation2(state, payload){
      state.localSurveyState.title = payload.title,
      state.localSurveyState.target = payload.target,
      state.localSurveyState.institute = payload.institute,
      state.localSurveyState.link = payload.link,
      state.localSurveyState.notice = payload.notice
    },

    setSurveyMutation3(state, payload) {
      state.localSurveyState.account_userName = payload.account_userName
      state.localSurveyState.uploader = payload.uploader
      state.localSurveyState.uploaderIdentity = payload.uploaderIdentity
    },

    setTemplateMutation(state, payload) {
      state.localTemplateState.type = payload.type
      state.localTemplateState.name = payload.name
      state.localTemplateState.email = payload.email
      state.localTemplateState.etc = payload.etc      
      state.localTemplateState.uploader = payload.uploader
      state.localTemplateState.uploadDate =  payload.uploadDate
      state.localTemplateState.identifyTime = payload.identifyTime
    },

    setnotLoggedInTemplate(state) {
      state.notLoggedInTemplate = true
    },
    setnotLoggedInService(state) {
      state.notLoggedInService = true
    },

    // setCurrentUserMutation(state, payload){
    //   state.currentUser = payload
    //   console.log(state.currentUser)
    //   console.log('currentUser가 설정되었습니다.')
      
    // },

    setCouponDiscountEmpty(state){
      state.localSurveyState.couponDiscount = 0,
      state.localSurveyState.coupon_use = false
    },
    setPointDiscountEmpty(state){
      state.localSurveyState.pointDiscount = 0
      state.localSurveyState.point_use = false
    },

    
    setAdminState(state){
      state.isAdmin = true
    },

    setSurveyDueTime(state,payload){
      var dttt = payload.dueDate + ' ' + payload.dueTime
      
      
      
      state.localSurveyState.dueTimeTimeTime= new Date(dttt);
      console.log(state.localSurveyState.dueTimeTimeTime)
    },

  },
  actions: {
    // async setCurrentUser({state, commit}, payload){
      
    //   const db = state.db
    //   const docRef = doc(db, "userData", payload['payload'].toString())
    //   const docSnap = await getDoc(docRef)
    //     .then((data) => {
    //       commit('setCurrentUserMutation',data.data())
    //     })


    //   // console.log(docSnap.data());
    // },

    // async setUploadInfo({state, commit}){
    //   console.log('setuploadinfo시작')
    //   const db = state.db
    //   const uploadIndex = state.currentUser['uploadIndex']
    //   console.log(uploadIndex)

    //   for (var index in uploadIndex){
    //     var docRef = doc(db, "surveyData", uploadIndex[index].toString())
    //     var docSnap = await getDoc(docRef)
    //       .then((data) => {
    //         commit('setCurrentUserUploadInfo', data.data())
    //       })

    //   }
    // },

    
  },
  modules: {
    loginState
  },
  plugins: [
    createPersistedState({
      paths : ['loginState']
    })
  ]
 })