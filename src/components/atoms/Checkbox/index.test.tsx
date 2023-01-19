import { render } from "@testing-library/react"
import Check from "."


test('render',()=>{
    expect(render(<Check/>)).toBeDefined()
    expect(render(<Check/>)).toMatchSnapshot()
})