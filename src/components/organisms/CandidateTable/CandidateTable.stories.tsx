import { ComponentMeta,ComponentStory } from "@storybook/react";
import CandidateTable from "./CandidateTable";

export default{
    title:'components/organisms/candidatetable',
    component: CandidateTable
}as ComponentMeta<typeof CandidateTable>



const Template: ComponentStory<typeof CandidateTable>=()=><CandidateTable/>
export const candidatetable = Template.bind({})