//React Hooks
import { useState, useEffect } from 'react'

//Reac Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//App Styles 
import './App.css'
//Pages
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'


//Components
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/'>
            <Route path='' element={<Layout />}>
              <Route path='' element={<Home />} >
                <Route path='courses/:id' element={<Main />} />
              </Route>
            </Route>
            <Route path='login' element={<Login />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
