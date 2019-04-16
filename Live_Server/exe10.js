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
    YOS: 4,
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

// student.findIndex(function(element)).electives

const checkElectives = function (student) {
  if ((student.electives.findIndex(function (element) {
    return element === electiveOne
  })) !== -1) {
    return true
  }

  return false
}

const elen4010 = students.filter(student => checkElectives(student))

console.log(elen4010)
