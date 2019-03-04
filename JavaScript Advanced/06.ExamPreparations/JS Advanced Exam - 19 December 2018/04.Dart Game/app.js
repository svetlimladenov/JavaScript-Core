function dart(){
    function getScoreBoard(){
        let board = {};
        let scoreBoardTable = Array.from(document.querySelectorAll('#scoreBoard table tbody tr td'));
        for (let i = 0; i < scoreBoardTable.length; i+=2) {
            let color = scoreBoardTable[i].textContent;
            let score = Number(scoreBoardTable[i + 1].textContent.split(' ')[0]);
            board[color] = score;
        }
        return board;
    }
    let scoreBoard = getScoreBoard();

    let firstPlayerScore = 0;
    let secondPlayerScore = 0;
    let currentTurn = 'first';
    $('#firstLayer').on('click', (e) => {
        e.stopPropagation();
        shoot(e.target.id);
    });
    $('#secondLayer').on('click', (e) => {
        e.stopPropagation();
        shoot(e.target.id);
    });
    $('#thirdLayer').on('click', (e) => {
        e.stopPropagation();
        shoot(e.target.id);
    });
    $('#fourthLayer').on('click', (e) => {
        e.stopPropagation();
        shoot(e.target.id);
    });
    $('#fifthLayer').on('click', (e) => {
        e.stopPropagation();
        shoot(e.target.id);
    });
    $('#sixthLayer').on('click', (e) => {
        e.stopPropagation();
        shoot(e.target.id);
    });

    function shoot(id) {
        let mapCollection = {
            firstLayer : 'Green',
            secondLayer : 'Yellow',
            thirdLayer : 'Orange',
            fourthLayer : 'Red',
            fifthLayer : 'Purple',
            sixthLayer : 'Blue',
        };
        let colorShooted =  mapCollection[id];
        let pointsShooted = scoreBoard[colorShooted];
        if (currentTurn === 'first'){
            document.querySelectorAll('#turns p')[0].textContent = 'Turn on Away';
            document.querySelectorAll('#turns p')[1].textContent ='Next is Home';
            firstPlayerScore += pointsShooted;
            document.querySelector('#Home p').textContent = firstPlayerScore.toString();
            if (firstPlayerScore >= 100){
                document.querySelectorAll('#Home p')[1].style.backgroundColor = 'green';
                document.querySelectorAll('#Away p')[1].style.backgroundColor = 'red';
                finishGame();
            } 
            currentTurn = 'second';
        } else{
            document.querySelectorAll('#turns p')[0].textContent = 'Turn on Home';
            document.querySelectorAll('#turns p')[1].textContent ='Next is Away';
            console.log('second shooted ' + pointsShooted);
            secondPlayerScore += pointsShooted;
            document.querySelector('#Away p').textContent = secondPlayerScore.toString();
            if (secondPlayerScore >= 100){
                document.querySelectorAll('#Home p')[1].style.backgroundColor = 'red';
                document.querySelectorAll('#Away p')[1].style.backgroundColor = 'green';
                finishGame();
            }
            currentTurn = 'first';
        }
    }
    
    function finishGame() {
        $('#firstLayer').unbind('click');
        $('#secondLayer').unbind('click');
        $('#thirdLayer').unbind('click');
        $('#fourthLayer').unbind('click');
        $('#fifthLayer').unbind('click');
        $('#sixthLayer').unbind('click');
    }
}