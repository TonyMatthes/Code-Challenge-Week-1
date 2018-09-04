let counter = 0

$(document).ready(onReady);

function onReady(){
    $('#createButton').on('click', addDiv);
    
}

function addDiv(){
    counter++;
    console.log(counter);
    $('body').append(`
    <div class="colorBox">
        <p>${counter}</p>
        <button class="swap">Swap</button>
        <button class="delete">Delete</button>
    </div`);
}