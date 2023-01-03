import { ArrowBack, Forward } from "@mui/icons-material"
import { Link, Stack } from "@mui/material"
import ButtonComponent from "../../atoms/Button/ButtonComponent"
import Text from "../../atoms/Typography/Text"
import CandidateInfo from "../CandidateInfo/CandidateInfo"
import Count from "../Countsearches/Count"

const Candidate  =()=>{
    return(
        <> 
            <Stack direction='row' spacing={1}>
                <ButtonComponent icon={<ArrowBack/>} path='/'/>
                <Text text='john'/>
                <ButtonComponent text="Pre-advrseaction" path='/adversenotice'/>
                <ButtonComponent text="Engage"/>
            </Stack>
            
            <Stack direction='column' spacing={3}>
                <CandidateInfo/>
                <CandidateInfo/>
                <Count/>
            </Stack>
           
        </>
    )
}

export default Candidate