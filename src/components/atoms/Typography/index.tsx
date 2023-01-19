import { CSSObject, Typography } from "@mui/material"


interface propTypes{
    text: any
    name?: any,
    type?: any
}


const Text = (props: propTypes)=>{
    return(
        <Typography classes={props.name} variant={props.type}>{props.text}</Typography>
    )
}


export default Text