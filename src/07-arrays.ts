(() => {
    let prices = [1,2,3,4,5,6,7,4,43, 'hi', true];
    prices.push(123);
    prices.push(268);
    prices.push(263);

    let products = [1,2,3,4,5,6,7,4,43, 'hi', true];

    products.push(true);

    let mixed: (number | string | boolean | Object)[] = ['hi', true];
    mixed.push(12);
    mixed.push('as');

    mixed.push(true);
    mixed.push({});
    mixed.push([]);
    
    let numbers = [1,2,3,4,5,6,7,4,43];
    let newNumbers = numbers.map( i => i * 2);
    console.log(newNumbers);
    console.log(numbers);
    
})();
