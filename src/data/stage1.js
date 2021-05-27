// empty
const emptyQuestions = [
    {
        questionTitle: "empty",
        question:
            "empty question",
        answers: [
            {id: "1", text: "empty text"},
        ]
    },
];
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
const developmentStrategyQuestions = [
    {
        questionTitle: "Миссия, видение и стратегия",
        question: "Миссия, видение и стратегия",
        answers: [
            {id: "1", text: "Ход 1. Миссия. Видение и стратегия"},
            {id: "1", text: "Нам ничего не нужно, это все придумано для больших корпораций"},
            {id: "2", text: "Главное, чтобы был продукт, а все остальное – не важно"},
            {id: "3", text: "Миссия – это важно, а все остальное не понятно зачем"},
            {id: "4", text: "Самое главное – это продажи"},
            {id: "5", text: "Нужно сформулировать миссию, определить видение и разработать стратегию", correct: true},
            {id: "6", text: "Нужно нанять консультантов, чтобы они все разработали"},
            {id: "7", text: "Главное, чтобы я как владелец бизнеса/руководитель понимал, что делать"},
        ]
    },
    {
        questionTitle: "Какую бизнес модель выбрать",
        question: "Какую бизнес модель выбрать",
        answers: [
            {id: "1", text: "Нам не нужны никакие бизнес модели – это все никому не нужная теория",},
            {id: "2", text: "Первый раз слышу о бизнес моделях",},
            {id: "3", text: "Нужно поработать с ментором или пойти в акселератор, там нам все расскажут, как правильно",},
            {id: "4", text: "Самый верный шаг – просто скопировать бизнес модель у конкурентов",},
            {id: "5", text: "Провести опрос потенциальных клиентов, чтобы узнать, как нам лучше организовать бизнес", correct: true},
            {id: "6", text: "Пойти учиться в бизнес школу",},
            {id: "7", text: "Проанализировать, какие бизнес модели, которые есть на рынке, лучше всего будут работать в компании и подумать, что нового мы можем предложить, чтобы сделать продукт/услугу уникальными", correct: true}
        ]
    }

];
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
    emptyQuestions: emptyQuestions,
    personalManagementQuestions: personalManagementQuestions,
    developmentStrategyQuestions: developmentStrategyQuestions,
    organizationalStructureQuestions: organizationalStructureQuestions,
    businessProcessesQuestions: businessProcessesQuestions,
    corporateCultureQuestions: corporateCultureQuestions,
    financeAndPlanningQuestions: financeAndPlanningQuestions,
    corporateGovernanceQuestions: corporateGovernanceQuestions,
}

export default questions;
