//
//  1 задание
//
function treug (length) {
    var line = "";
    for (var i = 1; i <= length; i++) {
        for (var b = 0; b < i; b++) {
            line += "*";
        }
        line += '\n';
    }
    return line;
}
console.log(treug(7));

//
//  2 задание
//

for (var i = 1; i <= 100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {    // Если число делится на 3 и на 5
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");    // Если число делится на 3
    } else if (i % 5 === 0) {   // Если число делится на 5
        console.log("Buzz");
    } else
        console.log(i);
}

//
// 3 Задание
//
function countChar (str, letter)
{
    var counter = 0;
    str = str.toLowerCase()
    letter = letter.toLowerCase()
    for (var position = 0; position < str.length; position++)
    {
        if (str.charAt(position) === letter)
        {
            counter += 1;
        }
    }
    return counter;
}
console.log(countChar("Abracadabra", "r"));
console.log(countChar("Hello world", "l"));

//
// 4 задание
//


function CapitalizeString(text){
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}
console.log(CapitalizeString("lEoN"));
console.log(CapitalizeString("LiGaI"));

