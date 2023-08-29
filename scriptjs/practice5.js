'use strict';
function buttonClick(){
    let textone = document.getElementById('textone');
    textone.outerHTML = '<h3>'+'Абзац превратился в h3!'+'</h3>';
}
function buttonClickTwo(){
    let texttwo = document.getElementById('texttwo');
    texttwo.outerHTML = '<b>'+texttwo.innerHTML+'</b>';
}
function buttonClickTree(){
    let texttree = document.getElementById('texttree');
    texttree.outerHTML = '<h3>'+texttree.innerHTML+'</h3>';
}
function addition() {
    let a = parseInt(document.getElementById("a").value);
    let b = parseInt(document.getElementById("b").value);
    if (isNaN(a) == true) a = 0;
    if (isNaN(b) == true) b = 0;
    let c = a + b;
    document.getElementById('result').innerHTML = c;
}

function func(){
    let elems = document.getElementsByClassName('a');
    for(let i = 0; i<elems.length; i++){
        elems[i].innerHTML = i+1;
    }
}
// function funcTwo(){
//     let elems = document.getElementsByClassName('a');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
// function funcTree(){
//     let elems = document.querySelectorAll('span.a');
//     for(let i = 0; i<elems.length; i++){
//         elems[i].innerHTML = i+1;
//     }
// }
