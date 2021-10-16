// exo1
// let nbr = prompt("enter a number between 1 and 10 please")
// switch(nbr){
//     case "1":
//         alert("this number is odd");
//         break;
//     case "2":
//         alert("this number is even");
//         break;
//     case "3":
//         alert("this number is odd");
//         break;
//     case "4":
//         alert("this number is even");
//         break;
//     case "5":
//         alert("this number is odd");
//         break;
//     case "6":
//         alert("this number is even");
//         break;
//     case "7":
//         alert("this number is odd");
//         break;
//     case "8":
//         alert("this number is even");
//         break;
//     case "9":
//         alert("this number is odd");
//         break;
//     case "10":
//         alert("this number is even");
//         break;
// }
// correction
// let nbr = Number(prompt("donne moi un nombre?"));
// switch(nbr % 2 == 0){
//     case true:
//         console.log("pair");
//         break;
//     default:
//         console.log("impair");
//         break;
// }
// comme pour l'exercice 1 faudra mettre un isNaN si jamais qlq met un mot ou une suite de caracter au lieu d'un chiffre/nombre
console.log("______");
// Exo2
// let month = prompt(" please enter a number between 1 and 12");

// switch(month){
//     case "1":
//         alert("You are in January");
//         break;
//     case "2":
//         alert("You are in February");
//         break;
//     case "3":
//         alert("You are in March");
//         break;
//     case "4":
//         alert("You are in April");
//         break;
//     case "5":
//         alert("You are in May");
//         break;
//     case "6":
//         alert("You are in June");
//         break;
//     case "7":
//         alert("You are in July");
//         break;
//     case "8":
//         alert("You are in August");
//         break;
//     case "9":
//         alert("You are in September");
//         break;
//     case "10":
//         alert("You are in October");
//         break;
//     case "11":
//         alert("You are in November");
//         break;
//     case "12":
//         alert("You are in December");
//         break;
//     default:
//         alert("Error 404 not found")
// }

// exemple de boucle
//  point de depart  condition    incrementation index +1
//       |            |           |
// for (let index = 0; index < 3; index ++){
//     console.log("Bonjour");
//     console.log(index);
// }

let monTab = ["ayhan", "elias"]
// for (let i = 0; i < monTab.length; i ++){

//     console.log(monTab[1]);
// }
// el =element
monTab.forEach(el, i =>{
    console.log(el , i);
})