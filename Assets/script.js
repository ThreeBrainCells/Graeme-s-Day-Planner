
var saveBtn=$('.saveBtn')


var update=function(){
    //jQuery version of
    // document.getElementById("clock").innerHTML=moment().format('MMMM DD YYYY, h:mm:ss a');
    $('#clock').html(moment().format('MMMM DD YYYY, h:mm:ss a'));
}

setInterval(update, 1000)

//uses moment.js to compare current hour to hour within input blocks, then changes their color.
function changeTime(){
    var currentHour = parseInt(moment().format('H'));

    console.log(currentHour)

    $('.input-group-text').each(function (){
        var currentBlock = parseInt($(this).attr('data-time'))
 

        if (currentBlock < currentHour){

            $(this).addClass("past")
        }else if(currentBlock == currentHour){

            $(this).addClass("present")
        }else if (currentBlock > currentHour){

            $(this).addClass("future")
        }

        //use jQuery to grab the ID of the current block's span with the time string
        //compare currentBlock time with currentHour
        //add css class .past .present or .future depending on comparision results.
    })
}



//retrieve items from local storage and replace the input's placeholder text with the stored items.
function getSaved(){
    $('#9am').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("9"))
    $('#10am').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("10"))
    $('#11am').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("11"))
    $('#12pm').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("12"))
    $('#1pm').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("13"))
    $('#2pm').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("14"))
    $('#3pm').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("15"))
    $('#4pm').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("16"))
    $('#5pm').parent().siblings('.form-control').attr('placeholder', localStorage.getItem("17"))
  

}

//put init function here to trigger other functions.
function init(){
    getSaved();
    changeTime();
};
//upon clicking save button, change placeholder text to the typed value, and put said value in local storage.

$('.saveBtn').on("click",function(){
    var savedTask=$(this).parent().siblings('.form-control').val();
    var savedTime=$(this).parent().siblings('.input-group-prepend').children().attr('data-time')

    localStorage.setItem(savedTime, savedTask);
});

init()

