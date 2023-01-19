import { render } from "@testing-library/react"
import Profile from "."

test('profile',()=>{
    expect(render(<Profile/>)).toBeDefined()
    expect(render(<Profile/>)).toMatchSnapshot()
})