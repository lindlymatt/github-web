'use strict';

var $rightArrow = $('.arrow-1-r');
var $pgTwoRAr;
var $pgTwoLAr;
var $pgThreeRAr;
var $pgThreeLAr;
var $pgFourLAr;
var $body = $('#main-body');

$(() => {

  $rightArrow.on('click', () => {
    $body.load("partials/step-two.partial", () => {
      $pgTwoRAr = $('.arrow-2-r');
      $pgTwoLAr = $('.arrow-2-l');

      $pgTwoRAr.on('click', () => {
        $pgThreeRAr = $('.arrow-3-r');
        $pgThreeLAr = $('.arrow-3-l');

        $pgThreeRAr.on('click', () => {
          $body.load('partials/step-four.partial', () => {
            $pgFourLAr = $('.arrow-4-l');

            $pgFourLAr.on('click', () => {
              $body.load('partials/step-three.partial');
            });
          });
        });

        $pgThreeRAr.on('click', () => {
          $body.load('partials/step-two.partial');
        });
      });

      $pgTwoRAr.on('click', () => {
        $body.load("partials/step-one.partial", () => {
          console.log('Loaded.');
        });
      });
    });
  });

});
