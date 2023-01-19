import { ComponentMeta, ComponentStory } from "@storybook/react";
import Count from ".";

export default{
    title:'components/molecules/countSearches',
    compoenent: Count
}as ComponentMeta<typeof Count>

const Template: ComponentStory<typeof Count>=()=><Count/>
export const countsearchestable = Template.bind({})