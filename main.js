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
}

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
