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
    `;
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
    let uso = list.querySelectorAll('input[type="checkbox"]');
    let borrar = document.querySelectorAll('[data-role="descripcion"]')

    let check = 0;
    let uncheck = 0;
    let total = tareas.length - borrar.length;

    uso.forEach((a) => {
        if (a.checked) {
            check++;
        } else {
            uncheck++;
        }
    });

    stats.innerHTML = `
    <p>Tareas en total: ${total} |
    Pendientes: ${uncheck} | Completadas: ${check}</p>
    `
}

function borrar(id) {
    let tareaBorrar = document.getElementById(id);
    list.removeChild(tareaBorrar);
    actualizar();
};

function borrarUno() {
    // list.querySelectorAll('div')[0].remove();
    // actualizar();
    
    let tareas = document.querySelectorAll('.tarea');

    for (let i = 0; i < tareas.length; i++) {
        let uso = tareas[i].querySelector('input[type="checkbox"]');

        if (uso.checked) {
            tareas[i].setAttribute('data-role', 'descripcion');
            actualizar();
            tareas[i].style.backgroundColor = 'transparent';
            tareas[i].style.display = 'none';
        }
    }
};

function borrarTodo() {
    list.innerHTML = "";
    actualizar();
}