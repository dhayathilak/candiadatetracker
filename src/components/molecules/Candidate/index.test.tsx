import { render } from "@testing-library/react"
import Candidate from "."

test('candidate',()=>{
    expect(render(<Candidate id={1}/>)).toBeDefined()
    expect(render(<Candidate id={1}/>)).toMatchSnapshot()
})