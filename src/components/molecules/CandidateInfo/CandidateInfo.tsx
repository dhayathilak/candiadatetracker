import { BadgeTwoTone, LocalPhone, Mail, Person,ExpandMore, PlaceTwoTone, ShieldTwoTone, CalendarTodayTwoTone } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary,Card, CardContent, Grid } from "@mui/material"
import Info from "../UserInfo/Info"


const icons = [

   {
      desc:'Name',
      
      icon: <Person/>
   },
   {
      desc:'Email',
     
      icon:<Mail/>
   },
   {
      desc:'DOB',
     
      icon: <BadgeTwoTone/>
   },
   {
      desc:'Phone',
     
      icon: <LocalPhone/>
   },
   {
      desc:'Zipcode',
     
      icon:<PlaceTwoTone/>

   },
   {
      desc:'SocialSecurity',

      icon:<ShieldTwoTone/>

   },
   {
      desc:'Drivers license',
      
      icon:<BadgeTwoTone/>

   },
   {
      desc:'Created At',
     
      icon:<CalendarTodayTwoTone/>

   }
]

const CandidateInfo = (details:any)=>{
    console.log(details)
    return(
     <>
     
        <Accordion sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                    <h1>CandidateInfo</h1>  
            </AccordionSummary>
            <AccordionDetails>
                  <Card>
                       <CardContent>
                           
                          <Grid container spacing={3}>
                           {icons.map((icon)=>(
                              <Grid item xs={4} key='i'>
                                 <Info header={icon.desc} detail={details[icon.desc]} icontype={icon.icon}/>
                             </Grid>))}
                             
                          </Grid>
                       </CardContent>
                  </Card>
            </AccordionDetails>
        </Accordion>
     </>
    )
}


export default CandidateInfo