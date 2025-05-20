import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Login } from './auth/pages/Login'
import { ShopRouter } from './shop'
import { AuthProvider } from './auth/context/AuthContext'
import { Register } from './auth/pages/Register'
import { PrivateRouter } from './router/PrivateRouter'
import { PublicRouter } from './router/PublicRouter'


export const App = () => {
  return (
    <AuthProvider>

      <Routes>
        {/* Aqui se agregan todas las rutas de la aplicacion */}

        <Route 
          path='/register' 
          element={
            <PublicRouter>
              <Register/>
            </PublicRouter>
          }
        />

        <Route 
          path='/login' 
          element={
            <PublicRouter>
              <Login/>
            </PublicRouter>
          }
        />

        <Route 
          path='/*' 
          element={
            <PrivateRouter>
              <ShopRouter/>
            </PrivateRouter>
          }
        />

        

      </Routes>
    </AuthProvider>
  )
}
