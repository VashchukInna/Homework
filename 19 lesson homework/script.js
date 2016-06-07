/**
 * Created by InnaVaschuk on 06.06.2016.
 */
//1 завдання
var student = "Inna";
console.log(student);
student = "Vashchuk";
console.log(student);
//2 завдання
result = prompt("Введите свое имя:", '');
alert("Добро пожаловать, " + result + "!");
//3 завдання
var approve = confirm("Вы и правда хотите загрузить эту страницу?");
alert(approve);
//4 завдання
var r = '9' + 0;
console.log("r = '9' + 0; value: " + r + " type: " + typeof(r));
var r = 9 + '0';
console.log("r = 9 + '0'; value: " + r + " type: " + typeof(r));
var r = 4 + 9;
console.log("r = 4 + 9; value: " + r + " type: " + typeof(r));
var r = null + 7;
console.log("r = null + 7; value: " + r + " type: " + typeof(r));
var r = '6' + null;
console.log("r = '6' + null; value: " + r + " type: " + typeof(r));
//5 завдання
console.log(+'9' + 9); //відповідь: 18
//6 завдання
var a = '4' == 4; //оператор рівності, зрівнює тільки по значенню
console.log(a); //true
var b = '4' === 4; //оператор строгої рівності, зрівнює по значенню і по типу даних
console.log(b); //false
//7 завдання
console.log(2 / 3 + 1 + 1 / 3);//1.9999999999999998 - результат не заокруглює
console.log(2 / 3 + 1 + 1 / 3 == 2); //false, 1.9999999999999998 != 2
//8 завдання
var obj = {},
    r = 0;

obj.prop = 9;
r = obj.prop;
delete obj.prop;

console.log(obj.prop, r); //відповідь: undefined 9