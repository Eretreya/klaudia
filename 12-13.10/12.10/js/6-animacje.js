$ (function (){
    $('p').hide(3000).show(3000);
    $('h1').fadeOut(3000).fadeIn(3000);
    $('h2').slideUp('2000').slideDown('2000');
    $(function animacja() {
        console.log("Zakończono animacje");
        $('h3').animate({"font-size":"1em","padding-left":"0px"},2000);
    });

$('h3').animate({'font-size': "3em", "padding-left":"50px"}, 2000, animacja );

});
    $( function() {
        var state = true;
         if ( state ) {
            $( "h2" ).animate({
              backgroundColor: "#aa0000",
              color: "#fff",
              width: 500
            }, 1000 );
        }
        else {
            $( "h2" ).animate({
              backgroundColor: "#fff",
              color: "#000",
              width: 240
            }, 1000 );
          }
          state = !state;
        };
      } );