'use strict'

const electiveOne = {
  courseCode: 'ELEN4010',
  yearOffered: 4
}

const electiveTwo = {
  courseCode: 'ELEN4001',
  yearOffered: 4
}

const electiveThree = {
  courseCode: 'ELEN4020',
  yearOffered: 4
}

const electiveFour = {
  courseCode: 'ELEN4017',
  yearOffered: 4
}

let students = [
  {
    name: 'Kwezi',
    studentNum: 1386807,
    YOS: 3,
    electives: [electiveTwo, electiveThree, electiveOne]

  },
  {
    name: 'Pieter',
    studentNum: 1024579,
    YOS: 4,
    electives: [electiveOne, electiveTwo, electiveFour]

  },
  {

    name: 'Jade',
    studentNum: 1325807,
    YOS: 4,
    electives: [electiveTwo, electiveThree, electiveFour]

  },
  {
    name: 'Kiren',
    studentNum: 1325197,
    YOS: 4,
    electives: [electiveOne, electiveTwo, electiveThree]
  }
]

let count = 0

// This button adds a student to from the array to the html file and allows
// it to be queried
let button2 = document.getElementById('DisplayStudentInArray')

button2.addEventListener('click', function StArray () {
  let student = document.createElement('li')
  let val = document.createElement('a')
  let st = document.createTextNode(students[count].name)
  val.appendChild(st)
  val.setAttribute('href', '#')
  student.appendChild(val)
  let lll = document.getElementById('list')
  lll.appendChild(student)

  count = count + 1
}, false)

// Search for the name of a student and display elements close to the name
function Search () {
  var input, filter, ul, li, a, i, txtValue
  input = document.getElementById('myInput')
  filter = input.value.toUpperCase()
  ul = document.getElementById('list')
  li = ul.getElementsByTagName('li')
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName('a')[0]
    txtValue = a.textContent || a.innerText
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = ''
    } else {
      li[i].style.display = 'none'
    }
  }
}

function SearchTable () {
  let input, filter, table, tr, td, i, txtValue
  input = document.getElementById('table')
  filter = input.value.toUpperCase()
  table = document.getElementById('studentsTable')
  tr = table.getElementsByTagName('tr')
}
