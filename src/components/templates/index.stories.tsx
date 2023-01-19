import { ComponentMeta, ComponentStory } from "@storybook/react";
import HomeTemplate from ".";
import Homepage from "../../pages/Mainpage";
import Sidebar from "../organisms/Sidebar";

export default{
    title:'components/templates/Hometemplate',
    component: HomeTemplate
}as ComponentMeta<typeof HomeTemplate>

const Template: ComponentStory<typeof HomeTemplate>=(args)=><HomeTemplate {...args}/>
export const hometemplate= Template.bind({})

hometemplate.args={
    maincontent: <Homepage/>,
    sidebar: <Sidebar/>
}