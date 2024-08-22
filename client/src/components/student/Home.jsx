import React,{useEffect,useState} from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import RightSide from './RightSide'
import { useNavigate } from 'react-router-dom'
// import getUserIdFromToken from "./auth/authUtils"
import { useParams } from 'react-router-dom';
import getUserIdFromToken from './auth/authUtils';
import Spinner from '../common/Spinner'
import { useStudent } from './context/studentContext'


const Home = () => {

  const navigate = useNavigate();
  const { userId } = useParams();
  const idFromToken = getUserIdFromToken();
  const {student}=useStudent();

 



  useEffect(() => {
    const token=localStorage.getItem('token');
    
    if(!token ){
      navigate('/student/login');
      return;
    }
    if(userId!==idFromToken){
      localStorage.removeItem('token');
      return;
    }
   
    console.log(userId);
  }, [userId,idFromToken])

  


  
  return (
   <>
      {student?(
          <div className='Home'>
        <Sidebar student={student}/>
          <RightSide/>
          </div>
      ):(<Spinner/>)
      }
  </>
    
  )
}

export default Home