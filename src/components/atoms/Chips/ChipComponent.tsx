import {Chip}  from "@mui/material"


interface propTypes{
    label: string,
    type?: 'default'|'primary'|'secondary'|'warning'
}

const ChipComponent =(props: propTypes)=>{
    return(
       <Chip label={props.label} color={props.type}/>
    )
}

export default ChipComponent