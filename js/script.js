// function checkLogin(login) {
//     const regExp = /^[a-z\.](\w|\.){1,9}/;
// 	const checkLoginResult = regExp.test(login);
// 	const forCheckNum = /\d+/;
// 	const numArr = [];
// 	if(forCheckNum.test(login)){
// 		numArr.push(login.match(/\d+/));
// 	}
// 	const result = {
//         isValid: checkLoginResult,
//         numbers: login.match(/\d+/) || [],
//     };
//     return result;
// }

// let test = checkLogin("123user");
// console.log(test.isValid)
// console.log(test.numbers)


// let number;

// while (isNaN(number)) {
//   number = prompt("Будь ласка, введіть число:");

//   if (number === null) {
//     break; // Користувач натиснув "Скасувати"
//   } else if (isNaN(number)) {
//     alert("Ви ввели не число. Спробуйте ще раз.");
//   }
// }

// if (number !== null) {
//   console.log("Ви ввели число:", number);
// } else {
//   console.log("Користувач скасував введення.");
// }

// let number1;
// while (isNaN(number1)){
//     number1 = prompt("Enter a number");
// } 

// const number = +prompt("Enter a number");
//        // after entering the number - call resolve(number)
//        if(typeof number === "number" && !isNaN(number)) {
//         console.log(number);
//         console.log(typeof number);
//        }

// 

// const loremWords = [
//     'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur',
//     'adipiscing', 'elit', 'curabitur', 'vel', 'hendrerit', 'libero',
//     'eleifend', 'blandit', 'nunc', 'ornare', 'odio', 'ut',
//     'orci', 'gravida', 'imperdiet', 'nullam', 'purus', 'lacinia',
//     'a', 'pretium', 'quis', 'congue', 'praesent', 'sagittis', 
//     'laoreet', 'auctor', 'mauris', 'non', 'velit', 'eros',
//     'dictum', 'proin', 'accumsan', 'sapien', 'nec', 'massa',
//     'volutpat', 'venenatis', 'sed', 'eu', 'molestie', 'lacus',
//     'quisque', 'porttitor', 'ligula', 'dui', 'mollis', 'tempus',
//     'at', 'magna', 'vestibulum', 'turpis', 'ac', 'diam',
//     'tincidunt', 'id', 'condimentum', 'enim', 'sodales', 'in',
//     'hac', 'habitasse', 'platea', 'dictumst', 'aenean', 'neque',
//     'fusce', 'augue', 'leo', 'eget', 'semper', 'mattis', 
//     'tortor', 'scelerisque', 'nulla', 'interdum', 'tellus', 'malesuada',
//     'rhoncus', 'porta', 'sem', 'aliquet', 'et', 'nam',
//     'suspendisse', 'potenti', 'vivamus', 'luctus', 'fringilla', 'erat',
//     'donec', 'justo', 'vehicula', 'ultricies', 'varius', 'ante',
//     'primis', 'faucibus', 'ultrices', 'posuere', 'cubilia', 'curae',
//     'etiam', 'cursus', 'aliquam', 'quam', 'dapibus', 'nisl',
//     'feugiat', 'egestas', 'class', 'aptent', 'taciti', 'sociosqu',
//     'ad', 'litora', 'torquent', 'per', 'conubia', 'nostra',
//     'inceptos', 'himenaeos', 'phasellus', 'nibh', 'pulvinar', 'vitae',
//     'urna', 'iaculis', 'lobortis', 'nisi', 'viverra', 'arcu',
//     'morbi', 'pellentesque', 'metus', 'commodo', 'ut', 'facilisis',
//     'felis', 'tristique', 'ullamcorper', 'placerat', 'aenean', 'convallis',
//     'sollicitudin', 'integer', 'rutrum', 'duis', 'est', 'etiam',
//     'bibendum', 'donec', 'pharetra', 'vulputate', 'maecenas', 'mi',
//     'fermentum', 'consequat', 'suscipit', 'aliquam', 'habitant', 'senectus',
//     'netus', 'fames', 'quisque', 'euismod', 'curabitur', 'lectus',
//     'elementum', 'tempor', 'risus', 'cras'
// ]; //180 words
// console.log(Math.floor(Math.random()*37));
// console.log(Math.floor(Math.random()*101));
// const alphabet = "abcdefghijklmnñopqrstuvwxyz          ";
// let result = '';

// const writeRandomStr = function() {
//     const alphabet = "abcdefghijklmnnopqrstuvwxyz         .";
//     const randomStrSize = Math.floor(Math.random()*1000);
//     let result = '';
//     for(let i = 0; i <= randomStrSize; i++) {
//         const randomSymbol = alphabet[Math.floor(Math.random()*37)];
//         if(randomSymbol === "." && result.length === 0 || randomSymbol === " " && result.length === 0 || randomSymbol === " " && result[result.length-1] === " " || randomSymbol === "." && result[result.length-2] === "."){
//             result;
//         }else if(result.length === 0){
//             result += randomSymbol.toUpperCase();
//         }else if(randomSymbol === "." && result[result.length-1] === " "){
//             result[result.length-1] = ".";
//         } else if(result[result.length-2] === ".") {
//             result += randomSymbol.toUpperCase();
//         } else if(randomSymbol === ".") {
//             result += randomSymbol +" ";
//         } else if(i === randomStrSize) {
//             result += ".";
//         } else{
//             result += randomSymbol; 
//         }
//     }
//     return result;
// }
// // console.log(1);
// console.log(writeRandomStr());


//------------------------------

// ШИБЕНИЦЯ
const words = ['характер', 'хаос', 'збудження', 'кілт', 'прозорість', 'шантаж', 'філолог', 'кетчуп', 'відвага', 'звичка', 'педант', 'надія', 'свідок', 'бізнес', 'хамелеон', 'флірт', 'правило', 'розвідка', 'камасутра', 'фестиваль', 'харизма', 'інстинкт', 'інвестор', 'шейх', 'генерал', 'лібідо', 'реклама', 'мафія', 'амбіції', 'сарказм', 'стартап', 'розвага', 'світанок', 'крокодил', 'заліковка', 'влада', 'запізнення', 'дежавю', 'незнайомець', 'інтернет', 'затишок', 'продюсер', 'кентавр', 'єнот', 'осінь', 'скрипіння', 'темперамент', 'підробка', 'натхнення', 'анекдот', 'видавництво', 'драма', 'перекладач', 'абревіатура', 'звіт', 'акція', 'абонемент', 'солярій', 'тир', 'пелікан', 'вікторина', 'гормон', 'бестселер', 'поліглот', 'мутант', 'альбінос', 'унція', 'діаспора', 'прем', 'єра', 'розгадка', 'зрада', 'кислота', 'артерія', 'система', 'жестикуляція', 'радіо', 'пранк', 'хіп-хоп', 'гном', 'голод', 'материк', 'слово', 'запчастина', 'штатив', 'оренда', 'монархія', 'підписник', 'рейтинг', 'інстаграм', 'оскар', 'провокація', 'тікток', 'газ', 'суперздібність', 'секта', 'логіка', 'корупція'];

const randomWord = words[Math.floor(Math.random()*101)];

console.log(randomWord);
console.log(randomWord.length);
let result = [];
for(let i = 0; i < randomWord.length; i++){
    result.push("_");
}

const resultContainer = document.querySelector(".result .yellow")
resultContainer.innerHTML = `${result.join(" ")}`;

const inputConteiner = document.querySelector(".input__letter");
const inputButton = document.querySelector(".input__button");
inputConteiner.focus();

const checkLetter = function() {
    const checkingLetter = inputConteiner.value;
    for(let i = 0; i < randomWord.length; i++) {
        if(randomWord[i] === checkingLetter){
            result[i] = checkingLetter;
        }
    }
    resultContainer.innerHTML = result.join(" ");
    inputConteiner.value = "";   
    
    inputConteiner.focus();
    
    if(!result.join(" ").includes("_")) {
        alert("Вітаю!");
    }
}

inputButton.addEventListener("click", checkLetter);
