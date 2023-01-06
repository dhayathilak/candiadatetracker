import { useParams } from "react-router-dom"
import AdverseNotice from "../components/molecules/Pre-AdverseNotice/AdverseNotice"
import Sidebar from "../components/organisms/Sidebar/Sidebar"
import HomeTemplate from "../components/templates/HomeTemplate"

const AdversePage = ()=>{
    let {id} = useParams()
    console.log(id)
    return (
        <HomeTemplate maincontent={<AdverseNotice id={id}/>} sidebar={<Sidebar/>} />
    )
}

export default AdversePage