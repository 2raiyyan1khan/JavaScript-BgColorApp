let button = document.querySelector('.btn-outline-dark');
let colorCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];


button.addEventListener('click', changeBackground);

function changeBackground() {

    let hexCode = '';
    for (let i = 0; i < 6; i++) {
        let indexColor = Math.floor(Math.random() * colorCode.length);
        hexCode += colorCode[indexColor];
    }

    let element = document.querySelector('.card-title');
    element.textContent = `#${hexCode}`;
    document.body.style.backgroundColor = `#${hexCode}`;
}



