document.addEventListener('keydown', (e) => MoveDiv(e.key));

let transleteX = 0;
let transleteY = 0;
function MoveDiv(key) {
    console.log(key);
    let square = document.getElementById("square");
    if (key === "ArrowRight"){
        transleteX += 10;
        let currentTranslate = "translate("+ transleteX+"px," + transleteY + "px)";
        square.style.transform = currentTranslate;
    }else if (key === "ArrowLeft"){
        transleteX -= 10;
        currentTranslate = "translate("+ transleteX+"px," + transleteY + "px)";
        square.style.transform = currentTranslate;
    }else if(key === "ArrowDown"){
        transleteY +=10;
        currentTranslate = "translate("+ transleteX+"px," + transleteY + "px)";
        square.style.transform = currentTranslate;
    }else if(key === "ArrowUp"){
        transleteY -=10;
        currentTranslate = "translate("+ transleteX+"px," + transleteY + "px)";
        square.style.transform = currentTranslate;
    }
}