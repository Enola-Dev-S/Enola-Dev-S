import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Logins() {
  const navigate = useNavigate()
  const MySwal = withReactContent(Swal)
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "username": inputs.username,
      "password": inputs.password,
      "expiresIn": 60000
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://www.melivecode.com/api/login", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result)
        if (result.status === 'ok'){
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'success'
          }).then((value) => {
            navigate('/Main')
          })
        }else{
          MySwal.fire({
            html: <i>{result.message}</i>,
            icon: 'error'
          })
        }
      })
      .catch(error => console.log('error', error));
      
    console.log(inputs);
  }

  return (
    // <div>
    //    <form onSubmit={handleSubmit}>
    //   <label>Enter Username:
    //   <input 
    //     type="text" 
    //     name="username" 
    //     class="login__input"
    //     value={inputs.username ="karn.yong@melivecode.com"} 
    //     //value={inputs.username || "karn.yong@melivecode.com"} 
    //     onChange={handleChange}
    //   />
    //   </label>
    //   <label>Enter Password:
    //     <input 
    //       type="password" 
    //       name="password" 
    //       value={inputs.password ="melivecode"} 
    //       //value={inputs.password || "melivecode"} 
    //       onChange={handleChange}
    //     />
    //     <p>"username": "karn.yong@melivecode.com", "password": "melivecode",</p>
    //     </label>
    //     <input type="submit" />
    // </form>
    // </div>
    <div class="container">
            <div class="screen">
                <div class="screen__content">
                    <form class="login" onSubmit={handleSubmit}>
                        <div class="login__field">
                            {/* <i class="login__icon fas fa-user"></i> */}
                            <input type="text" name="username" 
                            class="login__input"  
                            //placeholder="User name / Email" 
                            onChange={handleChange}
                            value={inputs.username ="karn.yong@melivecode.com"} 
                            />
                        </div>
                        <div class="login__field">
                            <i class="login__icon fas fa-lock"></i>
                            <input type="password" name='password' 
                            class="login__input" 
                            //placeholder="Password" 
                            onChange={handleChange}
                            value={inputs.password ="melivecode"}
                            />
                        </div>
                        <button class="button login__submit" type='submit'>
                            <span class="button__text">Log In Now</span>
                            <i class="button__icon fas fa-chevron-right"></i>
                        </button>
                    </form>
                    <div class="social-login">
                        <h3>log in via</h3>
                        <div class="social-icons">
                            <a href="#" class="social-login__icon fab fa-instagram"></a>
                            <a href="#" class="social-login__icon fab fa-facebook"></a>
                            <a href="#" class="social-login__icon fab fa-twitter"></a>
                        </div>
                    </div>
                </div>
                <div class="screen__background">
                    <span class="screen__background__shape screen__background__shape4"></span>
                    <span class="screen__background__shape screen__background__shape3"></span>
                    <span class="screen__background__shape screen__background__shape2"></span>
                    <span class="screen__background__shape screen__background__shape1"></span>
                </div>
            </div>
        </div>
        
  )
}

export default Logins