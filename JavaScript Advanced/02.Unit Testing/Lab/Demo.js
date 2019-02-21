function solve(number) {
    if (number <= 0)
    {
        throw new Error('Zaebi grumnah');
    }
    return number * 2;
}

try
{
    console.log(solve(-2));
}catch (e) {
    console.log(e.message);
}
