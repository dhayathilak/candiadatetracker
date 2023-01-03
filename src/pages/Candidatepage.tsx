import Candidate from "../components/molecules/Candidate/Candidate"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"

const CandidatePage= ()=>{
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<Candidate/>}/>
    )
}


export default CandidatePage