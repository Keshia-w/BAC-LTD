import React from 'react'
import {
    Box,
    Text
} from '@chakra-ui/react'

function Gallery () {
    return(
        <Box>
            <Box         
                w={{ base: "90%", sm: "85%", md: "75%", lg: "60%", xl: "50%" }}
                mx="auto"
                margin={"auto"}
                mt={{ base: 10, md: 5 }}
                position={"relative"}>

                <Text 
                fontWeight="semibold" 
                fontSize="28px" 
                letterSpacing={"0.1rem"}
                textAlign="center">Projects</Text>

            </Box>
        </Box>
    )
}

export default Gallery;