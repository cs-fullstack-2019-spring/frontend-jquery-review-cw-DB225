// This first Count all Paragraphs button when clicked, should draw a 3px green border around all the <p> elements in the document,
// and display an alert box that displays The number ofparagraphs in the document is NUMBER where ``NUMBER``` is number of paragraphs

$("#btn1").click(function () {
    var x = 0;
    $("p").toggleClass("borderBtn1").each(function () {
        x++;
    });
    alert("The number of paragraphs in the document is " +x);
});


// This second Count all Paragraphs in First DIV button when clicked, should draw a 3px red border around all the <p> elements in the 1st DIV,
// and display an alert box that displays The number of paragraphs in the First DIV is NUMBER where ``NUMBER``` is number of paragraphs
$("#btn2").click(function () {
    var x = 0;
    $("div.div1>p").toggleClass("borderBtn2").each(function () {
        x++;
    });
    alert("The number of paragraphs in the First DIV is " +x);
});


// This third Count all Paragraphs in Second DIV button when clicked, should draw a 3px blue border around all the <p> elements in the 2nd DIV,
// and display an alert box that displays The number of paragraphs in the Second DIV is NUMBER where ``NUMBER``` is number of paragraphs
$("#btn3").click(function () {
    var x = 0;
    $("div.div2>p").toggleClass("borderBtn3").each(function () {
        x++;
    });
    alert("The number of paragraphs in the Second DIV is " +x);
});


// When page initially displayed, the 1st button should be enabled and the 2nd button should be disabled.
// When the 1st button is clicked, the 2nd button should be enabled, and the first button be disabled.
// Clicking the 2nd button should enable the 1st button and disable the 2nd button and so on, alternating between buttons as they are clicked.
$("#btn4").click(function () {
    if (button4) {
        $("#btn5").removeAttr("disabled");
        $("#btn5").text("Button5");
        button4 = false;
    } else {
        $("#btn5").attr("disabled", "");
        $("#btn5").text("Disabled");
        button4 = true;
    }
});

$("#btn5").click(function () {
    if (button5) {
        $("#btn4").attr("disabled", "");
        $("#btn4").text("Disabled");
        button5 = false;

    } else {
        $("#btn4").removeAttr("disabled");
        $("#btn4").text("Button4");
        button5 = true;
    }
});


var button5 = true;
var button4 = true;