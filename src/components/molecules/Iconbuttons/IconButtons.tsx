import { LocalActivity } from "@mui/icons-material"
import { IconButton} from "@mui/material"
import Logout from "../../atoms/LogoutIcon/Logout"
import Text from "../../atoms/Typography/Text"

const IconButtons =()=>
{
    return(
        <>
            <Logout icons= {<LocalActivity/>}/>
            <Text/>
        </>
       
    )
}

export default IconButtons