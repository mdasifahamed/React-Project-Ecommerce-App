import './App.css';
import MyProvider from './MyContext';
import { Route,Routes } from 'react-router-dom';
import Home from './Components/Homepage/Home/Home';
import Navbar from './Components/Homepage/Navbar/Navbar';
import Productdetails from './Components/ProductDetatils/ProductDetails';
import Cart from './Components/Cart/Cart';


// My Prover In The Compenents That We have Defined In MyContext
// This Will provide Everty dat to Ur Compononets TO render Data 
// Wer Using Rounting As we will Have Many Pages
const App =()=>{

  return(
    <>
     <MyProvider>
     
     {/*Navbar will be in every page So it is Out Of routing*/}
        <Navbar/>
        <Routes>
        <Route path={'/'} element={<Home></Home>}></Route>{/*  Rout To From Any Page*/}
        <Route path={'/product/:id'} element={<Productdetails></Productdetails>}></Route>{/*route to ProductDetails Componenet Form Home */}
        <Route path={'/cart'} element={<Cart></Cart>}></Route>{/*route to Cart Componenet Form Home */}
        </Routes>
      
     </MyProvider>
    </>
  )
}


export default App;