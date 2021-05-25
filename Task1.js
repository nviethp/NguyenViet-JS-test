let names = ['abc', 'dadasd', 'fwfasf', 'dfddv', 'vvwfas']

let para = document.querySelector('p');

function chooseName() {
    let randomNumber = Math.floor(Math.random() * names.length);
    let chooseName = names[randomNumber];
    para.innerHTML = chooseName
}

chooseName()