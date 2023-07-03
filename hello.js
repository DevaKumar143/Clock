let string = "";
let button = document.querySelectorAll('.favorite style');
Array.from(button).forEach((button) => {
    button.addEventListener('click', (e) => {
        console.log(e.target)
    })
})