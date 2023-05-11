
import React,{useEffect,createContext,useReducer,useContext, useState} from 'react'
import './App.css';
import Footer from './components/Footer';
import NavBars from './components/NavBars';
import About from './screens/About';
import AllPosts from './screens/AllPosts';
import Contact from './screens/Contact';
import Home from './screens/Home';
import { BrowserRouter as Router,Routes,Route,useNavigate } from 'react-router-dom';
import PostDetail from './screens/Postdeatil';
import CreatePost from './screens/CreatePost';
import Signup from './screens/Signup';
import Login from './screens/Login';
import { intialUserState,userReducer } from './reducers/userReducer';
import MyAllPosts from './screens/Myallposts';

export const UserContext=createContext();

function DynamicRoutes(){
  const navigate=useNavigate();
  const {state,dispatch}=useContext(UserContext);

  useEffect(()=>{
    const token=localStorage.getItem("token");
    if(token){   // user is logedin
      const user=JSON.parse(localStorage.getItem("user"));
      const userState={'token':token,'user':user};
      const action={type:'LOGIN', payload:userState};
      dispatch(action);
      navigate('/post');

    }
    else{
      navigate('/login');
    }

  },[]);

 
  return(
    <Routes>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
      <Route exact path='/create' element={<CreatePost/>}></Route>
      <Route exact path='/create/:postId/:userId' element={<CreatePost/>}></Route>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/signup' element={<Signup/>}></Route>
      <Route exact path='/login' element={<Login/>}></Route>
      <Route exact path='/post' element={<AllPosts/>}></Route>
      <Route exact path='/myposts' element={<MyAllPosts/>}></Route>
      <Route exact path="/post/:postId/:userId" element={<PostDetail/>}></Route>

      
     </Routes>

  );
}

function App() {
  const [state,dispatch]=useReducer(userReducer,intialUserState);
  
  return (

    
    
   <UserContext.Provider value={{state: state , dispatch: dispatch}}>

   
     <Router>

<div >
     <NavBars  >  </NavBars>
     <DynamicRoutes/>
      <Footer/>
     
    </div>
     </Router>
     </UserContext.Provider>
      
  );
}

export default App;
