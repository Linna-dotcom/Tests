document.addEventListener('DOMContentLoaded', function(){

var handleClick = function () {
    if (document.querySelector('#Lampe').style.backgroundImage === 'url("IMG_1944.png")') {
        document.querySelector('#Lampe').style.backgroundImage = 'url("IMG_1943.png")';
    
    } else {
        document.querySelector('#Lampe').style.backgroundImage = 'url("IMG_1944.png")';
    }

}
    var button = document.querySelector('#Birne');

    button.addEventListener('click', handleClick);






var handleClick = function () {
    if (document.querySelector('#Birne').style.color === 'grey') {
        document.querySelector('#Birne').style.color = 'rgb(255, 234, 0)';
    } else {
        document.querySelector('#Birne').style.color = 'grey';
    }

    //change color to grey

};
var button = document.querySelector('#Birne');

button.addEventListener('click', handleClick);

});