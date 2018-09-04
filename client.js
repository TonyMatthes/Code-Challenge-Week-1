$(document).ready(onReady);

function onReady(){
    $('#createButton').on('click', addDiv)
}

function addDiv(){
    $('body').append('<div class=colorBox></div');
}