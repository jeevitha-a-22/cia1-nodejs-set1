const getStatusArrow = (name, marks) => {
    return marks >= 40 ? `${name}: PASS` : `${name}: FAIL`;
};

console.log(getStatusArrow("Tanvi", 72));
console.log(getStatusArrow("Aditya", 33));
