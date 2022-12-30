import { ComponentMeta, ComponentStory } from "@storybook/react";
import Info from "./Info";

export default{
    title:'components/molecules/userinfo',
    component: Info
} as ComponentMeta<typeof Info>

const Template: ComponentStory<typeof Info>=()=><Info/>
export const info = Template.bind({})