import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChipComponent from "./ChipComponent";

export default{
    title:'atoms/Chips/ChipComponent',
    component: ChipComponent
}as ComponentMeta<typeof ChipComponent>


const Template: ComponentStory<typeof ChipComponent>= ()=><ChipComponent/>
export const chipbutton = Template.bind({})