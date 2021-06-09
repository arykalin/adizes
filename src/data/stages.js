import stage1Questions from "./stage1"
import stage2Questions from "./stage2"
import stage3Questions from "./stage3"
import stage4Questions from "./stage4"

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
        name: "Этап II",
        text: "",
        questions: stage2Questions,
    },
    stage3: {
        name: "Этап III",
        text: "",
        questions: stage3Questions,
    },
    stage4: {
        name: "Этап IV",
        text: "",
        questions: stage4Questions,
    },
}

export default allStages
