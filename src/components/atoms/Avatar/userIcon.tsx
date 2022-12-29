import { Avatar } from "@mui/material"

interface propTypes{
    imagepath: string
}

const UserIcon = (props: propTypes)=>{
    
    return(
        <Avatar src={props.imagepath}>d</Avatar>
    )
}


export default  UserIcon