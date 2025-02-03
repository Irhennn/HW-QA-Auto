function playWithVars() {
    const a = 1;
    let b = 2;
    b = 3;
    let c = 'test string';

    console.log(a, b, c);
    console.log(a * b + c);

    const booleanVar = true;
    const undefinedVar = 'undefined';

    console.log(booleanVar, undefinedVar);
    console.log(booleanVar + undefinedVar);

    const obj = {
        key: 'value',
        key2: 'value2'
    };

    console.log(obj);
}

playWithVars();
