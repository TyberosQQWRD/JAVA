"use strict"
let time
console.log("Переменная создана. Значение:", time)
const speed = prompt("Введите скорость КМ/ч")
speed = Number(speed)
const distance = prompt("Введите расстояние КМ")
distance = Number(distance)
console.log("Поездка началась.")
console.log(`осталось минут: ${(distance/speed)*60}`)
console.log(`Скорость:  ${speed} км/ч`)
console.log(`расстояние ${distance} км.`)


