import React from 'react'
//import profile from './images/profile.jpg'

export default function Home(){
    return(<>
    
    <div className="jumbotron mb-0 text-white" style={{ backgroundColor:'#242c38' }} id="home">

    <div className="container " >
    
        <div className="row">
    
        <div className="col-lg-6 ">
    
            <h1 className="h1 pt-5 mt-5">Hey,this is Narayana Parsa</h1>
            <h5 className="bg-success p-2 mt-3 w-75 text-center">React Developer & Instructor</h5>
                
            </div>
    
            <div className="col-lg-6">
                  
                  {/*
                  <img src="images/profile.jpg" className="w-75 mx-auto img-thumbnail" /> 
                  <img src={profile} className="w-75 mx-auto img-thumbnail" />
                  */}
    
                <img src="images/pnr.jpg" className="w-50 mx-auto img-thumbnail" />
    
            </div>
        </div>
    
    </div>
    </div>
    </>)
}