import { Typography } from "@mui/material"


interface propTypes{
    text: string
}


const Text = (props: propTypes)=>{
    return(
        <Typography>{props.text}</Typography>
    )
}


export default Text