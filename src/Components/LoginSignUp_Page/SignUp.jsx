import React, { useEffect, useState, useRef } from 'react';
import './SignUp.css';
import { Link, useNavigate } from 'react-router-dom';
import PrimeLogo from '../../assets/loginSignUpLogo.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const navigate = useNavigate();
  const autoFocus = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validate = (name, value) => {
    switch (name) {
      case 'name':
        if (!value) {
          return 'Name is required';
        } else {
          return '';
        }
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!value) {
          return 'Email is required';
        } else if (!emailRegex.test(value)) {
          return 'Invalid email address';
        } else {
          return '';
        }
      case 'password':
        if (!value) {
          return 'Password is required';
        } else if (value.length < 6) {
          return 'Password must be at least 6 characters';
        } else {
          return '';
        }
      case 'confirmPassword':
        if (!value) {
          return 'Confirm password is required';
        } else if (value !== formValues.password) {
          return 'Passwords do not match';
        } else {
          return '';
        }
      default:
        return '';
    }
  };

  let headersList = {
    Accept: '*/*',
    'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
    projectid: 'ijz1rt2997dl',
    'Content-Type': 'application/json',
  };

  let bodyContent = JSON.stringify({
    name: formValues.name,
    email: formValues.email,
    password: formValues.password,
    appType: 'ott',
  });

  async function postreq() {
    try {
      let response = await fetch('https://academics.newtonschool.co/api/v1/user/signup', {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });
      if (!response.ok) {
        let errorData = await response.json();
        throw new Error(errorData.message || 'Something went wrong');
      }

      let data = await response.text();
      toast.success('Registration Success');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (err) {
      toast.error(err.message);
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

    const error = validate(name, value);
    setFormErrors({
      ...formErrors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    Object.keys(formValues).forEach((name) => {
      const error = validate(name, formValues[name]);
      if (error) {
        errors[name] = error;
      }
    });

    if (Object.keys(errors).length === 0) {
      postreq();
    } else {
      setFormErrors(errors);
      console.log('Form is invalid. Please fix errors and try again.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  useEffect(() => {
    autoFocus.current.focus();
  }, []);

  return (
    <div className='signUp-wrapper'>
      <ToastContainer position='top-right' />
      <img className='primeLogo-SignUp' src={PrimeLogo} alt='prime-logo' />
      <div className='container'>
        <h1 className='heading'>Create account</h1>
        <form onSubmit={handleSubmit} className='form'>
          <div className='inputGroup'>
            <label className='label'>
              Your name
              <input
                ref={autoFocus}
                type='text'
                name='name'
                value={formValues.name}
                onChange={handleChange}
                className='input'
              />
            </label>
            {formErrors.name && <p className='error'>{formErrors.name}</p>}
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Email
              <input
                type='email'
                name='email'
                value={formValues.email}
                onChange={handleChange}
                className='input'
              />
            </label>
            {formErrors.email && <p className='error'>{formErrors.email}</p>}
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Password
              <div className='password-input'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name='password'
                  value={formValues.password}
                  onChange={handleChange}
                  className='input'
                />
                <span onClick={togglePasswordVisibility} className='password-toggle-icon'>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
            {formErrors.password && <p className='error'>{formErrors.password}</p>}
          </div>
          <div className='inputGroup'>
            <label className='label'>
              Re-enter password
              <div className='password-input'>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name='confirmPassword'
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  className='input'
                />
                <span onClick={toggleConfirmPasswordVisibility} className='password-toggle-icon'>
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </label>
            {formErrors.confirmPassword && <p className='error'>{formErrors.confirmPassword}</p>}
          </div>
          <button type='submit' className='button'>
            Create your Amazon account
          </button>
        </form>
        <p className='text'>
          By creating an account, you agree to the Amazon Conditions of Use and Privacy Notice.
        </p>
        <p className='text AlreadyHaveAccount'>
          Already have an account? <Link to='/login' className='link'>Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
