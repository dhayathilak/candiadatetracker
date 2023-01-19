import { render } from "@testing-library/react"
import AdverseNotice from "."

test('preadverse',()=>{
    expect(render(<AdverseNotice/>)).toBeDefined()
    expect(render(<AdverseNotice/>)).toMatchSnapshot()
})