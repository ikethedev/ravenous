import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BusinessList from './components/BusinessList.jsx'
import SearchBar from './components/SearchBar.jsx'



function App() {

  return (
    <>
      <SearchBar />
      <BusinessList  />
    </>
  )

}

export default App
