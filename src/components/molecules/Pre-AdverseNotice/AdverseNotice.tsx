import { ArrowBack } from "@mui/icons-material"
import { Card, CardContent, Divider, TextField } from "@mui/material"
import { Stack } from "@mui/system"
import { useState ,useEffect} from "react"
import { useParams } from "react-router-dom"
import { currentdata, getCurrentdata } from "../../../Services/services"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Check from "../../atoms/Checkbox/Check"
import Text from "../../atoms/Typography/Text"

const AdverseNotice = (id: any)=>{
    console.log(id)
    // const {id}= useParams()
    // const [currentdata,setCurrentData] = useState<currentdata[]>([])
    // console.log(id.id)
    // async function getcurrent(){
    //     let resp = await getCurrentdata(id.id)
    //     setCurrentData(resp)
    // }
    // useEffect(()=>{
    //     getcurrent()
    // },[])
    // console.log(currentdata)

    // console.log(id)
    return(
        <>
        <Stack direction='row' spacing={2}>
            <ButtonComponent icon={<ArrowBack/>} path='/candidate/:id'/>
            <Text text='Pre-Adverse Notice'/>
        </Stack>
        <Card sx={{boxShadow:'5px 5px 5px 5px grey',marginTop:'10px'}}>
            <CardContent>
                <Stack direction="row" spacing={1}>
                    <Text text='From'/><Text text=':'/><Text text='mailid'/>
                </Stack>
                <Divider/>
                <Stack direction="row" spacing={1}>
                    <Text text='to'/><Text text=':'/><Text text='mailid'/>
                </Stack>
                <Divider/>
                <Stack direction="row" spacing={1}>
                    <Text text='subject'/><Text text=':'/><Text text='content'/>
                </Stack>
                <Divider/>
                    <Text text='subject'/>
                    <Text text='Select the charges for Pre adverse action'/>
                    <Stack direction="row" spacing={1}>
                        <Check/><Text text='content'/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Check/><Text text='content'/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Check/><Text text='content'/>
                    </Stack>
                    <Text text='subject'/>
                    <Divider/>
                    <Stack direction="row" spacing={1}>
                        <Text text='content'/>
                        <TextField/>
                        <Text text='content'/>
                        <ButtonComponent text='Preview Notice'/>
                    </Stack>
            </CardContent>
        </Card>
        </>
    )
}

export default AdverseNotice