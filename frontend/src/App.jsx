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

function App() {

  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default App
