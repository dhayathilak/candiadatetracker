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
         id:1,
         desc:<Text text='Name' type='Body 2' name={classes.text}/>,
         detail: <Text text={details.details.data.name} type='Body 1'/>,
         icon: <PersonOutline className={classes.icon}/>
      },
      {
         id:2,
         desc:'Email',
         detail: details.details.data.emailid,
         icon:<MailOutline className={classes.icon}/>
      },
      {
         id:3,
         desc:'DOB',
         detail: details.details.data.dob,
         icon: <BadgeOutlined className={classes.icon}/>
      },
      {
         id:4,
         desc:'Phone',
         detail: details.details.data.phone,
         icon: <LocalPhoneOutlined className={classes.icon}/>
      },
      {
         id:5,
         desc:'Zipcode',
         detail: details.details.data.zipcode,
         icon:<PlaceOutlined className={classes.icon}/>
   
      },
      {
         id:6,
         desc:'SocialSecurity',
         detail: details.details.data.social_security,
         icon:<ShieldOutlined className={classes.icon}/>
   
      },
      {
         id:7,
         desc:'Drivers license',
         detail: details.details.data.drivers_licsense,
         icon:<BadgeOutlined className={classes.icon}/>
   
      },
      {
         id:8,
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
                              <Grid item xs={4} key={icon.id}>
                                 <Info header={icon.desc} detail={icon.detail} icontype={icon.icon}/>
                             </Grid>))}
                             
               </Grid>
            </AccordionDetails>
        </Accordion>
     </>
    )
}


export default CandidateInfo