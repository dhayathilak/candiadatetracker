import { ComponentStory } from "@storybook/react";
import Logout from "./Logout";

const Loggedout = {
    title:'logout',
    component: Logout
}

const Template: ComponentStory<typeof Logout>=(args)=> <Logout {...args}/>
export const logout = Template.bind({})
logout.args={title:'logouticon'}



export default Loggedout