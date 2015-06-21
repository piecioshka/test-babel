// Let scoping (ES6)

let foo = () => {
    var bar = 'baz';

    var overwrite = () => {
        console.assert(typeof bar === 'undefined', 'In this scope bar is not exists');
        let bar = 'bax';
        console.log(bar);
        console.assert(bar === 'bax');
    };

    overwrite();

    console.log(bar);
    console.assert(bar === 'baz');
};

foo();
