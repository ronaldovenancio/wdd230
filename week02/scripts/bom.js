const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', () => {

    if (input.value != '') {
        input.focus();
    }

    const li = document.createElement('li');
    const delete_button = document.createElement('button');
    li.textContent = input.value;
    delete_button.innerText = '❌';
    li.append(delete_button);
    list.append(li);

    input.value = "";
    input.placeholder = "Nephi 1";

    delete_button.addEventListener('click', () => {
        list.removeChild(li);
        input.focus();
    })
    
});

input.focus();
input.value = '';