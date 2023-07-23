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
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                </div>
            </div>
            <div class="col-9">
                <div class="title">${title}</div>
                <div class="desc"><em>${desc}</em></div>
                <div class="date">${date}</div>
            </div>
            <div class="col-1 icon-container editButton">
                <img class="icon" src="/_assets/7e5d1bdaae3024dfe65d08456799ed60/Icons/edit.png" alt="edit-Button">
            </div>
            <div class="col-1 icon-container deleteButton">
                <img class="icon" src="/_assets/7e5d1bdaae3024dfe65d08456799ed60/Icons/delete.png" alt="delete-Button">
            </div>
        </div>
    </div>`;
        todoList.innerHTML += template;
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
    });

    // if the tasks are stored, check if there are tasks that are late or urgent
    document.addEventListener('DOMContentLoaded', e=>{
        console.log('loaded');
        const tasks = document.querySelectorAll('.task-info');
        console.log(tasks);
        tasks.forEach(task =>{
            console.log(task);
            const dateElement = task.querySelector('.date').textContent;
            console.log(dateElement);
            const taskDate = new Date(dateElement);
            console.log(taskDate);
            if(taskDate.toDateString() === currentDate.toDateString()){
                task.classList.add('urgent');
            } else if (taskDate < currentDate){
                task.classList.add('late');
            }
        });
    })



    //Delete Task
