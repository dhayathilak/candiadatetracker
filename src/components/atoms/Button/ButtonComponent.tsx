import { Person2 } from "@mui/icons-material"
import { Button } from "@mui/material"
import { ElementType, ReactComponentElement, ReactElement } from "react"


interface propTypes{
    text: string,
    icon ?: ReactElement
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ButtonComponent=(props: propTypes)=>{
    return(
        <Button startIcon={props.icon}>{props.text}</Button>
    )
}



export default ButtonComponent