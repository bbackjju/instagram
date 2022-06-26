document.addEventListener("DOMContentLoaded",
    function(e){
        let nameField = document.querySelector("#name")
        let textField = document.querySelector("#textField")
        let check = document.querySelector("#check")
        let editButton = document.querySelector("#editButton")
        let editNameField = document.querySelector("#editNameField")

        
        editButton.addEventListener("click",
            function(e){
                editNameField.style.display = "block"
                editButton.style.display = "none"
            }
        )

        check.addEventListener("click",
            function(e){
                nameField.textContent = textField.value
                editNameField.style.display = "none"
                editButton.style.display = "inline"
            })

    })