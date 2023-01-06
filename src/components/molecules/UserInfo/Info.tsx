
import { Button, Card, CardContent, Stack,Grid} from "@mui/material"
import { makeStyles } from "@mui/styles"
import { string } from "prop-types"
import { ReactElement } from "react"
import UserIcon from "../../atoms/Avatar/userIcon"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"




interface propTypes{
    header: string,
    detail: string,
    icontype: ReactElement,
    name?:any
}

const useStyles = makeStyles({
    icons:{
     boxSizing: 'border-box',
     border: '1px solid #E5E7ED',
     width:'44px',
     height:'44px',
     color: '#95AAFF',
  
     borderRadius:'12px'
    }
  })

const Info = (props: propTypes)=>{
    const classes = useStyles()
    return(
        <>
                    <Card>
                        <CardContent >
                                <Stack direction='row' spacing={1}>
                                    <ButtonComponent icon={props.icontype} type={classes.icons}/>
                                    <Stack direction='column'>
                                        <Text text={props.header}/>
                                        <Text text={props.detail}/>
                                    </Stack>
                                </Stack> 
                        </CardContent>
                    </Card>
        </>
      
    )
}

export default Info