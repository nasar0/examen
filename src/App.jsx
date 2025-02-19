import { useState } from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Productos from './pages/Productos'
import Layout from './componentes/Layout'
import Contacto from './pages/Contacto'

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/:categoria' element={<Productos/>}/>
                <Route path='/Contacto' element={<Contacto/>}/>
              </Route>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
