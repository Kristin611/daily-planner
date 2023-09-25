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

    $('.saveBtn').on('click', function() { //I used jQuery to grab the save button to attach a click event listener to it. Every time the saved button is clicked, the user's text will be saved/set in local storage. 
      const textInput = $(this).siblings('.description').val() //I created a textInput value to save user's text. 'this' is used to reference the object I am currently in
      const time = $(this).parent().attr('id')
      //console.log(time, textInput)
      localStorage.setItem(time, textInput) //time is they key and textInput is the value.
    }) 

  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
    function displayTimeBlockColor () {
        let currentHour = dayjs().hour(); //I created a variable for current hour to be able to compare it to the hour in the div for the conditional statements.
        //console.log(currentHour) //this works

        $('.time-block').each( function () { //I grabbed the corresponding element by id (using jQuery). I used a for each loop to iterate over the element using the element's id.
          console.log('h')
          let timeBlockHour = parseInt($(this).attr('id').split('-')[1]); //
          //i+1 moves i over 1 index 
           //.split splitting over everything before wtvr is in()

          if (timeBlockHour < currentHour) { //using conditional statements to apply the appropriate color scheme depending on whether the timeBlockHour is past, present or future.
            console.log(timeBlockHour, currentHour)
            $(this).addClass('past');
          } else if (timeBlockHour === currentHour) {
            $(this).addClass('present');
          } else {
            $(this).addClass('future')
          }
        })

    }  
    displayTimeBlockColor(); //calling the function

    //setInterval(displayTimeBlockColor, 15000)

    

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (let i = 9; i <= 17; i++) { // I created a for loop to iterate through time block ids using index i to retreive items saved in local storage.
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`)) //getItem is to retreive the data from local storage
  }
  
  // TODO: Add code to display the current date in the header of the page.
    
    let currentDate = dayjs().format('dddd, MMMM DD, YYYY'); //I created a variable to store the current day in using Day.js. 
      //console.log(currentDate)
    $('#currentDay').text(currentDate); //used jQuery to grab the corresponding <p> element to display current day and time on webpage. 
    


});

