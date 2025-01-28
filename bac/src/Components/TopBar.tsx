import {
    Box,
    Image,
    Text,
    Menu,
    MenuItem,
    MenuList,
    MenuButton
} from "@chakra-ui/react"

function TopBar() {

    return(
        <Box width="100%" height="80px" backgroundColor="#151B27">
            <Box display="flex" gap="45px">
                <Image src="./src/assets/logo.png" width="180px" height="80px" marginLeft="15px"></Image>
            </Box>
        </Box>
    )
}

export default TopBar;