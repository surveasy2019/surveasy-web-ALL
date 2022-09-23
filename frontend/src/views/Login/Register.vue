<template>
<div id="Register">

  <form class="form-center">
        <p class="register-title"><span id="green">서베이지</span> 회원가입</p>
          <li>
              <ul class="cols">
                  <li class="col1">이메일 주소*</li>
                  <li class="col2"><input type="email" id="email" v-model="dataSet.email" required></li>

              </ul>
          </li>

          <li>
              <ul class="cols">
                  <li class="col1">비밀번호*</li>
                  <li class="col2"><input type="password" id="password" v-model="dataSet.password" required></li>
                  <div class="password-notice">* 8자리 이상의 비밀번호를 설정해주세요.</div>
                  
              </ul>
          </li>

          <li>
              <ul class="cols">
                  <li class="col1">비밀번호 확인*</li>
                  <li class="col2"><input type="password" id="passwordcheck" v-model="dataSet.passCheck" required></li>
              </ul>
          </li>

          <li>
              <ul class="cols">
                  <li class="col1">이름*</li>
                  <li class="col2"><input type="text" id="name" v-model="dataSet.name" required placeholder="꼭 실명을 작성해주세요."></li>
              </ul>
          </li>

          <li>
              <ul class="cols">
                  <li class="col1">휴대폰 번호*</li>
                  <li class="col2"><input type="tel" id="tel" v-model="dataSet.phoneNumber" required placeholder="- 없이 입력해주세요."></li>
              </ul>
          </li>
          <li>
              <ul class="cols">
                  <li class="col1">생년월일*</li>
                  <li class="col2"><input type="tel" id="birth" v-model="dataSet.birth" required placeholder="ex. 20220101"></li>
                 
              </ul>
          </li>

          <li>
              <ul class="cols">
                  <li class="col1">유입경로*</li>
                  <li class="col2">
                    <div class="radio-container">
                        <div class="radio-column">
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="everytime" v-model="dataSet.funnel" value="everytime" >
                                <label class="radio-text">에브리타임</label> 
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="kakaotalk" v-model="dataSet.funnel" value="kakaotalk">
                                <label class="radio-text">카카오톡 단톡방</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="google" v-model="dataSet.funnel" value="google">
                                <label class="radio-text">구글 검색</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="naver" v-model="dataSet.funnel" value="naver">
                                <label class="radio-text">네이버 검색</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="instagram" v-model="dataSet.funnel" value="instagram">
                                <label class="radio-text">인스타그램</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="etc" v-model="dataSet.funnel" value="etc">
                                <label class="radio-text">기타</label>
                            </div>
                            <!-- <div class="radio-option" id="radio-etc">
                                <input type="radio" class="radio" name="from" id="etc" v-model="dataSet.funnel" value="etc">
                                <label class="radio-text" >기타 </label>
                                <p class="etc-text"><input type="text" id="etc-t" v-model="dataSet.funnel_etc"></p>
                            </div> -->
                             
                            
                        </div>
                        <div class="radio-column">
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="blog" v-model="dataSet.funnel" value="blog">
                                <label class="radio-text">네이버 블로그</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="지식in" v-model="dataSet.funnel" value="지식in">
                                <label class="radio-text">네이버 지식인</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="cafe" v-model="dataSet.funnel" value="cafe">
                                <label class="radio-text">네이버 카페</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="email" v-model="dataSet.funnel" value="email">
                                <label class="radio-text">이메일 홍보</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="offline" v-model="dataSet.funnel" value="offline">
                                <label class="radio-text">오프라인 홍보</label>
                            </div>
                            <div class="radio-option">
                                <input type="radio" class="radio" name="from" id="acquaintance" v-model="dataSet.funnel" value="acquaintance">
                                <label class="radio-text">지인 추천</label>
                            </div>
                           
                        </div> 

                    </div>
                               
                </li>
              </ul>
          </li>
          <li>
              <ul class="cols">
                  <li class="col1">해당 유입경로에 대한 상세 내용을 작성해주세요*</li>
                  <li class="col2"><input type="text" id="funnelDetail" v-model="dataSet.funnel_detail" 
                  required placeholder="검색 유입인 경우 검색어를 적어주세요. 에브리타임, 카카오톡, 네이버 카페인 경우 소속을 알려주세요."></li>
                 
              </ul>
          </li>
          
          <div class="check">
            <div class="all-title"><input type="checkbox" v-model="checkAll">전체 동의하기</div>
            <div class="all"><input type="checkbox" v-model="dataSet.check1" >
            <router-link class="terms" :to="{name: 'Term1'}" target="_blank">서베이지 이용약관 (필수)</router-link></div>
            <div class="all"><input type="checkbox" v-model="dataSet.check2" ><router-link class="terms" :to="{name: 'Term2'}" target="_blank">서베이지 개인정보 보호 방침 (필수)</router-link></div>
            <div class="all"><input type="checkbox" v-model="dataSet.check3" >
                회원가입 시 작성한 개인 정보가 모두 올바름을 확인합니다. <br>
            <span id="nextline">가입 오류로 인한 불이익은 이용자의 책임임을 인지하고 있습니다. (필수)</span></div>

            
        </div>
          

     </form>
     <br>
     <!-- <button @click="addUserData(this.dataSet); create();"> 가입하기 </button> -->
     <button class="register-btn" @click="validateRegister(this.dataSet);"> 회원가입하기 </button>
     
</div>
</template>

<script>
import { getAuth,  createUserWithEmailAndPassword } from 'firebase/auth'
import { setDoc, doc } from 'firebase/firestore';
export default {
    data(){
        
        return{
            dataSet:{
              email:null,
              password:null,
              passCheck:null,
              phoneNumber:null,
              name:null,
              funnel:null,
              funnel_detail:null,
              birth:null,
              check1: false,
                check2: false,
                check3: false
                 
            },
            
           

            validReg : false,
            
        }
    },
    computed: {
        checkAll: {
            get: function(){
                return this.check1+','+this.check2+','+this.check3
            },
            set: function(e){
                if(e==true){
                    this.dataSet.check1 =true;
                    this.dataSet.check2 =true;
                    this.dataSet.check3 =true;
                }else{
                    this.dataSet.check1 =false;
                    this.dataSet.check2 =false;
                    this.dataSet.check3 =false;
                }
                
            }
           
        }
        },
        
    
    mounted() {
    window.scrollTo(0,0)
  },
    methods:{

        hasNullOption(dataSet) {
            if(dataSet.email == null || dataSet.password == null || dataSet.passCheck == null || dataSet.phoneNumber == null 
                || dataSet.name == null || dataSet.funnel == null || dataSet.funnel_detail == null || dataSet.funnel_detail == "") {
                    return true
            }
            return false
        },
        
        
        validateRegister(dataSet){  
            var errCode = [];
            
            // 입력하지 않은 항목이 있는지 체크
            // for (var key in dataSet) {
            //     if (key==null) {
            //         errCode.push(1)
            //     }
            // }

            if(this.hasNullOption(dataSet)) {
                errCode.push(1)
            }
            else {
                if (dataSet.password !== dataSet.passCheck){
                    errCode.push(2)
                }

                if ((dataSet.password).length < 8) {
                    errCode.push(3)
                }

                //휴대폰번호 숫자만있는지 확인 (#Todo)
                if((dataSet.phoneNumber).length<11 || isNaN(dataSet.phoneNumber)==true || (dataSet.phoneNumber).includes('.')==true){
                    errCode.push(4)
                }
                
                if((dataSet.birth).length<8 || dataSet.birth>=20220000){
                    errCode.push(5)
                }
                
                if(!(dataSet.check1 ==true && dataSet.check2 ==true && dataSet.check3 ==true)){
                    errCode.push(6)
                }

            }
        
            
            if (errCode.length == 0 ){
                this.validReg = true
                this.create(dataSet)
                
                
            } else {
                 //console.log(errCode)
                 //console.log(dataSet)
                var registerErrorMessage =[
                "",
                "입력하지 않은 항목이 있습니다.",
                "비밀번호 확인란을 올바르게 입력하세요.",
                "비밀번호는 8자 이상이여야 합니다.",
                "휴대폰 번호를 올바르게 입력하세요.",
                "생년월일을 올바르게 입력하세요.",
                "약관에 동의해주세요."
                

                ]
                
                
                var errArr =[]
               
                for(var i=0; i<errCode.length; i++){
                    errArr.push(registerErrorMessage[errCode[i]])
                    
                }
                // console.log(errArr)
                var msg = ''
                for(var err in errArr){
                    msg+=errArr[err]+"\n"
                }
                alert(msg) //에러코드에 해당하는 내용 띄우기
            }

            
        }
        ,
        create(dataSet){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.dataSet.email, this.dataSet.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    this.addUserData(dataSet)
                })
                .catch((error) => {
                    const errorCode = error.code;

                    //console.log(errorCode)

                    if(error.code=="auth/email-already-in-use") {
                        this.error = "이미 가입된 계정입니다."
                        alert(this.error)
                    }

                    if(error.code=="auth/invalid-email") {
                        this.error = "이메일 형식이 맞는지 확인해주세요."
                        alert(this.error)
                    }

                })
            
            
        },

        async addUserData(dataSet){
            
            var db = this.$store.state.db
            await setDoc(doc(db, "userData", dataSet.email.toString()),{
                name: dataSet.name,
                email: dataSet.email,
                phoneNumber: dataSet.phoneNumber,
                isPanel: false,
                birth: dataSet.birth,
                uploadIndex: [],
                identity: '할인 대상이 아닙니다.',
                identity_request: false,
                identity_responded: false,
                funnel : dataSet.funnel,
                funnel_detail : dataSet.funnel_detail,
                respondArray: [],
                clientGrade: 0,
                point_total : 0,
                point_current: 0,
                marketingSMS: false,
                marketingEmail: false
                
                
                
            })
            //console.log("됐다")
            this.$router.push('/registerdone')
        },

        
    },
    

}
</script>

<style>
#Register {
    height: 1580px;
    font-family: 'Noto Sans KR', sans-serif;
    display: block;
    text-align: center;
}
.register-title {
    margin-top: 70px;
    margin-bottom: 50px;
    font-size: 2rem;
    text-align: left;
    margin-left: 40px;
    
}
.radio-text{
    margin-top: 5px;
}
.register-title #green{
    color: #0AAB00;
}
.form-center{
    display: inline-block;
    
    
}
.etc-text{
    margin-top: 3px;
}
#etc-t{
    margin-left: 20px;
    
    width: 180px;
    height: 18px;
    
}
#radio-etc{
    margin-top: 10px;
}
li {
    list-style-type: none;
}

.cols li.col1 {
    width: 320px;
    text-align: left;
    margin-bottom: 10px;
    font-size: 15px;
}

.cols li.col2 {
    width: 520px;
    font-size: 8px;
}
.cols li.col2 input {
  width: 580px;
  height: 30px;
  padding: 3px;
  margin-bottom: 15px;
  border: 1px solid #848484;
  border-radius: 4px;
  opacity: 1;
  color: #848484;
  font: normal normal 300 17px/20px Noto Sans KR;
  font-size: 0.8rem;
  padding-left: 15px;
}
.password-notice {
    font-size: 0.8rem;
    color: rgb(171, 171, 171);
    text-align: left;
    margin-bottom: 25px;
    margin-top: -10px;
}
.cols li.col2 input.radio {
    width: 15px;
    margin: 0 20px 0 5px;
}
.radio-container {
    display: flex;
    
    width: 500px;
    
    font-size: 13px;
    
    margin-bottom: 30px;
}
.radio-column {
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-right: 20px;
}
.radio-option {
    display: flex;
    flex-direction: row;
    margin-bottom: 5px;
}
.register-btn {
  padding: 5px 30px;
  margin: 20px;
  color:#0CAE02;
  background-color: #fff;
  border: 1.5px solid #0CAE02;
  border-radius: 30px;
  font-size: 13px;
  cursor: pointer;
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 1rem;
}
.register-btn:hover{
    color: white;
    background-color:#0CAE02;
}
.check{
    text-align: left;
    margin-top: 50px;
    font-size: 1rem;
    margin-bottom: 80px;
}
.check input{
    margin-right: 15px;

}
.check .all-title{
    font-weight: 500;
    
}
.check .all{
    margin-left: 30px;
    font-weight: 500;
}
.check #nextline{
    margin-left: 50px;
}
.terms{
    text-decoration: underline;
}
</style>