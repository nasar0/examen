import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cards from '../componentes/Cards';

const Productos = () => { 
  const {categoria} = useParams()
  const api="https://api.escuelajs.co/api/v1/products"
  const [productos, setProductos] = useState([])
  const [text, setText] = useState("")
  const buscar = (text)=>{
    setText(text)
  }
  useEffect(()=>{
      fetch(api).
      then(resp => resp.json()).
      then(datos => {
        const productosFiltradosPorCategoria = datos.filter(
          (producto) => producto.category.name === categoria
      );

      // Filtra los productos por título (búsqueda insensible a mayúsculas y minúsculas)
      const productosFiltrados = productosFiltradosPorCategoria.filter(
          (producto) =>
              producto.title.toLowerCase().includes(text.toLowerCase())
      );

      setProductos(productosFiltrados);
      });
  },[categoria,text])
  return (
    <>
    <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => setText(e.target.value)} // Actualiza el estado `text`
    />
    <div className='grid grid-cols-4 gap-5 w-[40%] m-auto'>
        <Cards productos={productos} />
    </div>
  </>
  )
}

export default Productos