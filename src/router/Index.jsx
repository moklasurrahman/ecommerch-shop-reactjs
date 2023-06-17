
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Navbar from './../components/Navbar';
import Erroe from './Erroer';
import CartPage from './../pages/cartPage/CartPage';
import RegistrationForm from '../pages/register/RegistrationForm';
import LoginForm from '../pages/register/LoginForm';
import AdminHome from '../admin/Home/Home';
import ProductList from '../pages/ProductList';
import ProtectedRoutes from './ProtectedRoutes';
import ProductDetail from '../pages/ProductDetail';



const Index = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
       <Routes>
        
            <Route path='/' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
            <Route path='/Products' element={ <ProtectedRoutes><ProductList/></ProtectedRoutes>}/>
            <Route path='/Product/:id' element={ <ProtectedRoutes><ProductDetail/></ProtectedRoutes>}/>
            <Route path='/cart' element={<ProtectedRoutes><CartPage/></ProtectedRoutes>}/>
            <Route path='/signUp' element={<RegistrationForm/>}/>
            <Route path='/login' element={<LoginForm/>}/>

            <Route path='/admin' element={<AdminHome/>}/>
            <Route path='*' element={<Erroe/>}/>
        </Routes>
  </BrowserRouter>
    </>
  )
}

export default Index