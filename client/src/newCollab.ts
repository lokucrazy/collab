function validate(form: HTMLFormElement): boolean {
  return false
}

function newCollab() {
  const form = document.forms[0]
  return validate(form) ? true : false
}


function addListItem(input: string, list: string) {
  console.log('adding item')
  const genreInput = document.getElementById(input) as HTMLInputElement
  const genreList = document.getElementById(list) as HTMLDivElement
  if (genreInput.value) {
    const genreItem = createListItem(genreInput.value)
    genreList.appendChild(genreItem)
    genreInput.value = ''
  }
}

function removeListItem(event: MouseEvent) {
  const listItem = (event.currentTarget as HTMLButtonElement).parentElement as HTMLDivElement
  console.log('removing item')
  console.log(listItem)
  listItem.remove()
}

function createListItem(value: string): HTMLDivElement {
  const div = document.createElement('div') as HTMLDivElement
  const span = document.createElement('span') as HTMLSpanElement
  const button = document.createElement('button') as HTMLButtonElement
  div.className = 'd-inline-flex list-group-item list-group-item-primary p-1 mr-1'
  span.className = 'mr-1'
  button.className = 'btn btn-sm p-0'
  
  span.innerText = value
  button.innerText = 'X'
  button.setAttribute('type', 'button')
  button.addEventListener('click', removeListItem)

  div.appendChild(span)
  div.appendChild(button)
  return div
}