$("#RedSection").addClass("invisible");
$("#GreenSection").addClass("invisible");

$("#btnRed").click(ShowRed);
$("#btnGreen").click(ShowGreen);

function ShowRed(){
  $(".Red").fadeIn(300);
  $(".Red").removeClass("invisible"); 
  $(".Green").fadeOut(100);
  $(".Green").addClass("invisible");
  $("#btnGreen").addClass("grey");
  $("#btnRed").removeClass("grey");  
}

function ShowGreen(){
  $(".Green").fadeIn(300);
  $(".Green").removeClass("invisible");
  $(".Red").fadeOut(100);
  $(".Red").addClass("invisible");
  $("#btnRed").addClass("grey");  
  $("#btnGreen").removeClass("grey");  
}