// Business logic
function beepboop(numberInput) {
  var numOut = [];

  for (var i = 0; i <= numberInput; i++) {
    if (i.toString().includes("3")) {
      numOut.push("Won't you be my neighbor?");
    } else if (i.toString().includes("2")) {
      numOut.push("Boop!");
    } else if (i.toString().includes("1")) {
      numOut.push("Beep!");
    } else {
      numOut.push(" " + i);
    }
  }
  return numOut;
}

// user interface logic
$(document).ready(function() {
  $("form#beep").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#numberInput").val());
    var output = beepboop(numberInput);

    $("#result").text(output);
  });
});
