let submit = document.getElementById("submitGrade");

submit.addEventListener("click", () => {
    alert("hey");
    let grade = (parseInt(document.getElementById("asgmt").value) * .50)
        + (parseInt(document.getElementById("asgmt").value) * .10)
        + (parseInt(document.getElementById("asgmt").value) * .10)
        + (parseInt(document.getElementById("asgmt").value) * .20)
        + (parseInt(document.getElementById("asgmt").value) * .10);
    
    let letter = "";
    if (grade >= 94)
    {
        letter = "A";
    }
    else if (grade >= 90)
    {
        letter = "A-";
    }
    else if (grade >= 87)
    {
        letter = "B+";
    }
    else if (grade >= 84)
    {
        letter = "B";
    }
    else if (grade >= 80)
    {
        letter = "B-";
    }
    else if (grade >= 77)
    {
        letter = "C+";
    }
    else if (grade >= 74)
    {
        letter = "C";
    }
    else if (grade >= 70)
    {
        letter = "C-"
    }
    else if (grade >= 67)
    {
        letter = "D+";
    }
    else if (grade >= 64)
    {
        letter = "D";
    }
    else if (grade >= 60)
    {
        letter = "D-";
    }
    else
    {
        letter = "E";
    }

    alert("Percent: " + grade.toFixed(2) + "\nLetter Grade: " + letter);
});