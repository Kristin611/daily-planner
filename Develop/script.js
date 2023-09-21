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

  // 1. Use the id to grab the button element to add a click event listener to it using jQuery, but they all have different ids so....
      //a. to access div#hour-9 using the DOM: document.body.children[1].children[0-8]
      //ex. const target = document.body.children[1].children[0-8]
      //ex. const saveBtn9 = document.body.children[1].children[0].children[2] or 
        
  // 2. When save button is clicked,  user input is saved in local storage

    //function saveUserInput() {
    // const textInput = document.body.children[1].children[0].children[1].value // grabbing text area for div#hour-9--should I create a loop so I don't have to do this for each div?
    // console.log(textInput)

    // const text = localStorage.getItem('text') //storing user text into variable 'text'
    // textInput.textContent = text // actual user text being stored into text variable
      //}

    $('.saveBtn').on('click', function() {
      const textInput = $(this).siblings('.description').val()
      const time = $(this).parent().attr('id')
      console.log(time, textInput)
      localStorage.setItem(time, textInput)
    }) //grabbing save button for to create event listener

    

  
        
  

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
    function displayTimeBlockColor () {
        let currentHour = dayjs().hour(); //create a variable for current hour to be able to compare it to the hour in the div
        //console.log(currentHour) //this works

        // const divIDs = ['hour-9', 'hour-10', 'hour-11', 'hour-12', 'hour-13', 'hour-14', 'hour-15', 'hour-16', 'hour-17'];
        //console.log(divIDs) //this works

        $('.time-block').each( function () {
          console.log('h')
          let timeBlockHour = parseInt($(this).attr('id').split('-')[1]); //grabbing the element by id (using jQuery) and looping through each div id in order to compare it to currentHour. i+1 moves i over 1 index 
          //console.log(timeBlockHour) //I think this is working? .spit splitting over everything before wtvr is in()

          if (timeBlockHour < currentHour) {
            console.log(timeBlockHour, currentHour)
            $(this).addClass('past');
          } else if (timeBlockHour === currentHour) {
            $(this).addClass('present');
          } else {
            $(this).addClass('future')
          }
        })

    }  
    displayTimeBlockColor();

    setInterval(displayTimeBlockColor, 15000)

    

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  for (let i = 9; i <= 17; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
  }
  
  // TODO: Add code to display the current date in the header of the page.
    //var currentDate = $('#currentDay'); -- how come this wouldn't work?
    let currentDate = dayjs().format('dddd, MMMM DD, YYYY');
      //console.log(currentDate)
    $('#currentDay').text(currentDate);
    


});

