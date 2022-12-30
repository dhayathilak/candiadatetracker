import { ComponentMeta, ComponentStory } from "@storybook/react";
import Text from "./Text";


export default {
    title: 'components/atoms/Typography',
    component: Text
}as ComponentMeta<typeof Text>


const Template: ComponentStory<typeof Text> =(args) => <Text {...args}/>
export const myText = Template.bind({})
myText.args={
    text:'Hello!'
}