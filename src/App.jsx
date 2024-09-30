//import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Home from './assets/HomePage'
import { useState } from 'react'


function App() {
  const [items, setItems]= useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/items')
    .then(res =>res.json())
    .then(data =>{setItems(data)})
  },[])

  return (
    <>
      <Home/>
    </>
  )
}

export default App
