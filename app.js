$(document).ready(function() {
  $("body").click(function() {
    $("h1").css("color", "orange");
    $("h1").css("background-color", "black");
    $("h1").css("width" , "400px");
    $("#box1").fadeOut(2000);
    $("#box1").fadeIn(3000);
    $("#box2").fadeOut(5000);
    $("#box2").fadeIn(2000);
    $("#box3").animate({
      opacity: 0.25,
      width: "70%"
    }, 2000, function() {
      $("#box3").animate({
        opacity: 1,
        width: 100
      }, 2000);
    });
    $("#box4").slideUp(2000);
    $("#box4").slideDown(2000);
    $("#box5").animate({
      opacity: 0.55,
      width: "50%"
    });
    $("#box6").css("background-color", "darkblue");
    $("#box7").css("width", "150px");
    $("#box8").css("height", "150px");
    $("#box9").css("margin-left", "110px");
    $("#box10").animate({
      left: "600px"
    }, 4000);
  })
});
