import { Divider, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"

import { countsearch } from "./Constants"


const Count = ()=>{
    return(
        <Table sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <TableHead>
                    <TableRow>
                    <TableCell><Text text='Court searches' type='h6'/></TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
                    <Divider variant="fullWidth"/>
                    </TableRow>
                </TableHead>
                
            <TableHead style={{backgroundColor:'grey'}}>
                <TableCell>Search</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
            </TableHead>
            <TableBody>
                {countsearch.map((c)=>(<TableRow key={c.text}>
                    <TableCell key={c.text}>{<Text text={c.text}/>}</TableCell>
                    <TableCell>{<ChipComponent label={c.label} type={"secondary"}/>}</TableCell>
                    <TableCell>{<Text text={c.date}/>}</TableCell>
                    </TableRow>))}
               
               
               
            </TableBody>
        </Table>
    )
}

export default Count