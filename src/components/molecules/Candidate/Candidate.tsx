import { ArrowBack} from "@mui/icons-material"
import { Stack,Grid } from "@mui/material"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"
import CandidateInfo from "../CandidateInfo/CandidateInfo"
import Count from "../Countsearches/Count"
import ReportInfo from "../ReportInfo/ReportInfo"
import { currentdata } from "../../organisms/CandidateTable/CandidateTable"


const Candidate  =(currentdata: currentdata)=>{
    let candidateDetails = {'Name': currentdata.name,'Email':currentdata.email}
    console.log(candidateDetails)
    return(
        <> 
            
            <Stack direction='column' spacing={3}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <ButtonComponent icon={<ArrowBack/>} path='/'/>
                        
                    </Grid>
                    <Grid item xs={1}>
                        <Text text={candidateDetails.Name}/>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={4}><ButtonComponent text="Pre-advrseaction" path='/adversenotice'/><ButtonComponent text="Engage"/></Grid>
                
                </Grid>
                <CandidateInfo details={candidateDetails}/>
                <ReportInfo/>
                <Count/>
            </Stack>
           
        </>
    )
}

export default Candidate