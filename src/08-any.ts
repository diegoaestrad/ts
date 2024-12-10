(() => {
    let dinamicVar: any;
    dinamicVar = 100;
    dinamicVar = null;

    dinamicVar = {};
    dinamicVar = '';

    dinamicVar = 'hELlo';
    const rta = (dinamicVar as string).toLowerCase();
    console.log(rta);

    dinamicVar = 1212;
    const rta2 = (<number>dinamicVar).toFixed();
    console.log(rta2);

    
})();
