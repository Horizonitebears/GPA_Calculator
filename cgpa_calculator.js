
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const usn = document.getElementById("usn").value;

    // You can perform further validations or authentication here if needed

    // Show the CGPA form after login
  
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("cgpaFormContainer").style.display = "block";

    // Show the VTU grade system note
    document.getElementById("vtuGradeSystemNote").style.display = "block";
});

document.getElementById("cgpaForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const numSubjects = parseInt(document.getElementById("numSubjects").value);
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const grade = parseFloat(document.getElementById(`subject${i}Grade`).value);
        const credits = parseFloat(document.getElementById(`subject${i}Credits`).value);

        totalGradePoints += grade * credits;
        totalCredits += credits;
    }

    const cgpa = totalGradePoints / totalCredits;

    document.getElementById("cgpaResult").innerHTML = "<h2>Your CGPA is: " + cgpa.toFixed(2) + "</h2>";
});

document.getElementById("numSubjects").addEventListener("input", function(event) {
    const numSubjects = parseInt(event.target.value);
    const subjectInputsDiv = document.getElementById("subjectInputs");

    subjectInputsDiv.innerHTML = ""; // Clear previous inputs

    for (let i = 1; i <= numSubjects; i++) {
        const subjectInput = `
            <div class="form-group">
                <label for="subject${i}Grade">Subject ${i} Grade:</label>
                <input type="number" id="subject${i}Grade" min="0" max="10" step="1" required>
                <label for="subject${i}Credits">Credits:</label>
                <input type="number" id="subject${i}Credits" min="1" required>
            </div>
        `;
        subjectInputsDiv.innerHTML += subjectInput;
    }

    subjectInputsDiv.style.display = "block"; // Show the subject inputs
});
