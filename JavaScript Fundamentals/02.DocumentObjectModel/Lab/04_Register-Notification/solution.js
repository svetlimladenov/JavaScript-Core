 function register() {
    document.querySelector("#registerBtn").addEventListener("click", () => MakeRegistration());
    
    function MakeRegistration() {
       debugger;
       let currentUsername = document.querySelector("#username").value;
       if (isBlank(currentUsername)){
         console.log("empty username");
         return;
       }
       let currentEmail = document.querySelector("#email").value;
       if (CheckEmail(currentEmail)){
         console.log("bad email");
         return;
       }
       if (isBlank(currentEmail)){
        return;
       }

       let password = document.querySelector("#password").value;

       if (isBlank(password)){
           console.log("empty password");
           return;
       }

       let outputSection = document.querySelector("#result");
       let successHeading = document.createElement("h1");
       successHeading.innerText = "Successful Registration!";
       outputSection.appendChild(successHeading);
       outputSection.append(`Username: ${currentUsername}`);
       outputSection.appendChild(document.createElement("br"));
       outputSection.append(`Email: ${currentEmail}`);
       outputSection.appendChild(document.createElement("br"));
       let passwordCovered = "*".repeat(password.length);
       outputSection.append(`Password: ${passwordCovered}`);

       document.querySelector("#username").value = "";
       document.querySelector("#email").value = "";
       document.querySelector("#password").value = "";
   }

    function isBlank(str) {
       return (!str || /^\s*$/.test(str));
    }
    function CheckEmail(email) {
        let regex = new RegExp("/(.+)@(.+).(com|bg)/gm");
        return regex.test(email);
    }
 }
