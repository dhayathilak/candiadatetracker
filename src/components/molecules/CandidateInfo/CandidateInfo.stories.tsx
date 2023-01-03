import { ComponentMeta, ComponentStory } from "@storybook/react";
import CandidateInfo from "./CandidateInfo";


export default{
    title:'components/molecules/candidateinfo',
    component: CandidateInfo
}as ComponentMeta<typeof CandidateInfo>


const Template: ComponentStory<typeof CandidateInfo>=()=><CandidateInfo/>
export const candidateinfo = Template.bind({})