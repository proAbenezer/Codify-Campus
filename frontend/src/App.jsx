//React Hooks
import { useState, useEffect } from 'react'

//Reac Router Dom
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//App Styles 
import './App.css'
//Pages
import Home from './pages/Home/Home'

//Components
import Layout from './components/Layout/Layout'
import Main from './components/Main/Main'
import Chapters from './components/Chapters/Chapters'

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} >
              <Route index element={<Main />} />
              <Route path='chapters/:id' element={<Chapters />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
