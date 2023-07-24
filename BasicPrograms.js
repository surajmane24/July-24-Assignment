// Numeber is a prime number or not
let primeNumbers = (number) => {
    let mid = number/2
    let i
    let flag = 0
    if(number == 0 || number == 1){
        console.log("Number is not prime number.");
    }
    else{
        for(i=2; i<= mid; i++){
            if(number%2 == 0){
                console.log("Number is not prime number.");
                flag = 1
            }
        }
        if(flag == 0 ){
            console.log("Given Number is a prime Number...");
        }
    }
}
console.log(primeNumbers(5));

//  sum of fibonaci series upto n
function fibonaciSeries(number){
    let a=0
    let b=1
    let nextTerm
console.log(a+ ", \n" + b + ", \n");
    for(let i=2; i<number; i++){
        nextTerm = a+b
        a = b
        b = nextTerm
        console.log(nextTerm+", ");

    }
}
console.log(fibonaciSeries(7));

//   count of even, odd and zero
let countEvenOddZero = (value) => {
    let zeroCount = 0
    let evenCount = 0
    let oddCount = 0
    let number = value
    while(number>0){
        if(number%10 == 0){
            zeroCount +=1
        }
        else if(number%2 == 0){
            evenCount += 1
        }
        else{
            oddCount += 1
        }

        number = Math.floor(number/10)
    }
    console.log("Total Zero's = "+ zeroCount)
    console.log("Total Even's = "+ evenCount)
    console.log("Total Odd's = "+ oddCount)
}
console.log(countEvenOddZero(400777));