import { Routes, Route } from 'react-router-dom'
import { useState } from 'react';
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
import UpdateProduct from './pages/UpdateProduct';

function App() {
    const [title, setTitle] = useState(null)
    const [price, setPrice] = useState(null)
    const [description, setDescription] = useState(null)
    const [category, setCategory] = useState(null)
    const [image, setImage] = useState(null)
    const [rate, setRate] = useState(null)
    const [count, setCount] = useState(null)

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
        <Route path='/editproducts' element={<EditProducts setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} setCategory={setCategory} setImage={setImage} setRate={setRate} setCount={setCount} />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/updateproduct' element={<UpdateProduct title={title} price={price} description={description} category={category} image={image} rate={rate} count={count}
                                                        setTitle={setTitle} setPrice={setPrice} setDescription={setDescription} setCategory={setCategory} setImage={setImage} setRate={setRate} setCount={setCount} />}></Route>
      </Routes>
    </>
  );
}

export default App;
