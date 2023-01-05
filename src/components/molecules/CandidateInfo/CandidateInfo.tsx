import { BadgeTwoTone, LocalPhone, Mail, Person,ExpandMore, PlaceTwoTone, ShieldTwoTone, CalendarTodayTwoTone } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary,Card, CardContent, Divider, Grid } from "@mui/material"
import Text from "../../atoms/Typography/Text"
import Info from "../UserInfo/Info"




const CandidateInfo = (details:any)=>{
    console.log(details.details.name)
    

    const icons = [

      {
         desc:'Name',
         detail: details.details.name,
         icon: <Person/>
      },
      {
         desc:'Email',
         detail: details.details.email,
         icon:<Mail/>
      },
      {
         desc:'DOB',
         detail: details.details.dob,
         icon: <BadgeTwoTone/>
      },
      {
         desc:'Phone',
         detail: details.details.phone,
         icon: <LocalPhone/>
      },
      {
         desc:'Zipcode',
         detail: details.details.zipcode,
         icon:<PlaceTwoTone/>
   
      },
      {
         desc:'SocialSecurity',
         detail: details.details.socialsecurity,
         icon:<ShieldTwoTone/>
   
      },
      {
         desc:'Drivers license',
         detail: details.details.driverslisence,
         icon:<BadgeTwoTone/>
   
      },
      {
         desc:'Created At',
         detail: details.details.createdat,
         icon:<CalendarTodayTwoTone/>
   
      }
   ]






    return(
     <>
     
        <Accordion sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Text text="Candidate Information" type="h6"/> 
            </AccordionSummary>
            <AccordionDetails>
                 <Divider/>
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


export default CandidateInfo