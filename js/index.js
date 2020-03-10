document.getElementById("submitButton").addEventListener("click", function(){
    event.preventDefault();
    for (var i = 0; i < document.getElementsByClassName("optionContainer").length; i++)
        if(document.getElementsByClassName("optionContainer")[i].getElementsByClassName("formElement")[0].value == "") {
            document.getElementsByClassName("optionContainer")[i].getElementsByClassName("error")[0].textContent = "Please provide your name"
            if (document.getElementsByClassName("optionContainer")[i].getElementsByTagName("label")[0].htmlFor == "email") {
                document.getElementsByClassName("optionContainer")[i].getElementsByClassName("error")[0].textContent = "Please provide your email"
            } else
            if (document.getElementsByClassName("optionContainer")[i].getElementsByTagName("label")[0].htmlFor == "phone") {
                document.getElementsByClassName("optionContainer")[i].getElementsByClassName("error")[0].textContent = "Please provide your phone"
            }
        }
        else {
            document.getElementsByClassName("optionContainer")[i].getElementsByClassName("error")[0].textContent = ""
        }
    
        var radios = document.getElementsByName("visit");
        var formValid = false;

        var i = 0;
        while (!formValid && i < radios.length) {
            if (radios[i].checked) formValid = true;
            i++;        
        }

        if (!formValid)
            document.getElementsByClassName("radioForm")[0].getElementsByClassName("error")[0].textContent = "Please provide your option"
        else 
            document.getElementsByClassName("radioForm")[0].getElementsByClassName("error")[0].textContent = ""
        
});

document.getElementById("resetButton").addEventListener("click", function(){
    for (var i = 0; i < document.getElementsByClassName("optionContainer").length; i++) {
        document.getElementsByClassName("optionContainer")[i].getElementsByClassName("formElement")[0].value == ""
        document.getElementsByClassName("optionContainer")[i].getElementsByClassName("error")[0].textContent = ""
        document.getElementsByClassName("radioForm")[0].getElementsByClassName("error")[0].textContent = ""
    }
});
