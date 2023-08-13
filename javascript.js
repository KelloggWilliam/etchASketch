for (let i=0; i<16; i++){
    var div = document.createElement('div');
    div.style.width = "100px";
    div.style.height = "100px";
    div.style.background = "white";
    div.className = "item";
    div.id = i;
    document.getElementById("cont").appendChild(div);

}

const hoverList = document.getElementsByClassName('item');

function inEvent(e) {
    hoverList[e.target.id].style.background = "black";
    console.log(e.type + e.target.id);
}

/*
function outEvent(e) {
    hoverList[e.target.id].style.background = "red";
    console.log(e.type + e.target.id);
}
*/



for (var i=0; i<hoverList.length; i++){
    hoverList[i].addEventListener('mouseenter', inEvent);
    //hoverList[i].addEventListener('mouseleave', outEvent);
}



