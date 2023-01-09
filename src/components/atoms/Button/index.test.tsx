import { render } from "@testing-library/react"
import ButtonComponent from ".";


test('render',()=>{
    expect(render(<ButtonComponent/>)).toBeDefined();
    expect(render(<ButtonComponent/>)).toMatchSnapshot()
})             