import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import '../index.css'

export default function UpdateProduct({title, price, description, category, image, rate, count, setTitle, setPrice, setDescription, setCategory, setImage, setRate, setCount}) {
    const [role, setRole] = useState(null)
    const navigate = useNavigate()

    const submit = async (e) => {
        e.preventDefault()
        if(title.length===0 || price.length===0 || description.length===0 || category===0 || image.length===0 || rate.length===0 || count.length===0)
        {
            console.log("All fields are mandatory")
        }
        else
        {
            const rating={rate,count}
            const data = await axios.post('http://localhost:5000/products/update', [title,price,description,category,image,rating])

            if (data.data.status) {
                setTitle(null)
                setPrice(null)
                setDescription(null)
                setCategory(null)
                setImage(null)
                setRate(null)
                setCount(null)
                navigate("/editproducts")
            }
        }
    }

    useEffect(() => {
        const display = async () => {
            const token = localStorage.getItem("token")
            if (token != null) {
                const role = await axios.post("http://localhost:5000/users/getrole", [token])
                if(role.data.data===1)
                {
                    setRole(role.data.data)
                }
                else
                {
                    navigate("/")
                }
            }
            else {
                setRole(null)
                navigate("/")
            }
        }
        display()
    }, [])


    return (
        <>
            <Navbar role={role} />
            <div className='bottom-container'>
                <div className="form-container">
                    <div className="form-container-details">
                        <div className="form-container-title">
                            Shopify
                        </div>
                        <div className="form-container-subtitle">
                            Update Product Details
                        </div>
                    </div>
                    <form className='form' onSubmit={submit}>
                        <div className='middle-content'>
                        <div className='left-side'>
                            <div className="form-field">
                                <input className='form-input' type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <input className='form-input' type="number" step="0.01" placeholder='Price' value={price} onChange={e => setPrice(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <input className='form-input' type="text" placeholder='Description' value={description} onChange={e => setDescription(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <input className='form-input' type='text' placeholder='Category' value={category} onChange={e => setCategory(e.target.value)} />
                            </div>
                        </div>
                        <div className='right-side'>
                            <div className="form-field">
                                <input className='form-input' type="text" placeholder='Image' value={image} onChange={e => setImage(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <input className='form-input' type="number" step="0.1" placeholder="Rating" value={rate} onChange={e => setRate(e.target.value)} />
                            </div>
                            <div className="form-field">
                                <input className='form-input' type="number" placeholder='Total Ratings' value={count} onChange={e => setCount(e.target.value)} />
                            </div>
                        </div>
                        </div>
                    
                        <button className='form-submit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </>
    )
}
