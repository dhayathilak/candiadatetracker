import { ArrowBack} from "@mui/icons-material"
import { Stack,Grid } from "@mui/material"
import { useEffect, useState } from "react"
import { currentdata} from "../../../Services/services"
import { getCurrentdata} from "../../../convertors"
import ButtonComponent from "../../atoms/Button"
import Text from "../../atoms/Typography"
import CandidateInfo from "../CandidateInfo"
import Count from "../Countsearches"
import ReportInfo from "../ReportInfo/index"
import AdverseNotice from "../Pre-AdverseNotice"
import { Link } from "react-router-dom"
import adversebutton from '../../../images/Create Order.png'



const Candidate  =(data:any)=>{
    console.log(data.data.name)
    
    return(
        <> 
            
            <Stack direction='column' spacing={3}>
                <Grid container spacing={1}>
                    <Grid item xs={1}>
                        <ButtonComponent icon={<ArrowBack/>} path='/'/>
                    </Grid>
                    <Grid item xs={1}>
                        <Text text={data.data.name} type='h6'/>
                    </Grid>
                    <Grid item xs={5}></Grid>
                    <Grid item xs={4}>
                        <button>
                            <img src ={adversebutton}/>
                        </button>
                        
                        <ButtonComponent text="Pre-advrseaction" link={Link}  path= {{pathname: `/adversenotice/${data.data.id}`}}/><ButtonComponent text="Engage" type="contained"/></Grid>
                
                </Grid>
                <CandidateInfo details={data}/>
                <ReportInfo reportdetails={data}/>
                <Count/>
            </Stack>
           
        </>
    )
}

export default Candidate