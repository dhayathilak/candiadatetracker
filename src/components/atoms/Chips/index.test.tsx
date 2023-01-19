import { render } from "@testing-library/react"
import ChipComponent from "."

test('render',()=>{
    expect(render(<ChipComponent label='primary'/>)).toBeDefined()
    expect(render(<ChipComponent label='primary'/>)).toMatchSnapshot()
})