// ## User Story

// ```md
// AS AN employee with a busy schedule
// I WANT to add important events to a daily planner
// SO THAT I can manage my time effectively
// ```

// ## Acceptance Criteria

// ```md
// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist
// ```
var saveBtn=$('.saveBtn')


var update=function(){
    //jQuery version of
    // document.getElementById("clock").innerHTML=moment().format('MMMM DD YYYY, h:mm:ss a');
    $('#clock').html(moment().format('MMMM DD YYYY, h:mm:ss a'));
}

setInterval(update, 1000)

//uses moment.js to compare current hour to hour within input blocks, then changes their color.
function changeTime(){
    var currentHour = moment().format('hh a');
    console.log(currentHour)

    $('.input-group').each(function (){
        var currentBlock = $('.saveBtn').text;
        console.log(currentBlock);
        if (currentBlock <= currentHour){
            $('.input-group').addClass(".past")
        }else if(currentBlock == currentHour){
            $('.input-group').addClass(".present")
        }else{
            $('.input-group').addClass(".future")
        }
        //use jQuery to grab the ID of the current block's span with the time string
        //compare currentBlock time with currentHour
        //add css class .past .present or .future depending on comparision results.
    })
}
//upon clicking save button, change placeholder text to the typed value, and put said value in local storage.
function saveTask(){

}
//retrieve items from local storage and replace the input's placeholder text with the stored items.
function getSaved(){

}

//put init function here to trigger other functions.
function init(){
    // getSaved();
    changeTime();
};

saveBtn.click(saveTask());

init()

