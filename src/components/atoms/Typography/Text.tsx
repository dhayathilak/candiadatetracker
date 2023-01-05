import { Typography } from "@mui/material"


interface propTypes{
    text: string
    name?: string
    type?:'inherit'|'overline'|'h1'|'h2'|'h3'|'h6'
}


const Text = (props: propTypes)=>{
    return(
        <Typography className={props.name} variant={props.type}>{props.text}</Typography>
    )
}


export default Text