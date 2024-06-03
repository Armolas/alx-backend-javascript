export default function getListStudentsIds(studentsList) {
  if (Array.isArray(studentsList)) {
    const idList = studentsList.map((student) => student.id);
    return idList;
  }
  return [];
}
