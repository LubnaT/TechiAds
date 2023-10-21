import React from 'react'


function Navbar() {
  return (
    <div>
     <div className='navcolor d-flex flex-row p-2 justify-content-between '>
       <div className='d-flex ms-5 '>
          {/* title */}
         <div className='d-flex ms-3'>
           <a className=' d-flex fs-3 fw-bold text-white'>TechieAds</a>
          </div>
          {/* navbar menu */}
         <div className='d-flex ms-5 mt-2 fs-6 fw-bolder'>
           <a className='d-flex ps-5  text-white'>Home</a>
           <a className='d-flex ps-5  text-white'>About Us</a>
           <a className='d-flex ps-5  text-white'>Products and Services</a> 
           <a className='d-flex ps-5  text-white' >Career</a>   
           <a className='d-flex ps-5 text-white'>Contact</a>
         </div> 
       </div>
        {/* 1st dropdown */}
       <div className='d-flex justify-content-end me-5 pe-2 mw-100' >
         <div className='mt-2'>
           <span className='rounded-circle bg-danger badge'>1</span>
         </div>
         <div className='dropdown'>
           <button className='btn btn-transparent dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           </button>
           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><a class="dropdown-item" href="#">Action</a></li>
             <li><a class="dropdown-item" href="#">Another action</a></li>
             <li><a class="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </div>
                   {/* 2nd dropdown */}
         <div className='dropdown'>
           <button className='btn btn-transparent dropdown-toggle' type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
           </button>
           <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
             <li><a class="dropdown-item" href="#">Action</a></li>
             <li><a class="dropdown-item" href="#">Another action</a></li>
             <li><a class="dropdown-item" href="#">Something else here</a></li>
           </ul>
         </div>
       </div>   
     </div>
        
    </div>
  )
}

export default Navbar