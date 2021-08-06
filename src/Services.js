import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt,faPollH,faSnowboarding } from '@fortawesome/free-solid-svg-icons'

 export default function Services(){
    var styles={
        backgroundColor:'#12151c'
    }

     return(<>
     
        

<div className="container-fluid" style={styles} id="services">
      <div className="container p-5 text-center">
       
        <h1 className="pt-2 pb-5 text-white">SERVICES</h1>

        <div className="row">


  <div className="col-lg-4">
    <div className="card text-center text-white p-3 " style={styles}>
      <p> <FontAwesomeIcon icon={faAt} size="3x" className="fab fa-adobe text-weight-bold text-success" /> </p>
    <div className="card-body">
      <h3 className="py-3">UX/UI DESIGN</h3>
      <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>


  <div className="col-lg-4">
    <div className="card text-center text-white p-3" style={styles}>
      <p> <FontAwesomeIcon icon={faPollH} size="3x" className="fab fa-adobe text-weight-bold text-success" /> </p>
    <div className="card-body">
      <h3 className="py-3">MARKETING</h3>
      <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>


  <div className="col-lg-4">
    <div className="card text-center text-white p-3" style={styles}>
    <p> <FontAwesomeIcon icon={faSnowboarding} size="3x" className="fab fa-adobe text-weight-bold text-success" /> </p>
    <div className="card-body">
      <h3 className="py-3">BRANDING</h3>
      <p className="text-justify">In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content</p>
    </div>
    </div>
  </div>
        </div>

      </div>
    </div>
	
    
     <div className="container-fluid" style={styles}>
      <div className="container p-5">
       
        <div className="row">


          <div className="col-lg-4">
            <div className="card text-center text-white p-3 border-0 " style={{ backgroundColor:'#475562' }}>
              <i className="far fa-smile text-weight-bold text-success"></i>
              
            <div className="card-body">
              <h3 className="py-3">150+</h3>
              <h6>HAPPY CLIENTS</h6>
            </div>
            </div>
          </div>
        
        
          <div className="col-lg-4">
            <div className="card text-center text-white p-3  border-0" style={{ backgroundColor:'#475562' }}>
              <i className="fab fa-font-awesome-flag text-success text-weight-bold"></i>
            <div className="card-body">
              <h3 className="py-3">300+</h3>
              <h6>PROJECTS DONE</h6> 
            </div>
            </div>
          </div>
        
        
          <div className="col-lg-4">
            <div className="card text-center text-white p-3  border-0" style={{ backgroundColor:'#475562' }}>
              <i className="far fa-star text-success text-weight-bold"></i>
            <div className="card-body">
              <h3 className="py-3">4+</h3>
              <h6>AWARDS</h6> 
             </div>
            </div>
          </div>

                </div>

      </div>
    </div>
         
     
     </>
     )
 

 }