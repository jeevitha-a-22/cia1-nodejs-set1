let students = [
    { id: 1, name: "Ananya", marks: 85 },
    { id: 2, name: "Rohan",  marks: 45 },
    { id: 3, name: "Meera",  marks: 92 },
    { id: 4, name: "Kabir",  marks: 38 }
];

students.push({ id: 5, name: "Priya", marks: 97 });

console.log("After adding new student:");
for (let i = 0; i < students.length; i++) {
    console.log(`ID: ${students[i].id}, Name: ${students[i].name}, Marks: ${students[i].marks}`);
}

let topStudent = students[0];
for (let i = 1; i < students.length; i++) {
    if (students[i].marks > topStudent.marks) {
        topStudent = students[i];
    }
}
console.log(`Student with highest marks: ${topStudent.name} (${topStudent.marks} marks)`);


