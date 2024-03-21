import './App.css';

import TopBar from './components/TopBar';
import LandingPage from './Pages/LandingPage';
import CartPage from './Pages/CartPage';
import LoginPage from './Pages/LoginPage';
import SellerPage from './Pages/SellerPage';
import SignUpPage from './Pages/SignUpPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<LandingPage />} />  
        <Route path='/cart' element={<CartPage />} />  
        <Route path='/seller' element={<SellerPage />} />  
        <Route path='/signup' element={<SignUpPage />} />  
        <Route path='/login' element={<LoginPage />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
