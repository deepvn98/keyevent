function topup() {
    let moveup = document.getElementById("mover");
    moveup.style.top = parseInt(moveup.style.top) - 10 +"px";
}
function topdown() {
    let movedown = document.getElementById("mover");
    movedown.style.top = parseInt(movedown.style.top) + 10 +"px";
}
function left() {
    let moveleft = document.getElementById("mover");
    moveleft.style.left = parseInt(moveleft.style.left) - 10 + "px";
}
function right() {
    let moveright = document.getElementById("mover");
    moveright.style.left = parseInt(moveright.style.left) + 10 + "px";
}
function moveselection(evt) {
    switch (evt.keyCode) {
        case 37:
            left();
            break;
        case 38:
           topup();
            break;
        case 39:
           right();
            break;
        case 40:
          topdown();
    }
}
function docready() {
    document.addEventListener("keydown",moveselection)
}