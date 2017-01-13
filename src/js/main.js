require("./lib/social"); //Do not delete

["slusser","schulman","shea","killion","jenkins","kroichick"].forEach(function(writer){
  // set up clicking to update map interactive on mobile
  document.getElementById("button"+writer).addEventListener("click", function() {
    console.log(writer);
    console.log(ballots);
    console.log(ballots[writer]);
    // var sectionElements = document.getElementsByClassName("section");
    var buttonElements = document.getElementsByClassName("button");
    for(var i = 0; i < buttonElements.length; i++){
      // sectionElements[i].className = "section";
      buttonElements[i].className = "button";
    };
    // document.getElementById("section"+section).className += " selected";
    document.getElementById("button"+writer).className += " selected";
  });
});
