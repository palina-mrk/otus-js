   JS-basic:hw2

Домашняя работа №2
==================

описание тестовых сценариев

Скрипт, который нужно протестировать:
-------------------------------------

На странице должны быть три текстовых параграфа, поле ввода и кнопка. Напишите скрипт, который будет выполнять следующие условия:

*   Кнопка скрыта, если в поле ввода нет значения
*   При клике на кнопку добавляется новый параграф, содержащий текст из поля ввода
*   Если параграфов становится больше, первый из них удаляется

Сценарии тестирования:
----------------------

### Блок первый: проверка контента страницы до запуска скрипта

1.  Проверяем наличие трех параграфов на странице
    *   подготовка: необходимое количество параграфов - 3:  
        `const pExpect = 3;`
    *   действие: подсчет параграфов  
        `const pCount = document.querySelectorAll('p').length;`
    *   проверка:  
        `expect(pCount).toBe(pExpect);`
2.  Проверяем наличие поля ввода input
    *   подготовка: --  
        
    *   действие: получить поле ввода  
        `const inputField = document.querySelector('input');`
    *   проверка: поле ввода - не undefined и не null  
        `expect(inputField ?? 10).toBe(inputField);`
3.  Проверяем, что тип поля ввода - text
    *   подготовка: тип input должен быть равен text  
        `const inputTypeExpect = 'text';`
    *   действие: получить тип поля ввода  
        `const inputType = document.querySelector('input').getAttribute('type');`
    *   проверка: количество параграфов равно 3  
        `expect(inputType).toBe(inputTypeExpect);`
4.  Проверяем наличие кнопки
    *   подготовка: --  
        
    *   действие: получить кнопку  
        `const button = document.querySelector('button');`
    *   проверка: кнопка существует  
        `expect(button ?? 10).toBe(button);`
5.  Проверяем, что кнопка скрыта
    *   подготовка: --  
        
    *   действие: получить кнопку  
        `const button = document.querySelector('button');`
    *   проверка: кнопка скрыта  
        `expect(button.hidden).toBe(true);`

### Блок второй: проверка работы функций

6.  Проверяем, что кнопка скрыта
    *   подготовка: --  
        
    *   действие: получить кнопку  
        `const button = document.querySelector('button');`
    *   проверка: кнопка скрыта  
        `expect(button.hidden).toBe(true);`
7.  Проверяем, что функция очищает поле ввода
    *   подготовка: вводим текст в поле ввода  
        `field.value = "some text";`
    *   действие: вызов функции  
        `clearField();`
    *   проверка: поле ввода очищено  
        `expect(field.value).toBe("");`
8.  Проверяем, что добавляет параграф с текстом из поля ввода
    *   подготовка: добавляем текст в поле ввода,  
        запоминаем текст существующих параграфов и их количество  
        `field.value = "some text";   const pCountInitial = document.querySelectorAll('p').length;   const paragraphs = [];   for(let i = 0; i < pCountInitial; i++)    paragraphs.push(document.querySelectorAll('p')[i].innerText);`
    *   действие: вызов функции  
        `addParagraph();`
    *   проверка: параграфов стало на один больше,  
        текст первых параграфов не изменился,  
        текст добавленного совпадает с текстом из поля ввода `expect(document.querySelectorAll('p').length).toBe(pCountInitial + 1);   for(let i = 0; i < pCountInitial; i++)    expect(document.querySelectorAll('p')[i].innerText).toBe(paragraphs[i]);   expect(document.querySelectorAll('p')[pCountInitial].innerText).toBe("some text");`
9.  Проверяем, что стирает первый параграф
    *   подготовка: запоминаем количество параграфов  
        и текст параграфов, начиная со второго  
        `const pCountInitial = document.querySelectorAll('p').length;   const paragraphsFromSecond = [];   for(let i = 1; i < pCountInitial; i++)    paragraphsFromSecond.push(document.querySelectorAll('p')[i].innerText);`
    *   действие: вызов функции  
        `removeFirstParagraph();`
    *   проверка: количество параграфов уменьшилось на один,  
        их текст совпадает с текстом старых параграфов, начиная со второго  
        `expect(document.querySelectorAll('p').length).toBe(pCountInitial - 1);   for(let i = 0; i < pCountInitial - 1; i++)    expect(document.querySelectorAll('p')[i].innerText).toBe(paragraphsFromSecond[i]);`
10.  Проверяем, что показывает кнопку при появлении текста
    *   подготовка: записывааем текст в поле  
        `field.value = "some text";`
    *   действие: вызов функции  
        `changeButtonState();`
    *   проверка: кнопка показана  
        `expect(button.hidden).toBe(false);`
11.  Проверяем, что скрывает кнопку, если текст состоит из пробелов
    *   подготовка: записывааем текст в поле  
        `field.value = " ";`
    *   действие: вызов функции  
        `changeButtonState();`
    *   проверка: кнопка скрыта  
        `expect(button.hidden).toBe(false);`
12.  Проверяем событие нажатия на кнопку (работают сразу несколько функций)  
    добавляется заданный параграф  
    если уже пять параграфов, при этом исчезает первый  
    то есть количество параграфов остается равно 5*   подготовка: запоминаем количество параграфов, записываем текст в поле  
        `let paragraphs = document.querySelectorAll('p');   const pCount = paragraphs.length;   field.value = "some text 4";`
    *   действие: клик на кнопку  
        `button.click();`
    *   проверка: текст последнего параграфа стал равен заданному тексту  
        `paragraphs = document.querySelectorAll('p');   expect(paragraphs[pCount].innerText).toBe("some text 4");`
    *   подготовка: записываем другой текст в поле  
        `field.value = "some text 5";`
    *   действие: клик на кнопку  
        `button.click();`
    *   проверка: текст последнего параграфа стал равен заданному тексту  
        `paragraphs = document.querySelectorAll('p');   expect(paragraphs[pCount + 1].innerText).toBe("some text 5");`
    *   подготовка: записываем другой текст в поле  
        `field.value = "some text 6";`
    *   действие: клик на кнопку  
        `button.click();`
    *   проверка: количество параграфов равно 5,  
        текст параграфа равен заданному тексту  
        `paragraphs = document.querySelectorAll('p');   expect(paragraphs.length).toBe(5); expect(paragraphs[4].innerText).toBe("some text 6");`

Ссылки на файлы с кодом:
------------------------

[скрипт](./script.js) на JavaScript  
[страница HTML](./example-page.html), на которой запускается скрипт  
[тесты](./example-page.test.js) на скрипт