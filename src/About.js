import React from 'react'

 export default function About(){

    var h={height:'20px'}
     return(<>
     
<div class="container-fluid" style={{ backgroundColor:'#12151c'}} id="about">

<div class="container p-5 w-75 text-center">

  <h1 class="display-4 text-white font-weight-bold py-3">ABOUT US</h1>
  <p class="text-white pb-3">
  I have total of 4+ years of experience and 2+ years of experience in Front End development and web 
applications using technologies such as JavaScript, React JS, REDUX, jQuery, Bootstrap, HTML, CSS
and Core Java.Summary:Developed MVC based web applications using ReactJS Active involvement in development of application using multi-tier technologies like ReactJS,Redux, Java Script, jQuery, XML, JSON, HTML5, CSS3. 
 </p>


  <div class="jumbotron text-white" style={{  borderRadius:'10px',backgroundColor:'#242c38' }} >
  
   <div class="row">
     <div class="col-lg-6">

      <div class="container w-100 ">
        <table class="table table-borderless text-white">
       
         <tbody>
          <tr>
            <th></th>
            <td><img src="images/pnr.jpg" style={{ borderRadius:'20px',width:'40%',height:'80px' }} /></td>
          </tr>
       
          <tr>
            <th>FULLNAME</th>
            <td>Narayana</td>
          </tr>

          <tr>
            <th>Birthday</th>
            <td>14/05/1992</td>
          </tr>

          <tr>
            <th>Mobile No</th>
            <td>988506990</td>
          </tr>

          <tr>
            <th>Email id</th>
            <td>parsa.Narayana@gmail.com</td>
          </tr>
          </tbody>
       
      </table>
      </div>

     </div>
     <div class="col-lg-6">

      <h4>SKILLS</h4>

      <p class="text-left">HTML5 & CSS3</p>
      <div class="progress" style={{h}}>
        <div class="progress-bar bg-success"  style={{ width: '95%'}} >95%</div>
      </div>

      <p class="text-left pt-4">BOOTSTRAP4</p>
      <div class="progress" style={{h}}>
        <div class="progress-bar bg-success"  style={{ width: '90%' }} >90%</div>
      </div>

      <p class="text-left pt-4">JAVASCRIPT</p>
      <div class="progress" style={{h}}>
        <div class="progress-bar bg-success"  style={{ width: '85%'}} >85%</div>
      </div>

      <p class="text-left pt-4">React js</p>
      <div class="progress" style={{h}}>
        <div class="progress-bar bg-success"  style={{ width: '78%'}} >78%</div>
      </div>

     </div>
   </div>

  </div>

</div>

</div>

     </>
     )

 }