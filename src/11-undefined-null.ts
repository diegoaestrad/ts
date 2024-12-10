(() => {
    let myNumber : number;
    let myString : string;

    let myNull : null = null;
    let myUndefined : undefined = undefined;
    let myNumberOrString : number | string;
    
    let myVoid : void = undefined;
    function hi(name: string | null) {
        let hello = 'hola ';
        if (name) {
            hello += name;
        } else {
            hello += 'nobody';
        }
        console.log(hello);
    }
    function hiV2(name: string | null) {
        let hello = 'hola ';
        hello += name?.toLowerCase() || 'nobody';
        console.log(hello);
    }
    hi('Nicolas');
    hi(null);
    hiV2('Nicolas');
    hiV2(null);
    console.log(myNull);
    console.log(myUndefined);
    console.log(myNumber);
    console.log(myString);
    console.log(myNumberOrString);
    
    
})();
