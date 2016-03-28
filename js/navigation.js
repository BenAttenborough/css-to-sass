/**
 * Created by ben on 26/03/2016.
 */

console.log("navigation.js working");

//$(".main-nav ul").hide();

$(".mobile-menu a").click( function(){
    event.preventDefault();
    console.log("Menu clicked");
    $(".main-nav ul").toggle( "slow" );
});

$( window ).resize(function() {
    //Reshow menu if tablet and above
    if ( $( window ).width() > 600 ) {
        $(".main-nav ul").show();
    }
});