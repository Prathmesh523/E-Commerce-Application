import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../index.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'
import CartCard from '../components/CartCard'

export default function Cart() {
    const navigate = useNavigate()
    const [details, setDetails] = useState([])
    const [role, setRole] = useState(null)
    const [userId, setUserId] = useState(null)
    const [deleteItem, setDeleteItem] = useState(null)

    const roleFunc = async () => {
        const token = localStorage.getItem("token")
        if (token != null) {
            const role = await axios.post("http://localhost:5000/users/getrole", [token])
            setRole(role.data.data)
        }
        else {
            setRole(null)
            navigate("/login")
        }

        const id = await axios.post("http://localhost:5000/users/getid", [token])
        const user_id = id.data.data
        setUserId(user_id)
        console.log(user_id)
        const data = await axios.post("http://localhost:5000/cart/getall", [user_id])
        console.log(data.data.products)
        setDetails(data.data.products)
    }
    useEffect(() => {
        roleFunc()
    }, [])

    useEffect(() => {
        const display = async () => {
            if (deleteItem !== null) {
                const itemTitle = details[deleteItem].title
                const res = await axios.post("http://localhost:5000/cart/delete", [userId, itemTitle])
                if (res.data.status) {
                    setDeleteItem(null)
                    roleFunc()
                }
            }

        }
        display()
    }, [deleteItem])

    return (
        <>
            <Navbar role={role} />
            <div className='home-content'>
                <div className="add-product">
                    <Button size="large" variant='contained' onClick={() => { }}>Checkout</Button>
                </div>

                <div className="category-row">
                    <Typography variant='h4' sx={{ marginBottom: "10px" }}>Your Products</Typography>
                    <Grid container direction='row' spacing={2}>
                        {details.map((entry, index) => (
                            <Grid key={index} item md={3}>
                                <CartCard index={index} setDeleteItem={setDeleteItem} title={entry.title} price={entry.price} description={entry.description} image={entry.image} rating={entry.rating.rate} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    )
}
