/*----- constants -----*/
const storyline = {
    begin: '',

    stroll: 'It was a beautiful night, cool and brisk, the light of the street lanterns cascading across the cobblestone street as Ada and Henry walked through the park. Ada gripped tighter to her lovers arm, he was a good one, quick to anger sometimes sure- but under that rough exterior was a kind man; she knew it. Lightning flashed and cracked across the sky, some distance away. "Should we head home?" Henry muttered',
//btn1
    bushNoises: 'As you turn around and start making your way back home, the green and overgrown bushes on your right begin to shake violently...',
//btn2
    husbandDeath1: 'You continue to walk... but you begin to notice the silence... that\'s strange, not a soul in sight. Suddenly a thundering and a flash. Even stranger, it was right before you... Where is Henry?? You glance down and see only his...legs? Blood spouts from his lower torso as Henry\'s bottom half collapses in a heap in front of you',
//btn1

};

const pickedChoice = {
    begin: {'btn1': 'LET US BEGIN', 'btn2': '...'},

    stroll: {'btn1': 'head home early', 'btn2': 'let\'s keep walking'},

    bushNoises: {'btn1': 'investigate', 'btn2': 'let\'s go'},

    husbandDeath1: {'btn1': 'RUN!', 'btn2': 'Find the rest of Henry'},

    z: {'btn1': 'let us begin', 'btn2': '< >'},

    z: {'btn1': 'let us begin', 'btn2': '< >'},

    z: {'btn1': 'let us begin', 'btn2': '< >'},

    z: {'btn1': 'let us begin', 'btn2': '< >'},

    z: {'btn1': 'let us begin', 'btn2': '< >'},

    z: {'btn1': 'let us begin', 'btn2': '< >'},
};

/*----- app's state (variables) -----*/
let story, ending;


/*----- cached element references -----*/
const msgElem = document.getElementById('game-msg');
const buttonOne = document.getElementById('btn1');
const buttonTwo = document.getElementById('btn2');


/*----- event listeners -----*/
document.getElementById('btn1').addEventListener('click', storyChoice1);
document.getElementById('btn2').addEventListener('click', storyChoice2);
document.getElementById('btn1').addEventListener('click', gameBegin);


/*----- functions -----*/
init();

function init() {
    story = storyline.begin;
    render();
}

function render() {
    msgElem.textContent = story;
    storySwitch()
}

function gameBegin(evt) {
    if (story === storyline.begin) {
        story = storyline.stroll;
    };
    render();
}

function storyChoice1(evt) {
    if (story === storyline.stroll) {
        story = storyline.bushNoises;
    } else {

    }
    render();
}

function storyChoice2(evt) {
    if (story === storyline.stroll) {
        story = storyline.husbandDeath1;
    } else {

    }
    render();
}

function storySwitch() {
    switch (story) {
        case storyline.begin:
            buttonOne.textContent = pickedChoice.begin['btn1'];
            buttonTwo.textContent = pickedChoice.begin['btn2'];
            break;
          default:  
    }
}

