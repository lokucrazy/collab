function validate(form) {
    return false;
}
function newCollab() {
    const form = document.forms[0];
    return validate(form) ? true : false;
}
function addListItem(input, list) {
    console.log('adding item');
    const genreInput = document.getElementById(input);
    const genreList = document.getElementById(list);
    if (genreInput.value) {
        const genreItem = createListItem(genreInput.value);
        genreList.appendChild(genreItem);
        genreInput.value = '';
    }
}
function removeListItem(event) {
    const listItem = event.currentTarget.parentElement;
    console.log('removing item');
    console.log(listItem);
    listItem.remove();
}
function createListItem(value) {
    const div = document.createElement('div');
    const span = document.createElement('span');
    const button = document.createElement('button');
    div.className = 'd-inline-flex list-group-item list-group-item-primary p-1 mr-1';
    span.className = 'mr-1';
    button.className = 'btn btn-sm p-0';
    span.innerText = value;
    button.innerText = 'X';
    button.setAttribute('type', 'button');
    button.addEventListener('click', removeListItem);
    div.appendChild(span);
    div.appendChild(button);
    return div;
}
