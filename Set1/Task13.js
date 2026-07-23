let student = {
    name: "Ishaan",
    course: "Node & Express JS",
    semester: 5,
    marks: 88
};

console.log(`
Student Summary
---------------
Name     : ${student.name}
Course   : ${student.course}
Semester : ${student.semester}
Marks    : ${student.marks}
Status   : ${student.marks >= 40 ? "PASS" : "FAIL"}
`);


