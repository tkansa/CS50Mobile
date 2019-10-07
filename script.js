const classNames = {
    TODO_ITEM: 'todo-container',
    TODO_CHECKBOX: 'todo-checkbox',
    TODO_TEXT: 'todo-text',
    TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

// start counting the todos
let count = 0

//give the delete btn an id
let deleteId = 0

function newTodo() {

    // get the todo from the user
    const toDo = prompt('Enter a TODO:');

    // create a line item on the DOM and add the styling
    const lineItem = document.createElement("LI")
	lineItem.classList.add(classNames.TODO_ITEM)
	list.appendChild(lineItem)

	// create a checkbox on the line item
	const checkBox = document.createElement("INPUT")
	checkBox.setAttribute("type", "checkbox")
	checkBox.setAttribute("id", "toDoCheckbox")
	checkBox.classList.add(classNames.TODO_CHECKBOX)
	lineItem.appendChild(checkBox)
	checkBox.onclick = updateUncheckedCount

	// create a text node to diplay todo
	const textNode = document.createTextNode(toDo)
	lineItem.appendChild(textNode)

	// create a delete button
	const deleteBtn = document.createElement("INPUT")
	deleteBtn.setAttribute("type", "button")
	deleteBtn.setAttribute("value", "Delete")
	deleteBtn.setAttribute("id", deleteId)
	deleteBtn.classList.add(classNames.TODO_DELETE)
	lineItem.appendChild(deleteBtn)
	deleteBtn.onclick = function () {
		deleteLineItem(deleteBtn.id)
		}
    deleteId++

    // diaplay the item count
    count++
    itemCountSpan.innerHTML = count

	// display the unchecked item count
	updateUncheckedCount()

}

function updateUncheckedCount() {

    // get all the checkboxes and the number of them
    const checkBoxList = document.querySelectorAll("#toDoCheckbox")
        let uncheckedCount = checkBoxList.length
        for (let i = 0; i < checkBoxList.length; i++) {
            if (checkBoxList[i].checked) {
                uncheckedCount--
            }
        }
        uncheckedCountSpan.innerHTML = uncheckedCount
}

function deleteLineItem(id) {

    // get the parent of the checkbox - the LI - and delete it
    const parent = document.getElementById(id).parentElement
	parent.remove()

	// update the counts
	updateUncheckedCount()
	count--
	itemCountSpan.innerHTML = count
}
