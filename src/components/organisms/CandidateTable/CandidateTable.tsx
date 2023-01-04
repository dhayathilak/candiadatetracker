import { Add, Download, FilterList, MoreVert } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableContainer, TableHead,Grid,TableRow } from "@mui/material"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import ChipComponent from "../../atoms/Chips/ChipComponent"
import Text from "../../atoms/Typography/Text"
import Search from "../../molecules/Searchbar/Search"

type candidatetype = {
    id:number,
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

export type currentdata ={
    id: number,
    name: string,
    email:string,
    dob:string,
    phone:string,
    zipcode:string,
    socialsecurity:string,
    driverslicense:string,
    createdat:string,
    status:string,
    adjunction:string,
    package:string,
    completeddate:string,
    turnaroundtime:string

}

const CandidateTable = ()=>{
    const [data,setData] = useState<candidatetype[]>([])
    const [currentdata,setCurrentData] = useState<currentdata[]>([])
    
    async function getData(){
        const resp = await axios.get('http://localhost:3000/Candidates')
        setData(resp.data)
    }
    useEffect(()=>{
         getData()
    },[])
    console.log(data)


    async function getCurrentdata(id: number){
       const currentresp = await axios.get(`http://localhost:3000/Candidates/${id}`)
       setCurrentData(currentresp.data)
    }
    console.log(currentdata)

    // getIndex()

    
    
    

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
           <ButtonComponent text="Export" icon={<Download/>}/>
            <ButtonComponent text="ManualOrder" icon={<Add/>}/>
            </Grid>
        </Grid>
        <TableContainer sx={{boxShadow:'5px 5px 5px 5px grey'}}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Text text='Candidate Info'/></TableCell>
                        <TableCell></TableCell>
                        <TableCell> <Search/></TableCell>
                        <TableCell><ButtonComponent text="Filter" icon={<FilterList/>}/></TableCell>
                        <TableCell><ButtonComponent icon={<MoreVert/>}/></TableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    {headers.map((h)=>(<TableCell key={h}>{h}</TableCell>))}
                </TableHead>
                <TableBody>
                    {data.map((d)=>(
                           <TableRow key={d.name}>
                           {/* <TableCell><Link href='/candidate'>{d.name}</Link></TableCell> */}
                           <TableCell onClick={()=>{getCurrentdata(d.id)}}><Link to={{pathname:'/candidate'}}>{d.name}</Link></TableCell>
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