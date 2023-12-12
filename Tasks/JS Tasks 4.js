//Task 1

let shoppingCart = [
    { name: "loaf of bread", type: "food", quantity: 1, price: 0.85 },
    { name: "multipack beans", type: "food", quantity: 1, price: 1 },
    { name: "mushrooms", type: "food", quantity: 10, price: 0.1 },
    { name: "can of beer", type: "alcohol", quantity: 4, price: 1.1 },
    { name: "prosecco", type: "alcohol", quantity: 1, price: 8.99 },
    { name: "steak", type: "food", quantity: 2, price: 3.99 },
    { name: "blue cheese", type: "food", quantity: 1, price: 2.99 },
    { name: "candles", type: "home", quantity: 3, price: 1.99 },
    { name: "cheesecake", type: "food", quantity: 1, price: 4.99 },
    { name: "onions", type: "food", quantity: 3, price: 0.4 },
  ];

function priceCalculator (cart) {
    let totalPrice = 0;
    for (let item of cart) {
        let itemPrice = item.price * item.quantity;
        totalPrice += itemPrice;
    }
    return totalPrice;
}

console.log(priceCalculator(shoppingCart));

//Task 2

function priceCalculator2 (cart) {
    let totalPrice = 0;
    for (let item of cart) {
        let itemPrice
        if (item.type === "food") {
            itemPrice = item.price * item.quantity * 0.8;
        }
        else {
            itemPrice = item.price * item.quantity;
        }
        totalPrice += itemPrice;
    }
    return totalPrice;
}

console.log(priceCalculator2(shoppingCart));

//Task 3

function priceCalculator3 (cart, discountAmount, type) {
    let totalPrice = 0;
    let discount = 1 - (discountAmount/100);
    for (let item of cart) {
        let itemPrice
        if (type === item.type || type === "any") {
            itemPrice = item.price * item.quantity * discount;
        }
        else {
            itemPrice = item.price * item.quantity;
        }
        totalPrice += itemPrice;
    }
    return totalPrice;
}

console.log(priceCalculator3(shoppingCart, 20, "food"));

//Task 3 Part 2

function getItemsByPrice (cart, lowPrice, highPrice, quantity) {
    let items = [];
    let currentPrice;
    for (let item of cart) {
        if (quantity === true) {
            currentPrice = item.price * item.quantity;
        }
        else {
            currentPrice = item.price;
        }
        if (currentPrice >= lowPrice && currentPrice <= highPrice) {
            items.push(item);
        }
    }
    return items;
}

console.log(getItemsByPrice(shoppingCart, 1, 6, true));

//Task 4

let array = [1, 4, 7, 2, 9, 17, 3, 9, 11, 16, 5]

function arrayOperations (input, type) {
    switch(type) {
        case "mean":
            let total = 0;
            for (let i of input) {
                total += i;
            }
            return total/(input.length);
            break;
        case "median":
            const sortedNumbers = input.sort((a, b) => a - b);
            const mid = Math.floor(sortedNumbers.length / 2);
            return sortedNumbers.length % 2 !== 0
            ? sortedNumbers[mid]
            : (sortedNumbers[mid - 1] + sortedNumbers[mid]) / 2;
            break;
        case "mode":
            const frequency = {};
            let maxFreq = 0;
            input.forEach(number => {
            frequency[number] = (frequency[number] || 0) + 1;
            maxFreq = Math.max(maxFreq, frequency[number]);
            });
            return Object.keys(frequency).filter(number => frequency[number] === maxFreq).map(Number);
            break;
    }
}

console.log(arrayOperations(array, "mean"));