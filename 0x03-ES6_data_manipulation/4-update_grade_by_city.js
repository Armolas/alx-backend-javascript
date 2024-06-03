export default function updateStudentGradeByCity(studentsList, city, newGrades) {
	const newGradeList = studentsList.filter(student => student.location === city).map(
		(student) => {
			let newGrade = newGrades.find((grade) => grade.studentId === student.id);
			if (newGrade !== undefined) {
				newGrade = newGrade.grade;
			}
			else {
				newGrade = 'N/A';
			}
			student['grade'] = newGrade;
			return student;
		});
	return newGradeList;
}
