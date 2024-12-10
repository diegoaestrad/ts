(() => {
    let isEnabled = true;
    isEnabled = false;

    let isNew: boolean = false;
    console.log('isNew', isNew);
    isNew = true;
    console.log('isNew', isNew);

    const random = Math.random();
    console.log('random', random);
    let price = 123;
    price = 12;
    console.log('price', price);

    isNew = random >= 0.5 ? 'true' : false;
    console.log('isNew', isNew);

    const myBoolean: boolean = true;



    


})();
