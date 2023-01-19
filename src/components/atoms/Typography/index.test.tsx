import { render } from "@testing-library/react"
import Text from "."

test('text',()=>{
    expect(render(<Text text='primary'/>)).toBeDefined()
    expect(render(<Text text='primary'/>)).toMatchSnapshot()
})