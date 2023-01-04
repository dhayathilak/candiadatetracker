import { Accordion,AccordionDetails,AccordionSummary,Card,CardContent,Grid } from "@mui/material"
import { AccessTimeTwoTone, CalendarTodayTwoTone, CheckCircleTwoTone, EventTwoTone, ExpandMore, GavelTwoTone, InventoryTwoTone } from "@mui/icons-material"
import Info from "../UserInfo/Info"


const icons=[
    {
        desc:'Status',
        icon:<CheckCircleTwoTone/>
    },
    {
        desc:'Adjunction',
        icon:<GavelTwoTone/>
    },
    {
        desc:'Package',
        icon:<InventoryTwoTone/>
    },
    {
        desc:'CreatedAt',
        icon:<CalendarTodayTwoTone/>
    },
    {
        desc:'CompletedDate',
        icon:<EventTwoTone/>
    },
    {
        desc:'Turn Around Time',
        icon:<AccessTimeTwoTone/>
    }
]



const ReportInfo = ()=>{
    
    return(
     <>
     
        <Accordion sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                    <h1>ReportInfo</h1>  
            </AccordionSummary>
            <AccordionDetails>
                  <Card>
                       <CardContent>
                           
                          <Grid container spacing={3}>
                           {icons.map((icon)=>(
                              <Grid item xs={4} key='i'>
                                 <Info header={icon.desc} detail="" icontype={icon.icon}/>
                             </Grid>))}
                             
                          </Grid>
                       </CardContent>
                  </Card>
            </AccordionDetails>
        </Accordion>
     </>
    )
}

export default ReportInfo