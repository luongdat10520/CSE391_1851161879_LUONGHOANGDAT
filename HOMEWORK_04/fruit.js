var jFruit     = document.getElementById('txtFruit');
var jShowFruit = document.getElementById('btnShowFruit');
var jImgFruit  = document.getElementById('imgFruit');
alert('Co chay den day') 
jShowFruit.addEventListener('click',showResult);
function showResult(){
    var getFruit = jFruit.value;
    jImgFruit.setAttribute('src','images/'+getFruit+'.jpg');
}
