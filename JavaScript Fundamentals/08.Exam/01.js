function solve(examPoints,  homeworksCompleted, totalHomeworks) {
    let grade = 0;
    let examPercent = examPoints / 400;
    let totalPoints = 90 * examPercent;

    
    let b = totalHomeworks / homeworksCompleted * 10;
    if (!isFinite(b))
    {
        console.log(2.00.toFixed(2));
        return;
    }
    totalPoints += b;
    grade = 3 + 2 * (totalPoints - 100 / 5) / (100 / 2);
    
    if (grade > 6.00)
    {
        grade = 6.00;
    }
    if (grade < 3.00)
    {
        grade = 2.00;
    }
    if (examPoints === 400)
    {
        grade = 6.00;
        console.log(grade.toFixed(2));
    }else{
        console.log(grade.toFixed(2));
    }
}
solve(200,0,0);