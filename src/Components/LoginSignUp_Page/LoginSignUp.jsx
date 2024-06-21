import './LoginSignUp_page.css';
import Prime_logo from '../../assets/loginSignUpLogo.png';
import { MdArrowRight } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useState } from 'react';
const LoginSignUp = () => {
    const [isForgotOpen , isForgotOpenToggle] = useState(false);
    const ForgotPassHandler =()=>{
        isForgotOpenToggle(!isForgotOpen)
    }
        
  return (
    <div className='Login-SignUp_content_wrapper'>
      <div className='LoginSignUp_inner'>
          <div className='img-container'>
            <img style={{width:'150px'}} src={Prime_logo} alt='prime_logo'/>
          </div>
          <div className='LoginSignUp_content'>
              <h1>Sign in</h1>
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
                    <p>Need help</p>
                </div>
                {isForgotOpen && (<Link className='ForgotPassText' to={'/ForgotPassword'}>Forgot Password</Link>)}
              </div>
          </div>
          
      </div>
    </div>
  )
}

export default LoginSignUp
