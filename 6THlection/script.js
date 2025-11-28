let PurchaseAmount = +prompt("Количество покупок")
function isVip(PurchaseAmount) {
    if (PurchaseAmount >= 20){ 
        return true}
 return false;
}
let result = isVip(PurchaseAmount)
console.log(result)
let total = +prompt("Стоимость заказа")
function getDiscount(result, total) {
    if(isVip(PurchaseAmount) === true && total >= 1000) {
        return total - total * 0.9;
    }
    return 0;
}

let discount = getDiscount(isVip(PurchaseAmount), total)
console.log(getDiscount(isVip(PurchaseAmount), total))

function getTotalPrice(result, total) {
    if (result === true && total > 0) {
        return total - discount;
    }
    return total
}
let result3 = getTotalPrice(isVip(PurchaseAmount), total)
console.log(getTotalPrice(isVip(PurchaseAmount), total))

let userName = prompt("Выше имя")
function formatPrice(userName, total) {
    return `${userName} ", стоимость заказа" ${result3} "₽"`
}

function initDiscountCalculator () {
    // 6.1 создайте пременную currentTotal со значением 1500
    
    // 6.2 создайте переменную userData в которую положите 
    // результат работы функции getUserData
  
    // 6.3 создайте переменную discount в которую положите 
    // результат работы функции getDiscount
    // ЧТОБЫ ПРАВИЛЬНО ДОСТАТЬ ПОЛЕ purchase ИЗ userData
    // нужно обратиться к нему так: userData.purchase
    // эта запись и будет первым аргументов функции getDiscount
  
    // 6.4 создайте переменную total в которую положите 
    // результат работы функции getTotalPrice
  
    // 6.5 создайте переменную result в которую положите 
    // результат работы функции formatPrice
    // первый аргумент - userData.userName
    
    // 6.6 верните result из функции
  }
  
  const resultPrice = initDiscountCalculator()
  
  console.log(resultPrice) // "John, стоимость заказа: 1350 ₽" 


console.log(BigBoy(PurchaseAmount, result, total, discount, result3))

