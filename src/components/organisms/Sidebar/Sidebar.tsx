import { AppsOutage, FeedTwoTone, Gavel, Home, InsertChartTwoTone, ManageAccountsTwoTone, Person } from "@mui/icons-material"
import { List, ListItem, ListItemText, ListSubheader } from "@mui/material"
import Text from "../../atoms/Typography/Text"
import IconButtons from "../../molecules/Iconbuttons/IconButtons"

const Sidebar = ()=>{
    return(
       <List>
         <ListSubheader>
            <Text text='Recruit'/>
         </ListSubheader>
         <ListItem>
            <ListItemText>
                <IconButtons icontext='Home' icon={<AppsOutage/>}/>
            </ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>
                <IconButtons icontext='Candidate' icon={<Person/>}/>
            </ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>
                <IconButtons icontext='Adverse actions' icon={<Gavel/>}/>
            </ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>
                <IconButtons icontext='Logs' icon={<FeedTwoTone/>}/>
            </ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>
                <IconButtons icontext='Analytics' icon={<InsertChartTwoTone/>}/>
            </ListItemText>
         </ListItem>
         <ListItem>
            <ListItemText>
                <IconButtons icontext='Accounts' icon={<ManageAccountsTwoTone/>}/>
            </ListItemText>
         </ListItem>
        
        
       </List>
    )
}

export default Sidebar