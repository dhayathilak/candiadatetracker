import { ComponentStory } from "@storybook/react";
import Text from "./Text";

const Typography = {
    title: 'typography',
    component: Text
}

const Template: ComponentStory<typeof Text> =(args) => <Text {...args}/>
export const myText = Template.bind({})
myText.args={
    title: 'typography'
}

export default Typography