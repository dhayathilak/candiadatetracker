import { Person2 } from "@mui/icons-material"
import { Button } from "@mui/material"
import { string } from "prop-types"
import { ElementType, ReactComponentElement, ReactElement } from "react"


interface propTypes{
    text?: string,
    icon ?: ReactElement,
    path ?:string,
    ripple?:boolean,
    name?: string,
    type ?: any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonComponent=(props: propTypes)=>{
    // const {type}= props
    return(
        <Button startIcon={props.icon} href={props.path} variant ={props.type} className={props.name}>{props.text}</Button>
    )
}



export default ButtonComponent