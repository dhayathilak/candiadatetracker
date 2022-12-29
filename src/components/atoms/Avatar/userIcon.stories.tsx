import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserIcon from "./userIcon";

export default {
    title: 'atoms/Avatar/userIcon',
    component: UserIcon,
}as ComponentMeta<typeof UserIcon>

const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;
export const icon = Template.bind({})
