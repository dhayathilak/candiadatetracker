import { Add, Download, Filter, FilterList, MoreVert } from "@mui/icons-material"
import { Link, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination,Grid, Stack, TableRow } from "@mui/material"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"
import IconButtons from "../../molecules/Iconbuttons/IconButtons"
import AdverseNotice from "../../molecules/Pre-AdverseNotice/AdverseNotice"
import Search from "../../molecules/Searchbar/Search"


const CandidateTable = ()=>{
    return(
        <>
        
       
        <Grid container>
            <Grid item xs={1}>
                <Text text='Candidates'/>
            </Grid>
           <Grid item xs={5}>
            
           </Grid>
           <Grid item xs={2}>
                
           </Grid>
           <Grid item xs={4}>
           <IconButtons icontext="Export" icon={<Download/>}/>
            <IconButtons icontext="ManualOrder" icon={<Add/>}/>
            </Grid>
        </Grid>
        <TableContainer sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Text text='Candidate Info'/></TableCell>
                        <TableCell></TableCell>
                        <TableCell> <Search/></TableCell>
                        <TableCell><IconButtons icontext="Filter" icon={<FilterList/>}/></TableCell>
                        <TableCell><ButtonComponent icon={<MoreVert/>}/></TableCell>
                    </TableRow>
                    {/* <Grid container> */}
                        {/* <Grid item xs={4}>
                            <Text text='Candidate Info'/>
                        </Grid>
                        <Grid item xs={2}></Grid>
                        <Grid item xs={3}>
                            <Search/>
                        </Grid>
                        <Grid item xs={3}>
                            <IconButtons icontext="Filter" icon={<FilterList/>}/>
                            <ButtonComponent icon={<MoreVert/>}/>
                        </Grid> */}
                            
                        
                    {/* </Grid>
                     */}
                </TableHead>
                <TableHead>
                    <TableCell>Name</TableCell>
                    <TableCell>Adjunction</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Location</TableCell>
                    <TableCell>Date</TableCell>
                </TableHead>
                <TableBody>
                    <TableCell><Link href='/candidate'>John smith</Link></TableCell>
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