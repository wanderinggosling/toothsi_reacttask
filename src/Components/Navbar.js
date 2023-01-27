import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link  className="navbar-brand" to="/">Products</Link>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  
                </ul>

            </div>
            <Link to='/cart'><button className='btn btn-primary'>Cart</button></Link>
        </div>
    </nav>
</div>
  )
}

export default Navbar
