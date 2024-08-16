import './Login.css';
import Prime_logo from '../../assets/loginSignUpLogo.png';
import { MdArrowRight } from "react-icons/md";
import { Link,Navigate, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {
  const [isForgotOpen , isForgotOpenToggle] = useState(false);
  const autoFocusInput = useRef(null) ;
  const [inputValue, setInputValue] = useState('') ;
  const [errorMessage , SetErrorMessage] = useState('') ;
  const [password,SetPassword] = useState(true) ;
  const [passwordValue , setPasswordValue] = useState('') ;
  const navigate = useNavigate() ;
  function GoToSignUp(){
    navigate('/SignUp');
  }
  async function submitHandler(){
    if(emailRegex.test(inputValue)){
      SetPassword(false) ;
      console.log(inputValue);
    }
    if(passwordValue){
      console.log(passwordValue)
      let headersList = {
        "Accept": "*/*",
        "User-Agent": "Thunder Client (https://www.thunderclient.com)",
        "projectid": "ijz1rt2997dl",
        "Content-Type": "application/json"
    }
    
    let bodyContent = JSON.stringify({
        "name": "kore nagaraju",
        "email": inputValue.toLocaleLowerCase(),
        "password": passwordValue,
        "appType": "ott"
    });
    
    try {
        let response = await fetch("https://academics.newtonschool.co/api/v1/user/login", { 
            method: "POST",
            body: bodyContent,
            headers: headersList
        });
    
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        let data = await response.json();
        console.log(data);
        toast.success('SuccessFul Login')
        setTimeout(()=>{
          navigate('/');
        },2000)
    } catch (error) {
      toast.error('Enter Correct Details') ;  
      SetPassword(!password);
      setInputValue('') ;
      setPasswordValue('');
    }
       
       
          
    }
  }

  const PassWordValueHanlder = (e)=>{
    setPasswordValue(e.target.value);
  }
  const error = {
    InputNoneError : 'Enter Your details',
    InvalidMailError:'Enter the Valid mail',
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/ ;
  function inputValueHanlder(e){
      setInputValue(e.target.value) ;
      if(!emailRegex.test(inputValue)){
        SetErrorMessage(error.InvalidMailError)
      }
      else{
        SetErrorMessage('');
      }
  }
  function outFocus(){
    if(Number(inputValue) === 0){
      SetErrorMessage(error.InputNoneError)
    }
  }
  useEffect(()=>{
    autoFocusInput.current.focus() ;
  },[password])
  const ForgotPassHandler =()=>{
    isForgotOpenToggle(!isForgotOpen)
  }    
  return (
    <div className='topContainer_lgnSign'>
      <ToastContainer position='top-right'/>
      <div className='Login-SignUp_content_wrapper'>
        
      <div className='LoginSignUp_inner'>
          <div className='img-container'>
            <img className='prime_logo_cl' src={Prime_logo} alt='prime_logo'/>
          </div>
           <div className='LoginSignUp_content'>
              <h1>Sign In</h1>
              {password ? (<div className='Input_wrappper'>
                <label className='input_header_label'>Email or mobile number</label>
                <input value={inputValue}  onBlur={outFocus} ref={autoFocusInput} onChange={inputValueHanlder} placeholder='Enter Your Email' className='input_SignUp_login'/>
                <p style={{fontSize:'12px' , marginTop:'10px' ,color:'red'}}>{errorMessage}</p>
              </div>):
              (<div className='Input_wrappper Password_wrapper'>
                <label className='input_header_label Password_header_label'>Password</label>
                <input  value={passwordValue} onBlur={outFocus} ref={autoFocusInput} onChange={PassWordValueHanlder} placeholder='Enter Your Password' className='input_SignUp_login'/>
                <p style={{fontSize:'12px' , marginTop:'10px' ,color:'red'}}></p>
              </div>)}
              
              <button onClick={submitHandler} className='continue_button'>Continue</button>
              <div className='Conditons_text_wrapper'>
                <p>By continuing,you agree to the Amazon <Link className='condition_text' to='/Conditions'>Conditions of Use and Privacy</Link></p>
              </div>
              <div className='Need_help_Wrapper'>
                <div className='Link_Acc-Header' onClick={ForgotPassHandler}>
                    <MdArrowRight style={{fontSize:'16px'}}/>
                    <p>Need help?</p>
                </div>
                {isForgotOpen && (<Link className='ForgotPassText' to={'/ForgotPassword'}>Forgot Password</Link>)}
              </div>
          </div>
          <div className='Divider-Container'>
            <div className='line'></div>
            <p className='NewToAmazon'>New to Amazon?</p>
            <div className='line'></div>
          </div>
          <button onClick={GoToSignUp} className='CreateAccount_btn' type='submit'>Create your Amazon account</button>
          <div className='outer-line'>
      </div>
      <div className='SignConditions_Links'>
                            <Link to='/' className='link_Sign_F'>Terms and Privacy Notice</Link>
                            <Link to='/' className='link_Sign_F'>Send us feedback</Link>
                            <Link to='/' className='link_Sign_F'>Help</Link>
      </div>
      <p>© 1996-2024, Amazon.com, Inc. or its affiliates</p>
      </div>
      
    </div>
   
    </div>
   
    
  )
}

export default Login;
