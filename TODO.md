# TODO
## Development
~~* Раздели домашнюю страницу на **домашнюю**/**контакты**/**об**~~
~~* Проверь тексты основных страниц сайта на правильность написания с точки зрения копирайтера~~
~~* Исправь во всех картинках:~~
    ~~* Тексты ( не рукописный, а программный )~~
    ~~* Добавь обязательно фон на все изображения~~
~~* Подготовь изображения для статей **WW1-1916-7** и **End_of_WW1**~~
~~* Добавь первод для статей **WW1-1916-7** и **End_of_WW1**~~
~~* Подумай как можно улучшить читаемость и стиль статей.(Добавь анимации)~~
~~* Переделай эфект выбора интерактивного текста(ссылки, кнопки)~~
~~* Перересуй home contacts about list~~
~~* Продумай title для всех страниц~~
~~* Добавь на каждую страницу canonical~~
~~* Добавь на каждую страницу общую статистику(views, shares, likes)~~
~~* реализуй возможность делиться в соц сетях~~
~~* в мобильной версии если открыть навигационное меню попап делиться не исчезает, исправь~~
~~* перемести попап во viewer не в базовый шаблон~~
~~* доверстай попап~~
~~* Добавь возможность просмотра краткой версии~~
~~* Реализуй при удалении ещё и удаление директории статьи~~
~~* сделай зелёную кнопку рабочей~~
~~* перересуй изображения попапа, содержания контактов~~
~~* напиши краткую версию статьи Французской революции~~
~~* перерусуй иконки и поменяй всё на webp~~
~~* переведи страницы~~
~~* напиши о сайте больше~~
~~* создай реальный обект сообщения(или отправляй почтой)~~
~~* элемент новодобавленных статей~~
~~* элемент популярных статей статей~~
~~* элемент будущих статей статей~~
~~* Добавь 3 будущие(неопубликованные) статьи ( для того чтобы было что-то)~~
~~* Нарисуй изображения для статей ММ1918 ММ1916-1917~~
~~* Добавь в sitemap.xml статические страницы и новые генерируемые(короткие)~~
+ нарисуй приветственное изображение/я в **about**
+ Отправляй сообщения на главную почту а не в базу данных
+ Сделай карточки динамическими. Под этим понимается что при навидении нажатии "подробнее"
справа от статьи появляется краткое описание статьи и плитка из 4 картинок. "подробнее" меняется на "короче"
* Убери из sitemap ссылки на неопубликованные статьи


## SEO
~~* Собрать семантическия ядра для всех первоначальных статей~~
~~* Кластеризировать ядра~~
~~* Произвести внутренюю оптимизацию~~
    ~~* title~~
    ~~* description~~
    ~~* imgs~~
    ~~* h1,h2,...~~
    ~~* создание и настройка robots.txt~~
    ~~* создание и настройка sitemap.xml~~
    ~~* оптимизация ссылок, внутреняя перелинковка~~
    + создание и оптимизация снипета разметки (пока что у меня нет необходимости дерать микроразметку)
~~* Регистрируем в инструментах для анализа~~
...(начал 21.08 Google, Yandex) Отправить сайт в индекс google и yandex 
~~* Составить таблицу конкурентов~~
~~* Составить таблицу анкоров, ссылочный план~~
* Составить дневник оптимизации

## Problems
~~* Добавь статьям поле последней модификации, чтобы sitemap мог отобразить эту информацию~~
~~* В мобильной версии при нажатии на поиск экран немного меняется что триггерит сокрытие боковой 
панели~~
~~* Сonten menu неработает в мобильном режиме.~~
~~* Нет иконки на закладке~~
~~* Правильно подбирай размер картинок для сайта, не растягивай маленькие и не уменьшай большие.~~
* TextField не переводится 
* Весь перевод в одном файле, разбей на отдельные
* Не смог создать массив ImageField,
    вместо этого создал 30 отдельных полей
* MEDIA_ROOT отправляется в view как отдельная переменная
* Model Category не нуждается в slug
* NavigationTree не отдельное приложение
* Прятать части меню если ты уже в этом меню
* Infinity scroll не реализован ибо плохое влияние на SEO
* sitemap.xml может содержать до 50.000 ссылок, дальше нужно будет делать отдельные sitemaps

## Plan of deploying(updating) website
~~* remove any cache files~~
~~* generate json dumb of database~~
~~* move fully Viewer Base media~~
~~* move HistoriesAsAnArt/urls.py, data.json~~
~~* on server | remove locale any cache files~~
~~* on server |collect all static files~~
~~* on server | makemigration~~
~~* on server | migrate~~
~~* on server | load data.json~~
* wait 5 min

