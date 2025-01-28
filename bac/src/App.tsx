import { useState, useEffect } from 'react'
import axios from "axios"
import {Box,

} from "@chakra-ui/react"
import TopBar from "./Components/TopBar"
import { HashRouter, Routes, Route } from "react-router-dom";
import Gallery from './Pages/Gallery'
import About from './Pages/About'
import Team from './Pages/Team'
import Contact from './Pages/Contact'

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api")
    console.log(response.data.Fruits)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <>
      <HashRouter basename = "/">
        <Box>
          <TopBar />
          <Routes>
            <Route path="/gallery" element={<Gallery />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/team" element={<Team />}></Route>
          </Routes>
        </Box>
      </HashRouter>
    </>
  )
}

export default App
