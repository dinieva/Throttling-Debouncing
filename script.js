const input = document.querySelector('input');
const paragrath = document.querySelector('p');

const debounce = (fn, ms) => {
    let timeout;
    return function () {
        const func1 = () => { fn.apply(this, arguments) };

        clearTimeout(timeout);

        timeout = setTimeout(func1, ms);
    };
};

function showInputText(e) {
    paragrath.innerHTML = e.target.value;
}

showInputText = debounce(showInputText, 300);

input.addEventListener('keyup', showInputText);