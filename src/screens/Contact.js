import React from 'react'

function Contact() {
  return (
    <div className='container shadow-sm  border-danger p-2 '>
      <h3 className='text-center text-uppercase py-4'>Contact Us</h3>
      <div className='shadow-sm text-muted'>
      <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Full Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name" required/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Contact Number</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Contact No"/>
    
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    
  </div>
  <div class="form-group">
  <label for="exampleInputEmail1">Timing</label>
  <select class="custom-select" id="exampleInputEmail1">
    <option selected>Best time to reach</option>
    <option value="1">Morning</option>
    <option value="2">Afternoon</option>
    <option value="3">Evening</option>
  </select>
    </div>

    <div class="form-group">
    <label for="query">Enter your query below</label>
        <textarea class="form-control" id="query">

        </textarea>
    </div>
 <div class="btn btn-primary btn-lg btn-block">
 <button type="submit" class="btn btn-primary">Submit</button>
 </div>
  
</form>
      </div>
      
    </div>
  )
}

export default Contact
