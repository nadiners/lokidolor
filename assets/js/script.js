// --> DOM-VARIABLES
let navIdentifier = 'nav>ul' 
let galleryIdentifier = '.project-gallery'

// --> VARIABLES
const navList = document.querySelector(navIdentifier)
let activeFilter = null

// --> FUNCTIONS
const filterImages = () => {
  let galleryDiv = document.querySelectorAll(galleryIdentifier)

  for (let li of navList.children) {
    if (li.classList.contains('active')) {
      activeFilter = li.dataset.filter    
      break
    } else {
      activeFilter = null
    }
  }

  for (let img of galleryDiv) {
    let filtered = img.classList.contains(activeFilter)
    if (activeFilter && filtered) {
      img.classList.remove('inactive')
    } else if (activeFilter && !filtered) {
      img.classList.add('inactive')
    } else {
      img.classList.remove('inactive')
    }
  }
}

const filterHandler = (e) => {
  let el = e.target
  
  for (let li of navList.children) {
    if (li.dataset.filter == el.dataset.filter) {
      li.classList.toggle('active')
    } else {
      li.classList.remove('active')
    }
  }
  
  filterImages()
}

// --> WINDOW OPERATION
window.onload = () => {
  
  for (let li of navList.children) {
    li.addEventListener('click', filterHandler)
  }
}




