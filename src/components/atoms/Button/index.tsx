import { Person2 } from "@mui/icons-material"
import { Button } from "@mui/material"
import { string } from "prop-types"
import { ElementType, ReactComponentElement, ReactElement } from "react"
import { Link } from "react-router-dom"


interface propTypes{
    text?: any,
    icon ?: ReactElement,
    link ?: any,
    path ?:any,
    name?: any,
    type ?: any,
    size?:any,
    color?:any
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonComponent=(props: propTypes)=>{
    // const {type}= props
    return(
        <Button startIcon={props.icon} size={props.size} component ={props.link} to={props.path} variant ={props.type} classes={props.name} color={props.color}>{props.text}</Button>
    )
}



export default ButtonComponent