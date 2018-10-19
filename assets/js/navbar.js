
window.addEventListener("load",main,false); 

function main(){
    var flag = true;
    var botonMenu = document.getElementById("btn-menu");
    var navy = document.getElementsByTagName("nav");
    botonMenu.addEventListener("click",() => {
        if (flag) {
            flag = !flag;
            navy.style.marginLeft = "0%";
        }
        else {
            flag = true;
            navy.style.marginLeft = "-100%";
        }
    }, false);
}