// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
    function displayTimeBlock () {
        const currentHour = dayjs().format('H'); //create a variable for current hour to compare be able to compare it to the hour in the div

        for (let hour = 9; hour <= 17; hour++) { //create a loop to iterate through the avaiable hours 9 AM - 17 PM, i.e., 5 PM
          const timeBlock = $(`#hour-${hour}`) //created a variable to find the corresponding HTML element by id interpolation for example 'hour-9'
        
          if (!timeBlock) {
            continue; //the condition sees if a timeBlock does not exist or is undefined and continues on to the next hour
          }
        }   

        const divHour = $('#hour-9'); //grabbing HTML element with id 'hour-9'
        const timeBlock2 = parseInt(divHour.attr('id').split('-')[1], 10); 

        if (timeBlock2 < currentHour) {
          timeBlock.classList.add('past');
        } else if (timeBlock2 === currentHour) {
          timeBlock.classList.add('present');
        } else {
          timeBlock.classList.add('future')
        }
    }  

    


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
    //var currentDate = $('#currentDay'); -- how come this wouldn't work?
    let currentDate = dayjs().format('dddd, MMMM DD, YYYY');
      console.log(currentDate)
    $('#currentDay').text(currentDate);
    


});

//stopped at adding function and trying to get colors to display. Something needs to change either id needs to be adjusted or 