"use strict"
var time
console.log("Переменная создана. Значение:", time)
let speed = Number(prompt("Введите скорость КМ/ч"))
const distance = Number(prompt("Введите расстояние КМ"))
console.log("Поездка началась.")
console.log(`осталось минут: ${(distance/speed)*60}`)
console.log(`Скорость:  ${speed} км/ч`)
console.log(`расстояние ${distance} км.`)


