import {Chip}  from "@mui/material"


interface propTypes{
    label: string,
    type?: any,
    name?: string
}

const ChipComponent =(props: propTypes)=>{
    return(
       <Chip label={props.label} color={props.type} variant="filled" className={props.name}/>
    )
}

export default ChipComponent