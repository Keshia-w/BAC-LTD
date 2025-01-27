import { useState, useEffect } from 'react'
import axios from "axios"
import {Box,

} from "@chakra-ui/react"

function App() {

  const fetchAPI = async () => {
    const response = await axios.get("http://localhost:8080/api")
    console.log(response.data.Fruits)
  }

  useEffect(() => {
    fetchAPI()
  }, [])

  return (
    <Box>
      
    </Box>
  )
}

export default App
