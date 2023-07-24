    const submit = document.querySelector('.submit_button');
    const todoList = document.querySelector('.tasks-container');
    const form = document.getElementById('form');

    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const date = document.getElementById('date');

    const currentDate = new Date();

    // Generate a new Task
    const generateTaskTemplate = (title, desc, date) => {
        const template = `
    <div class="container-md task-info">
        <div class="row justify-content-center">
            <div class="col-1 checkbox-container">
                <div class="checkbox">
                    <input class="form-check-input" type="checkbox" value="">
                </div>
            </div>
            <div class="col-9">
                <div class="title">${title}</div>
                <div id="titleErrorMessage">Dieses Feld ist erforderlich!</div>
                <div class="desc">${desc}</div>
                <div class="date">${date}</div>
            </div>
            <div class="col-1 icon-container editButton edit-image-container">
                <img class="icon edit" src="/_assets/7e5d1bdaae3024dfe65d08456799ed60/Icons/edit.png" alt="edit-Button">
            </div>
            <div class="col-1 icon-container deleteButton">
                <img class="icon delete" src="/_assets/7e5d1bdaae3024dfe65d08456799ed60/Icons/delete.png" alt="delete-Button">
            </div>
        </div>
    </div>`;
        todoList.innerHTML += template;
    }

    const validateTime = () =>{
        const tasks = document.querySelectorAll('.task-info');
        tasks.forEach(task =>{
            const dateElement = task.querySelector('.date').textContent;
            const taskDate = new Date(dateElement);
            if(taskDate.toDateString() === currentDate.toDateString()){
                task.classList.add('urgent');
            } else if (taskDate < currentDate){
                task.classList.add('late');
            }
        });
    }

    const editTitle = (e) => {
        const editTask = e.target.closest('.task-info');
        const editTitle = editTask.querySelector('.title');
        const error = editTask.querySelector('#titleErrorMessage');

        editTitle.setAttribute('contenteditable', 'true');
        editTitle.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const newTitle = editTitle.innerText.trim();
                editTitle.innerText = newTitle;
                if (newTitle !== '') {
                    editTitle.setAttribute('contenteditable', 'false');
                    error.style.display = 'none';
                } else{
                    error.style.display = 'block';
                }
            }
        })
    }

    const editDescription = (e) => {
        const editTask = e.target.closest('.task-info');
        const editDescription = editTask.querySelector('.desc');

        if (editDescription !== '') {
            editDescription.setAttribute('contenteditable', 'true');
            editDescription.addEventListener('keydown', e => {
                if (e.key === 'Enter') {
                    editDescription.setAttribute('contenteditable', 'false');
                }
            })
        }
    }

    const editDate = (e) => {
        const editTask = e.target.closest('.task-info');
        const editDateElement = editTask.querySelector('.date');
        const inputField = document.createElement('input');
        inputField.type = 'date';
        inputField.setAttribute('value', editDateElement.innerText);
        inputField.classList.add('date');
        editTask.querySelector('.col-9').replaceChild(inputField, editDateElement);


       inputField.addEventListener('keydown', e => {
            if (e.key === 'Enter') {
                e.preventDefault();
                const dateField = document.createElement('div');
                dateField.classList.add('date');
                dateField.textContent = inputField.value;
                editTask.querySelector('.col-9').replaceChild(dateField, inputField);
                validateTime();
            }
        })
    }

    submit.addEventListener('click', e => {
        e.preventDefault();
        const errorMessage = document.getElementById('errorMessage');
        if (title.value !== '') {
            const titleValue = title.value.trim();
            const descValue = description.value.trim();
            const dateValue = date.value;
            generateTaskTemplate(titleValue, descValue, dateValue);
            form.reset();
        } else {
            errorMessage.style.display = 'block';
            title.addEventListener('focus', e =>{
                errorMessage.style.display = 'none';
            })
        }

        // Check if the task is urgent or too late
        validateTime();
    });


    // if the tasks are stored, check if there are tasks that are late or urgent
    document.addEventListener('DOMContentLoaded', e=>{
        validateTime();
    })

    //Checkbox
    todoList.addEventListener('change', e =>{
        const checkbox = document.querySelectorAll('.form-check-input');
        checkbox.forEach(check =>{
            if (check.checked){
                check.setAttribute('checked','checked');
                const checkedTask = check.closest('.task-info');
                checkedTask.classList.add('disabled');
                const editButton = checkedTask.querySelector('.edit');
                if(editButton){
                    editButton.parentElement.classList.remove('editButton');
                    editButton.remove();
                }
            }else {
                check.removeAttribute('checked');
                const uncheckedTask = check.closest('.task-info');
                uncheckedTask.classList.remove('disabled');
                const editButton = uncheckedTask.querySelector('.editButton');
                if (!editButton) {
                    const editButtonContainer = uncheckedTask.querySelector('.edit-image-container');
                    editButtonContainer.classList.add('editButton');
                    editButtonContainer.innerHTML = '<img class="icon edit" src="/_assets/7e5d1bdaae3024dfe65d08456799ed60/Icons/edit.png" alt="edit-Button">';
                }
            }
        })
    });


    //Delete Task
    todoList.addEventListener('click', e =>{
        if(e.target.classList.contains('delete')){
            e.target.parentElement.parentElement.parentElement.remove();
            validateTime();
        }

        //editTask
        const checkbox = e.target.closest('.task-info').querySelector('.form-check-input');
        if(checkbox.checked){
            const editTask = e.target.closest('.task-info');
            const editTitle = editTask.querySelector('.title');
            const editDescription = editTask.querySelector('.desc');
            const editDate = editTask.querySelector('.date');
            console.log(editDate);
            editTitle.setAttribute('contenteditable', 'false');
            editDescription.setAttribute('contenteditable', 'false');
            editDate.setAttribute('disabled', 'true');
        }else {
            if (e.target.classList.contains('edit')) {
                editTitle(e);
                editDescription(e);
                editDate(e);
            }
            if (e.target.classList.contains('title')) {
                editTitle(e);
            }
            if (e.target.classList.contains('desc')) {
                editDescription(e);
            }
        }
    })

