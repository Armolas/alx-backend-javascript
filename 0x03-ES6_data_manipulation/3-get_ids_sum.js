export default function getStudentsIdsSum(studentsList) {
  if (Array.isArray(studentsList)) {
    return studentsList.reduce((sum, student) => sum + student.id, 0);
  }

  throw new TypeError('Argument must be a list');
}
