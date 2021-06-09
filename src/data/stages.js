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
        name: "Этап I: Становление",
        text: "На стадии становления определяются направления деятельности компании, ее цели и стратегия.Главная задача этапа — определиться с ключевыми компетенциями и создать востребованный рынком продукт.На этом этапе компания либо добьется успеха, либо потерпит крах и перестанет существовать.Чаще всего причины кроются в неопытности руководства.",
        questions: stage1Questions,
    },
    stage2: {
        questions: stage2Questions,
    }
}

export default allStages
