const b1 = true;
const b2 = false;

if (b1 && b2) {
    console.log('if worked');
} else {
    console.log('else worked');
}

console.log('-------------------------------');
if (b1 && b2) {
    console.log('if worked');
} else if (b1 || b2) {
    console.log('else if worked');
} else {
    console.log('else worked');
}

console.log('-------------------------------');
console.log(b1 && b2 ? 'if worked' : 'else worked');

const a = -1;
const b = a > 0 ? 'positive' : 'negative';
console.log(b);
