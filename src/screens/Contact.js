import React from 'react'
import './Contact.css' 

function Contact() {
  return (
    <div className='container shadow-sm  border-danger p-2 '>
      <h3 className='text-center text-uppercase py-4'>Contact Us</h3>
      <div className=' contact-form-container mx-auto shadow-sm text-muted'>
      <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Full Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" required/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Contact Number</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No"/>
    
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div className="form-group">
  <label htmlFor="exampleInputEmail1">Timing</label>
  <select className="custom-select" id="exampleInputEmail1">
    <option defaultValue ="" >Best time to reach</option>
    <option value="1">Morning</option>
    <option value="2">Afternoon</option>
    <option value="3">Evening</option>
  </select>
    </div>

    <div className="form-group">
    <label htmlFor="query">Enter your query below</label>
        <textarea className="form-control" id="query">

        </textarea>
    </div>
 <div className="btn btn-primary btn-lg btn-block">
 <button type="submit" className="btn btn-primary">Submit</button>
 </div>
  
</form>
      </div>
      
    </div>
  )
}

export default Contact
