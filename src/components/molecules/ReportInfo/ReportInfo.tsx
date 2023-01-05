import { Accordion,AccordionDetails,AccordionSummary,Card,CardContent,Grid } from "@mui/material"
import { AccessTimeTwoTone, CalendarTodayTwoTone, CheckCircleTwoTone, EventTwoTone, ExpandMore, GavelTwoTone, InventoryTwoTone } from "@mui/icons-material"
import Info from "../UserInfo/Info"





const ReportInfo = (reportdetails: any)=>{
    console.log(reportdetails.reportdetails.name)
    const icons=[
        {
            desc:'Status',
            detail: reportdetails.reportdetails.status,
            icon:<CheckCircleTwoTone/>
        },
        {
            desc:'Adjunction',
            detail: reportdetails.reportdetails.adjunction,
            icon:<GavelTwoTone/>
        },
        {
            desc:'Package',
            detail: reportdetails.reportdetails.package,
            icon:<InventoryTwoTone/>
        },
        {
            desc:'CreatedAt',
            detail: reportdetails.reportdetails.createdat,
            icon:<CalendarTodayTwoTone/>
        },
        {
            desc:'CompletedDate',
            detail: reportdetails.reportdetails.completeddate,
            icon:<EventTwoTone/>
        },
        {
            desc:'Turn Around Time',
            detail: reportdetails.reportdetails.turnaroundtime,
            icon:<AccessTimeTwoTone/>
        }
    ]
    
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
                                 <Info header={icon.desc} detail={icon.detail} icontype={icon.icon}/>
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