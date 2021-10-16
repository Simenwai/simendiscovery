function setUpEvent(){
    //show more / less
    var content = document.getElementById("content_teknologi");
    var BTN = document.getElementById("show-more");
    BTN.onclick = function(){
        if (content.className == "open"){
            content.className = "";
            BTN.innerHTML = "Show More";
        } else {
            content.className = "open";
            BTN.innerHTML = "Show less";
        }
    };
}

window.onload = function(){ //sørger for at det ikke lases opp javascript før vinduet er lastet opp
    setUpEvent(); 
}