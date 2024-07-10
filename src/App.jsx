import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { list } from 'postcss'
import Home from './home'
import BayerForm from './bayerForm'

function App() {
  const [page, setPage] = useState('home')

  if(page === 'home')
    return <Home />

  if(page === 'bayerForm') 
    return <BayerForm />
}

export default App
