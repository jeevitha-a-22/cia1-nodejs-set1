/* ============================================================
   Task 8: Student Record System — Add & Find
   → Use push() to add a new student to the array.
   → Write a loop to find the student with the highest `marks`.
   ============================================================ */

let students = [
    { id: 1, name: "Ananya", marks: 85 },
    { id: 2, name: "Rohan",  marks: 45 },
    { id: 3, name: "Meera",  marks: 92 },
    { id: 4, name: "Kabir",  marks: 38 }
];

// Add a new student using push()
students.push({ id: 5, name: "Priya", marks: 97 });

console.log("After adding new student:");
for (let i = 0; i < students.length; i++) {
    console.log(`ID: ${students[i].id}, Name: ${students[i].name}, Marks: ${students[i].marks}`);
}

// Find the student with the highest marks
let topStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > topStudent.marks) {
        topStudent = students[i];
    }
}
console.log(`Student with highest marks: ${topStudent.name} (${topStudent.marks} marks)`);

/* ------------------------------------------------------------
   Expected Sample Output:
   After adding new student:
   ID: 1, Name: Ananya, Marks: 85
   ID: 2, Name: Rohan, Marks: 45
   ID: 3, Name: Meera, Marks: 92
   ID: 4, Name: Kabir, Marks: 38
   ID: 5, Name: Priya, Marks: 97
   Student with highest marks: Priya (97 marks)
   ------------------------------------------------------------ */
