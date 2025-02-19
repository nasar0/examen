import React, { useEffect, useState } from 'react'
import Cards from '../componentes/Cards'
import DetalleProducto from './DetalleProducto'

const Home = () => {
    const api="https://api.escuelajs.co/api/v1/products"
    const [productos, setProductos] = useState([])
    const [text, setText] = useState("")
    
      useEffect(()=>{
        fetch(api).then(resp => resp.json()).then(datos =>{
          const datosB = datos.filter(productos=> productos.title.toLowerCase().includes(text))
          setProductos(datosB)
        });
    },[text])
    const buscar = (e)=>{
        setText(e)
    }
  return (
    <div className='my-5'>
      <input type="search" placeholder='Buscar....' className='w-[25%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-auto w-[25%] flex justify-center mb-5' onChange={(e)=>{buscar(e.target.value)}}/>
        <div className='grid grid-cols-4 gap-5 w-[40%] m-auto '>
            <Cards  productos={productos}/>
        </div>

    </div>
  )
}

export default Home