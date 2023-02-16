$(function () {
  var currentHour = dayjs().format("H");

  // Loop over all time-blocks
  $(".time-block").each(function () {
    // Get the id of the current time-block
    var timeBlockId = $(this).attr("id");
  
    // Get the hour of the current time-block by parsing the id string
    var timeBlockHour = parseInt(timeBlockId.split("-")[1]);
  
    // Compare the current time-block hour to the current hour
    if (timeBlockHour < currentHour) {
      // Add "past" class for past
      $(this).addClass("past");
    } else if (timeBlockHour == currentHour) {
      // Add"present" class for this hour
      $(this).addClass("present");
    } else {
      // Otherwise, add the "future" class
      $(this).addClass("future");
    }
  });
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    //
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
    // $("#currentDay").text(dayjs().format("dddd, MMMM D"));
 
// Get the current time using Day.js
var now = dayjs();

// Function to update the current time on the page
function updateCurrentTime() {
  var currentDayEl = $("#currentDay");
  currentDayEl.text(now.format("dddd, MMMM D, h:mm A"));
}

// Call the function initially to set the current time
updateCurrentTime();

// Set an interval to update the time every second
setInterval(function() {
  now = dayjs(); // Update the current time
  updateCurrentTime(); // Update the time on the page
}, 1000);
  });
