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
    {img:"people_emogi/2.svg",title:"Простой в использовани",description:"Интуитивное расположение кнопок через которые вы сможете с полным комфортом пользоваться приложением"},
    {img:"people_emogi/3.svg",title:"Тарифный план",description:"Используйте уже готовый набор функционала или собери свой индивидуально. Получите уникальный тарифный план!"},
]

const contactOptions=["Обращение","Жалоба","Благодарность"]

const selectionOptions=[
    {id:1,price:35,title:"Совместное редактирование (расширенная версия)"},
    {id:2,price:40,title:"Создавайте свою сводку правил"},
    {id:3,price:62,title:"Облачное хранилище объемом 50 Гб"},
    {id:4,price:15,title:"Приватные чаты и каналы"},
    {id:5,price:79,title:"Отображение тех, кто не подключился к конференции"},
]

const tariffBlocksLongList=[
    {title:"FREE 🧢",descriptionList:["Кастомизация интерфейса под свой вкус;","Доска рисования для удобной работы;","Облачное хранилище объемом 15 Гб;","Ссылки для верификации пользователей;","Маски (ограниченое кол-во);","Виджеты, сделают пространство экономнее;","Планировщик (ограниченые инструменты);","Шумоподавление;"],price:0},
    {title:"PRO 🎓",descriptionList:["Приватные чаты и каналы;","Облачное хранилище объемом 30 Гб;","Синхронизация музыки с вашим аккаунтом;","Своя аудиотека, чтобы делиться с друзьями;","Нет ограничений на длительность звонков;","Анонимный просмотр чатов/сообщений;","Статистика для вашего канала;","Приватные сервера;","Маски (расширенное кол-во);"],price: 99},
    {title:"PRO PRIME 👑",descriptionList:["Совместное редактирование (расширенная версия);","Создавайте свою сводку правил;","Облачное хранилище объемом 50 Гб;","Виджеты (расширенная версия);","Отображение тех, кто не подключился к конференции;","Отстутствие анонимного входа;","Продвинутое планирование для бизнеса;","Маски (расширенное кол-во);","Выберете правильный план для вашей работы!"],price: 299}
]

const tariffBlocksShortList=[
    {title:"FREE 🧢",descriptionList:["Кастомизация интерфейса под свой вкус;","Доска рисования для удобной работы;"],price:0},
    {title:"PRO 🎓",descriptionList:["Приватные чаты и каналы;","Облачное хранилище объемом 30 Гб;","Синхронизация музыки с вашим аккаунтом;"],price:99},
    {title:"PRO PRIME 👑",descriptionList:["Совместное редактирование (расширенная версия);","Выберете правильный план для вашей работы!","Облачное хранилище объемом 50 Гб;"],price:299},
]

const listPersonHomePage=[
    {imgUrl:"profile_photo/1.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"profile_photo/4.png",name:"Анна",surname:"Вакуленко",job:"Founder/CVO"},
    {imgUrl:"profile_photo/6.png",name:"Александр",surname:"Хисамутдинов",job:"Founder/CMO"},
    {imgUrl:"profile_photo/3.png",name:"Марина",surname:"Марейчева",job:"Founder/ Art-director"},
    {imgUrl:"profile_photo/2.png",name:"Алена",surname:"Хисамутдинова",job:"Graphic Designer"}
]

const listPersonOurTeam=[
    {imgUrl:"profile_photo/1.png",name:`Владимир`,surname:"Житов",job:"CЕO"},
    {imgUrl:"profile_photo/4.png",name:"Анна",surname:"Вакуленко",job:"Founder/CVO"},
    {imgUrl:"profile_photo/6.png",name:"Александр",surname:"Хисамутдинов",job:"Founder/CMO"},
    {imgUrl:"profile_photo/3.png",name:"Марина",surname:"Марейчева",job:"Founder/ Art-director"},
    {imgUrl:"profile_photo/2.png",name:"Алена",surname:"Хисамутдинова",job:"Graphic Designer"},
    {imgUrl:"profile_photo/10.png",name:"Максим",surname:"Штыкайдер",job:"HR архитектор"},
    {imgUrl:"profile_photo/5.png",name:"Сергей",surname:"Хизов",job:"HR-менеджер"},
    {imgUrl:"profile_photo/8.png",name:"Кирилл",surname:"Новосельский",job:"Middle Backend Rust Developer"},
    {imgUrl:"profile_photo/9.png",name:"Инсаф",surname:"Гиззатуллин",job:"Middle Frontend Rust Developer"},
    {imgUrl:"profile_photo/11.png",name:"Сергей",surname:"Кононенко",job:"Junior Frontend Rust Developer "},
]

const rememberList=[
    {sub_title:"Взлеты и падения", id:1,imgUrl:"carousel/1.jpg"},
    {sub_title:"Тот день, когда...", id:2,imgUrl:"carousel/2.jpg"},
    {sub_title:"Общий сбор", id:3,imgUrl:"carousel/3.jpg"},
    {sub_title:"День Х", id:4,imgUrl:"carousel/4.jpg"},
    {sub_title:"Взлеты и падения", id:5,imgUrl:"carousel/2.jpg"}
]

const videoList = [
    {id:1, videoUrl:"ECTIE39k-_0", videoName:"Основы приложения 👶🏼"},
    {id:2, videoUrl:"ECTIE39k-_0", videoName:"Познаем глубины 👩🏻‍💻"},
    {id:3, videoUrl:"GW5PwlzXBDc", videoName:"Что полезного? 👩🏽‍🏫"},
    {id:4, videoUrl:"ECTIE39k-_0", videoName:"Ищем ответы 🕵🏻‍♂️"},
    {id:5, videoUrl:"https://youtu.be/ECTIE39k-_0", videoName:"Работа по-другому 💁🏼"},

]

export {accordionItems,advantagesBlocksList,contactOptions,selectionOptions,tariffBlocksLongList,tariffBlocksShortList,listPersonHomePage,listPersonOurTeam,rememberList,videoList}