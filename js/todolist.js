const editBox = document.querySelector(".todolist__edit");
const editBoxInput = document.querySelector(".todolist__edit-input");
const editBoxBtn = document.querySelector("#apply");
const addBox = document.querySelector(".todolist__add");
const addBoxInput = document.querySelector(".todolist__add-input");
const showAddToDo = document.querySelector("#add");
const addToDo = document.querySelector("#add-button");
const error = document.querySelectorAll(".error");
const closeEditBtn = document.querySelector(".todolist__edit-close");
const closeAddBtn = document.querySelector(".todolist__add-close");
let currentItem;

function deleteToDoItem() {
	this.parentNode.parentNode.remove();
}

function doneToDo() {
	this.parentNode.parentNode.classList.toggle("done");
	this.parentNode.firstElementChild.classList.toggle("done");
}

function showToDo() {
	const content = this.parentNode.parentNode.firstElementChild.lastElementChild;
	currentItem = content;
	editBoxInput.value = currentItem.textContent;

	editBox.classList.remove("hidden");
}

const editToDo = () => {
	if (editBoxInput.value.length > 0) {
		currentItem.textContent = editBoxInput.value;
		editBox.classList.add("hidden");
		resetErrors();
	} else {
		showErrors();
	}
};

const showAddToDoBox = () => {
	addBox.classList.remove("hidden");
};

const hideAddToDoBox = () => {
	addBox.classList.add("hidden");
};

const addToDoFunction = () => {
	const list = document.querySelector(".todolist__listbox-list");
	const listItem = document.createElement("li");
	const listItemText = document.createElement("div");
	const listItemButtons = document.createElement("div");

	listItem.setAttribute("class", "todolist__listbox-list-item");

	listItemText.setAttribute("class", "todolist__listbox-list-item-text");
	listItemText.innerHTML = `<p class="todolist__listbox-list-item-text-content">
    </p>`;

	listItemButtons.setAttribute("class", "todolist__listbox-list-item-buttons");
	listItemButtons.innerHTML = `<button
    class="todolist__listbox-list-item-buttons-editbutton"
    id="edit"
>
    Edit
</button>
<button
    class="todolist__listbox-list-item-buttons-deletebutton"
    id="delete"
>
    <i
        class="fa-solid fa-trash todolist__listbox-list-item-buttons-deletebutton"
    ></i>
</button>
<button
    class="todolist__listbox-list-item-buttons-donebutton"
    id="done"
>
    <i
        class="fa-solid fa-check todolist__listbox-list-item-buttons-donebutton-icon"
    ></i>
</button>`;

	if (addBoxInput.value.length > 0) {
		listItemText.firstElementChild.textContent = addBoxInput.value;
		addBoxInput.value = "";
		resetErrors();
	} else {
		showErrors();
		return;
	}

	listItem.append(listItemText, listItemButtons);
	list.append(listItem);

	updateButtons();
	hideAddToDoBox();
};

const updateButtons = () => {
	const deleteBtn = document.querySelectorAll("#delete");
	const doneBtn = document.querySelectorAll("#done");
	const editBtn = document.querySelectorAll("#edit");

	deleteBtn.forEach((btn) => btn.addEventListener("click", deleteToDoItem));
	doneBtn.forEach((btn) => btn.addEventListener("click", doneToDo));
	editBtn.forEach((btn) => btn.addEventListener("click", showToDo));
};

const resetErrors = () => {
	error.forEach((error) => error.classList.add("hidden"));
};

const showErrors = () => {
	error.forEach((error) => error.classList.remove("hidden"));
};

const closeEdit = () => {
	editBox.classList.add("hidden");
	resetErrors();
};

const closeAdd = () => {
	addBox.classList.add("hidden");
	resetErrors();
};

showAddToDo.addEventListener("click", showAddToDoBox);
addToDo.addEventListener("click", addToDoFunction);
editBoxBtn.addEventListener("click", editToDo);
closeEditBtn.addEventListener("click", closeEdit)
closeAddBtn.addEventListener("click", closeAdd)

updateButtons();
