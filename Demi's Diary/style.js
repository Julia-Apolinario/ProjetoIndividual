window.onload = function(){
    document.querySelector(".menuMobile").addEventListener("click", function(){
        console.log(document.querySelector(".menu nav ul").style.display)
        if(document.querySelector(".menu nav ul").style.display == "flex"){

            document.querySelector(".menu nav ul").style.display = "none";
        } else {
            
            document.querySelector(".menu nav ul").style.display = "flex";
        }
    })
}