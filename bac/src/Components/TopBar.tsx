import React from 'react'
import {
    Box,
    Image,
    Text,
} from "@chakra-ui/react"

function TopBar() {

    return(
        <Box width="100%" height="75px" backgroundColor="#151B27">
            <Box display="flex" gap="45px">
                <img src="../assets/logo.png" ></img>
                <Text 
                fontSize="2.5rem" 
                fontWeight="normal" 
                color="white" 
                letterSpacing={"widest"}>BAC</Text>
            </Box>
        </Box>
    )
}

export default TopBar;