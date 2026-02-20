document.addEventListener('DOMContentLoaded', function () {
    var handleClick = function () {
        if (document.querySelector('#Lampe').style.backgroundImage === 'url("IMG_1943.png")') {
            document.querySelector('#Lampe').style.backgroundImage = 'url("IMG_1944.png")';
            document.querySelector('#Lampe').style.backgroundColor = 'rgb(255, 255, 255)';
        } else {
            document.querySelector('#Lampe').style.backgroundImage = 'url("IMG_1943.png")';
            document.querySelector('#Lampe').style.backgroundColor = 'grey';
        }
    };
    
    var button = document.querySelector('#Birne');
    button.addEventListener('click', handleClick);
});