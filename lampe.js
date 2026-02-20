document.addEventListener('DOMContentLoaded', funktion (){
    var handleClick = function (){
        if (document.querySelector('#Lampe').style.backroundImage === 'url("IMG_1944.png")'){
            document.querySelector('#Lampe').style.backroundImage === 'url("IMG_1943.png")';
            document.querySelector('#Lampe')style.backroundColor = 'rgb(255, 234, 0)';
        }else{
            document.querySelector('#Lampe').style.backroundImage === 'url("IMG_1944.png")';
            document.querySelector('#Lampe')style.backroundColor = 'grey';
        }
    }
        var button = document.querySelector('#Birne');
        button.addEventListener('click', handleClick);



});