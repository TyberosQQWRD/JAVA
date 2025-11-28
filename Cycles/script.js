const isPrime = (num) => {
    if (num < 2) {
        return false
    }
    
    let i = 2
    while (i < Math.sqrt(num)){
        if (num % i === 0){
            return false
        }
        i = i + 1
    }

    return true
}

console.log(isPrime(14))