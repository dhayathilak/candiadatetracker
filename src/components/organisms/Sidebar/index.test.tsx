import { render } from "@testing-library/react"
import Sidebar from "."

test('sidebar',()=>{
    expect(render(<Sidebar/>)).toBeDefined()
    expect(render(<Sidebar/>)).toMatchSnapshot()
})