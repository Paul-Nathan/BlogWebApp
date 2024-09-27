import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='not-found'>
        <h2>Sorry!!!!</h2>
        <p>The page requested can't be found</p><br></br>
        <span>Please click here to return to home page: <Link to={`/`} style ={{color: "blue"}}>Home Page</Link></span>
    </div>
  )
}

export default NotFound