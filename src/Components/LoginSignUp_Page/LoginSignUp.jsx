import './LoginSignUp_page.css';
import Prime_logo from '../../assets/loginSignUpLogo.png';
import { MdArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const LoginSignUp = () => {
  const [IsSignUp , ToggleSignUpLogin] = useState(false) ;
  const ToggleSignUpLoginHandler = ()=>ToggleSignUpLogin(!IsSignUp)
    const [isForgotOpen , isForgotOpenToggle] = useState(false);
    const ForgotPassHandler =()=>{
        isForgotOpenToggle(!isForgotOpen)
    }
        
  return (
    <div className='topContainer_lgnSign'>
      <div className='Login-SignUp_content_wrapper'>
      <div className='LoginSignUp_inner'>
          <div className='img-container'>
            <img className='prime_logo_cl' src={Prime_logo} alt='prime_logo'/>
          </div>
           <div className='LoginSignUp_content'>
              {IsSignUp ? <h1>Sign Up</h1> : <h1>Sign in</h1>}
              <div className='Input_wrappper'>
                <label className='input_header_label'>Email or mobile number</label>
                <input placeholder='Enter Your Email' className='input_SignUp_login'/>
              </div>
              <button className='continue_button'>Continue</button>
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
          <button className='CreateAccount_btn' type='submit' onSubmit={ToggleSignUpLoginHandler}>Create your Amazon account</button>
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

export default LoginSignUp;
