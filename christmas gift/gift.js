
var gifts = ["violin", "camera"];

var randomgift;

var started = false;

$("body").addClass("closed");

$(".openbutton").click(function(){
    if(!started){
        var randomgiftno = Math.floor(Math.random()*2);
        randomgift = gifts[randomgiftno];
        $("body").addClass("opened");
        $("."+randomgift).css("display", "inline-block");
        $(".openbutton").text("Want another gift? Click me!");
        started = true;
    }else{
        $("body").removeClass("opened");
        $("body").addClass("closed");
        $("."+randomgift).css("display", "none");
        $(".openbutton").text("Click me to open the gift!");
        started = false;
    }
})