import './App.css';
import Navbar from './components/header/Navbaar';
import Maincomp from './components/home/Maincomp';
import Newnav from './components/newnavbaar/Newnav';
import Footer from './components/footer/footer';
import Sign_in from './components/signup_sign/Sign_in';
import Signup from './components/signup_sign/SignUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom";
import { useEffect, useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

function App() {
     
  const [data, setData] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setData(true);
    }, 1000);
  }, [])



  return (
    <>
    {
        data ? (
          <>
     <Navbar/>
     <Newnav/>
     <Routes>
      <Route path='/' element={<Maincomp/>} />
      <Route path='/login' element={<Sign_in/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/getproductsone/:id' element={<Cart/>} />
      <Route path='/buynow' element={<Buynow/>}/>
     </Routes>
     <Footer/>
    </>
    
   ) : (
    <div className="circle">
      <CircularProgress />
      <h2> Loading....</h2>
    </div>
  )
}
</>
  );
}


export default App;
