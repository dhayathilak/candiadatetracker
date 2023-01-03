import { AppsOutage, DvrTwoTone, FeedTwoTone, Gavel, InsertChartTwoTone, ManageAccountsTwoTone, Person } from "@mui/icons-material"
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material"
import Text from "../../atoms/Typography/Text"
import IconButtons from "../../molecules/Iconbuttons/IconButtons"

const Sidebar = ()=>{
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
       {/* <List>
         <ListSubheader>
            <Text text='Recruit'/>
         </ListSubheader>
         </List> */}
         <List sx={{width:'200px',height:'90%',position:'fixed',marginTop:'10px',marginBottom:'20px',marginLeft:'20px',boxShadow: '5px 5px 5px 5px grey'}}>
         <ListSubheader>
            <Text text='Recruit'/>
         </ListSubheader>
         {icons.map((icon)=>(
            <ListItem key='icon'>
            <ListItemText>
                <IconButtons icontext={icon.buttontext} icon={icon.buttonIcon}/>
            </ListItemText>
          </ListItem>
         ))}
             
       </List>
      
      </>
    )
}

export default Sidebar