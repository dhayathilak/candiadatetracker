import { LocalActivity } from "@mui/icons-material"
import { IconButton} from "@mui/material"
import React from "react"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Icon from "../../atoms/LogoutIcon/Icon"
import Text from "../../atoms/Typography/Text"

const IconButtons =()=>
{
    return(
        <React.Fragment>
            <ButtonComponent icon={<Icon/>}/>
        </React.Fragment>    
    )
}

export default IconButtons