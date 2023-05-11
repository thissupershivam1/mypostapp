import React ,{useEffect, useState}from 'react'
import { API_BASE_URL } from '../config/constant'
import {Link,useNavigate} from 'react-router-dom';
import axios from 'axios';


function AllPosts() {
  const navigate=useNavigate()
  const [posts,setPosts] =useState([])
  const [loader,setLoader]=useState(false)

  function alertFunction(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    var alertPlaceholder = document.getElementById('alertMsg')

    alertPlaceholder.append(wrapper)
  }
  

  const deletePost=(postId)=>{
    // console.log(postId);
    let action =window.confirm("Are you sure to proceed?");
    if(action){
    axios.delete(`${API_BASE_URL}/posts/${postId}`)
    .then((resp)=>{
      console.log(resp)
      alertFunction(`Post with Id ${postId} has been deleted  ` ,'success')
      navigate('/post')
    })
    .catch((err)=>{
      console.log(err)
      alertFunction(` Error occured while deleting the post ` ,'danger')
    });
  }
  }

  //ES6 Function to get all post from REST API
  const getAllPosts=()=>{
    setLoader(true)
    fetch(`${API_BASE_URL}/posts`)
    .then((response) => response.json())
    .then((json) => {
      // console.log(json)
      setPosts(json)
      setLoader(false)
    });
  }

  //we want to load data on page load of this component
  useEffect(()=>{
    console.log("all posts loded")
    getAllPosts();
    
},[]);
  return (
    <div>
     <section className='featured-posts container'>
      <h3 className='text-center text-uppercase py-4'>All Post</h3>
      <div id='alertMsg'>

      </div>
      <div className='row'>
        
        { 
          loader? 
          // loader
          <div className='col-12 text-center'>
          <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
          </div>
          </div>
          
         :
        posts.map((post,index)=>{
       return < div key ={post.id} className='col-lg-4 col-md-4 col-sm-12'>
        <div className="card" >
  <img className="card-img-top" src="https://source.unsplash.com/random/400*400/?city,night" alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{post.title}</h5>
    <p className="card-text">{post.body}</p>
   <div className='d-flex justify-content-between'>
   <Link to={`/post/${post.id}/${post.userId}`} className="btn btn-primary"><i className="fa-solid fa-location-arrow fa-shake me-1"></i>Detail</Link>
   <Link to={`/create/${post.id}/${post.userId}`} className="btn btn-warning"> <i className="fa-solid fa-pen-to-square me-1"></i>Edit</Link>
   <button onClick={()=>{deletePost(post.id)}} className="btn btn-danger"><i className="fa-sharp fa-solid fa-trash fa-bounce me-1"></i>Delete</button>
   </div>
  </div>
</div>

        </div>
       
      })
        }
      </div>
      </section>
    </div>
  )
}

export default AllPosts
