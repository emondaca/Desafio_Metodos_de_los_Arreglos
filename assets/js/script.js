const tasks = [];
let listaTareas = document.querySelector("#tasks");
let btnAgregarTarea = document.querySelector("#agregar-tarea")
let totalTasks = document.querySelector("#total")
let realizadasTasks = document.querySelector("#realizadas")


function mostrarTareas() {
    let listaTareas_html = ``
    let totalTasks_html = 0
    let realizadasTasks_html = 0
    for (let tarea of tasks) {
        listaTareas_html +=   `<tr>
                            <td>${tarea.id}</td>
                            <td>${tarea.descripcion}</td>`;
        if (tarea.done) {
            listaTareas_html += `<td><input type="checkbox" onclick="notDone(${tasks.indexOf(tarea)})" checked></td>`
            realizadasTasks_html += 1
        } else {
            listaTareas_html += `<td><input type="checkbox" onclick="done(${tasks.indexOf(tarea)})"></td>`
        }
        listaTareas_html += `<td><span onclick="borrar(${tasks.indexOf(tarea)})">&#10060</span></td>
                            </tr>`
        totalTasks_html += 1
    
    }
    listaTareas.innerHTML = listaTareas_html
    totalTasks.innerHTML = totalTasks_html
    realizadasTasks.innerHTML = realizadasTasks_html
};

btnAgregarTarea.addEventListener("click", () => {
    console.log("hola")
    let newTask = document.querySelector("#nueva-tarea")
    tasks.push({id: Date.now(), descripcion: newTask.value, done: false})
    mostrarTareas()
    newTask.value = ''

})

function borrar(tar) {
    console.log(tar)
    tasks.splice(tar,1)
    mostrarTareas()

}
function notDone(tar) {
    tasks[tar].done = false
    mostrarTareas()
}

function done(tar) {
    tasks[tar].done = true
    mostrarTareas()
}

mostrarTareas()
console.log(tasks);