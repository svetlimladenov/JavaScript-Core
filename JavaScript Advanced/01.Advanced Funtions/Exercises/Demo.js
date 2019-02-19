const human = (() => {
    const humanActions = {
        walk : (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`)
        },
        run : (speed, easing, direction) => {
            console.log(`${speed} ${easing} ${direction}`)
        },
        climb : (speed, easing, direction, height) => {
            console.log(`${speed} ${easing} ${direction} ${height}`)
        }
    };
    const speed = 1;
    const easing = "InOut";

    const result = {};

    Object.keys(humanActions).forEach((key) => {
        result[key] = function() {
            const arr = [speed,easing];
            for (let i = 0; i < arguments.length; i++) {
                arr.push(arguments[i]);
            }
            const action = humanActions[key];
            action.apply(null,arr);
        }
    });

    return result;
    // return {
    //     walk : (direction) => humanActions.walk(speed,easing,direction),
    //     run : (direction) => humanActions.run(speed,easing,direction),
    // }
})();

human.run("Home");
human.walk("Work");

