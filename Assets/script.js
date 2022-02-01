
var saveBtn=$('.saveBtn')


var update=function(){
    //jQuery version of
    // document.getElementById("clock").innerHTML=moment().format('MMMM DD YYYY, h:mm:ss a');
    $('#clock').html(moment().format('MMMM DD YYYY, h:mm:ss a'));
}

setInterval(update, 1000)

//uses moment.js to compare current hour to hour within input blocks, then changes their color.
function changeTime(){
    var currentHour = moment().format('hha').toString();
    console.log(currentHour)

    $('.input-group').each(function (){
        $('.input-group').children().each(function(){
        var currentBlock = $('span').attr('id')
            console.log(currentBlock);
        if (currentBlock <= currentHour){
            $('.input-group').addClass(".past").removeClass('present future')
        }else if(currentBlock == currentHour){
            $('.input-group').addClass(".present").removeClass('past future')
        }else{
            $('.input-group').addClass(".future").removeClass('present future')
        }
        });

        //use jQuery to grab the ID of the current block's span with the time string
        //compare currentBlock time with currentHour
        //add css class .past .present or .future depending on comparision results.
    })
}



//retrieve items from local storage and replace the input's placeholder text with the stored items.
// function getSaved(){
    
//     $('.form-control').each(function(){
//         var oldTask = localStorage.getItem("saved task");
//         $('.form-control').placeholder.val(oldTask);
        
//     })
// }

//put init function here to trigger other functions.
function init(){
    // getSaved();
    changeTime();
};
//upon clicking save button, change placeholder text to the typed value, and put said value in local storage.

$('.saveBtn').on("click",function(){
    var savedTask=$(".form-control").val();
    $('.form-control').placeholder.val(savedTask);
    localStorage.setItem("saved task", savedTask);
});

init()

