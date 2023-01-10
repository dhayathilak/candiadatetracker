import { ArrowBack} from "@mui/icons-material"
import { Stack,Grid } from "@mui/material"
import ButtonComponent from "../../atoms/Button"
import Text from "../../atoms/Typography"
import CandidateInfo from "../CandidateInfo"
import Count from "../Countsearches"
import ReportInfo from "../ReportInfo/index"
import { Link } from "react-router-dom"




const Candidate  =(data:any)=>{
    console.log(data.data.name)
    
    return(
        <> 
        
            
        
            <Stack direction='column' spacing={3}>
                <Grid container spacing={1}>
                   <Grid item xs={1}>
                        <ButtonComponent icon={<ArrowBack/>} type='text' link ={Link} path={{pathname:'/'}}/>
                   </Grid>
                   <Grid item xs={2}><Text text={data.data.name} type='h6'/></Grid>
                   <Grid item xs={6}></Grid>
                   <Grid item xs={3}>
                       <div style={{flexDirection:'row',display:'flex',justifyContent:'space-between'}}>
                            <ButtonComponent text="Pre-advrseaction" link={Link}  type='outlined' path= {{pathname: `/adversenotice/${data.data.id}`}}/>
                            <ButtonComponent text="Engage" type="contained"/> 
                       </div>

                   </Grid>
                </Grid>                    
                <CandidateInfo details={data}/>
                <ReportInfo reportdetails={data}/>
                <Count/>
            </Stack>
           
        </>
    )
}

export default Candidate