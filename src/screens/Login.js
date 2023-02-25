import React, {useState} from 'react';
import Header from "../Components/Header";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink ,useNavigate } from 'react-router-dom';
export default function Login() {
  
  const [credientials, setcredientials] = useState({
  
    email: '',
    password: '',
   
  })
  let navigate=useNavigate();
  const handleclick = async (e) => {
    e.preventDefault();
    const response = await
    fetch('http://localhost:5000/api/loginuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
       
        password: credientials.password,
        email: credientials.email,
       
      }),
     
    });
    const json= await response.json();
    console.log(json);
    if(!json.success){
     alert("Enter valid credientials");

    }
    if(json.success){
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));

      navigate("/");

    }
   
  }
  const func = (e) => {
    setcredientials({ ...credientials, [e.target.name]: e.target.value })
  }
  return (
    <div>
     <Header/>
      <h1>Login page</h1>
      <div className='container'>
      <Form  onSubmit={handleclick} >
      <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={credientials.email}
              onChange={func}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={credientials.password}
              onChange={func}
            />
          </Form.Group>
      
          <Button variant="success" type="submit">
            Login
          </Button>
       
          <Button variant="danger" className="m-3" type="submit">
            <NavLink
              to="/createuser"
              style={{ textDecoration: 'none', color: 'white', margin: '20' }}
            >
              New User
            </NavLink>
          </Button>
          </Form>
    </div>
    </div>
  )
}
