/* ============================================================
   Task 13: Student Record System — Format Output with
   Template Literals
   → Use template literals to print a formatted summary of a
     student's details.
   ============================================================ */

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

/* ------------------------------------------------------------
   Expected Sample Output:

   Student Summary
   ---------------
   Name     : Ishaan
   Course   : Node & Express JS
   Semester : 5
   Marks    : 88
   Status   : PASS
   ------------------------------------------------------------ */
