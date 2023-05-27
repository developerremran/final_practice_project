import React, { useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';


import loginBgImg from '../assets/others/authentication2.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';


const Login = () => {
    const {loggedUser} = useContext(AuthContext)
    const [disabled, setDisabled] = useState(true)
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/';

    useEffect(()=>{
        loadCaptchaEnginge(6); 

    },[])
    const loginHendler = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        const formInfo ={email,password}
        console.log(email,password);

        loggedUser(email,password)
        .then(result =>{
            const user = result.user;
            console.log(user)
            navigate(from, {replace: true})  
        })
        .catch(error => {
            alert(error)
            console.log(error)
        })
        
   

    }

    const hendlerValidet =(e)=>{
        const value = e.target.value;
        // console.log(value);

        if (validateCaptcha(value)==true) {
           setDisabled(false)
        }
   
        else {
            setDisabled(true)

        }
    }

    return (
        <div className='mt-28'>
            <div className="shadow-2xl border hero min-h-[600px] bg-base-200 fixed w-[1280px] -mb-10">


                <div className="hero-content flex-col mx-10 lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">

                            <form onSubmit={loginHendler} className="form-control">



                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>

                                <input type="email" name='email' placeholder="email" className="input input-bordered" />


                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                <label className="label">
                                    <span  className="label-text"><LoadCanvasTemplate /></span>
                                </label>

                                <input  onBlur={hendlerValidet}  type="text" name='captcha' placeholder="captcha" className="input input-bordered"/>

                                

                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>

                            
                            <div className="form-control mt-6">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                            <p className='mt-5 mb-5'>I am new user ! <Link to='/register'> <button className='btn btn-outline btn-sm'>Register</button></Link> </p>
                            </form>
                        </div>
                    </div>
                    <div className=" lg:text-left">
                        <img src={loginBgImg} alt="" />
                    </div>

                </div>


            </div>
        </div>
    );
};

export default Login;