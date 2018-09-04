let counter = 0

$(document).ready(onReady);

function onReady() {
    $('#createButton').on('click', addDiv);
    $(document).on('click', '.swapButton', swapColor);
    // $('.').on('click', '.deleteButton', deleteBox)

}

function addDiv() {
    counter++;
    console.log(counter);
    $('body').append(`
    <div class=" Red">
        <p>${counter}</p>
        <button class="swapButton">Swap</button>
        <button class="deleteButton">Delete</button>
    </div`);
}

function swapColor() {
    let container = $(this).closest('div');
    console.log(container)
    if (container.attr('class') == 'Red' ){
        container.toggleClass('Yellow');
        container.toggleClass('Red');
    }
    else{
        container.toggleClass('Yellow', false);   
        container.toggleClass('Red', true);
           
    }
}

// function deleteBox(){
    // i know i know how to do this, just didn't get to it after figuring out the swap

// }