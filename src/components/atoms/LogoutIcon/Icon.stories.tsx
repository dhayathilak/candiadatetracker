import { Logout } from "@mui/icons-material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default{
    title:'components/atoms/LogoutIcon',
    component: Icon
}as ComponentMeta<typeof Icon>

const Template: ComponentStory<typeof Icon>=()=><Icon icontype={<Logout/>}/>
export const icon = Template.bind({})