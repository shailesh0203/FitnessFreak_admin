"use client";

import React, { useState } from 'react';
import '../auth.css';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignupPage = () => {
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('')
    const handleSignup = async () => {
        try {
          const response = await fetch(
            process.env.NEXT_PUBLIC_BACKEND_API + '/admin/register',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ name, email, password }),
              credentials: 'include',
            }
          );
      
          const data = await response.json();
      
          if (data.ok) {
            console.log('Admin registration successful', data);
            toast.success('Admin Registration Successful', {
              position: 'top-center',
            });
          } else {
            console.error('Admin registration failed:', data?.message || 'Unknown error');
            toast.error('Admin Registration Failed', {
              position: 'top-center',
            });
          }
        } catch (error) {
          console.error('Signup error:', error);
          toast.error('Something went wrong during registration.', {
            position: 'top-center',
          });
        }
      };
      
  return (
     <div className='formpage'>
    <input
      type='text'
      placeholder='Name'
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <input
      type='email'
      placeholder='Email'
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    <input
  type='password'
  placeholder='Password'
  value={password}
  onChange={(e) => setPassword(e.target.value)}
/>

<button onClick={handleSignup}>Sign up</button>

    </div>
  );
};

export default SignupPage;
