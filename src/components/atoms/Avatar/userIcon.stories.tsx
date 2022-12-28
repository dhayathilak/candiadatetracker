import { ComponentStory } from "@storybook/react";
import UserIcon from "./userIcon";

const myuserIcon = {
    title: 'icon',
    component: UserIcon,
}

const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;
export const icon = Template.bind({})
icon.args={title:'avatar icon'}


export default myuserIcon
