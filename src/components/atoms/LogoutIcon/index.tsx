import { LogoutOutlined } from "@mui/icons-material"
import { IconButton, PropTypes } from "@mui/material"
import { ReactElement } from "react"

interface propTypes{
    icontype?: ReactElement,
    type?: string,
    imageUrl?: string
}

const Icon =(props: propTypes)=>{
    return(
        <IconButton>
            {props.icontype}
            {/* <LogoutOutlined/> */}
        </IconButton>
    )
}

export default Icon