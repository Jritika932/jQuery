// Create a button , on click of which you should be able to hide a paragraph text, create another button onclick of which this paragraph should be visible

$("#btn1").on("click",function(){
$("p").css("display","none");
});
$("#btn2").on("click",function(){
    $("p").css("display","block");
});

