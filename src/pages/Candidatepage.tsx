import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Candidate from "../components/molecules/Candidate/index"
import Sidebar from "../components/organisms/Sidebar"
import HomeTemplate from "../components/templates"
import { getCurrentdata } from "../convertors"
import { currentdata } from "../Services/services"



const CandidatePage= ()=>{                
    let {id} = useParams()
    console.log(id)
    const [currentdata,setCurrentData] = useState<currentdata[]>([])
    async function getcurrent(){
        let resp = await getCurrentdata(id)
        setCurrentData(resp)
    }
    useEffect(()=>{
        getcurrent()
    },[])
    console.log(currentdata)


    // const result = Object.keys(currentdata).map(function(k: any) { return currentdata[k] });
    // console.log(result[1])

   
    
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<Candidate data={currentdata}/>}/>
    )
}


export default CandidatePage