// Javascript checks
////////////////////
if (jQuery){
    console.log("jQuery enabled");
} else {
    console.log("!! ERROR !! jQuery is unavailable");
}


// Global variables
///////////////////
ul = $("ul");


// Add an eventlistener to the text input for when
// the user presses the enter key, the to do gets added to the list of li's
$("#addToDoDiv").keyup(function(e) {
    var keyCode = e.keyCode;
    if (keyCode == 13) {
        // ENTER pressed, add the to do
        var newToDo = $("input").val();
        $("#toDoList").append("<li><span class=\"delete\"> <i class=\"fas fa-trash-alt\"></i> </span>" + newToDo);

        // Clear the textbox
        $("input").val("");

        console.log("New To Do added, having text: " + newToDo);
    }
});


// Check off todos by clicking
ul.on("click", "li", function(){
    $(this).toggleClass("tickedOff");
});


// Click on X to delete the todoItem
ul.on("click", "span", function(){
    // fade it out over 500ms, then remove the element after fadeout completes
    $(this).parent().fadeOut(250, function(){
        // "this" now being the parent element (the li);
        this.remove();
    })
});


// Click on plus sign to hide or show the new To Do text field
$("#plusSign").click(function(){
    $("input").toggleClass("hidden");
    console.log("plus sign clicked!")
})