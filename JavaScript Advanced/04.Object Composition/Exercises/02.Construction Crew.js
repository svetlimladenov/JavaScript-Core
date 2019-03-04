function fixWorkoer(workerObj) {
    if (workerObj.handsShaking === false)
    {
        return Object.create(workerObj);
    }

    workerObj.bloodAlcoholLevel += 0.1 * workerObj.weight * workerObj.experience;
    workerObj.handsShaking = false;

    return workerObj;
}

const worker = { weight: 120,
    experience: 20,
    bloodAlcoholLevel: 200,
    handsShaking: true };

console.log(fixWorkoer(worker));