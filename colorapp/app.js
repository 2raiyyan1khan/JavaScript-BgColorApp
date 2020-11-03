let button = document.querySelector('.btn-outline-dark');
let color = ['red', 'green', 'lightblue', 'purple', 'yellow', 'AliceBlue', 'AntiqueWhite', 'BlueViolet', 'DarkSlateGrey'];


button.addEventListener('click', changeBackground);

function changeBackground() {
    let indexColor = Math.floor(Math.random() * color.length);
    document.body.style.backgroundColor = color[indexColor];
}