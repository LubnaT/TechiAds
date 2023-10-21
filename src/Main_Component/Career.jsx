import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Career() {
  return (
    <div>
     {/* image */}
     <div className='bg-black h-100'>
       <div className='py-5 w-100 h-100 blur'>
         <img class="img-fluid w-75 h-100 careerimg mt-6" alt="careerimage"
           src="https://cdn.phenompeople.com/CareerConnectResources/KIVKBRUS/images/MicrosoftTeams-image102[1920x927]web-1664813477508.jpg">
         </img>
       </div>
       <div className='centered w-50 border-3 border-white border-bottom'>
         <h2 className='text-white font-weight-bold display-3 w-25  '>Careers</h2>
       </div>
     </div>

     {/* Why us */}

     <div class="card pt-4">
       <img class="card-img-top joinusimg" alt="Card image cap" 
        src="https://t3.ftcdn.net/jpg/05/57/63/60/360_F_557636016_qBt5q3am5gWN7ubTEdOv4AXsDbew4qFc.jpg" />
       <div class="card-body">
          <h5 class="card-title"> All about Techie Ads .......</h5>
          {/* <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> */}
       </div>
     </div>

     {/* carrier cards section */}
     <div className='bg'>
        <div className='pt-4 careertitle  border-3 border-bottom border-black'>
          {/* title */}
          <h1 className='pb-3 '>Carrer Opportunities</h1>
        </div>

        {/* cards */}
        <div>
         <div className='container careerrow my-5'>
           <div className='row  mw-100'>
             {/* 1st col */}
             <div className='col-4 col1 mw-100 collapse-group'>
               <img className='w-100 h-100 col1img object-fit-cover'
               src='https://media.istockphoto.com/id/1372188618/vector/work-2110150007-converted.jpg?s=612x612&w=0&k=20&c=uLGKB7b8NyiCYrNoQTd12MiuztoBeb38ZQdH6qGlrzE='></img>
               <div className='col1content text-white' >
                 <h4>Internship Traning for 4 Months</h4>
                 <p className='pt-5'>Are you looling to kick start your career in a dynamic and supportive environment? <br/>
                 <a className='text-white' data-toggle="collapse" data-target="#viewdetails1" href='#viewdetails1' aria-expanded="false" aria-controls="viewdetails1">
                  Read more &raquo;</a>
                 </p>
                  <div class="collapse" id="viewdetails1">
                   <div class="card card-body">
                     Our 4 months hands on experience internship program offers hands on experience
                   </div>
                 </div>
                 <button class="btn btn-primary pt-2" type="button">Apply</button>
               </div>
             </div>

             {/* 2nd col */}
             <div className='col-4 col1 mw-100 has-bg-img collapse-group'>
               <img className='w-100 h-100 col1img bg-img object-fit-cover'
               src='https://st3.depositphotos.com/1008336/12856/v/950/depositphotos_128566090-stock-illustration-lecture-in-front-of-the.jpg'></img>
               <div className='col1content text-white' >
                 <h4>Full Time Internship</h4>
                 <p className='pt-5'>Are you looling to kick start your career in a dynamic and supportive environment? <br/>
                 <a className='text-white' data-toggle="collapse" data-target="#viewdetails1" href='#viewdetails1' aria-expanded="false" aria-controls="viewdetails1">
                  Read more &raquo;</a>
                 </p>
                  <div class="collapse" id="viewdetails1">
                   <div class="card card-body">
                     Our 4 months hands on experience internship program offers hands on experience
                   </div>
                 </div>
                 <button class="btn btn-primary pt-2" type="button">Apply</button>
               </div>
             </div>
             {/* 3rd col */}
             <div className='col-4 col1 mw-100 has-bg-img collapse-group'>
               <img className='w-100 h-100 col1img bg-img object-fit-cover'
               src='https://codersera.com/blog/wp-content/uploads/2019/07/f1.png'></img>
               <div className='col1content text-white' >
                 <h4>Full Time Freelancer</h4>
                 <p className='pt-5'>Are you looling to kick start your career in a dynamic and supportive environment? <br/>
                 <a className='text-white' data-toggle="collapse" data-target="#viewdetails1" href='#viewdetails1' aria-expanded="false" aria-controls="viewdetails1">
                  Read more &raquo;</a>
                 </p>
                  <div class="collapse" id="viewdetails1">
                   <div class="card card-body">
                     Our 4 months hands on experience internship program offers hands on experience
                   </div>
                 </div>
                 <button class="btn btn-primary pt-2" type="button">Apply</button>
               </div>
             </div>
             {/* 4th col*/}
           </div>
           {/* arrow */}
           <div className=''>
             <button className='rounded-circle arrow border-3 border-black border text-white p-2'> <ArrowForwardIcon></ArrowForwardIcon></button>
           </div>
         </div>
       </div>
     </div>


    </div>
    
  )
}

export default Career