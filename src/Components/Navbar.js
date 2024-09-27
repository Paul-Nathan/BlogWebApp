import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='navbar'>
        <Link to ={`/`}><h1>My Blog</h1></Link>
        <div className='links'>
            <Link to="/">Home</Link>        
            <Link to="/create">New Blog</Link>        
        </div>

    </div>
  )
}
