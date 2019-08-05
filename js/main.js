/*----- constants -----*/
const storyline = {
    begin: '',

    stroll: 'It was a beautiful night, cool and brisk, the light of the street lanterns cascading across the cobblestone street as Ada and Henry walked through the park. Ada gripped tighter to her lovers arm, he was a good one, quick to anger sometimes sure- but under that rough exterior was a kind man; she knew it. Lightning flashed and cracked across the sky, some distance away. "Should we head home?" Henry muttered',
//btn1
    bushNoises: 'As you turn around and start making your way back home, the green and overgrown bushes on your right begin to shake violently...',
//btn2
    husbandDeath1: 'You continue to walk... you begin to notice that it is silent... that\'s strange, not a soul in sight. Suddenly a thundering and a flash. Even stranger, it was right before you... Where is Henry?? You glance down and see only his...legs? Blood spouts from his lower torso as Henry\'s bottom half collapses in a heap in front of you',
//btn1

};

const pickedChoice = {
    begin: {'btn1': 'let us begin', 'btn2': '< >'},

    stroll: {'btn1': 'head home early', 'btn2': 'let\'s keep walking'},

    bushNoises: {'btn1': 'investigate', 'btn2': 'let\'s go'},

    husbandDeath1: {'btn1': 'RUN!', 'btn2': 'Find the rest of Henry'},

    begin: {'btn1': 'let us begin', 'btn2': '< >'},

    begin: {'btn1': 'let us begin', 'btn2': '< >'},

    begin: {'btn1': 'let us begin', 'btn2': '< >'},

    begin: {'btn1': 'let us begin', 'btn2': '< >'},

    begin: {'btn1': 'let us begin', 'btn2': '< >'},

    begin: {'btn1': 'let us begin', 'btn2': '< >'},
};

/*----- app's state (variables) -----*/
let story, ending;


/*----- cached element references -----*/
const msgElem = document.getElementById('msg');
const btn1 = document.getElementById('choice-one')
const btn2 = document.getElementById('choice-two')


/*----- event listeners -----*/
document.querySelector('choice-one').addEventListener('click', storyChoice1);
document.querySelector('choice-two').addEventListener('click', storyChoice2);


/*----- functions -----*/
init();

function init(evt) {
    if (story === storyline.begin) {
        story = storyline.stroll;
    };
    render();
}

function render() {
    msgElem.textContent = story;
    storySwitch()
}

function storyChoice1(evt) {
    if (story === storyline.stroll) {
        story = storyline.bushNoises;
    } else {

    }
    render();
}