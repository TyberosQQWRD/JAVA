/**
 * 
 * @param {any} name 
 * @param {number} age 
 * @returns 
 */

function hello(name, age) {
    typeof name // "any"
    typeof age // "number"
  return `Привет, ${name}! Твой возраст: ${age}`;
}

console.log(hello("Алиса", 18));
console.log(hello("Виктор", 21));
console.log(hello("Генадий", 42));