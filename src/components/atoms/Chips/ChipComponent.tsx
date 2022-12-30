import {Chip}  from "@mui/material"


interface propTypes{
    label: string
}

const ChipComponent =(props: propTypes)=>{
    return(
       <Chip label={props.label}/>
    )
}

export default ChipComponent