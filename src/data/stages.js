import stage1Questions from "./stage1"
import stage2Questions from "./stage2"
import stage3Questions from "./stage3"
import stage4Questions from "./stage4"

export const PersonalManagementCall = 'personalManagementCall'
export const DevelopmentStrategyCall = 'developmentStrategyCall'
export const OrganizationalStructureCall = 'organizationalStructureCall'
export const BusinessProcessesCall = 'businessProcessesCall'
export const CorporateCultureCall = 'corporateCultureCall'
export const FinanceAndPlanningCall = 'financeAndPlanningCall'
export const CorporateGovernanceCall = 'corporateGovernanceCall'

export const Stage1 = 'stage1'
export const Stage2 = 'stage2'
export const Stage3 = 'stage3'
export const Stage4 = 'stage4'

export const AllCallsTitles = [
    PersonalManagementCall,
    DevelopmentStrategyCall,
    OrganizationalStructureCall,
    BusinessProcessesCall,
    CorporateCultureCall,
    FinanceAndPlanningCall,
    CorporateGovernanceCall,
]

const allStages = {
    stage1: {
        name: "Этап I: Становление",
        text: "На стадии становления определяются направления деятельности компании, ее цели и стратегия.Главная задача этапа — определиться с ключевыми компетенциями и создать востребованный рынком продукт.На этом этапе компания либо добьется успеха, либо потерпит крах и перестанет существовать.Чаще всего причины кроются в неопытности руководства.",
        questions: stage1Questions,
    },
    stage2: {
        name: "Этап II",
        text: "рыба рыба рыба",
        questions: stage2Questions,
    },
    stage3: {
        name: "Этап III",
        text: "рыба рыба рыба",
        questions: stage3Questions,
    },
    stage4: {
        name: "Этап IV",
        text: "рыба рыба рыба",
        questions: stage4Questions,
    },
}

export default allStages
