// call 1 Управление персоналом
const personalManagementQuestions = [
    {
        questionTitle: "Подбор команды",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "какими качествами  и навыками должна обладать команда?",
        answers: [
            {id: 1, text: "Надо брать всех подряд, кто согласиться"},
            {id: 2, text: "Надо брать тех, кто готов рисковать", correct: true},
            {id: 3, text: "Нужно брать высококлассных специалистов, несмотря на высокие затраты"},
            {
                id: 4,
                text: "Нужно брать сотрудников с релевантным опытом, которые решали похожие задачи раньше",
                correct: true
            },
            {
                id: 5,
                text: "Нужно брать тех, кто сразу начнет все систематизировать и прописывать все бизнес процессы"
            },
            {
                id: 6,
                text: "Нужно брать инициативных и креативных сотрудников, с долговременной ориентацией, которые не бояться брать на себя ответственность",
                correct: true
            },
        ]
    },
    {
        questionTitle: "Мотивация персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: 'нет возможности предложить высокую заработную плату и привлечь высококлассных специалистов, как мотивировать персонал?',
        answers: [
            {id: 1, text: "Не надо никого премировать, потому что нет прибыли"},
            {id: 2, text: "Нужно занять деньги или получить кредит, но все сотрудники должны быть мотивированы"},
            {id: 3, text: "Нужно нанять консультантов, чтобы они разработали систему мотивации"},
            {id: 4, text: "Нужно мотивировать только менеджеров по продажам"},
            {id: 5, text: "Нужно мотивировать всех понемногу, чтобы никто не чувствовал себя обделенным"},
            {
                id: 6,
                text: "Нужно мотивировать  возможностью получения нового опыта и  перспективами карьерного роста",
                correct: true
            },
            {id: 7, text: "Нужно мотивировать только тех, кто выполняет приказы руководителя"},
            {
                id: 8,
                text: "Мотивировать вообще никого не надо, нужно депримировать, когда поставленная задача не решается"
            }
        ]
    },
    {
        questionTitle: "Обучение персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Обучение персонала?",
        answers: [
            {id: 1, text: "Нет времени думать об обучении, надо работать 24/7"},
            {
                id: 2,
                text: "Руководителю необходимо сформулировать требования к компетенциям и разработать план их повышения",
                correct: true
            },
            {id: 3, text: "Пусть сотрудник сам разбирается, какие знания ему необходимы"},
            {id: 4, text: "Отправить всех учиться на МВА"},
            {id: 4, text: "Зачем вообще обучать сотрудников, мы им и так зарплату платим"},
            {id: 4, text: "Когда компания станет большой, тогда и будем думать об обучении, а сейчас – рано"},
            {
                id: 4,
                text: "Надо сразу брать высококвалифицированных специалистов и тогда вопрос обучения отпадет сам собой"
            },
        ]
    }
];
// call 2 Стратегия развития
const developmentStrategyQuestions = [
    {
        turn: 1,
        questionTitle: "Миссия, видение и стратегия",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Миссия, видение и стратегия",
        answers: [
            {id: 1, text: "Ход 1. Миссия. Видение и стратегия"},
            {id: 1, text: "Нам ничего не нужно, это все придумано для больших корпораций"},
            {id: 2, text: "Главное, чтобы был продукт, а все остальное – не важно"},
            {id: 3, text: "Миссия – это важно, а все остальное не понятно зачем"},
            {id: 4, text: "Самое главное – это продажи"},
            {id: 5, text: "Нужно сформулировать миссию, определить видение и разработать стратегию", correct: true},
            {id: 6, text: "Нужно нанять консультантов, чтобы они все разработали"},
            {id: 7, text: "Главное, чтобы я как владелец бизнеса/руководитель понимал, что делать"},
        ]
    },
    {
        turn: 2,
        questionTitle: "Какую бизнес модель выбрать",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Какую бизнес модель выбрать",
        answers: [
            {id: 1, text: "Нам не нужны никакие бизнес модели – это все никому не нужная теория",},
            {id: 2, text: "Первый раз слышу о бизнес моделях",},
            {id: 3, text: "Нужно поработать с ментором или пойти в акселератор, там нам все расскажут, как правильно",},
            {id: 4, text: "Самый верный шаг – просто скопировать бизнес модель у конкурентов",},
            {id: 5, text: "Провести опрос потенциальных клиентов, чтобы узнать, как нам лучше организовать бизнес", correct: true},
            {id: 6, text: "Пойти учиться в бизнес школу",},
            {id: 7, text: "Проанализировать, какие бизнес модели, которые есть на рынке, лучше всего будут работать в компании и подумать, что нового мы можем предложить, чтобы сделать продукт/услугу уникальными", correct: true}
        ]
    },
    {
        turn: 3,
        questionTitle: "Анализ рынка",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "empty question",
        answers: [
            {id: 1, text: "У нас нет денег на анализ рынка, возможно когда-нибудь потом мы его проведем"},
            {id: 2, text: "Обратиться в компанию, которая сделает детальный анализ рынка с рекомендациями"},
            {id: 3, text: "Нанять в команду маркетолога-аналитика, чтобы он проанализировал наш рынок"},
            {id: 4, text: "С использованием простых инструментов провести анализ рынка самостоятельно", correct: true},
            {id: 5, text: "Купить готовое исследование на рынке"},
            {id: 6, text: "Анализ рынка – вообще никому не нужное и бесполезное мероприятие"},
            {id: 7, text: "Зачем проводить анализ, если на рынке все меняется"},
        ]
    },
    {
        turn: 4,
        questionTitle: "Продукт и его продвижение",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Продукт и его продвижение",
        answers: [
            {id: 1, text: "У нас есть классная идея и мы точно знаем, что она будет востребована на рынке"},
            {id: 2, text: "Продукт вообще не важен, главное, чтобы были деньги на его продвижение"},
            {id: 3, text: "Пока мы не разработаем продукт, который будет самым лучшим во всех отношениях на рынке, мы даже не будем предлагать его клиентам"},
            {id: 4, text: "Мы тестируем  много новых продуктов, чтобы какой-то из них начал продаваться", correct: true},
            {id: 5, text: "Мы сами решаем, что необходимо для того, чтобы улучшить наш продукт/услугу"},
            {id: 6, text: "Нужно  нанять консультантов, чтобы они нам разработали продукт"},
            {id: 7, text: "Необходимо направить максимум усилий на получение обратной связи от клиентов для постоянного тестирования и доработки продукта/услуги", correct: true},
        ]
    },
    {
        turn: 5,
        questionTitle: "Маркетинг",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Маркетинг",
        answers: [
            {id: 1, text: "Нам маркетинг не нужен, у нас отличный продукт и он сам будет продаваться"},
            {id: 2, text: "Главное, чтобы товар был хороший, а клиенты найдутся"},
            {id: 3, text: "Самое важное – это цена. Если она низкая, то любой товар будет продаваться"},
            {id: 4, text: "Необходимо составить план маркетинговых мероприятий и нанять сотрудника, который это реализует"},
            {id: 5, text: "Необходимо провести castdev и описать свою целевую аудиторию, чтобы спланировать план маркетинговых мероприятий", correct: true},
            {id: 6, text: "Главное – больше денег вложить в рекламу, тогда продажи точно будут"},
            {id: 7, text: "Маркетинг – пустая трата времени и денег"},
        ]
    },
];
// call 3 Как создать наиболее эффективную оргструктуру
const organizationalStructureQuestions = [
    {
        turn: 1,
        questionTitle: "Выбор организационной структуры",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Выбор организационной структуры",
        answers: [
            {id: 1, text: "Линейная", correct: true},
            {id: 2, text: "Функциональная"},
            {id: 3, text: "Дивизиональная"},
            {id: 4, text: "Матричная"},
            {id: 5, text: "Плоская"},
            {id: 6, text: "Проектная", correct: true},
            {id: 7, text: "Выбор структуры зависит от бизнес процессов"},
            {id: 8, text: "Выбор структуры зависит от бизнес процессов и целей", correct: true},
        ]
    },
    {
        turn: 2,
        questionTitle: "Распредление полнеомочий и найм персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Распредление полнеомочий и найм персонала",
        answers: [
            {id: 1, text: "Нужно в первую очередь нанять руководителей будущих подразделений"},
            {id: 2, text: "Важно нанять как можно больше людей, а уже потом разобраться, кто какие задачи будет выполнять"},
            {id: 3, text: "Компания должна быть гибкой и люди сами должны понимать, что им делать"},
            {id: 4, text: "Нужно жестко закрепить за каждым его функцию и написать на все должности инструкции, чтобы был порядок"},
            {id: 5, text: "Все подчиняются генеральному директору/акционеру и он дает всем указания, что и кому делать"},
            {id: 6, text: "Должна быть взаимозаменяемость, поэтому все должны заниматься всем", correct: true},
            {id: 7, text: "Нужно определить основные бизнес процессы этапа и прикрепить ответственных", correct: true},
        ]
    },
    {
        turn: 3,
        questionTitle: "Оформление трудовых отношений",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Оформление трудовых отношений",
        answers: [
            {id: 1, text: "На этом этапе никакие трудовые отношения не нужны, просто платим деньги за работу"},
            {id: 2, text: "Нужно экономить на всем, в том числе и на налогах, поэтому заключаем трудовой договор только на небольшую сумму. Остальное платим в конверте"},
            {id: 3, text: "Заключаем трудовой договор только с ключевыми сотрудниками"},
            {id: 4, text: "Трудовой договор нужен только для галочки и в нем указывается только сумма, которую мы платим сотруднику. Все остальное – не важно."},
            {id: 5, text: "Трудовой договор заключаем только с генеральным директором и главным бухгалтером"},
            {id: 6, text: "Трудовые договоры заключаем со всеми руководителями, а с сотрудниками расплачиваемся в конверте"},
            {id: 7, text: "Заключаем трудовые договоры, в котором фиксируем все основные права и обязанности сотрудника, включая порядок и сроки выплаты заработной платы.", correct: true},
        ]
    },
];
// call 4 Бизнес процессы
const businessProcessesQuestions = [
    {
        turn: 1,
        questionTitle: "Формализация бизнес процессов",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Формализация бизнес процессов",
        answers: [
            {id: 1, text: "На этом этапе в компании вообще нет никаких бизнес процессов"},
            {id: 2, text: "Бизнес процессы очень важны для компании, поэтому сразу начинаем описывать детально все бизнес процессы"},
            {id: 3, text: "В компании нет специалистов, которые могли бы грамотно определить и описать бизнес процессы, поэтому надо нанять консультантов"},
            {id: 4, text: "Главное, понимать, как это все работает, а формализуем потом, когда будет время"},
            {id: 5, text: "Зачем они вообще нужны? Это просто трата времени!"},
            {id: 6, text: "Важно, чтобы руководство понимало, какие в компании есть процессы, а остальные просто должны работать"},
            {id: 7, text: "Важно определить и описать верхнеуровневые и ключевые процессы", correct: true},
        ]
    },
    {
        turn: 2,
        questionTitle: "Управление бизнес процессами",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Управление бизнес процессами",
        answers: [
            {id: 1, text: "Важно зафиксировать бизнес процессы и этого достаточно"},
            {id: 2, text: "Необходимо осуществлять постоянный мониторинг и контроль бизнес процессов"},
            {id: 3, text: "С самого начала все процессы должны быть автоматизированы"},
            {id: 4, text: "Важно сфокусироваться на ключевых бизнес процессах и управлять ими на этом этапе", correct: true},
            {id: 5, text: "Нужно создать отдельное подразделение, чтобы грамотно управлять всеми бизнес процессами"},
            {id: 6, text: "Зачем вообще ими нужно управлять?"},
            {id: 7, text: "Всеми бизнес процессами должен управлять генеральный директор или специальный руководитель"},
        ]
    },
    {
        turn: 3,
        questionTitle: "Что входит в управление бизнес процессами?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Что входит в управление бизнес процессами?",
        answers: [
            {id: 1, text: "Формализация стратегии", correct: true},
            {id: 2, text: "Проектирование процессов", correct: true},
            {id: 3, text: "Написание должностных инструкций"},
            {id: 4, text: "Создание положений об отделах и организационной структуре"},
            {id: 5, text: "Внедрение бизнес процессов", correct: true},
            {id: 6, text: "Измерение показателей оценки эффективности", correct: true},
            {id: 7, text: "Оптимизация процессов", correct: true},
        ]
    },
    {
        turn: 4,
        questionTitle: "Какие виды бизнес процессов необходимо внедрять на этом этапе",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Какие виды бизнес процессов необходимо внедрять на этом этапе",
        answers: [
            {id: 1, text: "Основные бизнес-процессы", correct: true},
            {id: 2, text: "Вспомогательные бизнес процессы"},
            {id: 3, text: "Бизнес процессы развития"},
            {id: 4, text: "Бизнес процессы управления"},
            {id: 5, text: "Нужны все бизнес процессы"},
            {id: 6, text: "Нам вообще они не нужны"},
            {id: 7, text: "Зависит от стратегии и поставленных целей"},
        ]
    },
];
// call 5 Формирование корпоративной культуры
const corporateCultureQuestions = [
    {
        turn: 1,
        questionTitle: "Стиль управления",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Стиль управления – какие стили управления наиболее эффективны на данном этапе?",
        answers: [
            {id: 1, text: "Демократический"},
            {id: 2, text: "Директивный", correct: true},
            {id: 3, text: "Коучинговый"},
            {id: 4, text: "Лидирующий", correct: true},
            {id: 5, text: "Визионерский", correct: true},
            {id: 6, text: "Партнерский"},
        ]
    },
    {
        turn: 2,
        questionTitle: "Процесс принятия решений",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Процесс принятия решений",
        answers: [
            {id: 1, text: "Решение всех вопросов нужно делегировать сразу и каждый пусть выполняет свои задачи, как может"},
            {id: 2, text: "Всю власть необходимо сосредоточить в руках владельца и только он один может принимать решения"},
            {id: 3, text: "Нужно распределить уровень ответственности, чтобы сотрудники понимали, какие задачи они в состоянии решить самостоятельно, а какие требуют согласования"},
            {id: 4, text: "Нужно разработать инструкцию для принятия всех решений, в которой будут прописаны шаги каждого сотрудника и его действия", correct: true},
            {id: 5, text: "Для решения всех задач нужно собираться всем вместе и принимать решение сообща"},
            {id: 6, text: "Решения принимаются по мере поступления задач и каждый сам знает, что ему делать"},
            {id: 7, text: "Главное действовать, потом разберемся, что получилось"},
        ]
    },
    {
        turn: 3,
        questionTitle: "Выработка  ценностей",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Выработка  ценностей",
        answers: [
            {id: 1, text: "Какие еще ценности? Больше заняться нечем?"},
            {id: 2, text: "Чтобы правильно выработать ценности, необходимо обязательно привлечь специалистов-консультантов"},
            {id: 3, text: "Выработка ценностей – задача генерального директора"},
            {id: 4, text: "Ценности должны быть у каждого подразделения свои, чтобы оно эффективно работало"},
            {id: 5, text: "Вырабатывать ценности нужно не на этом этапе, а тогда, когда компания станет стабильной"},
            {id: 6, text: "О ценностях компании должны знать только руководители"},
            {id: 7, text: "Важно, чтобы каждый член команды знал и разделял ценности компании", correct: true},
        ]
    },
    {
        turn: 4,
        questionTitle: "Формирование культуры",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Формирование культуры с чего начать?",
        answers: [
            {id: 1, text: "Нужно найти подходящий документ в Интернете и просто скопировать его, чтобы сэкономить время"},
            {id: 2, text: "Культура компании формируется приглашенными специалистами, потому что они знают, как правильно все сделать"},
            {id: 3, text: "Вопросы формирования культуры относятся к следующим этапам жизненного цикла"},
            {id: 4, text: "Только владелец компании понимает, какая культура нужна его компании"},
            {id: 5, text: "Зачем вообще нужна какая-то культура? Главное, чтобы все работали?"},
            {id: 6, text: "Нужно понять, какие правила работают в компании, какой стиль поведения приветствуется и определить, что приносит  наилучшие результаты", correct: true},
            {id: 7, text: "Корпоративная культура формируется стихийно и ничего специально делать не надо"},
        ]
    },
];
// call 6 Финансы и планирование
const financeAndPlanningQuestions = [
    {
        turn: 1,
        questionTitle: "Организация финансового учета",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Организация финансового учета",
        answers: [
            {id: 1, text: "Нужно нанять главного бухгалтера и все будет отлично"},
            {id: 2, text: "Тратить время на анализ на этом этапе не надо. Достаточно, что есть бухгалтерия"},
            {id: 3, text: "Чтобы не было проблем с деньгами нужно сразу нанять грамотного финансового директора и внедрить ERP"},
            {id: 4, text: "Использовать простые облачные решения для ведения учета", correct: true},
            {id: 5, text: "Вести учет в Excel  или Google Sheet", correct: true},
            {id: 6, text: "Отдать ведение управленческого учета на аутсорсинг"},
            {id: 7, text: "Самое главное – вести учет приходам и расходам. Остальное – не важно"},
        ]
    },
    {
        turn: 2,
        questionTitle: "Планирование",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Планирование",
        answers: [
            {id: 1, text: "Как можно что-то планировать, когда мы не знаем, как у нас пойдут дела?"},
            {id: 2, text: "Нужно планировать только продажи – с этим справятся сотрудники отдела продаж"},
            {id: 3, text: "Важно контролировать расходы"},
            {id: 4, text: "Планировать нужно и приходы и расходы", correct: true},
            {id: 5, text: "Самое главное – спланировать прибыль"},
            {id: 6, text: "Нужно планировать все виды отчетности: отчет о движении денежных средств, отчет о прибылях и убытках и баланс", correct: true},
            {id: 7, text: "Все это планирование – пустая трата времени и сил, так как все равно по факту все совершенно по другому"},
        ]
    },
    {
        turn: 3,
        questionTitle: "Нужен ли нам контроль?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Нужен ли нам контроль?",
        answers: [
            {id: 1, text: "У нас не кому контролировать"},
            {id: 2, text: "Контролировать выполнение бюджета важно только для собственника – это его задача"},
            {id: 3, text: "Контроль важен для установления связи между целями и доступными ресурсами", correct: true},
            {id: 4, text: "Контроль позволяет принимать более взвешенные решения", correct: true},
            {id: 5, text: "Систематизирует информацию", correct: true},
            {id: 6, text: "Контроль не нужен, потому что демотивирует сотрудников"},
            {id: 7, text: "Контроль помогает управлять рентабельностью компании", correct: true},
            {id: 8, text: "Наличие системы контроля приводит только к манипуляциям со стороны сотрудников"},
        ]
    },
];
// call 7 Корпоративное управление
const corporateGovernanceQuestions = [
    {
        turn: 1,
        questionTitle: "Совет директоров",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Совет директоров",
        answers: [
            {id: 1, text: "Нам нужен Совет директоров, чтобы эффективно управлять бизнесом"},
            {id: 2, text: "Все решения принимает собственник/генеральный директор, поэтому Совет директоров не нужен"},
            {id: 3, text: "В Совет директоров нужно обязательно пригласить независимого директора, чтобы он давал объективную оценку работе компании"},
            {id: 4, text: "Нам достаточно оперативных совещаний, чтобы принимать все необходимые решения", correct: true},
            {id: 5, text: "Совет директоров необходим для принятия стратегических решений, поэтому он должен быть сформирован сразу"},
            {id: 6, text: "Достаточно проведение стратегических совещаний по особо важным вопросам, а Совет Директоров нужно формировать на более поздних этапах", correct: true},
            {id: 7, text: "Зачем вообще заниматься такой ерундой и думать об этом?"},
        ]
    },
    {
        turn: 2,
        questionTitle: "Управление рисками",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Управление рисками",
        answers: [
            {id: 1, text: "У нас рисков нет и управлять нечем"},
            {id: 2, text: "Мы не знаем, как ими управлять"},
            {id: 3, text: "Управление рисками важная часть эффективного ведения бизнеса, поэтому нужно пригласить консультантов, чтобы он рассказали нам об этом"},
            {id: 4, text: "Сейчас не время думать об этом"},
            {id: 5, text: "Каждый сотрудник сам знает о тех рисках, которые есть на его участке и этого достаточно"},
            {id: 6, text: "Очень важно определить основные риски компании на данном этапе  и выработать план их минимизации", correct: true},
            {id: 7, text: "Управление рисками нужно только крупным компаниям"},
        ]
    },
];

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
