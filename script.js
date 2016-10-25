document.getElementById("myBtn").addEventListener("click", tText);


function tText() {

    var tFront = document.getElementById("fTextBox").value;
    var tBack = document.getElementById("bTextBox").value;

    if (tFront !== "Text för framsida" && tBack !== "Text för baksida") {
        document.getElementById("fText").innerHTML = tFront;
        document.getElementById("bText").innerHTML = tBack;
    }
    else if (tFront === "Text för framsida" && tBack !== "Text för baksida") {
        document.getElementById("bText").innerHTML = tBack;
    }
    else if (tFront !== "Text för framsida" && tBack === "Text för baksida") {
        document.getElementById("fText").innerHTML = tFront;
    }
    else {
        alert("Fyll i minst ett textfält");
    }

}

/*this changes the picture to black and the text to white color*/

function changeImageBlack() {
    document.getElementById("tShirtF").style.backgroundImage = "url(pics/tshirt_front_black.jpg)";
    document.getElementById("tShirtB").style.backgroundImage = "url(pics/tshirt_back_black.jpg)";
    document.getElementById("fText").style.color = "white";
    document.getElementById("bText").style.color = "white";
}

/*this changes the picture to white and the text to black color*/
function changeImageWhite() {
    document.getElementById("tShirtF").style.backgroundImage = "url(pics/tshirt_front.jpg)";
    document.getElementById("tShirtB").style.backgroundImage = "url(pics/tshirt_back.jpg)";
    document.getElementById("fText").style.color = "black";
    document.getElementById("bText").style.color = "black";
}
