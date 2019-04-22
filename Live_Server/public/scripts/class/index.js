'use strict'
/*
fetch('/class/api/list')
  .then(function (response) {
    if (response.ok) {
      return response.json()
    } else {
      throw 'Failed to load classlist: response code invalid!'
    }
  })
  .then(function (data) {
    let classList = document.getElementById('classList')

    data.forEach(function (student) {
      let li = document.createElement('LI')
      let liText = document.createTextNode(student.name)

      li.className += 'list-group-item'

      li.appendChild(liText)
      classList.appendChild(li)
    })
  })
  .catch(function (e) {
    alert(e)
  })
*/

// let classList = document.getElementById('classList')

let button = document.getElementById('addStudentButton')

button.addEventListener('click', function () {
  let paragraph = document.createElement('p')
  let text = document.createTextNode('This is a student')
  paragraph.appendChild(text)
  document.body.appendChild(paragraph)
}, false)
/*
let li = document.createElement('p')
let liText = document.createTextNode('Elias')

// li.className += 'list-group-item'

li.appendChild(liText)
 */
