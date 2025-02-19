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
  useEffect(() => {
    setText(""); 
  }, [categoria]);
  useEffect(()=>{
      fetch(api).
      then(resp => resp.json()).
      then(datos => {
        const productosFiltradosPorCategoria = datos.filter(
          (producto) => producto.category.name === categoria
      );

      const productosFiltrados = productosFiltradosPorCategoria.filter(
          (producto) =>
              producto.title.toLowerCase().includes(text.toLowerCase())
      );

      setProductos(productosFiltrados);});
  },[categoria,text])
  return (
    <>
    <input type="search" placeholder='Buscar....'  value={text}  className='w-[25%] p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 m-auto w-[25%] flex justify-center mb-5' onChange={(e)=>{buscar(e.target.value)}}/>

    <div className='grid grid-cols-4 gap-5 w-[40%] m-auto'>
        <Cards productos={productos} />
    </div>
  </>
  )
}

export default Productos