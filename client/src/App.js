import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart'
import MensClothing from './pages/MensClothing';
import WomensClothing from './pages/WomensClothing';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import EditProducts from './pages/EditProducts';
import AddProduct from './pages/AddProduct';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/men' element={<MensClothing />} />
        <Route path='/products/women' element={<WomensClothing />} />
        <Route path='/products/electronics' element={<Electronics />} />
        <Route path='/products/jewelery' element={<Jewelery />} />
        <Route path='/editproducts' element={<EditProducts />} />
        <Route path='/addproduct' element={<AddProduct />} />
      </Routes>
    </>
  );
}

export default App;
