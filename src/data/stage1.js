// call 1
const personalManagementQuestions = [
    {
        questionTitle: "Подбор команды",
        question:
            "какими качествами  и навыками должна обладать команда?",
        answers: [
            {id: "1", text: "Надо брать всех подряд, кто согласиться"},
            {id: "2", text: "Надо брать тех, кто готов рисковать", correct: true},
            {id: "3", text: "Нужно брать высококлассных специалистов, несмотря на высокие затраты"},
            {
                id: "4",
                text: "Нужно брать сотрудников с релевантным опытом, которые решали похожие задачи раньше",
                correct: true
            },
            {
                id: "5",
                text: "Нужно брать тех, кто сразу начнет все систематизировать и прописывать все бизнес процессы"
            },
            {
                id: "6",
                text: "Нужно брать инициативных и креативных сотрудников, с долговременной ориентацией, которые не бояться брать на себя ответственность",
                correct: true
            },
        ]
    },
    {
        questionTitle: "Мотивация персонала",
        question: 'нет возможности предложить высокую заработную плату и привлечь высококлассных специалистов, как мотивировать персонал?',
        answers: [
            {id: "1", text: "Не надо никого премировать, потому что нет прибыли"},
            {id: "2", text: "Нужно занять деньги или получить кредит, но все сотрудники должны быть мотивированы"},
            {id: "3", text: "Нужно нанять консультантов, чтобы они разработали систему мотивации"},
            {id: "4", text: "Нужно мотивировать только менеджеров по продажам"},
            {id: "5", text: "Нужно мотивировать всех понемногу, чтобы никто не чувствовал себя обделенным"},
            {
                id: "6",
                text: "Нужно мотивировать  возможностью получения нового опыта и  перспективами карьерного роста",
                correct: true
            },
            {id: "7", text: "Нужно мотивировать только тех, кто выполняет приказы руководителя"},
            {
                id: "8",
                text: "Мотивировать вообще никого не надо, нужно депримировать, когда поставленная задача не решается"
            }
        ]
    },
    {
        questionTitle: "Обучение персонала",
        question: "Обучение персонала?",
        answers: [
            {id: "1", text: "Нет времени думать об обучении, надо работать 24/7"},
            {
                id: "2",
                text: "Руководителю необходимо сформулировать требования к компетенциям и разработать план их повышения",
                correct: true
            },
            {id: "3", text: "Пусть сотрудник сам разбирается, какие знания ему необходимы"},
            {id: "4", text: "Отправить всех учиться на МВА"},
            {id: "4", text: "Зачем вообще обучать сотрудников, мы им и так зарплату платим"},
            {id: "4", text: "Когда компания станет большой, тогда и будем думать об обучении, а сейчас – рано"},
            {
                id: "4",
                text: "Надо сразу брать высококвалифицированных специалистов и тогда вопрос обучения отпадет сам собой"
            },
        ]
    }
];
// call 2
const developmentStrategyQuestions = [];
// call 3
const organizationalStructureQuestions = [];
// call 4
const businessProcessesQuestions = [];
// call 5
const corporateCultureQuestions = [];
// call 6
const financeAndPlanningQuestions = [];
// call 7
const corporateGovernanceQuestions = [];

const questions = {
    personalManagementQuestions: personalManagementQuestions,
    developmentStrategyQuestions: developmentStrategyQuestions,
    organizationalStructureQuestions: organizationalStructureQuestions,
    businessProcessesQuestions: businessProcessesQuestions,
    corporateCultureQuestions: corporateCultureQuestions,
    financeAndPlanningQuestions: financeAndPlanningQuestions,
    corporateGovernanceQuestions: corporateGovernanceQuestions,
}

export default questions;
