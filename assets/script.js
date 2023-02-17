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
    // Load saved user input from localStorage
    $(".description").each(function () {
      var timeBlockId = $(this).parent().attr("id");
      var savedDescription = localStorage.getItem(timeBlockId);
    
      if (savedDescription) {
        $(this).val(savedDescription);
      }
    });
    
    // Add a click event listener to the save buttons
    $(".saveBtn").on("click", function () {
      // Get the id of the containing time-block
      var timeBlockId = $(this).parent().attr("id");
    
      // Get the user input
      var userInput = $(this).siblings(".description").val();
    
      // Save the user input
      localStorage.setItem(timeBlockId, userInput);
    });
 
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
