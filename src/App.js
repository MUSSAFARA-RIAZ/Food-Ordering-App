import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';

import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
//import CartProvider from './Components/ContextReducer';


function App() {
  return (
    // <CartProvider>
    <Router>
  
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/login' element={<Login/>} />
        <Route exact path='/createuser' element={<SignUp/>}/>

      </Routes>
     
     
   
    </Router>
    // </CartProvider> 
  );
}

export default App;
