export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name is not a string');
    }
    if (Number.isInteger(length)) {
      this._length = length;
    } else {
      throw new TypeError('Length is not an integer');
    }
    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students is not an Array of strings');
    }
  }

  set name(name) {
    if (typeof name === 'string') {
      this._name = name;
    } else {
      throw new TypeError('Name is not a string');
    }
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (Number.isInteger(length)) {
      this._length = length;
    } else {
      throw new TypeError('Length is not an integer');
    }
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (Array.isArray(students) && students.every((item) => typeof item === 'string')) {
      this._students = students;
    } else {
      throw new TypeError('Students is not an Array of strings');
    }
  }

  get students() {
    return this._students;
  }
}
