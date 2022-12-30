import { ComponentMeta, ComponentStory } from "@storybook/react";
import AdverseNotice from "./AdverseNotice";

export default{
    title:'components/molecules/preadversenotice',
    component: AdverseNotice
} as ComponentMeta<typeof AdverseNotice>

const Template: ComponentStory<typeof AdverseNotice>=()=><AdverseNotice/>
export const preadversenotice = Template.bind({})