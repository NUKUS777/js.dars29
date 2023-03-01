// 
// const number=+prompt("raqamni kiriting")
// switch (number%2) {
//     case 0:
//         console.log("juft")
//         break;
//     case 1:
//         console.log("toq")
//         break
//     default:
//         break;
// }
// const population=+prompt("aholi")


// const pop=population>34.23 ?"ortachadam yuqori" : "ortachadan past";
// console.log(pop)
// const re=(birth)=>2023-birth
// console.log(re(2004))
// function bool(params) {
//     if(params%2===0){
//         return true
//     }
//     else {
//         return false
//     }
// }
// console.log(bool(12))
// 1 masala
const number1_1=+prompt("birinchi guruh birinchi raqam")
const number2_1=+prompt("birinchi guruh ikkinchi raqam")
const number3_1=+prompt("birinchi guruh uchinchi raqam")
const number1_2=+prompt("ikkinchi guruh birinchi raqam")
const number2_2=+prompt("ikkinchi guruh ikkinchi raqam")
const number3_2=+prompt("ikkinchi guruh uchinchi raqam")
result1=(number1_1+number2_1+number3_1)/3
result2=(number1_2+number2_2+number3_2)/3
function  calAverage(num1,num2,num3) {
    return (num1+num2+num3)/3
}
function victory(res1,res2) {
    if(res1>res2){
        return "birinchi guruh"
    }
    else if(res1<res2){
        return "ikkinchi guruh"
    }
    else {
        return "uchinchi guruh"
    }
}
console.log(calAverage(number1_1,number2_1,number3_1))
console.log(calAverage(number1_2,number2_2,number3_2))
console.log(victory(result1,result2))
//2 masala
const inputValue=+prompt("Studentlar soni")
function percentageofStudent(value) {
    return (value/2500)*100
}
console.log(percentageofStudent(inputValue))
