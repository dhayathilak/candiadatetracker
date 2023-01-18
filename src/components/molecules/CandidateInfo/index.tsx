import { BadgeTwoTone, LocalPhone, Mail, Person,ExpandMore, PlaceTwoTone, ShieldTwoTone, CalendarTodayTwoTone, PersonOutline, MailOutline, BadgeOutlined, LocalPhoneOutlined, PlaceOutlined, ShieldOutlined, CalendarTodayOutlined } from "@mui/icons-material"
import { Accordion, AccordionDetails, AccordionSummary,Card, CardContent, Divider, Grid } from "@mui/material"
import { grey, indigo } from "@mui/material/colors"
import { makeStyles } from "@mui/styles"
import baseTheme from "../../../Themes"
import Text from "../../atoms/Typography"
import Info from "../UserInfo"


const useStyles = makeStyles({
   icon:{
    color: baseTheme.palette.secondary.main,
    background: '#FAFAFC',
    border: `1px solid ${baseTheme.palette.primary.main}`,
    borderRadius:'5px'
   },
   text:{
       color:grey[500],
       alignContent:'right'
   }
 })

const CandidateInfo = (details:any)=>{
   const classes = useStyles()
   
   //  console.log(name)
    

    const icons = [

      {
         desc:<Text text='Name' type='Body 2' name={classes.text}/>,
         detail: <Text text={details.details.data.name} type='Body 1'/>,
         icon: <PersonOutline className={classes.icon}/>
      },
      {
         desc:'Email',
         detail: details.details.data.emailid,
         icon:<MailOutline className={classes.icon}/>
      },
      {
         desc:'DOB',
         detail: details.details.data.dob,
         icon: <BadgeOutlined className={classes.icon}/>
      },
      {
         desc:'Phone',
         detail: details.details.data.phone,
         icon: <LocalPhoneOutlined className={classes.icon}/>
      },
      {
         desc:'Zipcode',
         detail: details.details.data.zipcode,
         icon:<PlaceOutlined className={classes.icon}/>
   
      },
      {
         desc:'SocialSecurity',
         detail: details.details.data.social_security,
         icon:<ShieldOutlined className={classes.icon}/>
   
      },
      {
         desc:'Drivers license',
         detail: details.details.data.drivers_licsense,
         icon:<BadgeOutlined className={classes.icon}/>
   
      },
      {
         desc:'Created At',
         detail: details.details.data.date,
         icon:<CalendarTodayOutlined className={classes.icon}/>
   
      }
   ]






    return(
     <>
     
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMore/>}>
                    <Text text="Candidate Information" type='subtitle1'/> 
            </AccordionSummary>
            <AccordionDetails>
               <Divider/>
                <Grid container spacing={3} sx={{marginTop:'2px'}}>
                           {icons.map((icon)=>(
                              <Grid item xs={4} key='i'>
                                 <Info header={icon.desc} detail={icon.detail} icontype={icon.icon}/>
                             </Grid>))}
                             
               </Grid>
            </AccordionDetails>
        </Accordion>
     </>
    )
}


export default CandidateInfo