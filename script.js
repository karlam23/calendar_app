$(document).ready(function (){

    for (let i = 0; i < 5; i++) {
    console.log(i);

  }
  // jQuery Version 
  console.log($('.saveBtn'))
  $('.saveBtn').on('click', function() {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
//saves local storage!
    localStorage.setItem(time, text); 
 });

for (let i = 8; i <= 17; i++) {
  $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
}
  
var currentHour = dayjs().format('H');

// Loop through each time-block element
$('.time-block').each(function() {
  var timeBlockId = parseInt($(this).attr('id').split('hour')[1]);

  // Compare the time-block hour with the current hour
  if (timeBlockId < currentHour) {
    $(this).removeClass('present future').addClass('past');
  } else if (timeBlockId === currentHour) {
    $(this).removeClass('past future').addClass('present');
  } else {
    $(this).removeClass('past present').addClass('future');
  }
});

console.log("This: ", this);   // "this" should reference the THING that was CLICKED ON --> jQuery syntax for grabbing the EVENT that happened.
      // What logic do we want to happen. When a Button is clicked?  
    // Traversing(moving around) the DOM
    console.log("Siblings: ", $(this).siblings());
    console.log("Parent: ", $(this).parent());
    console.log("TextArea: ", $(this).siblings('.description').val());
    console.log("Parent ID attribute: ", $(this).parent().attr('id'));

    for (let i = 8; i >= 17; i--) {
      $("#hour" + i + " .description").val(localStorage.getItem("hour" + i));
    }
    
    // timeTracker();
    var formattedDate = dayjs().format('dddd, MMMM D, YYYY');
    console.log('Formatted date:', formattedDate);
    
    var timex = $("#currentday").text(formattedDate);
    console.log('timex:', timex);
    

  /*var timex= $("#currentday").text(dayjs().format ('dddd, MMMM D, YYYY'))
  console.log('hey')
    console.log(timex)*/


})
 
