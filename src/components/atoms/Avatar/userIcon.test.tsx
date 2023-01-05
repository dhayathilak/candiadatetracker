import { render } from "@testing-library/react"
import UserIcon from "./userIcon"
import img from '../../../../sample.png'

test('render',()=>{
    // const func = render(<UserIcon imagepath={img}/>)
    expect(render(<UserIcon imagepath={img}/>)).toBeDefined();

})