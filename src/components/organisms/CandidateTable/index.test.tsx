import { render } from "@testing-library/react"
import CandidateTable from "."

test('table',()=>{
    expect(render(<CandidateTable/>)).toBeDefined()
    expect(render(<CandidateTable/>)).toMatchSnapshot()
})