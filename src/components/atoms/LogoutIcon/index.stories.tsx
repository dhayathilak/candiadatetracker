import { Logout } from "@mui/icons-material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from ".";

export default{
    title:'components/atoms/LogoutIcon',
    component: Icon
}as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon>=(args)=><Icon {...args}/>
export const icon = Template.bind({})
icon.args={
    icontype:<Logout/>
}