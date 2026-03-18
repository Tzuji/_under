let cont = 1.5;
let skew = 3;

function triggerCrash() {

    document.body.style.filter = "contrast(" + cont + ")";
    document.body.style.transform = "skewX(" + skew + "deg)";
    cont+=1.0;
}