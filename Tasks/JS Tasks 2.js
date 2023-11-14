//Task 1

function percentCalculator(number, percentage) {
    const result = number * (percentage/100);
    return result;
}

console.log(percentCalculator(135, 30));

//Task 2

function drinkOrder(size, drink) {
    let drinkLabel;
    switch (drink) {
      case 'lemon':
        drinkLabel = 'lemonade';
        break;
      case 'orange':
        drinkLabel = 'orangeade';
        break;
      default:
        drinkLabel = drink;
        break;
    }
    
    return `You have ordered a ${size} ${drinkLabel}.`;
}
  
console.log(drinkOrder('medium', 'orange'));

//Task 3

function calculator(number1, number2, operator) {
    let value;
    switch(operator) {
        case 'add':
            value = number1 + number2;
            break;
        case 'subtract':
            value = number1 - number2;
            break;
        case 'multiply':
            value = number1 * number2;
            break;
        case 'divide':
            value = number1 / number2;
            break;
        default:
            value = undefined;
            break;
    }
    return value;
}

console.log(calculator(235, 53, 'subtract'));