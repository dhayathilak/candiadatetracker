import { ComponentStory } from "@storybook/react";
import IconButtons from "./IconButtons";

const myIconButton ={
    title:'molecules/iconbutton',
    component: IconButtons
}

const Template: ComponentStory<typeof IconButtons> = () => <IconButtons/>
const iconbutton = Template.bind({})






export default myIconButton