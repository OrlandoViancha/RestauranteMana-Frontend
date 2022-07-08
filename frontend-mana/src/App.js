import React from 'react'
import { Routes, BrowserRouter as Router,Route } from 'react-router-dom'
import {Login} from './views/Login'
import {HomePage} from './views/HomePage'
import {RegisterData} from './views/RegisterData'
import {Menu} from './components/Menu'
import {Footer} from '../src/components/Footer'

export const App = () => {
  return (
    <Router>
        <Menu></Menu>
        <Routes>
            <Route exact path='/home' element={<HomePage></HomePage>}/>
        </Routes>

        <Routes>
            <Route exact path='/login' element={<Login></Login>} />
        </Routes>

        <Routes>
            <Route exact path='/register' element={<RegisterData></RegisterData>} />
        </Routes>

        <Footer></Footer>
    </Router>
    
  )
}
