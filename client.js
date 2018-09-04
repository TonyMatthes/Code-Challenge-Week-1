let counter = 0

$(document).ready(onReady);

function onReady(){
    $('#createButton').on('click', addDiv);
}

function addDiv(){
    counter++;
    console.log(counter);
    $('body').append(`
    <div class="colorBoxRed">
        <p>${counter}</p>
        <button class="swapButton">Swap</button>
        <button class="deleteButton">Delete</button>
    </div`);
}