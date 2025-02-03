const a = true;
const b = false;

console.log(a && b); //if both true - result last true, any else - false
console.log(a || b); //if true exist - result first true, then second etc
console.log(!a); //first convert to boolean(true), then apply NOT

const c = null;
const d = null;

const e = c ?? d ?? 4; // takes first not null

console.log(e);
