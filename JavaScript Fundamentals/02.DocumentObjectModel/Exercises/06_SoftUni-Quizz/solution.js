function solve() {
	let currentAnswers = [];
	let nextQuestion = 1;
    let result = 0;
    let correctAnswers = ["2013", "Pesho", "Nakov"];
	let allQuestions = document.querySelectorAll("section");
	Array.from(document.querySelectorAll("section")).forEach(question => {
	    let button = question.querySelector("button");
	    button.addEventListener('click', function () {
	        if (button.textContent === "Next question") {
	            button.setAttribute("disabled","");
                allQuestions[nextQuestion].style.display = "block";
                nextQuestion++;
            }else{
                let answers = document.querySelectorAll("input");
                for (let i = 0, length = answers.length; i < length; i++)
                {
                    if (answers[i].checked)
                    {
                        currentAnswers.push(answers[i].value);
                    }
                }
                for (let i = 0; i < currentAnswers.length; i++) {
                    if(correctAnswers[i] === currentAnswers[i]){
                        result++;
                    }
                }
                if (result === 3){
                    document.querySelector("#result").textContent = "You are recognized as top SoftUni fan!";
                }else{
                    document.querySelector("#result").textContent = `You have ${result} right answers`;
                }
            }
        })
    });
}