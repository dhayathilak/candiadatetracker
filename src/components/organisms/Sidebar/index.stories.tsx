import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from ".";

export default{
    title: 'components/organisms/sidebar',
    component: Sidebar
}as ComponentMeta<typeof Sidebar>


const Template: ComponentStory<typeof Sidebar>=()=><Sidebar/>
export const sidebar = Template.bind({})