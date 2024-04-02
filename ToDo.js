let userInput = document.getElementById('userInput');
let input = document.querySelector('input[type="text"]');
let list = document.getElementById('list');
let stats = document.querySelector('.stats')
let IDCounter = 0;

userInput.addEventListener('submit', (event) => {
    event.preventDefault();
    addTarea();
});

function addTarea() {
    IDCounter++;
    let valueInput = input.value;
    list.innerHTML += `
    <div class="tarea" id="${IDCounter}">
        <label>
            <input type="checkbox"/>
                <span>${valueInput}</span>
            </label>
        <img src="delete.png" class="closeBtn">
    </div>
    `
    input.value = '';
    actualizar();
};

list.addEventListener('click', (event) => {
    if (event.srcElement.nodeName == "INPUT") {
        actualizar();
    } else if (event.srcElement.nodeName == "IMG") {
        borrar(event.srcElement.parentNode.id);
    }
});

function actualizar() {
    let tareas = list.querySelectorAll('.tarea');
    let uso = list.querySelectorAll('input[type="checkbox"]:checked');
    let check = uso.length;

    stats.innerHTML = `
    <p>Tareas pendientes: ${tareas.length} | Completadas: ${check}</p>
    `
}

function borrar(id) {
    let tareaBorrar = document.getElementById(id);
    list.removeChild(tareaBorrar);
    actualizar();
};

function borrarUno() {
    list.querySelectorAll('div')[0].remove();
    actualizar();
}

function borrarTodo() {
    let valueInput = input.value;
    list.innerHTML = "";
    actualizar();
}