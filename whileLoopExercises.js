// While Loops
//      - are used when we don't know how many iterations we need.
//      - when we want to keep looping until something happens.

// Exercises;

// 1. Print numbers 10 to 1.
{
    let num = 10;
    while (num !== 0) {
        console.log(num);
        num--;
    }
}

// 2. Sum the numbers 1 to 100.
{   
    let total = 0;
    let num = 100;
    while (num !== 0) {
        total += num;
        num--;
    }
    console.log(total);
}

// 3. Print only even numbers from 0 to 20 using while.
{   
    let num = 0;
    while (num <= 20) {
        if (num % 2 === 0) 
            console.log(num);
        num++;
    }
}

// 4. Reverse the string
{
    let str = "hello";s
    let reversed = "";

    let index = str.length - 1;
    while (index >= 0) {
        reversed += str[index];
        index--;
    }
    console.log(reversed);
}