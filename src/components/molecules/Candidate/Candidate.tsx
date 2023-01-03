import { ArrowBack} from "@mui/icons-material"
import { Stack,Grid } from "@mui/material"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"
import CandidateInfo from "../CandidateInfo/CandidateInfo"
import Count from "../Countsearches/Count"

const Candidate  =()=>{
    return(
        <> 
            
            <Stack direction='column' spacing={3}>
                <Grid container spacing={3}>
                    <Grid item xs={1}>
                        <ButtonComponent icon={<ArrowBack/>} path='/'/>
                        
                    </Grid>
                    <Grid item xs={1}>
                        <Text text='john'/>
                    </Grid>
                    <Grid item xs={6}></Grid>
                    <Grid item xs={4}><ButtonComponent text="Pre-advrseaction" path='/adversenotice'/><ButtonComponent text="Engage"/></Grid>
                
                </Grid>
                <CandidateInfo/>
                <CandidateInfo/>
                <Count/>
            </Stack>
           
        </>
    )
}

export default Candidate