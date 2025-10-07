const ztime = document.getElementsByClassName('zchange');
var zimg1 = document.getElementById('img-1');
var zimg2 = document.getElementById('img-2');
var zimg3 = document.getElementById('img-3');
var zimg4 = document.getElementById('img-4');

zimg1.addEventListener("mouseover", function(){
    zimg1.style.zIndex= "20";

});
zimg1.addEventListener("mouseout", function(){
    zimg1.style.zIndex= "-10";

});

zimg2.addEventListener("mouseover", function(){
    zimg2.style.zIndex= "20";

});
zimg2.addEventListener("mouseout", function(){
    zimg2.style.zIndex= "10";

});

zimg3.addEventListener("mouseover", function(){
    zimg3.style.zIndex= "20";

});
zimg3.addEventListener("mouseout", function(){
    zimg3.style.zIndex= "10";

});

zimg4.addEventListener("mouseover", function(){
    zimg4.style.zIndex= "20";

});
zimg4.addEventListener("mouseout", function(){
    zimg4.style.zIndex= "10";

});








// var intervalId = setInterval(() => {
    
//     console.log('Interval executed every 1 second');
//     for (let i = 0; i < 50; i++) {
        
//     console.log("The number is " + i);
//     if(i == 10){
//         console.log(" shift 1");
//         document.getElementById('img-1').style.zIndex = "-1";
//          document.getElementById('img-2').style.zIndex = "0";
//         document.getElementById('img-3').style.zIndex = "3";
//        document.getElementById('img-4').style.zIndex = "2";

//     }
//     if ( i == 20){
//         console.log(" shift 2")
//         document.getElementById('img-1').style.zIndex = "3";
//        document.getElementById('img-2').style.zIndex = "1";
//         document.getElementById('img-3').style.zIndex = "-1";
//        document.getElementById('img-4').style.zIndex = "-2";
//     }
//     if ( i == 40){
//         console.log(" shift 3")
//         document.getElementById('img-1').style.zIndex = "0";
//        document.getElementById('img-2').style.zIndex = "2";
//         document.getElementById('img-3').style.zIndex = "-1";
//        document.getElementById('img-4').style.zIndex = "-2";
//     }   
//     if (i == 50)
//     {
//         clearInterval(intervalId);
//     }
// }

// }, 1000);




