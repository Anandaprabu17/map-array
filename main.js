let numbers = [23, 987, 379, 21, 98];
y = numbers.map(function (number) {
    var a = 0;
    while (number > 0) {
        b = number % 10;
        a = (a * 10) + b;
        number = parseInt(number / 10);
    }
    return a;
})
document.write("Reverse of the numbers in array" + " " + y);