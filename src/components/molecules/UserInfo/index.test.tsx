import { Person2 } from "@mui/icons-material"
import { render } from "@testing-library/react"
import Info from "."

test('userinfo',()=>{
    expect(render(<Info header='head' detail="mydetail" icontype={<Person2/>}/>)).toBeDefined()
    expect(render(<Info header='head' detail="mydetail" icontype={<Person2/>}/>)).toMatchSnapshot()

})