//
// VAR !== LET !== CONST
//
// console.log('\n**\n** var !== let !== const\n**\n');

// for (var i = 0; i < 10; ++i) {
//     console.log(i);
// }
// console.log(i);

//
// SUCRES SYNTAXIQUES
//

// 1
    // console.log('\n**\n** Sucres Syntaxiques\n**\n');

    // const array = ['a', 'b', 'c', 'd', 'e'];
    // for(let i = 0; i < array.length; ++i) {
    //     console.log(array[i]);
    // }
    // comment reduire la taille? => map;
    // array.map(function(el) {
    //     console.log(el);
    // });

// 2
    // const objTest = {a: 1, b:2, c: 3};
    // const objFunc = (myObj) => {
    //     const a = myObj.a;
    //     const b = myObj.b;
    //     const c = myObj.c;
    //     // comment reduire la taille? destructurer
    //     console.log(a, b, c)
    // };
    // objFunc(objTest);

//
// PROGRAMMATION FONCTIONELLE
//
// console.log('\n**\n** Programmation fonctionelle\n**\n');

// 1
    // const array = ['a', 'a', 'a', 'd', 'e'];
    // // filter par !== 'a' ; concat 'z';
    // array.map(el => console.log(el));

// 2
    // const x = {
    //     val: 2
    // };
    // const x1 = () => x.val += 1;
    // const x2 = () => x.val *= 2;

    // x1();
    // x2();
    // console.log(x.val);

// 3
    // // Le meme example a l'envers
    // const y = {
    //     val: 2
    // };

    // const y1 = () => y.val += 1;
    // const y2 = () => y.val *= 2;

    // y2();
    // y1();
    // console.log(y.val);





    ////// notes
    /// presenter les deux en js: oriente objet vs prog functionelle
    /// prototypage vs classes (pas bien)
    /// pour socket io faire un repo git et naviguer entre les commits pour montrer l'evol du code ou des fichiers differents
    /// bien appuyer sur l'asynchrone (implicit vs cree a a main en cpp)
    /// app natives desktop en node avec electron