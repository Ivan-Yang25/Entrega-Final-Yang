document.addEventListener('DOMContentLoaded', () => {

    //Agrandar el card

    let button = document.querySelectorAll('.card');

    button.forEach(buttons => {
        buttons.addEventListener('click', () => {
            
            if(buttons.classList.contains('extend')) {

                buttons.classList.remove('extend');

            } else {

                buttons.classList.add('extend');

            };
        });
    });
});