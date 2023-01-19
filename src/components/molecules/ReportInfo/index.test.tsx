import { render } from "@testing-library/react"
import ReportInfo from "."

test('reportinfo',()=>{
    expect(render(<ReportInfo/>)).toBeDefined()
    expect(render(<ReportInfo/>)).toMatchSnapshot()
})