import {
    Box,
    Image
} from "@chakra-ui/react"
import { Link } from 'react-router-dom'
import MainMenu from "./menu"

function TopBar() {

    return(
        <Box width="100%" height="80px" backgroundColor="#151B27" position="relative">
            <Box>
                <Link to="/">
                    <Image src="./src/assets/logo.png" width="180px" height="80px" marginLeft="15px"></Image>
                </Link>

                <Box position={"absolute"} top="50%" right="15px" transform="translateY(-50%)">
                    <MainMenu />
                </Box>

            </Box>
        </Box>
    )
}

export default TopBar;