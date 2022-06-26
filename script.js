document.addEventListener("DOMContentLoaded",
    function(e){
        document.addEventListener("keydown",
            function(e){
                if(e.key === "q"){
                    alert("this is Q!")
                }
            }
        )

        let keydown = document.querySelector("#keydown")
        keydown.addEventListener("keydown",
            function(e){
                console.log(e.target.value)
            }
        )
        
        let change = document.querySelector("#change")
        change.addEventListener("change",
            function(e){
                console.log(e.target.value)
            }
        )
        
        
        let input = document.querySelector("#input")
        input.addEventListener("input",
            function(e){
                console.log(e.target.value)
            }
        )

        let range = document.querySelector("#range")
        range.addEventListener("change",
            function(e){
                console.log("change!")
            })
    }
)