const bioBtn = document.getElementsByClassName('bio-btn')
const statusBtn = document.getElementsByClassName('status-btn')

const displayBio = (event) => {
    let characterBio = event.target.getAttribute('id')
    let bio = document.getElementById(`${characterBio}-content`)
    if (bio.style.display === 'none'){
        bio.style.display = 'flex'
    } else {
        bio.style.display = 'none'
    }
}

// get all bio buttons
for (i = 0; i < bioBtn.length; i++){
    bioBtn[i].addEventListener('click', displayBio)
}

const displayStatus = (event) => {
    let characterStatus = event.target.getAttribute('id')
    let status = document.getElementById(`${characterStatus}-content`)
    if (status.style.display === 'none'){
        status.style.display = 'flex'
    } else {
        status.style.display = 'none'
    }
}

// get all status buttons
for (i = 0; i < statusBtn.length; i++){
    statusBtn[i].addEventListener('click', displayStatus)
}