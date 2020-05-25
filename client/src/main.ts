function selectCollab(id: number) {
  const collab = document.getElementById("collab")
  if (collab === undefined) {
    const selectedCollab = document.getElementById('selected-collab') as HTMLDivElement
    const collabCard = document.createElement('div') as HTMLDivElement
    collabCard.className = 'card'
    const collabCardBody = document.createElement('div') as HTMLDivElement
    collabCardBody.className = 'card-body'
    collabCardBody.innerText = `${id} selected collab`
    collabCard.appendChild(collabCardBody)
    selectedCollab.appendChild(collabCard)
  } else {
    const collabCardBody = collab.firstChild as HTMLDivElement
    collabCardBody.innerText = `${id} selected collab`
  }

}

function loadRecentCollabs() {
  // eventually will make ajax call to fetch recent collabs
  const recentCollabs = new Array<string>()
  const recentCollabsElement = document.getElementById('recent-collabs') as HTMLUListElement
  if (recentCollabs.length) {
    recentCollabs.forEach((collab, index) => {
      console.log('collabs found')
      const collabElement = document.createElement('li') as HTMLLIElement
      collabElement.className = 'list-group-item'
      collabElement.innerText = collab
      collabElement.addEventListener('click', () => {
        selectCollab(index)
      })
      recentCollabsElement.appendChild(collabElement)
    })
  } else {
    console.log('no collabs found')
    const emptyCollabs = document.createElement('p') as HTMLParagraphElement
    emptyCollabs.innerText = 'No Collabs, nows the best time to start one!'
    recentCollabsElement.appendChild(emptyCollabs)
  }
}

window.onload = () => {
  console.log('loading page...')
  loadRecentCollabs()  
}