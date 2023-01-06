import { Add, Download, FilterList, MoreVert } from "@mui/icons-material"
import { Table, TableBody, TableCell, TableContainer, TableHead,Grid,TableRow, Divider } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useEffect, useState } from "react"
import baseTheme from "../../../Themes"

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


const useStyles = makeStyles({
   pageheader:{
     fontFamily:'Inter',
     fontStyle:'normal',
     fontWeight:500,
     fontSize:'20px',
     lineHeight:'30px',
     color: '#2C2C2E'
   },
   exportbutton:{    
    fontStyle:'normal',
    fontSize:'14px',
    border: '1px solid #E5E7ED',
    backgroundColor:'#FFFFFF',
    borderRadius:'6px',
    lineHeight:'20px',
    color:'#696A6E',
    fontFamily:baseTheme.typography.fontFamily,
    fontWeight:baseTheme.typography.fontWeightMedium
   },
   manualorder:{
    fontFamily:baseTheme.typography.fontFamily,
    fontWeight:baseTheme.typography.fontWeightMedium,
    fontStyle:'normal',
    fontSize:'14px',
    lineHeight:'20px',
    color:'#FFFFFF',
    background:'#224DFF',
    borderRadius:'6px'
   },
   table:{
    background: '#FFFFFF',
    boxShadow: '0px 4px 28px rgba(45, 45, 47, 0.1)',
    borderRadius: '6px'
   },
   searchbox:{
    fontFamily:baseTheme.typography.fontFamily,
    fontWeight:'400',
    fontSize:'14px',
    color:'#696A6E',
    lineHeight:'20px'
   },
   filtericon:{
    background:'#696A6E'
   },
   divider:{
    border: '1px solid #E5E7ED',
   },
   name:{
    color:'#224DFF',
    textDecoration:'none'
   },
   header:{
    background: '#F7F8FA',
    boxSizing: 'border-box',
    borderBottom: '1px solid #E5E7ED',
    borderRadius: '0px'
   }

})



const CandidateTable = ()=>{
    const classes= useStyles()

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
                <Text text='Candidates' type="h6" name={classes.pageheader}/>
            </Grid>
           <Grid item xs={5}>
            
           </Grid>
           <Grid item xs={2}></Grid>
           <Grid item xs={2}>
                <ButtonComponent text="Export" icon={<Download/>} name={classes.exportbutton} type='outlined'/>
           </Grid>
           <Grid item xs={1}>
           
            <ButtonComponent text="ManualOrder" icon={<Add/>} type={"contained"} name={classes.manualorder}/>
            </Grid>
        </Grid>
        
        <TableContainer sx={{boxShadow:'5px 5px 5px 5px grey',marginTop:'20px'}} className={classes.table}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell><Text text='Candidate Information' type="h6"/></TableCell>
                        <TableCell><Search placeholder="Search for any candidate" name={classes.searchbox}/></TableCell>
                        <TableCell><ButtonComponent text="Filter" icon={<FilterList/>} type='outlined' name={classes.filtericon}/>
                        </TableCell>
                        <TableCell><ButtonComponent icon={<MoreVert/>} type='outlined'/></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                    
                </TableHead>
                <Divider className={classes.divider}/>
                <TableHead className={classes.header}>
                
                    {headers.map((h)=>(<TableCell key={h}>{h}</TableCell>))}
                </TableHead>
                <TableBody>
                    {data.map((d)=>(
                           <TableRow key={d.name}>
                           <TableCell><Link to={{pathname:`/candidate/${d.id}`}} className={classes.name}>{d.name}</Link></TableCell>
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