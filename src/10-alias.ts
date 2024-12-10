(() => {
    type UserId = string | number | boolean;
    let userId: UserId;

    function greeting (userId: UserId){
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }

    //literal types
    type Sizes = 'S' | 'M' | 'L' | 'XL';
    let shirtSize: Sizes;
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';

    function greeting2(userId: UserId, size: Sizes) {
        if (typeof userId === 'string') {
            console.log(`string ${userId.toLowerCase()}`);
        }
    }
    greeting2(1111, 'M');
    greeting2('1111', 'XL');
    greeting2(1111, 'S');
    greeting2('1111', 'L');
    greeting2('1111', 'XL');
    greeting2('11211', 'M');
    
})();
