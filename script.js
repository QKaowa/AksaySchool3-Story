document.addEventListener('DOMContentLoaded', function () {

    var btn5 = document.getElementById('btn-fifth');
    var overlay = document.getElementById('overlay');


    (new Image()).src = '3.png';
    (new Image()).src = '2.png';


    btn5.addEventListener('click', function () {
        overlay.src = '3.png';
        overlay.classList.add('is-clickable');
    });


    overlay.addEventListener('click', function () {
        if (overlay.src.includes('3.png')) {
            overlay.src = '2.png';
            overlay.classList.remove('is-clickable');
        }
    });

});