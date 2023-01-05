import { Add, Download, FilterList, MoreVert } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableContainer, TableHead,Grid,TableRow } from "@mui/material"
import { useEffect, useState } from "react"


import { Link } from "react-router-dom"
import { candidatetype,getData } from "../../../Services/services"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"
import Search from "../../molecules/Searchbar/Search"



const headers=[
    'Name',
    "Adjunction",
    "Status",
    "Location",
    "Date"
]



const CandidateTable = ()=>{
    

    // getIndex()
    const [data,setData] = useState<candidatetype[]>([])
    

    async function datas(){
        let result = await getData()
        setData(result)
    }
    
    useEffect(()=>{
        datas()
   },[])
   console.log(data)



    return(
        <>
        <Grid container spacing={1}>
            <Grid item xs={1}>
                <Text text='Candidates' type="h6"/>
            </Grid>
           <Grid item xs={5}>
            
           </Grid>
           <Grid item xs={2}></Grid>
           <Grid item xs={2}>
                <ButtonComponent text="Export" icon={<Download/>} type='outlined'/>
           </Grid>
           <Grid item xs={2}>
           
            <ButtonComponent text="ManualOrder" icon={<Add/>} type={"contained"}/>
            </Grid>
        </Grid>
        <TableContainer sx={{boxShadow:'5px 5px 5px 5px grey',marginTop:'20px'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Text text='Candidate Information' type="h6"/></TableCell>
                        <TableCell></TableCell>
                        <TableCell> <Search/></TableCell>
                        <TableCell><ButtonComponent text="Filter" icon={<FilterList/>} type='outlined'/></TableCell>
                        <TableCell><ButtonComponent icon={<MoreVert/>} type='outlined'/></TableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    {headers.map((h)=>(<TableCell key={h}>{h}</TableCell>))}
                </TableHead>
                <TableBody>
                    {data.map((d)=>(
                           <TableRow key={d.name}>
                           <TableCell><Link to={{pathname:`/candidate/${d.id}`}} style={{textDecoration:'none',color:'blue'}}>{d.name}</Link></TableCell>
                           <TableCell>{d.adjunction}</TableCell>
                           <TableCell>{<ChipComponent label={d.status}/>}</TableCell>
                           <TableCell>{<Text text={d.location}/>}</TableCell>
                           <TableCell>{<Text text={d.date}/>}</TableCell>
                       </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        {/* <TablePagination/> */}
        
        
        </>
    )
}
export default CandidateTable