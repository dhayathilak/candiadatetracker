import { ComponentMeta, ComponentStory } from "@storybook/react";
import IconButtons from "./IconButtons";

export default{
    title:'molecules/iconinfo/Iconbutton',
    component: IconButtons

}as ComponentMeta<typeof IconButtons>

const Template: ComponentStory<typeof IconButtons> = () => <IconButtons/>
export const iconbutton = Template.bind({})






