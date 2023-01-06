import { AppsOutage, DvrTwoTone, FeedTwoTone, Gavel, InsertChartTwoTone, ManageAccountsTwoTone, Person} from "@mui/icons-material"
import { List, ListItem, ListItemText, ListSubheader} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {blue, grey, indigo, purple} from '@mui/material/colors'

import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"
import baseTheme from "../../../Themes"


const useStyles = makeStyles({
   list:{
      position:'absolute',borderRadius:'6px',background: '#FFFFFF',height:'80vh'
   },
   text:{
      background:'#FFFFFF',
      color:'#224DFF'
      // position: 'absolute',
      // width: '78px',
      // height: '20px',
      // left:'28px',      
   },
   listbutton:{
      fontFamily: baseTheme.typography.fontFamily,
      fontStyle: 'normal',
      fontWeight:baseTheme.typography.fontWeightMedium,
      fontSize:'14px',
      lineHeight:'20px',
      color:baseTheme.palette.primary.main,
      background:'#3E414D;',
      borderRadius:'6px',
      animate:'instant'
   }
})


const Sidebar = ()=>{
   const classes = useStyles()
   const icons = [
      {
         buttontext:'Home',
         buttonIcon: <AppsOutage/>
      },
      {
       buttontext: 'Candidates',
       buttonIcon: <Person/>  
      },
      {
         buttontext:'Adverseactions',
         buttonIcon:<Gavel/>
      },
      {
         buttontext:'Logs',
         buttonIcon:<FeedTwoTone/>
      },
      {
         buttontext:'Analytics',
         buttonIcon:<InsertChartTwoTone/>
      },
      {
         buttontext:'Account',
         buttonIcon:<ManageAccountsTwoTone/>
      },
      {
         buttontext:'Screenings',
         buttonIcon:<DvrTwoTone/>
      }
      
   ]


    return(
      <>
         <List className={classes.list}>
         <ListSubheader className={classes.text}>
            <Text text='Recruit' name={classes.text}/>
         </ListSubheader>
         {icons.map((icon)=>(
            <ListItem key='icon'>
            <ListItemText>
               <ButtonComponent icon={icon.buttonIcon} text={icon.buttontext} name={classes.listbutton}/>
            </ListItemText>
          </ListItem>
         ))}
             
       </List>
      
      </>
    )
}

export default Sidebar