import { Avatar } from "@mui/material"

interface propTypes{
    imagepath: string,
    name?: string
}

const UserIcon = (props: propTypes)=>{
    
    return(
        <Avatar src={props.imagepath} classes={props.name}>d</Avatar>
    )
}


export default  UserIcon