// Создай `p` с текстом `"Нажми на меня"`. При клике он меняет текст на `"Текст изменён!"`.  
const p = document.createElement('p')
document.body.append(p)
p.innerText = 'Нажми на меня'
p.addEventListener('click', (e) => {
    p.innerText = 'Текст изменён!'
})

// Создай 5 `div`, в каждом из которых есть кнопка`"Скрыть"`. При клике `div` исчезает. 
for (let i = 0; i < 5; i++) {
    const div = document.createElement('div')
    const btm = document.createElement('button')
    btm.classList.add('btmClick')
    div.append(btm)
    btm.innerText = 'Скрыть'
    document.body.append(div)
}
// const clickDiv = document.querySelectorAll('div')
//   div.addEventListener('click',(e)=>{
//     e.stopPropagation()

// })
// btm.addEventListener('click', func1);

// function func1() {
//     let shadow = document.getElementById('.btmClick');
//     if (shadow.style.display !== 'none') {
//         shadow.style.display = "none";
//     } else {
//         shadow.style.display = "block";
//     }

// };


// Создай`div`.При клике на него его размер увеличивается на 10px.  
// const divELL = document.createElement('div')
// divELL.innerText = 'увеличивается на 10px'
// divELL.style.backgroundColor = 'red'
// divELL.style.width = 100 + 'px'
// divELL.style.height = 5 + 'em'
// document.body.append(divELL)
// divELL.addEventListener('click', (e) => {
//     divELL.style.height += 10 + 'px';
// });



// Создай массив чисел, добавь кнопку`"Сортировать"`, которая отображает отсортированный массив на странице. 
const arr = [1, 3, 2, 3, 4, 7, 8, 6, 4, 3, 2, 1,]
const btm = document.createElement('button')
document.body.append(btm)
btm.style.backgroundColor = "red"
btm.style.padding = 9 + 'px'
btm.style.margin = 9 + 'px'
btm.style.color = "yellow"
btm.style.borderRadius = 5 + 'px'
btm.innerText = "Сортировать"
btm.addEventListener('click', (e) => {
    let arrSort = arr.some((a, b) => a - b)
    console.log(arrSort);

})


// Создай массив цветов `["red", "blue", "green", "yellow"]` и кнопку`"Сменить фон"`.При каждом клике фон страницы должен меняться на следующий цвет из массива. 
const arrColor = ["red", "blue", "green", "yellow"]
const colorBtm = document.createElement('button')
document.body.append(colorBtm)
colorBtm.innerText = "Сменить фон"
colorBtm.classList.add('colorBtm')
colorBtm.style.backgroundColor = "green"
colorBtm.style.padding = 9 + 'px'
colorBtm.style.borderRadius = 5 + 'px'
let i = 0
colorBtm.addEventListener('click', function colorClick() {
    if (arrColor.length != i) {
        console.log(arrColor[i]);
        i++
        document.querySelector('.colorBtm').style.backgroundColor = arrColor[i]
    } else {
        flad = 0
        document.querySelector('.colorBtm').style.backgroundColor = '#fff'
    }
})




//! Создай кнопку `"Сгенерировать"` и пустой`div`.При каждом клике кнопки в `div` должен появляться новый случайный номер от 1 до 100.
const genBtm = document.createElement('button')
genBtm.innerText = "Сгенерировать"
genBtm.style.padding = 9 + 'px'
genBtm.borderRadius = 5 + 'px'
genBtm.style.margin = 9 + 'px'
document.body.append(genBtm)
const divNumber = document.createElement('div')
// divNumber.style.width= 10 + 'px'
divNumber.style.innerText = ''
document.body.append(divNumber)
genBtm.addEventListener('click', (e) => {
    let numbersDiv = (Math.floor(Math.random() * 100) + 1);
    divNumber.innerText = numbersDiv
    divNumber.style.color = 'red'
})

// let numbersDiv = (Math.floor(Math.random() * 100) + 1);



// Создай массив строк`["Кнопка 1", "Кнопка 2", "Кнопка 3"]`.Напиши функцию`createButtons(buttons)`, которая создаёт кнопку(`button`) для каждой строки и добавляет её в`body`.  Добавь обработчик клика, который выводит в консоль текст кнопки.  

//  Напиши функцию `generateBookList(books)`, которая принимает массив объектов `books`, где каждый объект содержит `title` и `author`. Функция должна создать список (`ul`), в котором каждый элемент (`li`) содержит название книги и автора, а затем добавить этот список в `body`.  


// Создай `ul` и две кнопки: `"Добавить"` и`"Удалить"`.По клику `"Добавить"` в список добавляется новый `li` с текстом`"Элемент X"`, где X — порядковый номер.По клику `"Удалить"` удаляется последний элемент списка. 

// const books = [
//   { title: "Гарри Поттер", author: "Дж. К. Роулинг" },
//   { title: "1984", author: "Джордж Оруэлл" },
//   { title: "Мастер и Маргарита", author: "М. А. Булгаков" }
// ];

// Создай список(`ul > li`).При клике на `li` он становится синим, а все остальные возвращаются к стандартному цвету.  

// Создай функцию `createProductCard(product)`, которая принимает объект `product` с полями `name`, `price`, `available`. Функция должна создать карточку товара (`div`), в которой название товара (`h2`), цена (`p`), и статус наличия (`p`, где текст "В наличии" или "Нет в наличии" в зависимости от `available`). Добавь карточку в `body`.  
// Используй тернарный оператор для отображения статуса наличия.  

// const product = {
//   name: "Ноутбук",
//   price: 75000,
//   available: true
// };

// Создай список (`ul`), в котором будет 5 элементов (`li`). Добавь этим элементам классы `odd` (нечётные) и `even` (чётные). Используй `style` для изменения цветов: чётные элементы должны быть синими, нечётные — зелёными.  

// На странице есть 3 кнопки с классами `.btn`. Напиши скрипт, который получит все кнопки (`document.querySelectorAll`), а затем выведет в консоль текст каждой кнопки с помощью метода массива.  

// Создай `div` с `id="clickBox"` размером `100x100px`, сделай его красным. Добавь обработчик события `click`, который при каждом нажатии меняет цвет (`backgroundColor`) на случайный.  
// - Используй `Math.random()` для генерации случайного цвета.  
// - Используй логические операторы, чтобы проверять текущий цвет перед сменой.  


// Создай поле ввода (`input type="text"`) и кнопку (`button`). При вводе текста в поле и нажатии на кнопку текст должен добавляться в массив `messages`, а затем отображаться в `ul`.  
// - Используй `push()` для добавления в массив.  
// - Используй `addEventListener()` для обработки клика и ввода.  
// - Используй `forEach()` для рендера списка.  


// Создай кнопку "Проверить устройство", при нажатии которой будет анализироваться ширина окна (window.innerWidth):
// Если ширина меньше 576px — вывести "Мобильное устройство".
// От 576px до 1024px — "Планшет".
// Больше 1024px — "Десктоп".
// Дополнительно:
// Добавь событие resize, чтобы при изменении размера окна результат обновлялся.

// Добавь поле ввода (или prompt) и кнопку "Проверить". Пользователь вводит название товара.
// Если товар есть и available === true — вывести "Товар в наличии"
// Если available === false — "Товар временно отсутствует"
// Если товара нет в массиве — "Такого товара нет"

// const products = [
//   { name: "Ноутбук", available: true },
//   { name: "Смартфон", available: false },
//   { name: "Наушники", available: true }
// ];

// Создай массив чисел const numbers = [10, 5, 30, 8, 20].
// "Оставить четные" — оставляет только четные числа и выводит их.
// "Отсортировать по возрастанию" — сортирует массив и выводит его.