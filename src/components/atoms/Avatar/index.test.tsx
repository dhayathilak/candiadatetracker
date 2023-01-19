import { render } from "@testing-library/react"
import UserIcon from "."
import img from '../../../../sample.png'

test('render',()=>{
    expect(render(<UserIcon imagepath={img}/>)).toBeDefined();
    expect(render(<UserIcon imagepath={img}/>)).toMatchSnapshot()
})             