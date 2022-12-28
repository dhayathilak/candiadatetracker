import { ComponentStory } from "@storybook/react";
import ButtonComponent from "./ButtonComponent";

const myButton={
    title: 'button',
    component : ButtonComponent,
    argTypes : {onClick: {action: 'clicked'}}
}

const Template: ComponentStory<typeof ButtonComponent> = (args) => <ButtonComponent {...args} />;
export const primaryButton = Template.bind({})
primaryButton.args={title: 'primary button'}


export default myButton