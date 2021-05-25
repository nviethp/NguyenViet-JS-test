let names = ['abc', 'dadasd', 'fwfasf', 'dfddv', 'vvwfas']
let para = document.querySelector('p');

function random(min, max) {
    const num = Math.floor(Math.random() * (max - min)) + min;
    return num;
}

function chooseName(array) {
    let choose = array[random(0, array.length)];
    return choose;
}
para.textContent = chooseName(names);