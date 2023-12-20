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

new Promise(function (resolve, reject) {
    // Ask the user for number using prompt()
    const number = prompt("Enter a number");
    // if the user did not enter a number - we call reject()
    // if the user entered a number, we call resolve(number)
    if(typeof +number === "number" && !isNaN(number)) {
         resolve(number);
    } 
    else {
         reject();
    }
 }).catch(function (error) {
    return new Promise(function (resolve, reject) {
        // Ask the user for a number until he enters it
        let number;
        while (isNaN(number)){
            number = prompt("Enter a number");
        }  
        // after entering the number - call resolve(number)
        resolve(number);
    });
 }).then(function (result) {
    // Print  number to the console
    console.log(result);
 });