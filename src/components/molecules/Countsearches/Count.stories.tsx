import { ComponentMeta, ComponentStory } from "@storybook/react";
import Count from "./Count";

export default{
    title:'molecules/countSearches/table',
    compoenent: Count
}as ComponentMeta<typeof Count>

const Template: ComponentStory<typeof Count>=()=><Count/>
export const countsearchestable = Template.bind({})