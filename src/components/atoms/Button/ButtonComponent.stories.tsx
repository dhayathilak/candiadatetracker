import { UsbOffRounded, UsbRounded } from "@mui/icons-material";
import { ComponentStory,ComponentMeta } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";

export default{
    title: 'components/atoms/Button',
    component: ButtonComponent
} as ComponentMeta<typeof ButtonComponent>

const Template: ComponentStory<typeof ButtonComponent> =(args)=> <ButtonComponent {...args}/>
export const buttoncomponent = Template.bind({})
buttoncomponent.args={
    text:'primary'
}