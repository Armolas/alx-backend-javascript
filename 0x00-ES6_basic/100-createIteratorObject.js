export default function createIteratorObject(report) {
  const employeeList = [];
  for (const department of Object.values(report)) {
    for (const employees of Object.values(department)) {
      employeeList.push(...employees);
    }
  }
  return employeeList;
}
