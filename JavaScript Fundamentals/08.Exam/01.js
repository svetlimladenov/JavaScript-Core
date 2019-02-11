function solve(examPoints,  homeworksCompleted, totalHomeworks) {
    let grade = 0;
    let examPercent = examPoints / 400;
    let totalPoints = 90 * examPercent;
    let bonus = 0;
    if (homeworksCompleted > 0 && totalHomeworks > 0 && homeworksCompleted <= totalHomeworks)
    {
        bonus = totalHomeworks / homeworksCompleted * 10;
        if (!isFinite(bonus))
        {
            bonus = 0;
        }
    }

    totalPoints += bonus;

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

    }
    else{
        console.log(grade.toFixed(2));
    }
}
solve(200, 5,5);