function answerY(){
 
    document.getElementById("answer").innerHTML = '<img src="../img/yes.png" alt="正解">';

    document.getElementById("changeTextColor").style.color = ("#29FF00");

}

function answerN(){

    var img = document.getElementById("answer");
    img.src="../img/no.png";

    document.getElementById("changeTextColor").style.color = ("#29FF00");

}


