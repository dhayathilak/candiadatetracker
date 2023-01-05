import { AppsOutage, DvrTwoTone, FeedTwoTone, Gavel, InsertChartTwoTone, ManageAccountsTwoTone, Person} from "@mui/icons-material"
import { List, ListItem, ListItemText, ListSubheader} from "@mui/material"
import { makeStyles } from "@mui/styles"
import {blue, grey, indigo, purple} from '@mui/material/colors'

import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"


const useStyles = makeStyles({
   list:{
      height:'90vh',position:'fixed',boxShadow: '5px 5px 5px 5px grey',background: grey[50]
   },
   text:{
      padding : '0px',
      background: grey[50],
      color: indigo[900],
      fontVariantCaps: "inherit"
      
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
               <ButtonComponent icon={icon.buttonIcon} text={icon.buttontext}/>
            </ListItemText>
          </ListItem>
         ))}
             
       </List>
      
      </>
    )
}

export default Sidebar