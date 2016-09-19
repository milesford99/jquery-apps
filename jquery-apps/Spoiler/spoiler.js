//Problem: Prevent people from seeing spoilers
//Solution:Reveal spoilers through user interaction
//1 hide spoiler
$(".spoiler span").hide();
//2add a button
$(".spoiler").append("<button>Reveal Spoiler</button>");
//3when button pressed
$("button").click(function(){
$("button").append("<button>Reveal Spoiler</button>").hide();
$(".spoiler span").show();


});
    //3-1show when button pressed
    //3-2get rid of button
