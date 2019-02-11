function solve(examPoints, completedH, maxH) {
    if (examPoints === 400)
    {
        console.log(6.00.toFixed(2));
        return ;
    }
    let examPercent = examPoints / 400;
    let totalPoints = 90 * examPercent;

    let bonus = 0;
    if (completedH > 0)
    {
        bonus = completedH / maxH * 10;
    }
    totalPoints = totalPoints + bonus;
    let grade = 3 + 2 * (totalPoints - 20) / (50);
    if (grade > 6.00)
    {
        grade = 6.00;
    }
    if (grade < 3.00)
    {
        grade = 2.00;
    }
    console.log(grade.toFixed(2));
}
solve(300, 10, 10);