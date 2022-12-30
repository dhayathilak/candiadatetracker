import { ComponentMeta, ComponentStory } from "@storybook/react";
import ChipComponent from "./ChipComponent";

export default{
    title:'components/atoms/Chips',
    component: ChipComponent
}as ComponentMeta<typeof ChipComponent>


const Template: ComponentStory<typeof ChipComponent>= (args)=><ChipComponent {...args}/>
export const chipbutton = Template.bind({})
chipbutton.args={
    label:'default'
}