import { LocalActivity, PropaneSharp, UsbOff } from "@mui/icons-material"
import { IconButton} from "@mui/material"
import React, { ReactElement } from "react"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Icon from "../../atoms/LogoutIcon/Icon"
import Text from "../../atoms/Typography/Text"

interface propTypes{
    icontext: string,
    icon: ReactElement
}



const IconButtons =(props: propTypes)=>
{
    return(
        <React.Fragment>
            <ButtonComponent text={props.icontext} icon={props.icon}/>
        </React.Fragment>    
    )
}

export default IconButtons