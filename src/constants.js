const accordionItems=[
    {
        titleHead:"Lorem ipsum dolor sit amet?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor sit amet, consectetur elit?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor sit amet, consectetur elit?",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
    {
        titleHead:"Lorem ipsum dolor",
        titleItem:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis:",
        itemOptionsList:["Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit.","Lorem ipsum dolor sit amet, consectetur adipiscing elit."]
    },
]


const advantagesBlocksList=[
    {img:"people_emogi/1.svg",title:"Вся работа в одном месте",description:"Благодаря расширенному функционалу приложения, вся работа происходит в одном месте, и вы больше не будете использовать сторонние программы"},
    {img:"people_emogi/2.svg",title:"Простой в использовании",description:"Интуитивное расположение кнопок через которые вы сможете с полным комфортом пользоваться приложением"},
    {img:"people_emogi/3.svg",title:"Тарифный план",description:"Используйте уже готовый набор функционала или собери свой индивидуально. Получите уникальный тарифный план!"},
]

const contactOptions=["Обращение","Жалоба","Благодарность"]

const selectionOptions=[
    {id:1,price:29,title:"Субтитры"},
    {id:2,price:19,title:"Режим совместностного редактирования/доски (расширенный режим)"},
    {id:3,price:39,title:"Облачное хранилище 100гб"},
    {id:4,price:39,title:"Анонимное посещение звонков"},
    {id:5,price:29,title:"Синхронизация музыки с вашим аккаунтом"},
    {id:6,price:39,title:"Статистика для звонков"},
    {id:7,price:9,title:"Виджеты (ограниченый набор)"},
    {id:8,price:29,title:"Комнаты +1 штука"},
    {id:9,price:79,title:"Облачное хранилище 250гб"},
    {id:10,price:19,title:"Виджеты (полная версия)"},
    {id:11,price:89,title:"Комнаты + 3 штуки"},
    {id:12,price:19,title:"Сводка правил под звонки/каналы"},
    {id:13,price:29,title:"Режим совместного редактирования доски (полный режим)"},
    {id:14,price:29,title:"Отображение тех, кто не подключился к звонку"},
]

const tariffBlocksLongList=[
    {title:"FREE 🧢",descriptionList:["Режим совместного редактирования/доски (ограниченный режим);","Совместное использование 2 пользователей;","Шумоподавление;","Планировщик ограниченные инструменты;","Облачное хранилище 50гб;","Виджеты (ограниченный набор)/комнаты 2 штуки;","Голосовой ассистент;","Набор FREE (2 звука, 2 темы, 5 стикер паков);"],price:0},
    {title:"PRO 🎓",descriptionList:["Субтитры;","Облачное хранилище 100гб;","Режим совместностного редактирования/доски (расширенный режим);","Синхронизация музыки с вашим аккаунтом;","Анонимное посещение звонков;","Статистика для звонков;","Виджеты (ограниченый набор);","Комнаты +1 штука;","Набор PRO (2 звука, 2 темы, 2 стикерпака);"],price: 99},
    {title:"PRO PRIME 👑",descriptionList:["Анонимное посещение звонков;","Синхронизация музыки с вашим аккаунтом;","Субтитры;","Статистика звонков;","Облачное хранилище 250гб;","Виджеты (полная версия);","Комнаты + 3 штуки;","Сводка правил под звонки/каналы;","Режим совместного редактирования доски (полный режим)", "Отображение тех, кто не подключился к звонку", "Набор PRO PRIME (4 звука, 4 темы, 4 стикерпака)"],price: 249}
]

const tariffBlocksShortList=[
    {title:"FREE 🧢",descriptionList:["Режим совместного редактирования/доски (ограниченный режим);","Совместное использование 2 пользователей;"],price:0},
    {title:"PRO 🎓",descriptionList:["Синхронизация музыки с вашим аккаунтом;","Облачное хранилище 100гб;","Режим совместностного редактирования/доски (расширенный режим);"],price:99},
    {title:"PRO PRIME 👑",descriptionList:["Анонимное посещение;","Синхронизация музыки с вашим аккаунтом;","Сводка правил под звонки/каналы;"],price:249},
]

const listPersonHomePage=[
    {imgUrl:"profile_photo/7.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"profile_photo/4.png",name:"Анна",surname:"Вакуленко",job:"Founder/CVO"},
    {imgUrl:"profile_photo/6.png",name:"Александр",surname:"Хисамутдинов",job:"Founder/CMO"},
    {imgUrl:"profile_photo/3.png",name:"Марина",surname:"Марейчева",job:"Founder/ Art-director"},
    {imgUrl:"profile_photo/2.png",name:"Алена",surname:"Хисамутдинова",job:"Graphic Designer"}
]

const listPersonOurTeam=[
    {imgUrl:"profile_photo/7.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"profile_photo/4.png",name:"Анна",surname:"Вакуленко",job:"Founder/CVO"},
    {imgUrl:"profile_photo/6.png",name:"Александр",surname:"Хисамутдинов",job:"Founder/CMO"},
    {imgUrl:"profile_photo/3.png",name:"Марина",surname:"Марейчева",job:"Founder/ Art-director"},
    {imgUrl:"profile_photo/2.png",name:"Алена",surname:"Хисамутдинова",job:"Graphic Designer"},
    {imgUrl:"profile_photo/10.png",name:"Максим",surname:"Штыкайдер",job:"HR архитектор"},
    {imgUrl:"profile_photo/5.png",name:"Сергей",surname:"Хизов",job:"HR-менеджер"},
    {imgUrl:"profile_photo/8.png",name:"Кирилл",surname:"Новоселецкий",job:"Middle Backend Rust Developer"},
    {imgUrl:"profile_photo/9.png",name:"Инсаф",surname:"Гиззатуллин",job:"Middle Frontend Rust Developer"},
    {imgUrl:"profile_photo/11.png",name:"Сергей",surname:"Кононенко",job:"Junior Frontend Rust Developer "},
]

const videoList = [
    {id:1, videoUrl:"ECTIE39k-_0", videoName:"Основы приложения 👶🏼"},
    {id:2, videoUrl:"ECTIE39k-_0", videoName:"Познаем глубины 👩🏻‍💻"},
    {id:3, videoUrl:"GW5PwlzXBDc", videoName:"Что полезного? 👩🏽‍🏫"},
    {id:4, videoUrl:"ECTIE39k-_0", videoName:"Ищем ответы 🕵🏻‍♂️"},
    {id:5, videoUrl:"ECTIE39k-_0", videoName:"Работа по-другому 💁🏼"},

]

export {accordionItems,advantagesBlocksList,contactOptions,selectionOptions,tariffBlocksLongList,tariffBlocksShortList,listPersonHomePage,listPersonOurTeam,videoList}