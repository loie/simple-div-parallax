/*global $, document */
$(document).ready(function () {
    'use strict';
    $('#one').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
    });

    $('#two').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '-66px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '-667px 0px'}, 600, 'swing');
    });

    $('#three').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '-133px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '-1333px 0px'}, 600, 'swing');
    });

    $('#four').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '-200px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '-2000px 0px'}, 600, 'swing');
    });

    $('.table').hover(
        function mousein(event) {
            var innerWidth = $('.table').innerWidth();
            $('.table').mousemove( function (e) {
                var fraction, movementScroll1, movementScroll2;
                fraction = e.offsetX / innerWidth;
                movementScroll1 = (-20 * fraction) + 'px';
                movementScroll2 = (-40 * fraction) + 'px';
                $('.scroll1').css({backgroundPosition: movementScroll1 + ' 0px'});
                $('.scroll2').css({backgroundPosition: movementScroll2 + ' 0px'});
            });
        },
        function mouseout(event) {
            $('.scroll1').animate({backgroundPosition: '-10px 0px'}, 600, 'swing');
            $('.scroll2').animate({backgroundPosition: '-20px 0px'}, 600, 'swing');
        }
    );

    $('#left').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
    });

    $('#middle').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '-10px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '-20px 0px'}, 600, 'swing');
    });

    $('#right').click(function (event) {
        event.preventDefault();
        $('.scroll1').animate({backgroundPosition: '-20px 0px'}, 600, 'swing');
        $('.scroll2').animate({backgroundPosition: '-40px 0px'}, 600, 'swing');
    });

   
});

