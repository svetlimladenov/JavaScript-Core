function solve() {
    let expression = "";
    let expressionOutput = document.getElementById("expressionOutput");
    Array.from(document.querySelectorAll("button")).forEach(button => {
        button.addEventListener('click', function () {
            if (button.textContent === "="){
                console.log(expression.trim());
                GetResultOfExpression(expression);
                return;
            }
            if (!isNaN(button.textContent) || button.textContent === ".")
            {
                expression += button.textContent;
            }
            else if(button.textContent === "Clear"){
                expression = "";
                document.querySelector("#resultOutput").textContent = "";
                document.getElementById("expressionOutput").textContent = "";
            }
            else{
                expression += " " + button.textContent + " ";
            }
            expressionOutput.textContent = expression;
        });

        function GetResultOfExpression(expression) {
            let expressionElements = expression.split(" ");
            let leftOperant = Number(expressionElements[0]);
            let operator = expressionElements[1];
            let rightOperant = Number(expressionElements[2]);
            if (!leftOperant || !operator || !rightOperant){
                document.querySelector("#resultOutput").textContent = "NaN";
                return;
            }
            let result = eval(`${leftOperant} ${operator} ${rightOperant}`);
            document.querySelector("#resultOutput").textContent = result;
        }
    })
}

