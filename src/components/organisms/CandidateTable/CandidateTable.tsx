import { Add, Download, FilterList, MoreVert } from "@mui/icons-material"
import { Link, Table, TableBody, TableCell, TableContainer, TableHead,Grid,TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"
import IconButtons from "../../molecules/Iconbuttons/IconButtons"
import Search from "../../molecules/Searchbar/Search"

type candidatetype = {
    name:string,
    adjunction:string,
    status:string,
    location:string,
    date:string
}

const headers=[
    'Name',
    "Adjunction",
    "Status",
    "Location",
    "Date"
]
const CandidateTable = ()=>{
    const [data,setData] = useState<candidatetype[]>([])
    
    async function getData(){
        const resp = await axios.get('http://localhost:3000/Candidates')
        setData(resp.data)
    }
    useEffect(()=>{
         getData()
    },[])
    console.log(data)
    

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
                </TableHead>
                <TableHead>
                    {headers.map((h)=>(<TableCell key={h}>{h}</TableCell>))}
                </TableHead>
                <TableBody>
                    {data.map((d)=>(
                           <TableRow key={d.name}>
                           <TableCell><Link href='/candidate'>{d.name}</Link></TableCell>
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