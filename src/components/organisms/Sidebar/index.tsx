import { DvrOutlined, FeedOutlined, GavelOutlined, GridViewOutlined, GroupOutlined, InsertChartOutlined,ManageAccountsOutlined} from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemText, ListSubheader} from "@mui/material"
import { makeStyles } from "@mui/styles"
import ButtonComponent from "../../atoms/Button"
import Text from "../../atoms/Typography"
import baseTheme from "../../../Themes"
import Recruit from '../../../recruit.png'
import Profile from "../../molecules/UserProfile"



const useStyles = makeStyles({
   recruitimage:{
      position:'relative',
      right:'34%',
      top:'60px',
      width:'78px',
      height:'20px',
   },
   icon:{
      position:'relative',
      color: baseTheme.palette.secondary.main,
     },
   
   text:{
      
      position:'relative',
      color: baseTheme.palette.primary.main
   },
   list:{
      position:'relative',
      top:'5px',
      background: '#ffffff',
      borderRadius:'6px',
      width: '100%',
      height: '95%'
   },
   listtext:{
      position:'relative',
      top:'37px'
   },
   
   divider:{
      top:'370px',
      position:'relative',
      border:'1px solid #E5E7ED'
   },
   profile:{
      position:'relative',
      top:'380px',
      left:'22px',
      width:'5px',
      height:'10px'
   }
   
})


const Sidebar = ()=>{
   const classes = useStyles()
   const icons = [
      {
         id:1,
         buttontext:<Text text='Home' name={classes.text} type='body1'/>,
         buttonIcon: <GridViewOutlined className={classes.icon}/>
      },
      {
       id:2,
       buttontext: <Text text='Candidates' name={classes.text} type='body1'/>,
       buttonIcon: <GroupOutlined className={classes.icon}/>  
      },
      {
         id:3,
         buttontext:<Text text='Adverse Actions' name={classes.text} type='body1'/>,
         buttonIcon:<GavelOutlined className={classes.icon}/>
      },
      {
         id:4,
         buttontext:<Text text='Logs' name={classes.text} type='body1'/>,
         buttonIcon:<FeedOutlined className={classes.icon}/>
      },
      {
         id:5,
         buttontext:<Text text='Analytics' name={classes.text} type='body1'/>,
         buttonIcon:<InsertChartOutlined className={classes.icon}/>
      },
      {
         id:6,
         buttontext:<Text text='Account' name={classes.text} type='body1'/>,
         buttonIcon:<ManageAccountsOutlined className={classes.icon}/>
      },
      {
         id:7,
         buttontext:<Text text='Screenings' name={classes.text} type='body1'/>,
         buttonIcon:<DvrOutlined className={classes.icon}/>
      }
      
   ]


    return(
      <>
        <Box className={classes.list}>
         <List  subheader={<ListSubheader>
            <img src={Recruit} className={classes.recruitimage}/>
            {/* Recruit */}
            
         </ListSubheader>}>
        
         {icons.map((icon)=>(
            <ListItem key={icon.id}>
               <div className={classes.listtext}>
                  <ListItemText>
                     <ButtonComponent icon={icon.buttonIcon} text={icon.buttontext}/>
                  </ListItemText>
               </div>
          </ListItem>
         ))}
         <div className={classes.divider}>
            <Divider/>
         </div>
         <div className={classes.profile}>
            <Profile/>
         </div>
       </List>
       </Box>
        
       
       
         
      
      </>
    )
}

export default Sidebar