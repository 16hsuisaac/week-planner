var $addEntry = document.querySelector('.addEntryButton');
var $modal = document.querySelector('.modal-div');
var $submitButton = document.querySelector('.submitButton');

$addEntry.addEventListener('click', modalShow);
$submitButton.addEventListener('click', submit);

function modalShow(event) {
  $modal.setAttribute('class', 'row modal-div justify-center after');
}

function submit(event) {
  event.preventDefault();
  $modal.setAttribute('class', 'row modal-div justify-center before');
  var dataEntry = {
    time: $time.value,
    description: $description.value
  };

  data.days[$day.value].push(dataEntry);
  // console.log($day.value, $time.value, $description.value);

}

var data = {
  days: {
    mon: [],
    tues: [],
    wed: [],
    thurs: [],
    fri: [],
    sat: [],
    sun: []
  }
};

var previousDataEntries = localStorage.getItem('dates-entries');

if (previousDataEntries !== null) {
  data = JSON.parse(previousDataEntries);
}

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('dates-entries', dataJSON);
});

var $day = document.querySelector('[name="Days of the Week"]');
var $time = document.querySelector('[name="Time"]');
var $description = document.querySelector('[name="Description"]');

var $tableRow = document.querySelectorAll('tbody>tr');

for (var i = 0; i < $tableRow.length; i++) {
  var td = $tableRow[i].children;
  // if ()

  td[0].textContent = data.days.mon;

}
// for (var i = 0; i < $tableRow.length; i++) {
//   var td = $tableRow[i].children;
//   // if ()
// }

// var $form = document.querySelector('.submitButton');
// $submitButton.addEventListener('submit', $day.value);

// function submitForm(event) {
//   console.log('day: ', $day);
// }

// submitForm('asdf');
// var times = [];
// var dates = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];
// var entries = {
//   days: {
//     dates: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
//   }
//   // dates: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun']
// };

// for (var d = 0; d < 24; d++) {
//   times.push(null);
// }

// for (var i = 0; i < 7; i++) {
//   // var datesSelected = dates[i];
//   entries.days.dates[i] = times;
//   console.log(times);
// }

// var data = {
//   entries: [],
//   editing: null,
//   day
// }
