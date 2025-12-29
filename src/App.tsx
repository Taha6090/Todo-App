import { useState } from 'react'

import './App.css'
import Home from './app/home/page'
import { Toaster } from 'sonner'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
     <Toaster />
     </>
  )
}

export default App
