
import {Card, CardContent, Stack} from "@mui/material"
import { ReactElement } from "react"
import ButtonComponent from "../../atoms/Button"
import Text from "../../atoms/Typography"




interface propTypes{
    header: any,
    detail: any,
    icontype: ReactElement,
    name?:any
}



const Info = (props: propTypes)=>{
    
    return(
        <>
                    <Card>
                        <CardContent >
                                <Stack direction='row' spacing={1}>
                                    <ButtonComponent icon={props.icontype}/>
                                    <Stack direction='column'>
                                        <Text text={props.header} type='body2'/>
                                        <Text text={props.detail} type='body1'/>
                                    </Stack>
                                </Stack> 
                        </CardContent>
                    </Card>
        </>
      
    )
}

export default Info