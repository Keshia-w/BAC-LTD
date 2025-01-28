import React from 'react'
import {
    Box,
    IconButton,
    Text,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
  } from '@chakra-ui/react'
  import { HamburgerIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom'

function MainMenu() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const textStyles = {
        color: "white",
        fontWeight: "semibold",
        fontSize: "20px",
        marginTop: "40px",
        textDecoration: "none",
        _hover: { color: "#1A2236" }
    };

    return(
        <Box>
            <IconButton 
            ref={btnRef}
            backgroundColor="white"
            onClick={onOpen}
            aria-label='Open Menu'
            icon={<HamburgerIcon boxSize={8}/>}
            variant="solid"
            bg="#151B27"
            color="white"
            _hover={{ bg: '#1A2236' }}
            _active={{ bg: '#101621' }}/>

            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                size={"xs"}
                finalFocusRef={btnRef}>

                <DrawerContent
                maxH="355px"
                overflow="auto">

                    <DrawerCloseButton color="white" size="10px" marginTop="18px" paddingRight="10px"/>

                    <DrawerBody backgroundColor={"#151B27"} display="flex" flexDirection={"column"} paddingTop={"50px"}>
                        <Text as={Link} to="/about" onClick={onClose} style={textStyles}>About us</Text>
                        <Text as={Link} to="/gallery" onClick={onClose} style={textStyles}>Projects</Text>
                        <Text as={Link} to="/team" onClick={onClose} style={textStyles}>Our Team</Text>
                        <Text as={Link} to="/contact" onClick={onClose} style={textStyles}>Contact us</Text>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default MainMenu;