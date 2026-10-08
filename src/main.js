import { createIcons, icons } from 'lucide';
createIcons({ icons });
import { toDoList } from './data'
import { renderToDos } from './render'
import './style.css'

let updatedToDos = toDoList

renderToDos(toDoList)

window.handleDelete = function handleDelete(id) {
    updatedToDos = updatedToDos.filter(obj => obj.id != id)

    renderToDos(updatedToDos)
    
}

window.handleUpdate = function handleUpdate(id) {
    const selectedToDo = updatedToDos.find(obj => obj.id == id)
    selectedToDo.done = !selectedToDo.done

    renderToDos(updatedToDos)
    
}


window.handleAdd = function handleAdd() {
    const name = document.getElementById("newtodo").value

    if (name.trim().length == 0) return

    const id = Date.now()
    console.log(id);
    const newitem = {id, name, done : false}
    updatedToDos = [...updatedToDos, newitem]
    renderToDos(updatedToDos)
    document.getElementById('newtodo').value = ""
    
}