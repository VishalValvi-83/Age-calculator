function calculatedob() {
    const dob = document.getElementById('dob').value;
    const dobDate = new Date(dob);
    const today = new Date();
    const current = today.toLocaleDateString();
    const age = today.getFullYear() - dobDate.getFullYear();
    const month = today.getMonth() - dobDate.getMonth();
    if (month < 0 || (month === 0 && today.getDate() < dobDate.getDate())) {
        age--;
    }
    document.getElementById('result').innerHTML = `Result : Today is ${current} and Your age is ${age}`;
}