import { Divider, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material"
import ChipComponent from "../../atoms/Chips"
import Text from "../../atoms/Typography"

import { countsearch } from "./Constants"


const Count = ()=>{
    return(
        <Table>
           
            <TableHead>
                    <TableRow>
                        <TableCell><Text text='Court searches' type={'subtitle1'}/></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <Divider variant="fullWidth"/>
                    </TableRow>
                </TableHead>
                
            <TableHead style={{backgroundColor:'#F7F8FA'}}>
                <TableRow>
                    <TableCell><Text text='Search' type={'caption1'}/></TableCell>
                    <TableCell><Text text='Status' type={'caption1'}/></TableCell>
                    <TableCell><Text text='Date' type={'caption1'}/></TableCell>
                </TableRow>
            </TableHead>
            
            <TableBody>
                {countsearch.map((c)=>(<TableRow key={c.text}>
                    <TableCell key={c.text}>{<Text text={c.text} type='body1'/>}</TableCell>
                    <TableCell>{<ChipComponent label={c.label} type={c.color}/>}</TableCell>
                    <TableCell>{<Text text={c.date} type='body2'/>}</TableCell>
                    </TableRow>))}
               
               
               
            </TableBody>
        </Table>
    )
}

export default Count