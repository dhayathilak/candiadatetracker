import { AddBoxOutlined, FileDownloadOutlined, FilterList, MoreVert } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableContainer, TableHead,Grid,TableRow, Divider, Stack } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { candidatetype} from "../../../Services/services"
import { getData } from "../../../convertors"
import ButtonComponent from "../../atoms/Button"
import ChipComponent from "../../atoms/Chips"
import Text from "../../atoms/Typography"
import Search from "../../molecules/Searchbar"




const headers=[
    'Name',
    "Adjunction",
    "Status",
    "Location",
    "Date"
]


const useStyles = makeStyles({
    table:{
        background:'#FFFFFF',
        marginTop:'20px'
    },
   morebutton:{
    width:'20px'
   },
   linktext:{
    textDecoration:'none',
    color:'#224DFF'
   }

    
})



const CandidateTable = ()=>{
    const root= useStyles()

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
       
       
           
           <Grid container spacing={3}>
               <Grid item xs={1}>
                    <Text text='Candidates' type="h5" />
               </Grid>
               <Grid item xs={8}>

               </Grid>
               <Grid item xs={3}>
               <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                    <ButtonComponent type={"outlined"} icon={<FileDownloadOutlined/>} text='Export'/>
                    <ButtonComponent type={"contained"} icon={<AddBoxOutlined/>} text='Manual Order' color='primary'/>
                </div>

               </Grid>
           </Grid>
        
        <TableContainer className={root.table}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Text text='Candidate Information' type="subtitle1"/></TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                        <TableCell><Search placeholder="Search for any candidate"/></TableCell>
                        <TableCell>
                            <Stack direction={'row'} spacing={1}>
                                <ButtonComponent text="Filter" icon={<FilterList/>} type='outlined' />
                                <ButtonComponent icon={<MoreVert/>} type='outlined' size={'small'}/>
                            </Stack>
                        </TableCell>
                        
                    </TableRow>
                   
                    
                </TableHead>
                <Divider />
                <TableHead>
                
                    {headers.map((h)=>(<TableCell key={h}>{h}</TableCell>))}
                </TableHead>
                <TableBody>
                    {data.map((d)=>(
                           <TableRow key={d.name}>
                           <TableCell><Link to={{pathname:`/candidate/${d.id}`}} className={root.linktext}>{d.name}</Link></TableCell>
                           <TableCell>{d.adjunction}</TableCell>
                           <TableCell>{<ChipComponent label={d.status} type={d.type}/>}</TableCell>
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