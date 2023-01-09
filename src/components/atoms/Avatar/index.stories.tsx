import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserIcon from ".";
import test from '../../../../sample.png'

export default {
    title: 'components/atoms/Avatar',
    component: UserIcon,
}as ComponentMeta<typeof UserIcon>

const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;
export const icon = Template.bind({})
icon.args={
    imagepath: test
}