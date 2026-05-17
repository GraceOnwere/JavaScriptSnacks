const checkStudentScore = (score) =>{

let grade = "";
if (score >= 70)

    grade = "A";

else if (score >= 60)

    grade = "B";

else if (score >= 50)

    grade = "C";

else if (score >= 40)

    grade = "D";

else
    grade = "F";

return grade;
}

console.log(checkStudentScore(80))
