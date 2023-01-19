import { render } from "@testing-library/react"
import CandidateInfo from "."

test('info',()=>{
    expect(render(<CandidateInfo/>)).toBeDefined()
})