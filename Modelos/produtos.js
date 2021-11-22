const paragraph = document.getElementsByClassName('edit')
const editbutton = document.getElementsByClassName('edit-button')

for (var i = 0; i < editbutton.length; i++) {
  editbutton[i].addEventListener('click', function () {
    for (var j = 0; j < paragraph.length; j++) {
      paragraph[j].contentEditable = true
      paragraph[j].style.backgroundColor = 'lightgrey'
    }
  })
}
