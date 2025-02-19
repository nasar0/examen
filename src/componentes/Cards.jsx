import React, { useState } from 'react'
import DetalleProducto from '../pages/DetalleProducto'
const Cards = ({productos}) => {
    const [id, setId] = useState("")
    const obtenerId =(id)=>{
        setId(id)
    }
  return (
    
    <>
    
       {id && <DetalleProducto id={id} />}
       {
            productos.map(productos=>(
                <div className='relative' key={productos.id} onClick={()=>obtenerId(productos.id)}>
                <img src={productos.images[0]} alt="" />
                    <p className='absolute bottom-20 left-2 bg-white/75 rounded-2xl p-2'>{productos.category.name}</p>
                    <div className='flex'>
                        <h3>{productos.title}</h3>
                        <p className='font-bold'>{productos.price}$</p>
                    </div>
                </div>
            ))
        }
        
       
    </>
  )
}

export default Cards