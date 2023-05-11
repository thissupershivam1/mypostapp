import React from 'react'
import './home.css'

function Home() {
  return (
    <div>
      <section className='hero-section'>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src="https://media.istockphoto.com/id/1452722745/photo/houses-with-solar-panels.jpg?b=1&s=170667a&w=0&k=20&c=bFCxYTizUf0kNqs2drJbImo2-qK5EGOI0KQHJfuc0f4=" alt="First slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60" alt="Third slide"/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
      </section>
      <section className='featured-posts container'>
      <h3 className='text-center text-uppercase py-4'>Featured Post</h3>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
        <div class="card" >
  <img className="card-img-top" src="https://media.istockphoto.com/id/1396858846/photo/american-traditional-colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=QegK9brcDlD7ZSo20c_RAkw7R2pqYYJlgRo0HuMzzjk=" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className='d-grid'>
   <a href="#" className="btn btn-warning">Read More</a>
   </div>
  </div>
</div>

        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
        <div class="card" >
  <img className="card-img-top" src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
      </div>
  </div>
</div>

        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
        <div class="card" >
  <img className="card-img-top" src="https://media.istockphoto.com/id/1396147003/photo/mature-couple-looking-at-the-view-in-their-waterfront-home.jpg?b=1&s=170667a&w=0&k=20&c=8QfvVF_TvrOltq7Yi9WltjkZZrVBQH9ksK4Ksp3bZGQ=" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-grid'>
   <a href="#" className="btn btn-warning">Read More</a>
   </div>
  </div>
</div>

        </div>

      </div>
      </section>
      <section className='latest-posts container'>
      <h3 className='text-center text-uppercase py-4'>Latest Post</h3>
      <div className='row'>
        <div className='col-lg-4 col-md-4 col-sm-12'>
        <div class="card" >
  <img className="card-img-top" src="https://media.istockphoto.com/id/1396858846/photo/american-traditional-colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=QegK9brcDlD7ZSo20c_RAkw7R2pqYYJlgRo0HuMzzjk=" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
   <div className='d-grid'>
   <a href="#" className="btn btn-warning">Read More</a>
   </div>
  </div>
</div>

        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
        <div class="card" >
  <img className="card-img-top" src="https://media.istockphoto.com/id/1396856251/photo/colonial-house.jpg?b=1&s=170667a&w=0&k=20&c=gtwOJj8NhCVhDxz8_JxkN8sJFVjEiT9knHYT8VutTLI=" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-grid'>
        <a href="#" className="btn btn-warning">Read More</a>
      </div>
  </div>
</div>

        </div>
        <div className='col-lg-4 col-md-4 col-sm-12'>
        <div class="card" >
  <img className="card-img-top" src="https://media.istockphoto.com/id/1396147003/photo/mature-couple-looking-at-the-view-in-their-waterfront-home.jpg?b=1&s=170667a&w=0&k=20&c=8QfvVF_TvrOltq7Yi9WltjkZZrVBQH9ksK4Ksp3bZGQ=" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <div className='d-grid'>
   <a href="#" className="btn btn-warning">Read More</a>
   </div>
  </div>
</div>

        </div>

      </div>
      </section>
      <section className='d-flex flex-column justify-content-center alignitems-centercontainer-fluid bg-primary bg-gradient mt-4' style={{minHeight: "180px"}}>
        <div className='d-flex flex-column justify-content-center align-items-center'>
        <i className="fs-1 text-warning my-3 fa-solid fa-location-dot" style={{ fontSize:"50px"}}></i>
        <h2 className='text-white text-uppercase'>
          We have wide variety of posts
        </h2>
        <button className='btn btn-warning text-uppercase fw-bold'>
          View All Post
        </button>

        </div>
        

      </section>
      <section className="out-portfolio container">
        <h3 className="text-center text-uppercase py-4"> Our portfolio</h3>

        <div className=" text-center">
          <div className="row g-2">
            <div className="col-6">
              <div className="p-1 border bg-light">
              <img src="https://images.unsplash.com/photo-1573167278390-0699fb12be46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzF8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
                
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
              <img src="https://images.unsplash.com/photo-1600607688960-e095ff83135c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzR8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
              <img src="https://images.unsplash.com/photo-1600566753151-384129cf4e3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjB8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
            <div className="col-6">
              <div className="p-1 border bg-light">
              <img src="https://images.unsplash.com/photo-1565953554309-d181306db7d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjN8fGhvdXNlc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card-img-top" alt="..." />
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

export default Home
