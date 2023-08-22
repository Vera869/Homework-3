 //Задание 1
 
 let password = 'простой пароль';
 let aske = String(prompt("Введите пароль"));
 aske.toLowerCase();
 if (password === aske) {
    alert("Пароль введен верно");
 } else {
    alert("Пароль введен неправильно")
 }                                          
  //Задание 2

 let c = Number(prompt("Введите число"));   //проверить при c равной 0, 10, −3, 2.
 c = (c>0 && c<10) ? console.log("Верно"): console.log("Неверно"); 

 //Задание 3  

 let d = Number(prompt("Введите число"));
 let e = Number(prompt("Введите число"));
 if (d>100 || e>100) {
    console.log("Верно");
 } else {
    console.log("Неверно");
 }                

 //Задание 4   

 let a = '2';
 let b = '3';
 alert(Number(a) + Number(b)); 

 //Задание 5   

 let monthNumber = Number(prompt("Укажите номер месяца"));
 switch (monthNumber) {
   case 1: case 2: case 12:
     alert("Зимушка-зима");
     break;
   case 3: case 4: case 5:
     alert("Весна-красна");
     break;
   case 6: case 7: case 8:
     alert("Лето!!!");
     break;   
   case 9: case 10: case 11:
     alert("Осень- прекрасная пора, очей очарованье");
     break;
   default:
     alert("нет такого месяца");
     break;
 }                       
 
 //Дополнительная практика
 
 //Задание 7

 let variable = Number(prompt("Пожалуйста, введите любое число"));
 let division = variable % 2;
 let result = division===0 ? alert("Число четное"): alert("Число нечетное"); 
 
 //Задание 8

 let clientOS = Number(prompt("Если Ваша  операционная система ios-введите 0, если Androin-введите 1"))
 let answer = clientOS === 0 ? console.log("Установите версию приложения для iOS по ссылке") : console.log("Установите версию приложения для Android по ссылке");
 //Задание 9
 
 let clientDeviceYear = Number(prompt("Укажите год выпуска Вашего устройства"));
 
 if (clientOS === 0) {
    if (clientDeviceYear>=2015) {
       console.log("Установите версию приложения для iOS по ссылке");
    }
    else {
       console.log("Установите облегченную версию приложения для iOS по ссылке");
    }
 } else {
    if (clientDeviceYear>=2015) {
       console.log("Установите версию приложения для Android по ссылке");
    } else {
       console.log("Установите облегченную версию приложения для Android по ссылке");
    } 
 }
