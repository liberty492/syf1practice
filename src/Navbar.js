import React from 'react'
import { Link,NavLink} from 'react-router-dom'

 export default function Navbar(){
      
        var styles={
            backgroundColor:'#475562',
            borderBottom:'0.5px white solid',
            borderTop:'0.5px white solid'
      }
     return(<>
     
    <nav className="navbar navbar-expand-lg" style={ styles }>
    
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" >
    <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
     <div className="navbar-nav">
        <NavLink activeClassName="bg-info" className="nav-item nav-link text-white text-uppercase mx-2 active" to="/home">Home</NavLink>
        <NavLink activeClassName="bg-warning" className="nav-item nav-link  text-white text-uppercase mx-2 " to="/about">About</NavLink>
        
        <NavLink activeClassName="bg-success" className="nav-item nav-link text-white text-uppercase mx-2 " to="/services">Services</NavLink>
        <NavLink activeClassName="bg-danger" className="nav-item nav-link text-white text-uppercase mx-2 " to="/footer">Footer</NavLink>
        <NavLink activeClassName="bg-danger" className="nav-item nav-link text-white text-uppercase mx-2 " to="/hooks">Hooks1</NavLink>
      
      </div>
    </div>
  </nav>

     </>
     )

 }