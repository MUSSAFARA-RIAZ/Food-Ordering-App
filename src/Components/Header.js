import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink , useNavigate } from 'react-router-dom'
function ColorSchemesExample() {
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem("authToken");
    navigate("/login");
  }
  return (
    <>
      <Navbar bg="success" variant="light">
        <Container>
          <NavLink
            to="#home"
            style={{
              color: 'white',
              fontSize: 20,
              margin: 10,
              textDecoration: 'none',
              fontStyle: 'italic',
            }}
          >
            Food_On
          </NavLink>
          <Nav className="me-auto">
            <NavLink
              to="/"
              style={{
                color: 'lightgreen',
                margin: 10,
                fontSize: 20,
                textDecoration: 'none',
              }}
            >
              Home

            </NavLink>
            {
              localStorage.getItem("authToken")?
              <NavLink to='/'  style={{
                color: 'lightgreen',
                margin: 10,
                fontSize: 20,
                textDecoration: 'none',
              }}>Order Page</NavLink>
              :""
            }
          </Nav>
          {
            !localStorage.getItem("authToken")?

          
          <div
            style={{
              display: 'flex',
              flexDirection: 'flex-end',
              marginRight: '0px',
            }}
          >
            <NavLink
              to="/login"
              className="btn btn-light text-success "
              style={{
                float: 'right',
                color: 'green',
                margin: 10,
                fontSize: 20,
                textDecoration: 'none',
              }}
            >
              Login
            </NavLink>
            <NavLink
              to="/createuser"
              className="btn btn-light text-success"
              style={{
                color: 'green',
                margin: 10,
                fontSize: 20,
                textDecoration: 'none',
              }}
            >
              SignUp
            </NavLink>
          </div>
:<div>
   <button
         
         style={{
           color: 'green',
           margin: 10,
           fontSize: 17,
           textDecoration: 'none',
           border:"2px solid white",
           borderRadius:"10px",
           padding:"10px",
           width:"120px"
         }}
       >
       Cart
       </button>
   <button
         
              style={{
                color: 'red',
                margin: 10,
                fontSize: 17,
                textDecoration: 'none',
                border:"2px solid white",
                borderRadius:"10px",
                padding:"10px"
              }} onClick={handleLogout}
            >
             LogOut 
            </button>
  </div>}
        </Container>
      </Navbar>
    </>
  )
}
export default ColorSchemesExample
