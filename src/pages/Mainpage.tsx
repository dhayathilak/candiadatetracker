import CandidateTable from "../components/organisms/CandidateTable"
import Sidebar from "../components/organisms/Sidebar"
import HomeTemplate from "../components/templates"

const Homepage= ()=>{
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<CandidateTable/>}/>
    )
}


export default Homepage