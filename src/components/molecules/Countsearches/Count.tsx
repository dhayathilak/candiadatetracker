import { Table, TableBody, TableCell, TableHead } from "@mui/material"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"
import './Constants.tsx'
import{text,label,date} from './Constants'
// interface propTypes={
//     header: [],


// }

const Count = ()=>{
    return(
        <Table sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <TableHead>
                <TableCell>Search</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
            </TableHead>
            <TableBody>
               <TableCell>{<Text text={text}/>}</TableCell>
               <TableCell>{<ChipComponent label={label}/>}</TableCell>
               <TableCell>{<Text text={date}/>}</TableCell>
            </TableBody>
        </Table>
    )
}

export default Count