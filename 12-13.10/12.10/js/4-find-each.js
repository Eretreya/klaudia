$ (function(){
        $('body').find('p').eq(1).css({'color':"red",'border':"1px solid black"});
        $('p').each(function(index){
        $(this).addClass('paragraf-'+ index);
        console.log(jQuery(this));
        });
    });