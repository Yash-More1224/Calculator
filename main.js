const equalkey = document.getElementById("ip");
equalkey.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        findVal();
    }
})

function clearIP(){
    const ip = document.getElementById("ip");
    ip.value = "";
}

function enterVal(val){
    const ip = document.getElementById("ip");
    ip.value += val;
    //console.log("fn called");   
} 

function findVal(){
    const ip = document.getElementById("ip");
    ip.value = eval(ip.value);
}