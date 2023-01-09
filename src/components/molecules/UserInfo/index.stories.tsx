import { ComponentMeta, ComponentStory } from "@storybook/react";
import Info from ".";



export default{
    title:'components/molecules/userinfo',
    component: Info
} as ComponentMeta<typeof Info>

const Template: ComponentStory<typeof Info>=(args)=><Info {...args}/>
export const info = Template.bind({})