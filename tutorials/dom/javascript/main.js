console.log("hi");

document.querySelector("#img-0").addEventListener("click",function(){
    //document.querySelector("#img-0").style.display = "none";
    document.querySelector("#img-1").style.visibility = "visible";
})

document.querySelector("#img-1").addEventListener("click",function(){
    document.querySelector("#img-2").style.visibility = "visible";
})
document.querySelector("#img-2").addEventListener("click",function(){
    document.querySelector("#img-3").style.visibility = "visible";
})
document.querySelector("#img-3").addEventListener("click",function(){
    document.querySelector("#img-4").style.visibility = "visible";
})
document.querySelector("#img-4").addEventListener("click",function(){
    
})
