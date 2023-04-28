import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Meal from './page/Meal'
import Detail from './page/Detail'
import { Nav } from './nav/Nav'

const App = () => {
  return (
    <div className=' bg-gray-200'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Meal/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </div>
  )
}

export default App