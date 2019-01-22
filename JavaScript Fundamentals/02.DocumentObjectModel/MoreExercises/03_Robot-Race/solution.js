function solve(){
   let softUniObj = {bot:"softuni", distanceTraveled : 0, hasFinished : false};
   let googleObj = {bot:"google", distanceTraveled : 0, hasFinished : false};
   let facebookObj = {bot:"facebook", distanceTraveled : 0, hasFinished : false};
   let bots = [softUniObj, googleObj, facebookObj];
   let finishedBotsCount = 1;
   document.querySelector("button").addEventListener('click', function () {
      let robotName = document.getElementsByTagName("input")[0].value;
      let move = document.getElementsByTagName("input")[1].value.split(" ");
      let moveLenght = Number(move[1]);
      let moveDirection = move[0].toLowerCase();
      if (!moveLenght || moveLenght < 0 || !moveDirection){
         document.getElementsByTagName("input")[0].value = "";
         document.getElementsByTagName("input")[1].value = "";
         return;
      }
      let currentBot = bots.filter(obj => {return obj.bot === robotName.toString()});
      let currentBotDistanceTraveled = currentBot[0].distanceTraveled;
      if (moveDirection === "forward"){
         if (currentBotDistanceTraveled + moveLenght >= 80){
            if (!currentBot[0].hasFinished){
               currentBot[0].distanceTraveled = 80;
               document.querySelector("#" + robotName).style.marginLeft = currentBot[0].distanceTraveled + "%";
               currentBot[0].hasFinished = true;
               let winMessage = "";
               if (finishedBotsCount === 1){
                  winMessage = `${robotName.toUpperCase()} WIN THE RACE!`; //correct
               }else{
                  winMessage = `${robotName.toUpperCase()} FINISHED ${finishedBotsCount}`; //correcct
               }
               finishedBotsCount++;
               document.querySelector("span").textContent = winMessage;
            }else{
               document.querySelector("span").textContent = `${robotName} can't move so forward`; //correct
            }
         }
         else{
            currentBot[0].distanceTraveled = currentBotDistanceTraveled + moveLenght;
            document.querySelector("#" + robotName).style.marginLeft = currentBot[0].distanceTraveled + "%";
            document.querySelector("span").textContent = `${robotName} move ${moveLenght} forward`; //correct
         }
      }else{
         if(currentBot[0].hasFinished){
            document.getElementsByTagName("input")[0].value = "";
            document.getElementsByTagName("input")[1].value = "";
            return;
         }
         if (currentBotDistanceTraveled - moveLenght <= 0) {
            document.querySelector("span").textContent = `${robotName} can't move so backward`; //correct

         }else{
            currentBot[0].distanceTraveled = currentBotDistanceTraveled - moveLenght;
           // document.querySelector("#" + robotName).style.marginLeft = currentBot[0].distanceTraveled + "%";
           // document.querySelector("span").textContent = `${robotName} was distracted and he got behind with ${moveLenght} meters.`;
         }
      }
      document.getElementsByTagName("input")[0].value = "";
      document.getElementsByTagName("input")[1].value = "";
   })
}
	