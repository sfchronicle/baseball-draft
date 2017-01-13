require("./lib/social"); //Do not delete

["slusser","schulman","shea","killion","jenkins","kroichick"].forEach(function(writer, wdx){
  // set up clicking to update map interactive on mobile
  document.getElementById("button"+writer).addEventListener("click", function() {

    // activating the correct button
    var buttonElements = document.getElementsByClassName("button");
    for(var i = 0; i < buttonElements.length; i++){
      buttonElements[i].className = "button";
    };
    document.getElementById("button"+writer).className += " selected";

    // highlighting the appropriate players
    var cards = document.getElementsByClassName("card");
    for (var i=0; i<cards.length; i++) {
      if (ballots[wdx][cards[i].getAttribute("id")] == "x") {
        cards[i].className = "card active";
      } else {
        cards[i].className = "card";
      }
    }

  });
});
