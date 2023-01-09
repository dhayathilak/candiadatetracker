import { ComponentMeta, ComponentStory } from "@storybook/react";
import Profile from ".";

export default{
    title: 'components/molecules/profile',
    component: Profile
}as ComponentMeta<typeof Profile>

const Template: ComponentStory<typeof Profile> = ()=> <Profile/>
export const info = Template.bind({})