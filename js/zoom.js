/*ZOOM*/
$(document).ready(function () {
    $('img.light-zoom').lightzoom({
        zoomPower   : 3,    //Default
        glassSize   : 300,  //Default
    });
});

/*---*/

/**/
/*при ширене икрана меньше 1025px убирает эффект приближения */
  if(screen.width < 1025){
    let rem = document.querySelectorAll('.light-zoom');

    rem.forEach((elem) => {
        elem.classList.remove('light-zoom');
    });
}

/*-----------------------------------------------------------*/
