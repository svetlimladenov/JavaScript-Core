const foo = () => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve('Hello from 2s later');
        },2000);
    }));
});

async function bar() {
    await foo();
}

bar();

console.log('I am the last one');