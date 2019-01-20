function solve() {
   document.querySelectorAll(".profile").forEach(profile => {
       let inputs = profile.querySelectorAll("input");
       let lockRadioButton = inputs[0];
       let unlockRadioButton = inputs[1];

       lockRadioButton.addEventListener('click', function () {
           unlockRadioButton.removeAttribute("checked");
           lockRadioButton.setAttribute("checked", "");
       });

       unlockRadioButton.addEventListener('click', function () {
           lockRadioButton.removeAttribute("checked");
           unlockRadioButton.setAttribute("checked", "");
       });

       let button = profile.querySelector("button");
       button.addEventListener('click', () => {
            if (button.textContent === "Show more")
            {
                if (lockRadioButton.checked){
                    return;
                }
                let hiddenInfo = profile.querySelectorAll("div")[1];
                hiddenInfo.style.display = "block";
                button.textContent = "Hide it";
            }else{
                if (lockRadioButton.checked){
                    return;
                }
                let hiddenInfo = profile.querySelectorAll("div")[1];
                hiddenInfo.style.display = "none";
                button.textContent = "Show more";
            }
       });
   })
} 