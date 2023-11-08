//Task 1:

function factuallyTrueStatement() {
    console.log('Dogs Are Cute.');
}

factuallyTrueStatement();

//Tasks 2 & 3:

function combineName(firstName, lastName) {
    return firstName + ' ' + lastName;
}

const fullName = combineName('Edward', 'Leavy');

console.log(fullName);

//Task 4:

temperature = -5;

function advice (temp) {
    if (temp < 50 && temp >= 30) {
        console.log('Wear a coat.');
    }
    else if (temp < 30 && temp >= 0) {
        console.log('Wear a coat and a hat.');
    }
    else if (temp < 0) {
        console.log('Stay Inside.');
    }
    else {
        console.log('Just pants and a vest is fine.');
    }
}

advice(temperature);