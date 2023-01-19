import { ComponentMeta, ComponentStory } from "@storybook/react";
import ReportInfo from ".";

export default{
    title:'components/molecules/reportinfo',
    component: ReportInfo
}as ComponentMeta<typeof ReportInfo>

const Template: ComponentStory<typeof ReportInfo>=(args)=><ReportInfo {...args}/>
export const reportinfo =  Template.bind({})
