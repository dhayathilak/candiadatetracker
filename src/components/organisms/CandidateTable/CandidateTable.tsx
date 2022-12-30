import { Link, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination } from "@mui/material"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"


const CandidateTable = ()=>{
    return(
        <>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Adjunction</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Date</TableCell>
                </TableHead>
                <TableBody>
                    <TableCell><Link>John smith</Link></TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>{<ChipComponent label="verified"/>}</TableCell>
                    <TableCell>{<Text text='loaction'/>}</TableCell>
                    <TableCell>{<Text text='25-11-2022'/>}</TableCell>
                </TableBody>
            </Table>
        </TableContainer>
        {/* <TablePagination/> */}
        
        
        </>
    )
}
export default CandidateTable