import React, { useEffect, useState } from 'react'

const DetalleProducto = ({id}) => {
  const api=`https://api.escuelajs.co/api/v1/products/${id}`
  const [productos, setProductos] = useState({})
  useEffect(() => {
    fetch(api).
    then(resp => resp.json()).
    then(datos => setProductos(datos));
  }, [id]) 
  console.log(productos)
  return (
    <>
      <div className='absolute z-1 right-10 w-[20%] border p-5'>
        <h2>Details</h2>
        <img src={productos.images} alt="" />
        <p>{productos.price}</p>
        <h2 className='font-bold'>{productos.title}</h2>
        <p>{productos.description}</p>
        
      </div>
    </>
  )
}

export default DetalleProducto