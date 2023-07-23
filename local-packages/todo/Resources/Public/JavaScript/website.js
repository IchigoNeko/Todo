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
                <div class="desc"><em>${desc}</em></div>
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

    submit.addEventListener('click', e => {
        e.preventDefault();
        if (title.value !== '') {
            const titleValue = title.value.trim();
            const descValue = description.value.trim();
            const dateValue = date.value;
            generateTaskTemplate(titleValue, descValue, dateValue);
            form.reset();
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
        console.log(checkbox);
        checkbox.forEach(check =>{
            if (check.checked){
                check.setAttribute('checked','true');
                const checkedTask = check.closest('.task-info');
                checkedTask.classList.add('disabled');
                const editButton = checkedTask.querySelector('.edit');
                if(editButton){
                    editButton.parentElement.classList.remove('editButton');
                    editButton.remove();
                }
            }else {
                const uncheckedTask = check.closest('.task-info');
                uncheckedTask.classList.remove('disabled');
                const editButton = uncheckedTask.querySelector('.editButton');
                if (!editButton) {
                    const editButton = document.createElement('div');
                    const editButtonContainer = uncheckedTask.querySelector('.edit-image-container');
                    editButtonContainer.classList.add('editButton');
                    editButton.innerHTML = '<img class="icon edit" src="/_assets/7e5d1bdaae3024dfe65d08456799ed60/Icons/edit.png" alt="edit-Button">';
                    editButtonContainer.appendChild(editButton);
                }
            }
        })
    });

    //Delete Task
    todoList.addEventListener('click', e =>{
        const tasks = document.querySelectorAll('.task-info');
        if(e.target.classList.contains('delete')){
            e.target.parentElement.parentElement.parentElement.remove();
            validateTime();
        }

        //editTask
    })

