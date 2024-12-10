(() => {
    let userId: string | number;
    userId = 1212;
    userId = 'asas';
    console.log('hello ' + userId);

    function hello(id: string | number) {
        if (typeof id === 'string') {
            console.log(`string ${id.toLowerCase()}`);
        } else {
            console.log(`number ${id.toFixed()}`);
        }
    }
    hello('ASD');
    hello(123.23);
    
    
    
})();
