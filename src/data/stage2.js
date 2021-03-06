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
            {id: 1, text: "В компании должны быть четкие должностные инструкции, чтобы каждый сотрудник понимал, что ему можно делать, а что - нельзя"},
            {id: 2, text: "Главное, чтобы в команде был ярко выраженный лидер"},
            {id: 3, text: "Важно, чтобы в команде было как можно больше профессионалов высокого уровня", correct: true},
            {
                id: 4,
                text: "Главное, чтобы в команде было как можно больше людей, которые будут постоянно генерить новые идеи",
                correct: true
            },
            {
                id: 5,
                text: "Важно сбалансирование ролей в команде,  привлечение новых специалистов с рынка или закрыие вакансий внутренними резервами",
                correct: true
            },
            {
                id: 6,
                text: "Когда компания растет,  в ней нужны сотрудники, которые все четко администрируют ",
                correct: false
            },
            {
                id: 7,
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
            {id: 1, text: "Увеличить заработную плату сотрудникам"},
            {id: 2, text: "Разработать KPI для руководителей и премию платить только им"},
            {id: 3, text: "Мотивировать надо только тот персонал, который приносит выручку"},
            {id: 4, text: "Разработать простую мотивационную программу для каждого подразделения", correct: true},
            {id: 5, text: "Запланировать премиальный фонд для каждого подразделения и KPI для сотрудников подразделений", correct: true},
            {id: 6, text: "В конце года всем заплатить поровну"},
            {id: 7, text: "Генеральный директор сам решает, кому платить премию, а кому - нет"},
        ]
    },
    {
        questionTitle: "Система оценки персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Какой должна быть система оценки персонала?",
        answers: [
            {id: 1, text: "Оценивать работу должен генеральный директор"},
            {id: 2, text: "Оценивать работу должны руководители соответствующих подразделений", correct: true},
            {id: 3, text: "Сотрудники сами должны оценивать свою работу"},
            {id: 4, text: "Необходимо выработать критерии оценки для ключевых направлений", correct: true},
            {id: 5, text: "Необходимо просто определить шкалу для оценки"},
            {id: 6, text: "Имеет смысл оценивать только работу ключевых сотрудников"},
            {id: 7, text: "Разработать и внедрить оценку 360 всех сотрудников компании"},
        ]
    },
    {
        questionTitle: "Обучение персонала",
        answered: false,
        correct: 0,
        wrong: 0,
        question: "Какой должна быть обучение персонала?",
        answers: [
            {id: 1, text: "Оценивать работу должен генеральный директор"},
            {id: 2, text: "Обучать только сотрудников отдела продаж"},
            {id: 3, text: "Сотрудники сами должны заботиться о своем профессиональном развитии", correct: true},
            {id: 4, text: "Проведение работы с кадрами для подготовки к возможным изменениям"},
            {id: 5, text: "Обучать персонал – излишняя роскошь"},
            {id: 6, text: "Нужно предоставить возможность обучаться всем"},
            {id: 7, text: "В структуре компании необходимо создать подразделение, которое будет заниматься обучением персонала", correct: true},
            {id: 8, text: "Повышать квалификацию необходимо только руководителям"},
        ]
    },
];

// call 2 Организация управленческого цикла
const developmentStrategyQuestions = [
    {
        questionTitle: "Что такое цикл менеджмента и что он в себя включает?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Что такое цикл менеджмента и что он в себя включает?",
        answers: [
            {id: 1, text: "планирование,", correct: true},
            {id: 2, text: "производство"},
            {id: 3, text: "маркетинг"},
            {id: 4, text: "координация/организация,", correct: true},
            {id: 5, text: "финансирование"},
            {id: 6, text: "мотивация,", correct: true},
            {id: 7, text: "контроль", correct: true},
        ]
    },
    {
        questionTitle: "К какой стадии управленческого цикла относятся к планированию?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "К какой стадии управленческого цикла относится  процесс?",
        answers: [
            {id: 1, text: "Определение целей развития фирмы,", correct: true},
            {id: 2, text: "Установка прав и ответственности сотрудников для выполнения поставленных задач,"},
            {id: 3, text: "Формирование производственной программы,", correct: true},
            {id: 4, text: "Привлечение исполнителей с распределением их работы."},
        ]
    },
    {
        questionTitle: "К какой стадии управленческого цикла относится организации и координации?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "К какой стадии управленческого цикла относится  процесс?",
        answers: [
            {id: 1, text: "Определение целей развития фирмы,"},
            {id: 2, text: "Установка прав и ответственности сотрудников для выполнения поставленных задач,", correct: true},
            {id: 3, text: "Формирование производственной программы,"},
            {id: 4, text: "Привлечение исполнителей с распределением их работы.", correct: true},
        ]
    },
    {
        questionTitle: "Какие функции менеджмента важны на этапе роста?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Какие функции менеджмента важны на этапе роста?",
        answers: [
            {id: 1, text: "Необходимо определиться с планом и донести его до сотрудников", correct: true},
            {id: 2, text: "Руководитель должен уметь планировать, организовывать работу, мотивировать и контролировать"},
            {id: 3, text: "На данной стадии развития важна только мотивация"},
            {id: 4, text: "Основная функция руководителя – это учет и  контроль, все остальное сотрудники должны знать сами"},
            {id: 5, text: "Работа эффективна только тогда, когда руководитель четко установил права и ответственность сотрудников для выполнения поставленных задач"},
            {id: 6, text: "Задача руководителя – наладить коммуникацию", correct: true},
            {id: 7, text: "Самая важная функция –уметь анализировать ту информацию, которая поступает от сотрудников", correct: true},

        ]
    },
]

// call 3 Стратегия развития
const organizationalStructureQuestions = [
    {
        questionTitle: "Стратегия и цели",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Стратегия и цели",
        answers: [
            {id: 1, text: "Важно только наличие годовых целей"},
            {id: 2, text: "В условиях неопределенности стратегии уже не нужны"},
            {id: 3, text: "В компании обязательно должна быть утверждена долгосрочная стратегия на 10-15 лет"},
            {id: 4, text: "Стратегия должна быть разработана минимум на 3 года и ни в коем случае не должна изменяться"},
            {id: 5, text: "Нужно масштабироваться, а стратегия – подождет"},
            {id: 6, text: "У нас есть миссия и видения, и стратегия нам не нужна"},
            {id: 7, text: "Компании нужна гибкая стратегия на 3 года, которую можно пересматривать, в зависимости от трендов и конкурентной среды", correct: true},
        ]
    },
    {
        questionTitle: "Выберете стратегии роста для данного этапа развития компании",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Стратегия и цели",
        answers: [
            {id: 1, text: "Слияние  и поглощение(M&A)"},
            {id: 2, text: "Ликвидация"},
            {id: 3, text: "Реорганизация"},
            {id: 4, text: "Реструктуризация"},
            {id: 5, text: "Интеграция", correct: true},
            {id: 6, text: "Диверсификация", correct: true},
            {id: 7, text: "Репозиционирование", correct: true},
        ]
    },
    {
        questionTitle: "Какая из стратегий является наиболее рискованной для быстрого роста",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Какая из стратегий является наиболее рискованной для быстрого роста",
        answers: [
            {id: 1, text: "Освоения новых рынков"},
            {id: 2, text: "Увеличение существующей доли рынка"},
            {id: 3, text: "Стратегия развития нового продукта"},
            {id: 4, text: "Стратегия диверсификации", correct: true},
            {id: 5, text: "Реструктуризации"},
            {id: 6, text: "Голубого океана"},
            {id: 7, text: "Отсутствие стратегии", correct: true},
        ]
    },
    {
        questionTitle: "Продуктовая линейка",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Продуктовая линейка",
        answers: [
            {id: 1, text: "Нужно срочно развивать новые направления бизнеса"},
            {id: 2, text: "Важно запустить как можно больше новых продуктов и сервисов", correct: true},
            {id: 3, text: "Нужно фокусироваться на тех продуктах, которые приносят выручку", correct: true},
            {id: 4, text: "Нужно фокусироваться на тех  продуктах, которые приносят прибыль"},
            {id: 5, text: "Главное – это качество продукта, остальное неважно"},
            {id: 6, text: "Качество продукта – не важно, главное, продать как можно больше"},
            {id: 7, text: "Важно постоянно анализировать товарную матрицу, чтобы увеличить оборотные средства и рентабельность", correct: true},
        ]
    },
    {
        questionTitle: "Ценообразование",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Ценообразование",
        answers: [
            {id: 1, text: "Сейчас не время думать о ценообразовании"},
            {id: 2, text: "Цену определяет покупатель"},
            {id: 3, text: "Нужно давать как можно больше скидок, чтобы росли продажи"},
            {id: 4, text: "Высокая цена означает высокую прибыль"},
            {id: 5, text: "Нужно установить такие же цены, как у конкурентов"},
            {id: 6, text: "Цена должна быть ниже, чем у конкурентов"},
            {id: 7, text: "Нужно определить свой тип конкурентного преимущества и исходя из этого, определить цену", correct: true},
        ]
    },
]

// call 4 Внедрение систем и процессного управления
const businessProcessesQuestions = [
    {
        questionTitle: "Внедрение систем учета",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Внедрение систем учета",
        answers: [
            {id: 1, text: "Нам не нужны никакие системы, мы все ведем в Excel"},
            {id: 2, text: "Чем раньше мы внедрим ERP системы, тем лучше"},
            {id: 3, text: "Важно получать нужную аналитику, а каким образом – это не важно"},
            {id: 4, text: "У меня вся информация – в голове и этого достаточно"},
            {id: 5, text: "Все данные есть у моих сотрудников, если надо, то можно у них просто спросить"},
            {id: 6, text: "Лучше нанять отдел аналитиков и пусть они собирают всю информацию"},
            {id: 7, text: "Необходима автоматизированная система обработки информации, чтобы оперативно получать информацию и принимать решения", correct: true},
        ]
    },
    {
        questionTitle: "Выстраивание процессного управления позволяет",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Выстраивание процессного управления позволяет",
        answers: [
            {id: 1, text: "Масштабировать бизнес", correct: true},
            {id: 2, text: "Привлекать высококлассных специалистов", correct: true},
            {id: 3, text: "Получить дополнительную прибыль"},
            {id: 4, text: "Снизить издержки", correct: true},
            {id: 5, text: "Создать новые продукты"},
            {id: 6, text: "Снизить риски совершаемых ошибок", correct: true},
            {id: 7, text: "Ничего не меняет, только требует дополнительных ресурсов на внедрение"},
        ]
    },
    {
        questionTitle: "С чего начать создание процессного управления?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "С чего начать создание процессного управления?",
        answers: [
            {id: 1, text: "Создать команду, которая будут заниматься их формализацией"},
            {id: 2, text: "Определить центры ответственности"},
            {id: 3, text: "Создать каталог бизнес процессов"},
            {id: 4, text: "Описать модель бизнеса", correct: true},
            {id: 5, text: "Определить критерии эффективности процессов"},
            {id: 6, text: "Определить последовательность процессов"},
            {id: 7, text: "Спланировать процесс внедрения бизнес процессов"},
        ]
    },
    {
        questionTitle: "Ключевые требования к эффективному бизнес процессу",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Ключевые требования к эффективному бизнес процессу",
        answers: [
            {id: 1, text: "Продукт эффективного бизнес процесса имеет больше ценности, чем затраты на его реализацию", correct: true},
            {id: 2, text: "Эффективный бизнес процесс зависит от наличия  ресурсов"},
            {id: 3, text: "У эффективного бизнес процесса должна быть высокая вариативность"},
            {id: 4, text: "Эффективный бизнес процесс – это автоматизированный процесс"},
            {id: 5, text: "Может быть легко воспроизведен другими людьми", correct: true},
            {id: 6, text: "В процессе заложены механизмы улучшения на основе обратной связи", correct: true},
            {id: 7, text: "Эффективный процесс не требует управления"},
        ]
    },
]

// call 5 Организационный дизайн
const corporateGovernanceQuestions = [
    {
        questionTitle: "Модель управления нужна для",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Модель управления нужна для",
        answers: [
            {id: 1, text: "Обеспечения выполнение стратегии", correct: true},
            {id: 2, text: "Поддержки бизнес процессов компании", correct: true},
            {id: 3, text: "Определения зон ответственности", correct: true},
            {id: 4, text: "Распределения функций", correct: true},
            {id: 5, text: "Внешним пользователям, чтобы они понимали, к кому обращаться", correct: true},
            {id: 6, text: "Нужна только сотрудникам, чтобы они знали, от кого должны исходить указания"},
            {id: 7, text: "Повышения лояльности сотрудников"},
        ]
    },
    {
        questionTitle: "Для развития бизнеса из регионального в федеральный, какая структура наиболее эффективна",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Для развития бизнеса из регионального в федеральный, какая структура наиболее эффективна",
        answers: [
            {id: 1, text: "Любая, главное – грамотные специалисты"},
            {id: 2, text: "Линейная"},
            {id: 3, text: "Функциональная"},
            {id: 4, text: "Проектная"},
            {id: 5, text: "Сетевая"},
            {id: 6, text: "Дивизиональная", correct: true},
        ]
    },
    {
        questionTitle: "Как понять, что ваша структура оптимальна?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Как понять, что ваша структура оптимальна?",
        answers: [
            {id: 1, text: "Если в ней есть все функциональные направления"},
            {id: 2, text: "Если она комфортна генеральному директору и ему легко управлять командой"},
            {id: 3, text: "Позволяет достигать  поставленных целей с высокой эффективностью", correct: true},
            {id: 4, text: "Чем более плоская структура, тем более она эффективна"},
            {id: 5, text: "Оптимальная структура предполагает невысокий фонд оплаты труда"},
            {id: 6, text: "Если она позволяет вашим контрагентам легко взаимодействовать с компанией", correct: true},
            {id: 7, text: "Если она позволяет сохранить хорошие отношения в коллективе"},
        ]
    },
]

// call 6 Корпоративная культура
const corporateCultureQuestions = [
    {
        questionTitle: "Стиль управления – какие стили управления наиболее эффективны на данном этапе?",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Стиль управления – какие стили управления наиболее эффективны на данном этапе?",
        answers: [
            {id: 1, text: "Демократический", correct: true},
            {id: 2, text: "Директивный"},
            {id: 3, text: "Коучинговый"},
            {id: 4, text: "Лидирующий"},
            {id: 5, text: "Визионерский", correct: true},
            {id: 6, text: "Партнерский"},
            {id: 7, text: "Все зависит от характера генерального директора"},
        ]
    },
    {
        questionTitle: "Каковы основные характеристики демократического стиля управления",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Каковы основные характеристики демократического стиля управления",
        answers: [
            {id: 1, text: "Стремление  можно больше вопросов решать коллегиально", correct: true},
            {id: 2, text: "Стимулирование сотрудников, чтобы они высказали свои идеи и мысли", correct: true},
            {id: 3, text: "Прилагается все усилия к тому, чтобы сотрудники были довольны"},
            {id: 4, text: "Обозначаются  направление, но не указывается методы решения задач"},
            {id: 5, text: "Интересы дела ставятся значительно выше интересов людей"},
            {id: 6, text: "Руководитель своим примером задает высочайшие стандарты"},
            {id: 7, text: "Мотивация команды предоставлением возможностей для профессионального развития"},

        ]
    },
    {
        questionTitle: "Какие шаги необходимо предпринять, чтобы избежать «ловушки руководителя»",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Какие шаги необходимо предпринять, чтобы избежать «ловушки руководителя»",
        answers: [
            {id: 1, text: "Максимально вникать во все процессы, происходящие в компании"},
            {id: 2, text: "Понимание необходимых функций и распределение зон ответственности", correct: true},
            {id: 3, text: "Передать все полномочия руководителям, пусть они занимаются контролем"},
            {id: 4, text: "Создание соответствующей задачам организационной структуры", correct: true},
            {id: 5, text: "Давать качественную обратную связь", correct: true},
            {id: 6, text: "Каждый раз помогать сотрудникам в решении поставленных задач, если они этого просят"},
            {id: 7, text: "Осуществлять строгий контроль исполнения поставленных задач"},
        ]
    },
    {
        questionTitle: "Какие функции относятся к корпоративной культуре",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Какие функции относятся к корпоративной культуре",
        answers: [
            {id: 1, text: "Имиджевая", correct: true},
            {id: 2, text: "Мотивационная", correct: true},
            {id: 3, text: "Вовлекающая", correct: true},
            {id: 4, text: "Адаптивная", correct: true},
            {id: 5, text: "Управленческая"},
            {id: 6, text: "Контролирующая"},
            {id: 7, text: "Все вышеперечисленные"},
        ]
    },

]

// call 7 Финансы и планирование
const financeAndPlanningQuestions = [
    {
        questionTitle: "Фокус внимания на данном этапе",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Фокус внимания на данном этапе",
        answers: [
            {id: 1, text: "Рост выручки", correct: true},
            {id: 2, text: "Снижение затрат"},
            {id: 3, text: "Увеличение инвестиций в новые направления и продукты", correct: true},
            {id: 4, text: "Высокую  маржинальность"},
            {id: 5, text: "Высокая прибыль"},
            {id: 6, text: "Выплату дивидендов"},
            {id: 7, text: "Динамику доли затрат в выручке", correct: true},
        ]
    },
    {
        questionTitle: "Управление затратами – что необходимо предпринять",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Управление затратами – что необходимо предпринять",
        answers: [
            {id: 1, text: "Все усилия необходимо направить на постоянное снижение затрат"},
            {id: 2, text: "Важно выделить самые большие статьи затрат и найти способ их сокращения"},
            {id: 3, text: "Четкое планирование и контроль за соблюдением планов", correct: true},
            {id: 4, text: "Затратами управлять невозможно, все равно постоянно возникают непредвиденные расходы"},
            {id: 5, text: "Повышение мотивации подразделений и отдельных сотрудников к снижению затрат"},
            {id: 6, text: "Самое важное – экономия на налогах"},
            {id: 7, text: "Если выручка высокая, то управлять затратами не нужно"},
        ]
    },
    {
        questionTitle: "Что дает внедрение системы бюджетного планирования в компании",
        answered: false,
        correct: 0,
        wrong: 0,
        question:
            "Что дает внедрение системы бюджетного планирования в компании",
        answers: [
            {id: 1, text: "обеспечивается прозрачность и предсказуемость потока финансовых средств, повышается контроль руководства за их движением;", correct: true},
            {id: 2, text: "возрастает эффективность использования ресурсов", correct: true},
            {id: 3, text: "снижаются риски неэффективного использования средств", correct: true},
            {id: 4, text: "усиливается контроль над производственными показателями, доходами и расходами не только компании в общем, но и ее хозяйственных подразделений;", correct: true},
            {id: 1, text: "вовлекается в процесс управления и активизируется средний менеджмент организации;", correct: true},
            {id: 5, text: "обеспечивается мотивация и повышается ответственность менеджмента среднего звена, оптимизируется документооборот.", correct: true},
            {id: 6, text: "Все вышеперечисленное", correct: true},
            {id: 7, text: "Только отнимает ресурсы"},
        ]
    },
]


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
