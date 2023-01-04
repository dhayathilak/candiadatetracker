import { render } from "@testing-library/react"
import UserIcon from "./userIcon"
import img from '../../../../sample.png'

test('render',()=>{
    render(<UserIcon imagepath={img}/>)
})