/* eslint-disable jsx-a11y/alt-text */
import {useState,useEffect} from 'react'
import { useNavigate, useResolvedPath } from 'react-router-dom'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';



function Main() {
  const [IsLoadded,setIsLoaded]= useState(true);
  const [User,setUser]= useState({});  
  const MySwal = withReactContent(Swal)
  const navigate = useNavigate();

  const clickLogout = () =>{
    localStorage.removeItem('token')
    navigate('/',{replace:true});
  };

  useEffect(() => {
    const token = localStorage.getItem('token')
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer "+ token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/auth/user", requestOptions)
      .then(response => response.json())
      .then(result => {
        if(result.status === 'ok'){
          setUser(result.user)
          setIsLoaded(false)
        }else if (result.status === 'forbidden'){
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
          }).then((value) =>{
            navigate('/')
          });
        }
        console.log('user ' + result.User.fname)
        console.log('result ',result)
      })
      .catch(error => {
        console.log('error', error)}
        );
  }, [])

  if(IsLoadded){
    return <div> Loading</div>
  }else{
    return (
      <><nav class="navbar navbar-inverse">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Logo</a>
          </div>
          <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav">
              <li class="active"><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
            <ul class="nav navbar-nav navbar-right">
              <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
            </ul>
          </div>
        </div>
      </nav><div className="App-header">
          <div>Main</div>
          <p>อีหยังว่ะ</p>
          <div>{User.fname} </div>
          <div>{User.lname}
            <div>{User.id}</div>
            <div>{User.email}</div>
            {/* <img src={User.avatar}></img> */}
          </div>
          <button className='Submit' onClick={clickLogout}>logout</button>
        </div></>
    );
  }
}

export default Main