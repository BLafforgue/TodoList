/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

const checkDone = document.getElementById('filter_todo_done')

const lineDone = document.querySelectorAll("#line");
lineDone.forEach(element => {
    const id = element.querySelector('#id').textContent
    let done = element.querySelector('#done')
    element.addEventListener('click', function () {
        let url = new URL("http://127.0.0.1:8000/todo/update/" + id);
        fetch(url, {
            method: "GET"
        }).then(function (r) {
            return r.json();
        }).then(function (value) {
            console.log(value)
            if (value.newValue === true) {
                done.textContent = 'Fait';
            } else {
                done.textContent = 'A faire';
            }
        })
    });
})

let search = document.querySelector('#search');
search.addEventListener('input', function () {
    let searchValue = search.value
    fetch('http://127.0.0.1:8000/todo/search', {
        method: 'POST',
        body: JSON.stringify({terms: searchValue})
    }).then(function (r) {
        return r.json();
    }).then(function (value) {
        console.log(value)
    })

})