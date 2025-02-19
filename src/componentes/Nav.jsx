import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='flex gap-4 m-5'>
        <h2 className='font-bold'>Shop</h2>
        <Link to={"/"} >All</Link>
        <Link to={"/Clothes"} >Ropa</Link>
        <Link to={"/Electronics"} >Electronica</Link>
        <Link to={"/Furniture"} >Muebles</Link>
    </nav>
  )
}

export default Nav