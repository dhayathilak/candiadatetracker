import {Stack} from "@mui/material"
import React from "react"
import UserIcon from "../../atoms/Avatar"
import Icon from "../../atoms/LogoutIcon"
import Text from "../../atoms/Typography"
import sample from '../../../images/sample.png'
import { Logout } from "@mui/icons-material"


interface propTypes{
   name?:any,
}



const Profile = (props: propTypes)=>{
    

    return(
        <React.Fragment>
            <Stack direction="row" spacing={1} >
                <UserIcon imagepath={sample} />
                <Stack direction="column" spacing={1}>
                    <Text text='james'/>
                    <Text text='james@gmail.com'/>
               </Stack>
                <Icon icontype={<Logout/>}/>
            </Stack>
        </React.Fragment>
    )
}

export default Profile