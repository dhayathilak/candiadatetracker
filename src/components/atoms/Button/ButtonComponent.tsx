import { Person2 } from "@mui/icons-material"
import { Button } from "@mui/material"
import { ElementType, ReactComponentElement, ReactElement } from "react"


interface propTypes{
    text?: string,
    icon ?: ReactElement,
    path ?:string,
    ripple?:boolean,
    type ?: 'text'|'contained'|'outlined'
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonComponent=(props: propTypes)=>{
    // const {type}= props
    return(
        <Button startIcon={props.icon} href={props.path} variant ={props.type} disableFocusRipple disableRipple>{props.text}</Button>
    )
}



export default ButtonComponent