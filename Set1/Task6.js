/* ============================================================
   Task 6: Student Record System — Iterate Over Records
   → Create an array of at least 4 student objects and use a
     loop to print each one's details.
   ============================================================ */

let students = [
    { id: 1, name: "Ananya", marks: 85 },
    { id: 2, name: "Rohan",  marks: 45 },
    { id: 3, name: "Meera",  marks: 92 },
    { id: 4, name: "Kabir",  marks: 38 }
];

for (let i = 0; i < students.length; i++) {
    console.log(`ID: ${students[i].id}, Name: ${students[i].name}, Marks: ${students[i].marks}`);
}

/* ------------------------------------------------------------
   Expected Sample Output:
   ID: 1, Name: Ananya, Marks: 85
   ID: 2, Name: Rohan, Marks: 45
   ID: 3, Name: Meera, Marks: 92
   ID: 4, Name: Kabir, Marks: 38
   ------------------------------------------------------------ */
