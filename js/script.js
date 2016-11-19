'use strict';

var $rightArrow = $('.arrow-right');
var $leftArrow = $('.arrow-left');
var pageNumber = 1;
var $body = $('#text-section');

$(() => {
  $rightArrow.on('click', () => {
    pageNumber = pageNumber + 1;
    if (pageNumber === 5) {
      pageNumber = 4;
      return console.log('Stop that!');
    }
    determinePage();
  });
  $leftArrow.on('click', () => {
    pageNumber = pageNumber - 1;
    if (pageNumber === 0) {
      pageNumber = 1;
      return console.log('Stop that.');
    }
    determinePage();
  });
});

function determinePage() {
  if (pageNumber === 1) {
    $body.load('partials/step-one.partial', () => {
      let $steps = $('.steps-text');
      $steps.text('Step One: Make a Repo & Add Collaborators');
    });
  } else if (pageNumber === 2) {
    $body.load('partials/step-two.partial' () => {
      let $steps = $('.steps-text');
      $steps.text('Step Two: Clone, Pull & Branch');
    });
  } else if (pageNumber === 3) {
    $body.load('partials/step-three.partial' () => {
      let $steps = $('.steps-text');
      $steps.text('Step Three: Work, Add, Commit, Pull & Push');
    });
  } else if (pageNumber === 4) {
    $body.load('partials/step-four.partial' () => {
      let $steps = $('.steps-text');
      $steps.text('Step Four: Handle the Pull Request, Merge & Repeat');
    });
  }
}
