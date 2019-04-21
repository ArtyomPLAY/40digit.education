import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //data
    courses: {
      html: {
        card: {
          title: "Основы HTML",
          lang: "html",
          level: 'Легкий',
          desc:
            'Самое первое и самое главное - разметка! Основа основ, без чего не может существовать ни одна веб-страница.<br> "Скелет", который позже обрастает дизайном.',
          status: true,
          img:
            "https://www.worldplaynetworks.com/wp-content/uploads/2017/01/40225186_l.jpg"
        },
        lessons: [
          {
            title: "Основы основ",
            preview_text: 'Введение в HTML. Элементы, теги и атрибуты - об этом вы узнаете в первом уроке.',
            text:
              '<h2>Что такое HTML и CSS?</h2>HTML (HyperText Markup Language, язык разметки гипертекста) задаёт структуру содержимого и его смысл, определяя такой контент как, к примеру, заголовки, абзацы или изображения. CSS (Cascading Style Sheets) или каскадные таблицы стилей — это язык презентаций созданный для оформления внешнего вида контента, использующий, например, шрифты или цвета.<br>Эти два языка — HTML и CSS независимы друг от друга и должны таковыми и оставаться. CSS не должен быть написан внутри HTML-документа и наоборот. Как правило, HTML всегда будет представлять содержимое, а CSS всегда будет определять его оформление.<br>При таком понимании разницы между HTML и CSS давайте погрузимся в HTML более подробно.<br><br><h2>Основные термины HTML</h2>Перед началом работы с HTML вы, вероятно, столкнётесь с новыми и часто странными терминами. Со временем вы ознакомитесь со всеми ними подробнее, но сейчас вы должны начать с трёх основных терминов HTML — элементы, теги и атрибуты.<br><br><h2>Элементы</h2>Элементы указывают, как определять структуру и содержимое объектов на странице. Некоторые из часто используемых элементов включают в себя несколько уровней заголовков (определены как элементы с <code><h1></code> до <code><h6></code>) и абзацев (определены как <code><p></code>); в список можно включить элементы <code><a></code>, <code><div></code>, <code><span></code> и многие другие.<br>Элементы идентифицируются с помощью угловых скобок <>, окружающих имя элемента. Таким образом, элемент будет выглядеть так: <code><a></code><br><h2>Теги</h2><br>Добавление угловых скобок < и > вокруг элемента создаёт то, что известно как тег. Теги наиболее часто встречаются в парах открывающих и закрывающих тегов.<br>Открывающий тег отмечает начало элемента. Он состоит из символа <, затем идёт имя элемента и завершается символом > например,<div><code><p></code><br>Закрывающий тег отмечает конец элемента. Он состоит из символа < с последующей косой чертой и именем элемента и завершается символом > например, </div><code><p>Text</p></code><br>Содержимое, которое находится между открывающим и закрывающим тегами, является содержимым этого элемента. Ссылка, к примеру, будет иметь открывающий тег <code><a></code> и закрывающий тег <code></a></code>. Что находится между этими двумя тегами будет содержимым ссылки.<br>Так, теги ссылок будут выглядеть примерно так: <code><a>...</a></code><br><br><i>Ну а теперь, давайте выполним первые задания!</i>',
              status: true,
            tasks: [
              {
                title: "Hello, world!",
                text:
                  'По традиции, каждый крутой программист вначале своего пути должен написать "Hello, world!". С этого и начнем:<br>Задание: напишите "Hello, world!(используйте тег <code><p></code>)<br> <p class="tip">Не забывайте, что каждый открывающий тег, кроме нескольких исключений, должен иметь и закрывающий.</p>',
                exp: [/<p>\s{0,}Hello.{1}\s{0,}World!\s{0,}<\Wp>/i],
                status: 0,
                solution: "<code><p>Hello, world!</p></code>"
              },
              {
                title: "Заголовки",
                text:
                  'Создайте заголовки <code><h1></code>,<code><h2></code>,<code><h3></code> с любым текстом внутри.',
                exp: [/<h1>.{0,}<\/h1>/i,/<h2>.{0,}<\/h2>/i,/<h3>.{0,}<\/h3>/i],
                status: 0,
                solution: "<code><h1>Заголовок первого уровня</h1><br><h2>Заголовок второго уровня</h2><br><h3>Заголовок третьего уровня</h3></code>"
              }
            ]
          },
          {
            title: "Основные теги",
            text:
              'Теперь на нашей странице есть "Привет, мир!", обернутый в тег <code>&lt;p&gt;</code>. Этот тег нужен для того, чтобы хранить внутри абзацы текста. Давайте попробуем сделать из абзаца заголовок. Есть несколько типов - h1-h6. h1 - самый большой, h6 - самый маленький. Попробуйте заключить текст в эти теги и почувствуйте разницу.',
              status: false,
            tasks: [
              {},
              {},
              {}
            ]
          },
          {
            title: "Формы ввода",
            text:
              'Формы ввода помогают пользователю вводить данные любого типа. Позже мы научимся отправлять их на сервер и обрабатывать, но сейчас, мы познакомися с тегами, которые помогут нам создать простейшую форму входа',
              status: false,
            tasks: [
              {},
              {}
            ]
          }
        ]
      },
      css: {
        card: {
          title: "CSS",
          lang: "css",
          desc:
            "Магическим образом превращает набор элементов в красивый, полноценный сайт. Благодаря CSS есть такое разнообразие интерфейсов.",
          status: false,
          img: "https://smm.pp.ua/wp-content/uploads/2017/09/css_code-min.jpg"
        },
        lessons: [
          {
            title: "CSS - это красиво",
            text:
              'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.[1] CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.[2]',
              status: true,
            tasks: [
              {
                title: "Hello, world!",
                text:
                  'По традиции, каждый крутой программист вначале своего пути должен написать ',
                exp: [/<p>\s{0,}Hello.{1}\s{1,}World!\s{0,}<\Wp>/i],
                status: 0,
                solution: "<code><p>Hello, world!</p></code>"
              },
              {
                title: "Заголовки",
                text:
                  'Создайте заголовки <code><h1></code>,<code><h2></code>,<code><h3></code> с любым текстом внутри.',
                exp: [/<h1>.{0,}<\/h1>/i,/<h2>.{0,}<\/h2>/i,/<h3>.{0,}<\/h3>/i],
                status: 0,
                solution: "<code><h1>Заголовок первого уровня</h1><br><h2>Заголовок второго уровня</h2><br><h3>Заголовок третьего уровня</h3></code>"
              }
            ]
          },
        ]
      },
      js: {
        card: {
          title: "JavaScript",
          lang: "js",
          desc:
            "Настоящее оружие frontend. Очень функциональный язык программирования, с помощью которого можно сделать просто красивую анимацию или написать полноценное приложение.",
          status: false,
          img:
            "https://cdn-images-1.medium.com/max/2000/1*Prm5SZ-OgWQHfI8iBDVjVA.jpeg"
        }
      }
    }
  },
  getters: {
    //почти computed, Только для store
    getLesson: state => params => {
      
      return state.courses[params.lang].lessons[params.id];
    },
    getCourse: state => lang => {
      return state.courses[lang];
    },
    getAllCards: state => () => {
      var cards = [];
      for (var lang in state.courses) {
        cards.push(state.courses[lang].card);
      }
      return cards;
    }
  },
  mutations: {
    // изменения объектов state
  },
  actions: {
    //асинхронные действия с данными, например запросы в бд
  }
});
