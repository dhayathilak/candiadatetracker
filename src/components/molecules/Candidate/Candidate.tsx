import { ArrowBack} from "@mui/icons-material"
import { Stack,Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { currentdata, getCurrentdata } from "../../../Services/services"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"
import CandidateInfo from "../CandidateInfo/CandidateInfo"
import Count from "../Countsearches/Count"
import ReportInfo from "../ReportInfo/ReportInfo"



const Candidate  =(id :any)=>{
    const [currentdata,setCurrentData] = useState<currentdata[]>([])
    console.log(id.id)
    async function getcurrent(){
        let resp = await getCurrentdata(id.id)
        setCurrentData(resp)
    }
    useEffect(()=>{
        getcurrent()
    },[])
    console.log(currentdata)


    const result = Object.keys(currentdata).map(function(k: any) { return currentdata[k] });
    console.log(result[1])
    
    return(
        <> 
            
            <Stack direction='column' spacing={3}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <ButtonComponent icon={<ArrowBack/>} path='/'/>
                    </Grid>
                    <Grid item xs={1}>
                        <Text text={`${result[1]}`} type='h6'/>
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={4}><ButtonComponent text="Pre-advrseaction" path='/adversenotice'/><ButtonComponent text="Engage" type="contained"/></Grid>
                
                </Grid>
                <CandidateInfo details={currentdata}/>
                <ReportInfo reportdetails={currentdata}/>
                <Count/>
            </Stack>
           
        </>
    )
}

export default Candidate