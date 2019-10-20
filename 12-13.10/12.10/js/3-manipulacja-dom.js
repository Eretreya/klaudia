let tekstPierwsz = $('#paragraf').text();
console.log(tekstPierwsz);

$(".paragraf").html("Ala <strong>ma</strong> kota");

$(".paragrafnext").append(" Treść na końcu selektora");
$(".paragrafnext").after("Treść");
$(".paragrafnext").prepend(" Treść na końcu selektora 2");
$(".paragrafnext").before("Treść 2");

// usuwanie elementu i zawartości (usunęlo <strong>ma</strong>)
$('strong').remove();
// usuwa zawartość elementu
$(".paragraf").empty();
// dodawanie css
$(".paragrafnext").css("color","blue");
$(".paragrafnext").css({"font-size": "3em","color": "purple"});
$("input#imie").val("Klaudia");
$('h1').attr("imie","Marian");
$('[imie]').css('color','violet');
