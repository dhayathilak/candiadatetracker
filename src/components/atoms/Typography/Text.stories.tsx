import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./Text";


export default {
    title: 'atoms/Typography/myText',
    component: Text
}as ComponentMeta<typeof Text>


const Template: ComponentStory<typeof Text> =(args) => <Text {...args}/>
export const myText = Template.bind({})