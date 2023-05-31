import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import registerBgImg from '../assets/others/authentication.png'
import registerBgImg1 from '../assets/others/authentication2.png'
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import GoogleSignIn from '../SheardSection/GoogleSignIn/GoogleSignIn';

const Register = () => {

    const { createUser } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const location = useLocation()
    const navigate = useNavigate()

    const onSubmit = data => {
        console.log(data)

        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                const info = { name: data.name, email: data.email }
                console.log(info);
                fetch('http://localhost:5000/users',{
                    method:'POST',
                    headers:{'content-type': 'application/json'},
                    body:JSON.stringify(info)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.insertedId){
                        alert('added')
                    }
                })
                .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error)
                Swal.fire({
                    icon: 'Faild',
                    title: `${error.message}`,

                    footer: '<a href="">Please Write The again</a>'
                })
                // updateProfiled(data.email, data.photo)
                //     .then(() => {
                //         console.log('profiled updated');
                //     })
            })


    };



    return (
        <div>
            <div className='mt-28' >
                <div style={{ backgroundImage: `url(${registerBgImg} )` }} className="shadow-2xl border hero min-h-[600px] bg-base-200 fixed w-[1280px] -mb-10">


                    <div className="hero-content flex-col mx-10 lg:flex-row-reverse">
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">

                                <form onSubmit={handleSubmit(onSubmit)} className="form-control">



                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>

                                    <input type="text" {...register("name", { required: true })} name='name' placeholder="Enter Your Name" className="input input-bordered" />
                                    {errors.name?.type === 'required' && <p className='text-red-700' role="alert">You name is required</p>}


                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>

                                    <input type="email" {...register("email", { required: true })} name='email' placeholder="email" className="input input-bordered" />
                                    {errors.email?.type === 'required' && <p className='text-red-700' role="alert">Must be Type your email</p>}

                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>

                                    <input type="text" {...register("photo", { required: true })} name='photo' placeholder="email" className="input input-bordered" />
                                    {errors.photo?.type === 'required' && <p className='text-red-700' role="alert">Must be Type your photo url</p>}

                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>

                                    <input type="password" {...register("password", {
                                        required: true,
                                        minLength: 6, maxLength: 12,
                                        pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/
                                    })} name='password' placeholder="password" className="input input-bordered" />

                                    {errors.password?.type === 'required' && <p className='text-red-700' role="alert">Must be Type your Password</p>}
                                    {errors.password?.type === 'minLength' && <p className='text-red-700' role="alert">Must be Type your Password 6 Character</p>}
                                    {errors.password?.type === 'maxLength' && <p className='text-red-700' role="alert">Must be Type your Password under 12 Character</p>}
                                    {errors.password?.type === 'pattern' && <p className='text-red-700' role="alert">Must be Type your Password 6 Character With special Key and Lowercase With UpperCase </p>}


                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Register</button>
                                    </div>
                                     
                                    
                                    <p className='mt-5 mb-5'>I have already account ! <Link to='/login'> <button className='btn btn-outline btn-sm'>Login</button></Link> </p>
                                </form>
                              <GoogleSignIn></GoogleSignIn>
                            </div>
                        </div>
                        <div className=" lg:text-left">
                            <img src={registerBgImg1} alt="" />
                        </div>
                         
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Register;