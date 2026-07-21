/* ============================================================
   Task 12: Student Record System — Arrow Function Version
   → Rewrite the pass/fail function from Task 11 as an arrow
     function and call it with a different set of values.
   ============================================================ */

const getStatusArrow = (name, marks) => {
    return marks >= 40 ? `${name}: PASS` : `${name}: FAIL`;
};

console.log(getStatusArrow("Tanvi", 72));
console.log(getStatusArrow("Aditya", 33));

/* ------------------------------------------------------------
   Expected Sample Output:
   Tanvi: PASS
   Aditya: FAIL
   ------------------------------------------------------------ */
