// Напишите программу, которая будет определять является ли в переменной число зимним месяцем.


const month = 5;

switch (month) {
    case 12:
        console.log('December')
        break
    case 1:
        console.log('January')
        break
    case 2:
        console.log('February')
        break
    default:
        console.log("It's not a winter month")
}