'use strict'

// private
let list = []

// public
module.exports = {
  add: function (student) {
    list.push(student)
  },
  edit: function (student, index) {
    list[index] = student
  },
  get: function (index) {
    return list[index]
  },
  delete: function (index) {
    list.splice(index, 1)
  },
  Size: function () {
    return list.length
  },
  getList: function () {
    return list
  }
}
