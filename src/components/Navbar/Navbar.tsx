'use client'
import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from './logo.png'
import './Navbar.css'
function Navbar() {
    const [isAdminAuthenticated,setIsAdminAuthenticated]=useState(false)
    return (
        <div className="navbar">
          <Image src={logo} alt="Logo" width={100} className="logo" />
          
          <div className="adminlinks">
            {isAdminAuthenticated ? (
              <Link href="/pages/addworkout">Add Workout</Link>
            ) : (
              <>
                {/* Show login/signup links for unauthenticated admin */}
                <Link href="/adminauth/login">Login</Link>
                <Link href="/adminauth/register">Signup</Link>
              </>
            )}
          </div>
        </div>
      )
}

export default Navbar