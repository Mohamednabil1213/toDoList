document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskButton = document.getElementById('add-task-button');
    const taskList = document.getElementById('task-list');

    addTaskButton.addEventListener('click', addTask);
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTask();
        }
    });

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const listItem = document.createElement('li');
            listItem.className = 'list-group-item';

            const taskContent = document.createElement('span');
            taskContent.textContent = taskText;
            listItem.appendChild(taskContent);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.className = 'delete-button btn btn-danger ms-5 mt-3';
            deleteButton.addEventListener('click', () => {
                taskList.removeChild(listItem);
            });
            listItem.appendChild(deleteButton);

            taskList.appendChild(listItem);
            taskInput.value = '';
        }
    }
});
