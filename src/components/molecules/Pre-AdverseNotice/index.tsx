import { ArrowBack } from "@mui/icons-material"
import { Card, CardContent, Divider, Grid, TextField } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { Stack } from "@mui/system"
import { Link } from "react-router-dom"
import ButtonComponent from "../../atoms/Button"
import Check from "../../atoms/Checkbox"
import Text from "../../atoms/Typography"
import { notice } from "./Constants"

const useStyles = makeStyles({
    card:{
        boxShadow:' 0px 4px 28px rgba(45, 45, 47, 0.1)',marginTop:'20px'
    }
})

const AdverseNotice = (data: any)=>{
    console.log(data)
    const classes = useStyles()
    
    const salutation = ` Dear ${data.data.name}`
    return(
        <>
        <Stack direction='row' spacing={2} sx={{margintop:'25px'}}>
            <ButtonComponent icon={<ArrowBack/>} link={Link} path={{pathname:`/candidate/${data.data.id}`}}/>
            <Text text='Pre-Adverse Notice'/>
        </Stack>
        <Card className={classes.card}>
            <CardContent>
                <Stack direction="row" spacing={1}>
                    <Text text='From'/><Text text=':'/><Text text={notice[0].from} type='caption3'/>
                </Stack>
                <Divider/>
                <Stack direction="row" spacing={1}>
                    <Text text='to'/><Text text=':'/><Text text={data.data.emailid} type='caption3'/>
                </Stack>
                <Divider/>
                <Stack direction="row" spacing={1}>
                    <Text text='subject'/><Text text=':'/><Text text='pre-adverse action checkr bpo'/>
                </Stack>
                <Divider/>
                <Stack direction="column" spacing={4}>
                    <Grid container>
                       <Grid item xs={1}>
                        <Text text={salutation} type='body2'/>
                       </Grid>
                    </Grid>
                    {/* <Text text={salutation} type='body2'/> */}
                    <Grid container>
                        <Grid item xs={8}>
                            <Text text={notice[0].content} type='body2'/>
                        </Grid>
                    </Grid>
                    
                    <Grid>
                        <Grid item xs={3}>
                            <Text text='Select the charges for Pre adverse action' type='caption3'/>
                        </Grid>
                    </Grid>
                    
                    <Stack direction="row" spacing={1}>
                        <Check/><Text text={notice[0].adverse1} type='caption2'/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Check/><Text text={notice[0].adverse2} type='caption2'/>
                    </Stack>
                    <Stack direction="row" spacing={1}>
                        <Check/><Text text={notice[0].adverse3} type='caption2'/>
                    </Stack>

                    <Grid>
                        <Grid item xs={5}>
                            <Text text={notice[0].cotent2} type='caption1'/>
                            <Text text={notice[0].salutations} type='caption1'/>
                        </Grid>
                    </Grid>
                   
                    
                    <Divider/>
                    <Stack direction="row" spacing={1}>
                        <Text text={notice[0].postnotification} type='body2'/>
                        <TextField defaultValue={notice[0].days}/>
                        <Text text={'days'} type='body2'/>
                        <Grid container>
                            <Grid item xs={9}></Grid>
                            <Grid item xs={3}><ButtonComponent text='Preview Notice' type='dashed'/></Grid>
                        </Grid>
                    </Stack>
                </Stack>    
            </CardContent>
        </Card>
        </>
    )
}

export default AdverseNotice