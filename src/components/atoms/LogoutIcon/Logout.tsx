import { LogoutOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"


const Logout = (props: any)=>{
    return(
        <IconButton>
            {props.icontype}
            {/* <LogoutOutlined/> */}
        </IconButton>
    )
}

export default Logout