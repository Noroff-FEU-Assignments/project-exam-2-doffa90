import axios from 'axios';
import { setCookie } from 'nookies';
import { useRef, useState, useEffect } from "react";
import Router from 'next/router';
import Link from 'next/link';
const authUrl = '/api/auth/local';
const BaseUrl = 'http://localhost:1337'



export default function Login() {
  const userRef = useRef();
  const errRef = useRef();

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const[errorMsg,setErrorMsg] = useState('');
  const[success,setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[])


  useEffect(()=>{
    setErrorMsg('');
  },[username,password])
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    axios
  .post(BaseUrl + authUrl, {
    identifier: username,
    password: password,
  })
  .then((response) => {
    setSuccess(true);
    console.log(response);
    setCookie(null,'jwt',response.data.jwt,{
        maxAge:30 * 24 * 60 * 60,
        path:'/',
    })
    success = (Router.push('/admin/dashboard'))
  })
  .catch((error) => {
    if(!error.response){
      setErrorMsg('Server dont respond');
    } else if(error.response.status === 400){
      setErrorMsg('Missing username or password');
    } else if(error.response.status ===  401){
      setErrorMsg('Unauthorized please contact admin');
    }else{
      setErrorMsg('Failed login');
    }
    errRef.current.focus();
  });
  }
  

return (
  <section>
    <div className="card">
  <div className="card-body">
    <h2 className="card-title">Admin Login</h2>
    <h3 className="card-subtitle mb-2 text-muted">Login to administer your hotels</h3>
    <form>
        <div className='mb-3'>
          <label className="form-label" htmlFor="username">Email/Username</label>
          <input
          className="form-control" 
          type="text" 
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e)=>setUsername(e.target.value)}
          value={username}
          required/> 
          </div>
          <div class="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input
          class="form-control" 
          type="password" 
          id="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          required/>
          </div>
          <p ref={errRef} className={errorMsg?"errorMsg":"offscreen"}aria-live="assertive">{errorMsg}</p>
          <button className="btn btn-primary" onClick={handleSubmit} type="button">Login!</button>
      </form>
  </div>
</div>
<div className="card">
  <div className="card-body">
    <h4 className="card-title">Need an Account?</h4>
    <p className="card-text">We will get back to you, and help you set up your Holidaze admin account</p>
    <h5 className="card-subtitle mb-2 text-muted">Fill out our contact form</h5>  
    <Link href='/contact'>
    <a className='nav-link'>Contact us!</a>
    </Link>
  </div>
  </div>
  </section>
  )}


