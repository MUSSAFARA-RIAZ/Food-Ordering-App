import React, { useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { NavLink } from 'react-router-dom'

export default function SignUp() {
  const [credientials, setcredientials] = useState({
    name: '',
    email: '',
    password: '',
    location: '',
  })
  const handleclick = async (e) => {
    e.preventDefault()
    const response = await fetch('http://localhost:5000/api/createuser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: credientials.name,
        password: credientials.password,
        email: credientials.email,
        location: credientials.location,
      }),
    })
    const json = await response.json()
    console.log(json)
    if (!json.success) {
      alert('Enter valid credientials')
    }
  }
  const func = (e) => {
    setcredientials({ ...credientials, [e.target.name]: e.target.value })
  }

  return (
    <>
      <Header />
      <div className="container">
        <h1>signup</h1>
        <Form onSubmit={handleclick}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={credientials.name}
              onChange={func}
            />
          </Form.Group>
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
          <Form.Group className="mb-3" controlId="formBasicPassword1">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              placeholder="location"
              name="location"
              value={credientials.location}
              onChange={func}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
          {/* */}
          <Button variant="danger" className="m-3" type="submit">
            <NavLink
              to="/login"
              style={{ textDecoration: 'none', color: 'white', margin: '20' }}
            >
              Already a User
            </NavLink>
          </Button>
        </Form>
      </div>
    </>
  )
}
