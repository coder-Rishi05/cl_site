import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'

const routes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route />
        <Route />
        <Route />
      </Routes>
    </div>
  )
}

export default routes
