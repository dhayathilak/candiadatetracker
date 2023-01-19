import { Accordion,AccordionDetails,AccordionSummary,Card,CardContent,Divider,Grid } from "@mui/material"
import { AccessTimeOutlined, AccessTimeTwoTone, CalendarTodayOutlined, CalendarTodayTwoTone, CheckCircleOutline, CheckCircleTwoTone, EventOutlined, EventTwoTone, ExpandMore, GavelOutlined, GavelTwoTone, InventoryOutlined, InventoryTwoTone } from "@mui/icons-material"
import Info from "../UserInfo"
import Text from "../../atoms/Typography"
import { makeStyles } from "@mui/styles"
import baseTheme from "../../../Themes"
import { grey } from "@mui/material/colors"


const useStyles = makeStyles({
    icon:{
     color: baseTheme.palette.secondary.main,
     background: '#FAFAFC',
     border: `1px solid ${baseTheme.palette.primary.main}`,
     borderRadius:'5px'
    },
    text:{
        color:grey[500]
    }
  })


const ReportInfo = (reportdetails: any)=>{
    console.log(reportdetails.reportdetails.data.status)
    const classes = useStyles()
    const icons=[
        {  
            id:1,
            desc:<Text text='Status' type='body2' name={classes.text}/>,
            detail: <Text text={reportdetails.reportdetails.data.status} type='body1'/>,
            icon:<CheckCircleOutline className={classes.icon}/>
        },
        {
            id:2,
            desc:<Text text='Adjunction' type='body2' name={classes.text}/>,
            detail:  <Text text={reportdetails.reportdetails.data.adjunction} type='body1'/>,
            icon:<GavelOutlined className={classes.icon}/>
        },
        {
            id:3,
            desc:<Text text='Package' type='body2' name={classes.text}/>,
            detail: <Text text={reportdetails.reportdetails.data.package} type='body1'/>,
            icon:<InventoryOutlined className={classes.icon}/>
        },
        {
            id:4,
            desc:<Text text='Created At' type='body2' name={classes.text}/>,
            detail: <Text text={reportdetails.reportdetails.data.date} type='body1'/>,
            icon:<CalendarTodayOutlined className={classes.icon}/>
        },
        {
            id:5,
            desc:<Text text='Completed Date' type='body2' name={classes.text}/>,
            detail: <Text text={reportdetails.reportdetails.data.completed_date} type='body1'/>,
            icon:<EventOutlined className={classes.icon}/>
        },
        {
            id:6,
            desc:<Text text='Turn Around Time' type='body2' name={classes.text}/>,
            detail: <Text text={reportdetails.reportdetails.data.turn_around_time} type='body1'/>,
            icon:<AccessTimeOutlined className={classes.icon}/>
        }
    ]
    
    return(
     <>
     
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                   <Text text='Report Information' type='subtitle1'/>
            </AccordionSummary>
            <AccordionDetails>
                <Divider/> 
                <Grid container spacing={3} sx={{marginTop:'2px'}}>
                {icons.map((icon)=>(
                    <Grid item xs={4} key={icon.id}>
                        <Info header={icon.desc} detail={icon.detail} icontype={icon.icon}/>
                    </Grid>))}
                    
                </Grid>
            </AccordionDetails>
        </Accordion>
     </>
    )
}

export default ReportInfo