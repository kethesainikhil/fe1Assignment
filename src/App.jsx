import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SearchBar from './components/SearchBar'
import BookData from './Data.json'
function App() {


  return (
   <div className="App">
      <SearchBar placeholder="Enter a Book Name..." />
    </div>
  )
}

export default App
