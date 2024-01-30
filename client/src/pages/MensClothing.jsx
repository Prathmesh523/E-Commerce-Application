import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import MediaCard from '../components/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../index.css'

export default function MensClothing() {
  const [details, setDetails] = useState([])
  const [role, setRole] = useState(null)
  const [userId, setUserId] = useState(null)
  const [addToCart, setAddToCart] = useState(null)

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
      const id = await axios.post("http://localhost:5000/users/getid", [token])
      const user_id = id.data.data
      setUserId(user_id)
    }
    display()
  }, [])

  useEffect(() => {
    const display = async () => {
      if (addToCart !== null) {
        const [itemTitle, itemPrice, itemDescription, itemImage, itemRating] = [details[addToCart].title, details[addToCart].price, details[addToCart].description, details[addToCart].image, details[addToCart].rating]
        const res = await axios.post("http://localhost:5000/cart/create", [userId, itemTitle, itemPrice, itemDescription, itemImage, itemRating])

        if (res.data.status) {
          setAddToCart(null)
        }
      }

    }
    display()
  }, [addToCart])

  return (
    <>
      <Navbar role={role} />
      <div className='home-content'>
        <div className="category-row">
          <Typography variant='h4' sx={{ marginBottom: "10px" }}>Men's Clothing</Typography>
          <Grid container direction='row' spacing={2}>
            {details.map((entry, index) => (
              entry.category === "men's clothing" ? (
                <Grid key={index} item md={3}>
                  <MediaCard index={index} setAddToCart={setAddToCart} title={entry.title} price={entry.price} description={entry.description} image={entry.image} rating={entry.rating.rate} />
                </Grid>
              ) : (
                null
              )
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}
