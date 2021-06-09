// call 1 Управление персоналом
const personalManagementQuestions = [
    {
        questionTitle: "Подбор команды",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            " какими качествами  и навыками должна обладать команда, чтобы быстро расти?",
        answers: [
            {id: "1", text: "В компании должны быть четкие должностные инструкции, чтобы каждый сотрудник понимал, что ему можно делать, а что - нельзя"},
            {id: "2", text: "Главное, чтобы в команде был ярко выраженный лидер"},
            {id: "3", text: "Важно, чтобы в команде было как можно больше профессионалов высокого уровня", correct: true},
            {
                id: "4",
                text: "Главное, чтобы в команде было как можно больше людей, которые будут постоянно генерить новые идеи",
                correct: true
            },
            {
                id: "5",
                text: "Важно сбалансирование ролей в команде,  привлечение новых специалистов с рынка или закрыие вакансий внутренними резервами",
                correct: true
            },
            {
                id: "6",
                text: "Когда компания растет,  в ней нужны сотрудники, которые все четко администрируют ",
                correct: false
            },
            {
                id: "7",
                text: "Самое главное в команде – наличие просто хороших людей, которым интересно проводить время вместе",
                correct: false
            },
        ]
    },
    {
        questionTitle: "Мотивация персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: 'что важно на данном этапе?',
        answers: [
            {id: "1", text: "Увеличить заработную плату сотрудникам"},
            {id: "2", text: "Разработать KPI для руководителей и премию платить только им"},
            {id: "3", text: "Мотивировать надо только тот персонал, который приносит выручку"},
            {id: "4", text: "Разработать простую мотивационную программу для каждого подразделения", correct: true},
            {id: "5", text: "Запланировать премиальный фонд для каждого подразделения и KPI для сотрудников подразделений", correct: true},
            {id: "6", text: "В конце года всем заплатить поровну"},
            {id: "7", text: "Генеральный директор сам решает, кому платить премию, а кому - нет"},
        ]
    },
    {
        questionTitle: "Система оценки персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Какой должна быть система оценки персонала?",
        answers: [
            {id: "1", text: "Оценивать работу должен генеральный директор"},
            {id: "2", text: "Оценивать работу должны руководители соответствующих подразделений", correct: true},
            {id: "3", text: "Сотрудники сами должны оценивать свою работу"},
            {id: "4", text: "Необходимо выработать критерии оценки для ключевых направлений", correct: true},
            {id: "5", text: "Необходимо просто определить шкалу для оценки"},
            {id: "6", text: "Имеет смысл оценивать только работу ключевых сотрудников"},
            {id: "7", text: "Разработать и внедрить оценку 360 всех сотрудников компании"},
        ]
    },
    {
        questionTitle: "Обучение персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Какой должна быть обучение персонала?",
        answers: [
            {id: "1", text: "Оценивать работу должен генеральный директор"},
            {id: "2", text: "Обучать только сотрудников отдела продаж"},
            {id: "3", text: "Сотрудники сами должны заботиться о своем профессиональном развитии", correct: true},
            {id: "4", text: "Проведение работы с кадрами для подготовки к возможным изменениям"},
            {id: "5", text: "Обучать персонал – излишняя роскошь"},
            {id: "6", text: "Нужно предоставить возможность обучаться всем"},
            {id: "7", text: "В структуре компании необходимо создать подразделение, которое будет заниматься обучением персонала", correct: true},
            {id: "8", text: "Повышать квалификацию необходимо только руководителям"},
        ]
    },
];

// call 2 Организация управленческого цикла
const developmentStrategyQuestions = [
    {
        questionTitle: "Подбор команды",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            " какими качествами  и навыками должна обладать команда, чтобы быстро расти?",
        answers: [
            {id: "1", text: "Оценивать работу должен генеральный директор"},
        ]
    },
]

// call 3 Стратегия развития
const organizationalStructureQuestions = []

// call 4 Управление качеством
const businessProcessesQuestions = []

// call 5 Организационный дизайн
const corporateGovernanceQuestions = []

// call 6 Корпоративная культура
const corporateCultureQuestions = []

// call 7 Финансы и планирование
const financeAndPlanningQuestions = []


const calls = {
    'personalManagementQuestions': personalManagementQuestions,
    'developmentStrategyQuestions': developmentStrategyQuestions,
    'organizationalStructureQuestions': organizationalStructureQuestions,
    'businessProcessesQuestions': businessProcessesQuestions,
    'corporateCultureQuestions': corporateCultureQuestions,
    'financeAndPlanningQuestions': financeAndPlanningQuestions,
    'corporateGovernanceQuestions': corporateGovernanceQuestions,
}

export default calls;
