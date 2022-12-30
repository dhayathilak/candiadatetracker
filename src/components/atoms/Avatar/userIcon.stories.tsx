import { ComponentMeta, ComponentStory } from "@storybook/react";
import UserIcon from "./userIcon";

export default {
    title: 'components/atoms/Avatar',
    component: UserIcon,
}as ComponentMeta<typeof UserIcon>

const Template: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;
export const icon = Template.bind({})
icon.args={
    imagepath:'https://img.freepik.com/premium-photo/young-happy-woman-smiling-while-wearing-sleeveless_251136-13510.jpg?w=1380'
}