let PurchaseAmount = +prompt("Количество покупок")
function isVip(PurchaseAmount) {
    if (PurchaseAmount >= 20) { 
        return true;
    }
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

let Name = prompt("Выше имя")
function formatPrice(Name, total) {
    return `${Name} ", стоимость заказа" ${result3} "₽"`
}

console.log(formatPrice(Name, getTotalPrice(isVip(PurchaseAmount), total)))

