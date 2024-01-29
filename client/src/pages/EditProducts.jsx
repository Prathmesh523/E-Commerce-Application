import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../index.css'
import EditCard from '../components/EditCard'
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom'

export default function EditProducts() {
    const navigate=useNavigate()
    const [details, setDetails] = useState([])
    const [role, setRole] = useState(null)

    useEffect(() => {
        const display = async () => {
            const data = await axios.get("http://localhost:5000/products/allproducts")
            setDetails(data.data.products)

            const token = localStorage.getItem("token")
            if (token != null) {
                const role = await axios.post("http://localhost:5000/users/getrole", [token])
                setRole(role.data.data)
            }
            else {
                setRole(null)
            }
        }
        display()
    }, [])

    return (
        <>
            <Navbar role={role} />
            <div className='home-content'>
                <div className="add-product">
                    <Button size="large" variant='contained' onClick={()=>{navigate("/addproduct")}}>Add New Product</Button>
                </div>

                <div className="category-row">
                    <Typography variant='h4' sx={{ marginBottom: "10px" }}>All Products</Typography>
                    <Grid container direction='row' spacing={2}>
                        {details.map((entry) => (
                            <Grid item md={3}>
                                <EditCard title={entry.title} price={entry.price} description={entry.description} image={entry.image} rating={entry.rating.rate} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    )
}
