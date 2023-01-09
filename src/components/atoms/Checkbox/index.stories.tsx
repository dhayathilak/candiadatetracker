import { ComponentMeta, ComponentStory } from "@storybook/react";
import Check from ".";

export default{
    title: 'components/atoms/checkbox',
    component: Check
}as ComponentMeta<typeof Check>


const Template: ComponentStory<typeof Check>=()=><Check/>
export const checkbox = Template.bind({})