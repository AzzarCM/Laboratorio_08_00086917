window.addEventListener('load', main);

function main() {
    var i = 0;
    var counter_text = document.getElementById('character-count');
    var comment_content = document.getElementById("input-comment");

    comment_content.addEventListener('keydown', function (e) {

        if (i != 255) {
            if (e.keyCode == 8 && i != 0) {
                i--;
            } else {
                i++;
            }
        }
        if(i == 255 && e.keyCode == 8){
            i--;
        }
        counter_text.textContent = i;
        console.log(e.keyCode);
    }, false);
}


