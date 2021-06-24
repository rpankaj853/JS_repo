const num = prompt('Enter the number');

num = parseInt(num)
var n1 = 0, n2 = 1, next;



for (let i = 1; i <= num; i++) {
    console.log(n1);
    next = n1 + n2;
    n1 = n2;
