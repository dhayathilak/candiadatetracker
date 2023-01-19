import { ThemeProvider } from "@mui/styles"
import { render } from "@testing-library/react"
import HomeTemplate from "."
import baseTheme from "../../Themes"



const Dummyview = ()=> {return(<div></div>)}

test('pages',()=>{
    expect(render(
    <ThemeProvider theme={baseTheme}>
    <HomeTemplate sidebar={<Dummyview/>} maincontent={<Dummyview/>}/></ThemeProvider>)).toBeDefined()
})