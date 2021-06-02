/*
const biggerThan = function (number1) {
    const checkNumber = number1
    if (number1 >100) {
        return number1;
    }
    return "Number is under 100.";
}

const result = biggerThan (102);
console.log (result);
*/


//checking if a number is big
/*
const biggerThan = function (number1) {
    const checkNumber = number1
    if (number1 >100) {
        return "true";
    }
    return "false";
}

const result = biggerThan (102);
console.log (result);
*/


//Bouncer at a club
/*
const checkEntrance = function (age, currentNumber) {
    
    if (age < 18) {
        return "This is a club for adults.";
    }
    else if (currentNumber > 100) {
        return "It's too busy now, come back later.";
    }

    else {
        return "Come in.";
    }
}

// voorbeeld minimum leeftijd 18 (age), als hoeveelste binnen = 31 ();
const resultEntrance = checkEntrance ([18, 31]);
console.log (resultEntrance);
*/



// Calculating the average
const gemiddelde = function (nummer1, nummer2, nummer3, nummer4, nummer5) {
    const bereken = (nummer1 + nummer2 + nummer3 + nummer4 + nummer5)/5;
    return Math.round (bereken);
}

const gemiddeldeResult = gemiddelde ( 17, 96, 49, 46, 10 ); 
console.log (gemiddeldeResult);