const a = 'bfg';
switch (a) {
    case 'hello': {
        console.log('say Hello');
        break;
    }
    case 'bye': {
        console.log('say Bye');
        break;
    }
    default: { //in case if a=not hello and not bye, than will be default - say Something
        console.log('say Something');
    }
}
