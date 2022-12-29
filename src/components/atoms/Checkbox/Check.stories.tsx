import { ComponentMeta, ComponentStory } from "@storybook/react";
import Check from "./Check";

export default{
    title: 'atoms/Checkbox/check',
    component: Check
}as ComponentMeta<typeof Check>


const Template: ComponentStory<typeof Check>=()=><Check/>
export const checkbox = Template.bind({})