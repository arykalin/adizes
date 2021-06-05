import stage1Questions from "./stage1"
import stage2Questions from "./stage2"

export const PersonalManagementQuestions = 'personalManagementQuestions'
export const DevelopmentStrategyQuestions = 'developmentStrategyQuestions'
export const OrganizationalStructureQuestions = 'organizationalStructureQuestions'
export const BusinessProcessesQuestions = 'businessProcessesQuestions'
export const CorporateCultureQuestions = 'corporateCultureQuestions'
export const FinanceAndPlanningQuestions = 'financeAndPlanningQuestions'
export const CorporateGovernanceQuestions = 'corporateGovernanceQuestions'

const allStages = {
    stage1: {
        questions: stage1Questions,
    },
    stage2: {
        questions: stage2Questions,
    }
}

export default allStages
