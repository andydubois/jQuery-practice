console.log('js');
$( document ).ready( readyNow )

function readyNow(){
    console.log('jq');
    $( '#sayHelloButton' ).on('click', sayHello);
    $('h2').mouseenter(h2MouseEnter);
    $('h2').mouseleave(h2MouseLeave)
} 

function h2MouseEnter() {
    $( this ).css( 'background-color', 'red');
} 

function h2MouseLeave() {
    $( this ).css( 'background-color', 'white');
}

function sayHello() {
    //target input element by ID
    //get the value of the text input
    let outputText = 'Hello, ' + $('#nameInput').val();
    console.log(outputText);
    //empty the input
    $('#nameInput' ).val('');
    //end sayHello
}