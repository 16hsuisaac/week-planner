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
