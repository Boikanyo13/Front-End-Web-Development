'use strict'

let button = document.getElementById('addStudentButton')

button.addEventListener('click', function () {
  let paragraph = document.createElement('li') // CReate <p> element
  let text = document.createTextNode('Kganya Sepuru') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  let st = document.getElementById('list')
  st.appendChild(paragraph) // Append <p> to <body>
}, false)
