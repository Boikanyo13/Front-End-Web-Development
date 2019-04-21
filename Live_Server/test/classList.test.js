'use strict'

let classList = require('../classList.js')

test('Hello world: hello should greet the world', () => {
  let hello = 'world'
  expect(hello).toEqual('world')
})

let student = {
  name: 'Boikanyo',
  studentNumber: '1386807',
  electives: 'ELEN4010, ELEN4020,ELEN4019'
}

let student2 = {
  name: 'Lesedi',
  studentNumber: '1245582',
  electives: 'MECN4020, ELEN4017, ELEN4018'

}

// Addition to class list
describe('can add', () => {
  test('One student', () => {
    classList.add(student)
    expect(classList.Size()).toEqual(1)
  // expect(classList.Size()).toEqual(0)
  })

  test('more than one student', () => {
    classList.add(student2)
    expect(classList.Size()).toEqual(2)
  })
})

// edit student
test('can edit student', () => {
  let student3 = {
    name: 'Elias',
    studentNumber: '1427726',
    electives: 'MECN4020, ELEN4010, ELEN4016'
  }

  classList.edit(student3, 1)

  expect(classList.get(1)).toEqual(student3)
})

// remove a student
test('can remove a student', () => {
  classList.delete(0)
  expect(classList.Size()).toEqual(1)
})
