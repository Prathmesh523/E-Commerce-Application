import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import MediaCard from '../components/Card'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import '../index.css'

export default function WomensClothing() {
  const [details, setDetails]=useState([])
  const [role,setRole]=useState(null)

  useEffect(()=>{
    const display=async()=>{
      const data=await axios.get("http://localhost:5000/products/allproducts")
      setDetails(data.data.products)

      const token=localStorage.getItem("token")
      if(token!=null)
      {
        const role=await axios.post("http://localhost:5000/users/getrole", [token])
        setRole(role.data.data)
      }
      else
      {
        setRole(null)
      }
    }
    display()
  },[])

  return (
    <>
      <Navbar role={role} />
      <div className='home-content'>
        <div className="category-row">
          <Typography variant='h4' sx={{marginBottom:"10px"}}>Women's Clothing</Typography>
          <Grid container direction='row' spacing={2}>
            {details.map((entry)=>(
              entry.category==="women's clothing"?(
                <Grid item md={3}>
                  <MediaCard title={entry.title} price={entry.price} description={entry.description} image={entry.image} rating={entry.rating.rate} />
                </Grid>
              ):(
                null
              )
            ))}
          </Grid>
        </div>
      </div>
    </>
  )
}
