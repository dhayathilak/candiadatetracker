import { render } from "@testing-library/react"
import Icon from "."

test('render',()=>{
    expect(render(<Icon/>)).toBeDefined()
    expect(render(<Icon/>)).toMatchSnapshot()
})