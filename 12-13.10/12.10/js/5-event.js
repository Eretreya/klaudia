$(function (){
    $('p').click(function(){
        $(this).css("background-color", "yellow");
    });

})

$('h1').on({
    "click": function () {
        $(this).css("background-color", "orange");
    },
    'mouseleave': function() {
        $(this).css("background-color", "inherit");
    }
});