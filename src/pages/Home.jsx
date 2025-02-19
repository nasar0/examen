import React, { useEffect, useState } from 'react'
import Cards from '../componentes/Cards'
import DetalleProducto from './DetalleProducto'

const Home = () => {
    const api="https://api.escuelajs.co/api/v1/products"
    const [productos, setProductos] = useState([])
    useEffect(()=>{
        fetch(api).
        then(resp => resp.json()).
        then(datos => setProductos(datos));
    },[])
  return (
    <>

        <div className='grid grid-cols-4 gap-5 w-[40%] m-auto'>
            <Cards productos={productos}/>
        </div>

    </>
  )
}

export default Home