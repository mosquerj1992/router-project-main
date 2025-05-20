import React from 'react'
import { Header } from '../components/Header'
import { Route, Routes } from 'react-router-dom'
import { Home, About, Accesories, Clothes, Shoes } from '../pages'
import { Item } from '../pages/Item'

export const ShopRouter = () => {
  return (
    <>
          <Header/>
    
          <Routes>
            {/* Aqui se agregan todas las rutas de la aplicacion */}
            <Route path='/' element={<Home/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/accesories' element={<Accesories />} />
            <Route path='/clothes' element={<Clothes />} />
            <Route path='/shoes' element={<Shoes />} />
            <Route path='/item/:id' element={<Item />} />
    
          </Routes>
        </>
  )
}
