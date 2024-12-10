(() => {
    let productTitle = 'My amazing product';
    // productTitle = null; // Invalid if `strictNullChecks` is enabled
    // productTitle = () => ()); // Invalid assignment
    // productTitle = 123; // Invalid assignment
    productTitle = 'My amazing product changed';
    console.log('productTitle', productTitle);

    const productDescription = "I'm a product";
    console.log('productDescription', productDescription);

    let myProductPrice = 100;
    let isNew = false; // Removed TypeScript-specific type annotation

    const summary = `
        title: ${productTitle}
        description: ${productDescription}
        price: ${myProductPrice}
        isNew: ${isNew}
    `; // Used backticks for template literals

    console.log(summary);
})();
