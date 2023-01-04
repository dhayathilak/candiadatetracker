import Candidate from "../components/molecules/Candidate/Candidate"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"
import { currentdata } from "../components/organisms/CandidateTable/CandidateTable"

const CandidatePage= (currentdata: currentdata)=>{
    const t = {}
    return(
        <HomeTemplate sidebar={<Sidebar/>} maincontent={<Candidate name={currentdata.name} 
        zipcode={currentdata.zipcode} adjunction={currentdata.adjunction} 
        completeddate={currentdata.completeddate} createdat={currentdata.createdat} dob={currentdata.dob} 
        driverslicense={currentdata.driverslicense} email={currentdata.email} package={currentdata.package}
        id={currentdata.id} phone={currentdata.phone} socialsecurity={currentdata.socialsecurity} status={currentdata.status}
        turnaroundtime={currentdata.turnaroundtime}
        />}/>
    )
}


export default CandidatePage