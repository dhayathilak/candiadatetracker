import { ComponentMeta, ComponentStory } from "@storybook/react";
import Search from ".";

export default{
    title:'components/molecules/searchbar',
    component: Search
}as ComponentMeta<typeof Search>


const Template: ComponentStory<typeof Search>=(args)=><Search {...args}/>
export const searchbar = Template.bind({})