//submit button to add quest text
$("#quest_page").on("submit", function (event) {
    event.preventDefault();
    //console.log("click");
    let questText = $("[name=quest_text]").val();
    //console.log(questText);
    //adds a new <li> with input type of a button to complete
    let newLi = ("<li name='quest' class='quest_text col-sm-8'> " + questText + "<input type='button' value='complete'/></li>");
    //console.log(newLi);
    //appends the new <li> here.
    $(".quest_in_game").append(newLi);
});
//this add a checkbox to the <li>
$(".quest_in_game").on("click", "li", function () {
    let completedQuest = $(this).text();
    //console.log(completedQuest);
    let questFinished = ("<li class='list_quest col-sm-8' value='this is a test' name='finished_quest'> <input class='quest_checked_boxed' type='checkbox' name='working_on'>" + completedQuest + "</li>");
    //console.log(questFinished);
    $(".completed_quest").append(questFinished);
    $(this).remove();
});
//this is for the checkbox to register if checked to strike through otherwise unchecked it unstrikes it....
$(".completed_quest").on("click", ".quest_checked_boxed", function () {
    //console.log("click")
    var ifChecked = $(this).prop("checked");
    //console.log(ifChecked)
    if (ifChecked) {
        let done = $(this).parent().css("text-decoration", "line-through");
        //console.log(done)
    } else {
        $(this).parent().css("text-decoration", "none");
    }
});
//double click to pull up the input box and save box
$(".completed_quest").on("dblclick", ".list_quest", function () {
    //console.log("click")
    let test = $(this).css("color", "blue").append("<input type='text' name='complete' /> <button type='text' name='save'>Save</button>");
    //console.log(test);
});
//this is suppose to click the save box and enter the new value
$(".completed_quest").on("click", function (event) {
   event.preventDefault();
 let questTextSave = $("input[name='complete']").val();
   console.log(questTextSave);
//let savedQuestText = 
});
