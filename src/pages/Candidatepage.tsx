import { ReactElement } from "react"
import Candidate from "../components/molecules/Candidate/Candidate"
import CandidateInfo from "../components/molecules/CandidateInfo/CandidateInfo"
import CandidateTable from "../components/organisms/CandidateTable/CandidateTable"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"

const CandidatePage= ()=>{
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<Candidate/>}/>
    )
}


export default CandidatePage