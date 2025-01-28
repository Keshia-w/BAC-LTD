import {
    Box,
    Image,
    Text,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    Button
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'

function TopBar() {

    return(
        <Box width="100%" height="80px" backgroundColor="#151B27">
            <Box>
                <Link to="/">
                    <Image src="./src/assets/logo.png" width="180px" height="80px" marginLeft="15px"></Image>
                </Link>

                <Menu>
                    <MenuItem as={Link} to="/about">About Us</MenuItem>
                    <MenuItem as={Link} to="/gallery">Gallery</MenuItem>
                    <MenuItem as={Link} to="/contact">Contact</MenuItem>
                </Menu>
            </Box>
        </Box>
    )
}

export default TopBar;