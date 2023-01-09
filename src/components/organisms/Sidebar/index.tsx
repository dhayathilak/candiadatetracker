import { DvrOutlined, FeedOutlined, GavelOutlined, GridViewOutlined, GroupOutlined, InsertChartOutlined,ManageAccountsOutlined} from "@mui/icons-material"
import { Box, Divider, List, ListItem, ListItemText, ListSubheader} from "@mui/material"
import { makeStyles } from "@mui/styles"
import ButtonComponent from "../../atoms/Button"
import Text from "../../atoms/Typography"
import baseTheme from "../../../Themes"
import Recruit from '../../../recruit.png'
import Profile from "../../molecules/UserProfile"



const useStyles = makeStyles({
   icon:{
      position:'relative',
      top:'300%',
      color: baseTheme.palette.secondary.main,
     },
   
   text:{
      position:'relative',
      top:'30%',
      color: baseTheme.palette.primary.main
   },
   list:{
      position:'relative',
      background: '#ffffff',
      borderRadius:'6px',
      width: '100%',
      height: '720px'
   },
   image:{
      position:'absolute',
      left:'28px',
      top:'2px',
      width:'78px',
      height:'20px',
      bottom:'2px'
   },
   divider:{
      top:'644px',
      bottom:'200px',
      posiiton:'absolute',
      border:'1px solid red'
   },
   profile:{
      left:'20%',
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
            <img src={Recruit} className={classes.image}/>
            {/* Recruit */}
            
         </ListSubheader>}>
        
         {icons.map((icon)=>(
            <ListItem key={icon.id}>
            <div>
               <ListItemText>
                  <ButtonComponent icon={icon.buttonIcon} text={icon.buttontext}/>
               </ListItemText>
            </div>
          </ListItem>
         ))}
        
         <Divider classes={classes.divider}/>
         <Profile name={classes.profile}/>
       </List>
       </Box>
        
       
       
         
      
      </>
    )
}

export default Sidebar