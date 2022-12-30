import { UsbOffSharp } from "@mui/icons-material";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButtons from "./IconButtons";

export default{
    title:'components/molecules/Iconbuttons',
    component: IconButtons

}as ComponentMeta<typeof IconButtons>

const Template: ComponentStory<typeof IconButtons> = (args) => <IconButtons {...args}/>
export const iconbutton = Template.bind({})
iconbutton.args={
    icontext:'primary',
    icon:<UsbOffSharp/>
}





