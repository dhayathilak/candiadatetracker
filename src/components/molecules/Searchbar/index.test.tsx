import { render } from "@testing-library/react"
import Search from "."

test('searchbar',()=>{
    expect(render(<Search placeholder="search"/>)).toBeDefined()
    expect(render(<Search placeholder="search"/>)).toMatchSnapshot()
})