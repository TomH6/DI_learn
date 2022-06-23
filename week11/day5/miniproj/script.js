const form = document.querySelector('#new_task_form');
    const inputName = document.querySelector('#new_task_input_name');
    const inputDescription = document.querySelector('#new_task_input_description');
    const inputStartDAndT = document.querySelector('#new_task_input_start');
    const inputEndDAndT = document.querySelector('#new_task_input_end');

window.addEventListener('load', () => {
    // The inputs as variables
    
    // The list to be filled as a variabel
    const list_elem = document.querySelector('#tasks');
    // An event listener on "Add new task"
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const task_name = inputName.value;
        const task_description = inputDescription.value;
        const task_start = inputStartDAndT.value;
        const task_end = inputEndDAndT.value;
        let isComplete = false;
        let toLocalStorage = [];
        // Ensuring that the new entry has AT LEAST a name
        if (!task_name) {
            alert("You must provide A task");
            return;
        }
        // Creating the new entry elements
        const task_el = document.createElement('div');
        task_el.classList.add('task');
        const task_content_el = document.createElement('div');
        task_content_el.classList.add('content');
        task_el.appendChild(task_content_el);

        const task_input_el_name = document.createElement('input');
        task_input_el_name.classList.add('text');
        task_input_el_name.type = 'text';
        task_input_el_name.value = task_name;
        task_input_el_name.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el_name);

        const task_input_el_description = document.createElement('input');
        task_input_el_description.classList.add('text');
        task_input_el_description.type = 'text';
        task_input_el_description.value = task_description;
        task_input_el_description.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el_description);

        const task_input_el_start = document.createElement('input');
        task_input_el_start.classList.add('text');
        task_input_el_start.type = 'text';
        task_input_el_start.value = task_start;
        task_input_el_start.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el_start);

        const task_input_el_end = document.createElement('input');
        task_input_el_end.classList.add('text');
        task_input_el_end.type = 'text';
        task_input_el_end.value = task_end;
        task_input_el_end.setAttribute('readonly', 'readonly');
        task_content_el.appendChild(task_input_el_end);

        const task_actions_el = document.createElement('div');
        task_actions_el.classList.add('actions');
        const task_edit_el = document.createElement('button');
        task_edit_el.classList.add('edit');
        task_edit_el.innerHTML = 'Edit';
        const task_delete_el = document.createElement('button');
        task_delete_el.classList.add('delete');
        task_delete_el.innerHTML = 'Delete';
        const isComplete_label_el = document.createElement('label');
        isComplete_label_el.classList.add('form-check-label');
        isComplete_label_el.setAttribute('for', 'defaultCheck1');
        isComplete_label_el.innerHTML = 'Job done?';

        let isComplete_input_el = document.createElement('input');
        isComplete_input_el.classList.add('form-check-input');
        isComplete_input_el.type = 'checkbox';
        isComplete_input_el.setAttribute("id", "defaultCheck1");
        

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);
        task_actions_el.appendChild(isComplete_label_el);
        task_actions_el.appendChild(isComplete_input_el);
        task_el.appendChild(task_actions_el);
        list_elem.appendChild(task_el);
        isComplete_input_el = isComplete;
        console.log(isComplete);
        


        inputName.value = '';
        inputDescription.value = '';
        inputStartDAndT.value = '';
        inputEndDAndT.value = '';

        task_edit_el.addEventListener('click', ()=> {
            if (task_edit_el.innerText.toLowerCase() == 'edit') {
                task_input_el_name.removeAttribute('readonly');
                task_input_el_name.focus();
                task_input_el_description.removeAttribute('readonly');
                task_input_el_description.focus();
                task_input_el_start.removeAttribute('readonly');
                task_input_el_start.focus();
                task_input_el_end.removeAttribute('readonly');
                task_input_el_end.focus();
                task_edit_el.innerText = 'Save';
            } else {
                task_input_el_name.setAttribute('readonly', 'readonly');
                task_input_el_description.setAttribute('readonly', 'readonly');
                task_input_el_start.setAttribute('readonly', 'readonly');
                task_input_el_end.setAttribute('readonly', 'readonly');
                task_edit_el.innerText = 'Edit';
            }
        });

        task_delete_el.addEventListener('click', () => {
            list_elem.removeChild(task_el);
        });
    })
})

const submit = document.querySelector('#new_task_submit');
submit.addEventListener('click', ()=> {
    const key = inputName.value;
    const value = inputDescription.value;
    console.log(key);
    console.log(value);
    if (key && value){
        localStorage.setItem(key, value);
    }
})
