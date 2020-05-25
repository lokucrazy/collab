function selectCollab(id) {
    const collab = document.getElementById('collab');
    if (collab === undefined) {
        const selectedCollab = document.getElementById('selected-collab');
        const collabCard = document.createElement('div');
        collabCard.className = 'card';
        const collabCardBody = document.createElement('div');
        collabCardBody.className = 'card-body';
        collabCardBody.innerText = `${id} selected collab`;
        collabCard.appendChild(collabCardBody);
        selectedCollab.appendChild(collabCard);
    } else {
        const collabCardBody = collab.firstChild;
        collabCardBody.innerText = `${id} selected collab`;
    }
}
function loadRecentCollabs() {
    // eventually will make ajax call to fetch recent collabs
    const recentCollabs = new Array();
    const recentCollabsElement = document.getElementById('recent-collabs');
    if (recentCollabs.length) {
        recentCollabs.forEach((collab, index)=>{
            console.log('collabs found');
            const collabElement = document.createElement('li');
            collabElement.className = 'list-group-item';
            collabElement.innerText = collab;
            collabElement.addEventListener('click', ()=>{
                selectCollab(index);
            });
            recentCollabsElement.appendChild(collabElement);
        });
    } else {
        console.log('no collabs found');
        const emptyCollabs = document.createElement('p');
        emptyCollabs.innerText = 'No Collabs, nows the best time to start one!';
        recentCollabsElement.appendChild(emptyCollabs);
    }
}
window.onload = ()=>{
    console.log('loading page...');
    loadRecentCollabs();
};
