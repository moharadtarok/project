var cpnBtn = document.getElementById("cpnBtn");
var cpnCode = document.getElementById("cpnCode");

cpnBtn.onclick = function() {
    navigator.clipboard.writeText(cpnCode.innerHTML);
    cpnBtn.innerHTML = "COPIED";
    setTimeout(function(){
        cpnBtn.innerHTML = "COPY CODE";
    }, 1000);
}