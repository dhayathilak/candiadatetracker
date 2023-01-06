import { Typography } from "@mui/material"


interface propTypes{
    text: string
    name?: string
    type?: any
}


const Text = (props: propTypes)=>{
    return(
        <Typography className={props.name} variant={props.type}>{props.text}</Typography>
    )
}


export default Text