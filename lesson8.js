function funcMul(){
let a = document.getElementById("but1").value
let b = document.getElementById("but2").value
alert("the solution is:"+a*b)
}
function funcPlus(){
    let a = document.getElementById("but1").value
    let b = document.getElementById("but2").value
    alert("the solution is:" +((+a)+(+b)))
}
function funcPow(){
    let a = document.getElementById("but1").value
    let b = document.getElementById("but2").value
    alert("the solution is:"+a**b)
}
function funcSave(){
    let a = document.getElementById("but3").value
    let b = document.getElementById("but4").value 
    alert("hello "+(a || "guest") + " your pass is:" +" "  +( b || "1234"))  
}

    