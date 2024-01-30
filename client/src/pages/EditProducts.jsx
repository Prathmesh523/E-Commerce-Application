import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../index.css'
import EditCard from '../components/EditCard'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

export default function EditProducts({setTitle, setPrice, setDescription, setCategory, setImage, setRate, setCount}) {
    const navigate = useNavigate()
    const [details, setDetails] = useState([])
    const [role, setRole] = useState(null)
    const [deleteItem, setDeleteItem] = useState(null)
    const [editItem, setEditItem] = useState(null)


    const roleFunc = async () => {
        const data = await axios.get("http://localhost:5000/products/allproducts")
        setDetails(data.data.products)

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
    useEffect(() => {
        roleFunc()
    },[])

    useEffect(() => {
        const display = async () => {
            if (deleteItem !== null) {
                const itemTitle = details[deleteItem].title
                const res = await axios.post("http://localhost:5000/products/delete", [itemTitle])
                if(res.data.status)
                {
                    setDeleteItem(null)
                    roleFunc()
                }
            }

        }
        display()
    }, [deleteItem])

    useEffect(()=>{
        const display=async()=>{
            if (editItem !== null) {
                setTitle(details[editItem].title)
                setPrice(details[editItem].price)
                setDescription(details[editItem].description)
                setCategory(details[editItem].category)
                setImage(details[editItem].image)
                setRate(details[editItem].rating.rate)
                setCount(details[editItem].rating.count)
                navigate("/updateproduct")
            }
        }
        display()
    },[editItem])

    return (
        <>
            <Navbar role={role} />
            <div className='home-content'>
                <div className="add-product">
                    <Button size="large" variant='contained' onClick={() => { navigate("/addproduct") }}>Add New Product</Button>
                </div>

                <div className="category-row">
                    <Typography variant='h4' sx={{ marginBottom: "10px" }}>All Products</Typography>
                    <Grid container direction='row' spacing={2}>
                        {details.map((entry, index) => (
                            <Grid key={index} item md={3}>
                                <EditCard index={index}  setDeleteItem={setDeleteItem} setEditItem={setEditItem} title={entry.title} price={entry.price} description={entry.description} image={entry.image} rating={entry.rating.rate} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </div>
        </>
    )
}
