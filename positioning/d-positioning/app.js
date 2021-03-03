var button = document.getElementById('open');
var close = document.getElementById('close');
var modal = document.getElementById('modal');

// when you open modal you put display type to block
button.addEventListener('click', function (event) {   
    event.preventDefault();                               
    modal.style.display = 'block';                        
});                                                     

// when you close modal you change display type to none
close.addEventListener('click', function (event) {      
    event.preventDefault();                               
    modal.style.display = 'none';                         
}); 