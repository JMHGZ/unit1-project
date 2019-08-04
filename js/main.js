/*----- constants -----*/



/*----- app's state (variables) -----*/
let story, result, ending;


/*----- cached element references -----*/
const msgElem = document.getElementById('msg');
const btn1 = document.getElementById('choice-one')
const btn2 = document.getElementById('choice-two')


/*----- event listeners -----*/
document.querySelector('choice-one').addEventListener('click', storyChoice);
document.querySelector('choice-two').addEventListener('click', storyChoice);


/*----- functions -----*/
init();

function init() {
    results = {
        alive: 'a',
        dead: 'd'
    };
    fin = null;
    render();
}