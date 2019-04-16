let button = document.getElementById('addButton')

button.addEventListener('click', function () {
  let paragraph = document.createElement('p') // CReate <p> element
  let text = document.createTextNode('This is a student') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  let st = document.getElementById('studentList')
  st.appendChild(paragraph) // Append <p> to <body>
}, false)

let button1 = document.getElementById('addButton1')

button1.addEventListener('click', function addStudent () {
  let paragraph = document.createElement('p') // CReate <p> element
  let text = document.createTextNode('Mahindra Moore') // Create text node
  paragraph.appendChild(text) // Append the text to <p>
  let st = document.getElementById('studentList')
  st.appendChild(paragraph) // Append <p> to <bod
}, false)

let button2 = document.getElementById('MyButton')

button2.addEventListener('click', function heading () {
  let headerElement = document.getElementById('heading')
  headerElement.innerHTML = 'Soon to be Graduates!'
}, false)

let button3 = document.getElementById('DeleteButton')

button3.addEventListener('click', function deleteItems () {
  let list = document.getElementById('list')
  list.removeChild(list.childNodes[0])
}, false)

let button4 = document.getElementById('stButton')

button4.addEventListener('click', function AddStudent () {
  let studentName = document.getElementById('saveButton').value
  let par = document.createElement('p')
  let text = document.createTextNode(studentName)
  par.appendChild(text)
  let st = document.getElementById('studentList')
  st.appendChild(par)
}, false)
