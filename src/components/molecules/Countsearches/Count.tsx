import { Table, TableBody, TableCell, TableHead } from "@mui/material"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"

// interface propTypes={
//     header: [],


// }

const Count = ()=>{
    return(
        <Table>
            <TableHead>
                <TableCell>Search</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
            </TableHead>
            <TableBody>
               <TableCell>{<Text text='ssn verification'/>}</TableCell>
               {/* <TableCell>{<ChipComponent text="confirmed"/>}</TableCell> */}
            </TableBody>
        </Table>
    )
}

export default Count