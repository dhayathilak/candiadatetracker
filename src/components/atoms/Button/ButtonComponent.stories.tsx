import { ComponentStory,ComponentMeta } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";

export default{
    title: 'atoms/Button/ButtonComponent',
    component: ButtonComponent
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> =(args)=> <ButtonComponent {...args}/>
export const buttoncomponent = Template.bind({})