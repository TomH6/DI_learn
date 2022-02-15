// When you click the Send button, send the data as JSON.

function handleSubmit(e) {
    e.preventDefault();
    let data = new FormData(e.target);
    let value = Object.fromEntries(data.entries());
    console.log(JSON.stringify(value))
}

let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);