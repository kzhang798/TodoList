// Click the item to finish it
$('ul').on('click', 'li', function() {
    $(this).toggleClass("finishedItem");
});

// Click the X to delete an item
$('ul').on('click', 'li>span', function(event) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove()
    });
    event.stopPropagation();
});

// Type an item and click enter to put it in the list
$('input[type="text"]').on('keypress', function(event) {
    if(event.which === 13) {
        var value = $(this).val();
        $('ul').append("<li><span>X</span> " + value + "</li>");
        $(this).val('')
    }
});

var now = new Date();
var hour = Math.floor(now.getHours());
console.log("Current hours: " + hour);

// Change background depending on time of day
// Gradients obtained from uigradient.com
var body = $('body');
if (hour >= 6 && hour < 10) {
    body.css({"background": "#F3904F",
        "background": "-webkit-linear-gradient(to left, #3B4371, #F3904F)",
        "background": "linear-gradient(to left, #3B4371, #F3904F)"});
} else if (hour >= 10 && hour < 14) {
    body.css({"background": "#40E0D0",
        "background": "-webkit-linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)",
        "background": "linear-gradient(to right, #FF0080, #FF8C00, #40E0D0)"});    
} else if (hour >= 14 && hour < 18) {
    body.css({"background": "#ee0979",
        "background": "-webkit-linear-gradient(to right, #ff6a00, #ee0979)",
        "background": "linear-gradient(to right, #ff6a00, #ee0979)"});
} else if (hour >= 18 && hour < 22) {
    body.css({"background": "#4e54c8",
        "background": "-webkit-linear-gradient(to left, #8f94fb, #4e54c8)",
        "background": "linear-gradient(to left, #8f94fb, #4e54c8)"});
} else if ((hour >= 22 && hour < 24) || (hour >= 0 && hour < 2)) {
    body.css({"background": "#0f0c29",
        "background": "-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)",
        "background": "linear-gradient(to right, #24243e, #302b63, #0f0c29)"});
} else if (hour >= 2 && hour < 6) {
    body.css({"background": "#000428",
        "background": "-webkit-linear-gradient(to right, #004e92, #000428)",
        "background": "linear-gradient(to right, #004e92, #000428)"});
}

var shadowHour = hour;
if (hour < 6) {
    shadowHour += 12;
} else if (hour > 19) {
    shadowHour -= 12;
}
// Change box shadow depending on time of day
var horOffset = 12-2*(shadowHour-6);
var verOffset = 12-2*Math.abs(shadowHour-12);
var boxShadow = {};
boxShadow["box-shadow"] = horOffset+"px "+verOffset+"px 3px 6px rgba(76, 76, 76, 0.6)";
$('#container').css(boxShadow);