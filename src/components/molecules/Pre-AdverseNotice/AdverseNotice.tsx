import { Card, CardContent, Divider, TextField } from "@mui/material"
import { Stack } from "@mui/system"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Check from "../../atoms/Checkbox/Check"
import Text from "../../atoms/Typography/Text"

const AdverseNotice = ()=>{
    return(
        <Card>
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
    )
}

export default AdverseNotice