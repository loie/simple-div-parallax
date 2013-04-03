$(document).ready(function(){
    $('#eins').click(function(event) {
        event.preventDefault();
        $('#sky').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
        $('#mountains').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
        $('#forest').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
        $('#info').animate({backgroundPosition: '0px 0px'}, 600, 'swing');
    });

    $('#zwei').click(function(event) {
        event.preventDefault();
        $('#sky').animate({backgroundPosition: '-66px 0px'}, 600, 'swing');
        $('#mountains').animate({backgroundPosition: '-166px 0px'}, 600, 'swing');
        $('#forest').animate({backgroundPosition: '-667px 0px'}, 600, 'swing');
        $('#info').animate({backgroundPosition: '-1667px 0px'}, 600, 'swing');
    });

    $('#drei').click(function(event) {
        event.preventDefault();
        $('#sky').animate({backgroundPosition: '-133px 0px'}, 600, 'swing');
        $('#mountains').animate({backgroundPosition: '-333px 0px'}, 600, 'swing');
        $('#forest').animate({backgroundPosition: '-1333px 0px'}, 600, 'swing');
        $('#info').animate({backgroundPosition: '-3333px 0px'}, 600, 'swing');
    });

    $('#vier').click(function(event) {
        event.preventDefault();
        $('#sky').animate({backgroundPosition: '-200px 0px'}, 600, 'swing');
        $('#mountains').animate({backgroundPosition: '-500px 0px'}, 600, 'swing');
        $('#forest').animate({backgroundPosition: '-2000px 0px'}, 600, 'swing');
        $('#info').animate({backgroundPosition: '-5000px 0px'}, 600, 'swing');
    });
});

