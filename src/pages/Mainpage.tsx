import CandidateTable from "../components/organisms/CandidateTable/CandidateTable"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"

const Homepage= ()=>{
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<CandidateTable/>}/>
    )
}


export default Homepage