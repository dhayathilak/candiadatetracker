import AdverseNotice from "../components/molecules/Pre-AdverseNotice/AdverseNotice"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"

const AdversePage = ()=>{
    return (
        <HomeTemplate maincontent={<AdverseNotice/>} sidebar={<Sidebar/>}/>
    )
}

export default AdversePage