/*----- constants -----*/
const storyline = {
    begin: '',

    stroll: 'It was a beautiful night, cool and brisk, the light of the street lanterns cascading across the cobblestone street as Ada and Henry walked through the park. Ada gripped tighter to Henry\'s arm, he was a good one, quick to anger sometimes sure- but under that rough exterior was a kind man; she knew it. Lightning flashed and cracked across the sky, some distance away. "Should we head home?" Henry muttered',
//btn1
    bushNoises: 'As you turn around and start making your way back home, the green and overgrown bushes on your right begin to shake violently...',
//btn2
    husbandDeath1: 'You continue to walk... but you begin to notice the silence... that\'s strange, not a soul in sight. Suddenly a thundering and a flash. Even stranger, it was right before you... Where is Henry?? You glance down and see only his...legs? Blood spouts from his lower torso as Henry\'s bottom half collapsed in a heap in front of you',
//btn1
    investigateBush: 'you slowly approach the bush- in your experience, "curiosity killed the cat" is a myth... Just as you finish the thought, a man bursts from the bushes screaming',
//btn2
    run: 'you run away, nothing good has ever come from bushes and noises',

    strangerDeath: 'Are you ok??! You choke out in utter shock, your eyes start to take in his current condition: he appears to have gashes and long cuts all over his body. Before he can answer further, there\'s a loud pop- there protruding from his chest is a clawed hand',

    run2: 'running for dear life, you trip on a loose stone, smashing your face hard against the pavement, the world goes dark just for a moment, but your gaze falls upon what appears to be a large stick just off the path.',  
    
    stick: 'you stumble to your feet, grabbing the stick, you blindly swing back at the whirlwind of noise that is fast approaching you.  You are greeted with a sickening thud.',

    run3: 'there\'s no time to spare, you get back to your feet as best you can and start running away... but you are far too slow and defenseless and realize this too late as two strong hands rip your head from your body',

    stickAgain: 'you swing down upon the creature again, another sickening thud but this time accompanied by a loud cry from this...thing. Warm blood splashes your arms and face.',

    stickAgain2: 'you bring the stick down- again and again, the creature starts to will itself up as you begin to tire- someone shouts behind you "ahoy there! ye\'kay mate??!?"',

    youGotThis: 'I got this!! You yell with a big grin as you playfully brandish your stick at the downed creature, attempting to make your best Captain Morgan over the body, you fail to notice the monster whipping around and tearing off both your arms from their sockets. You bleed out and die.',

    callForHelp: 'PLEASE HELP! you gutter as best you can as the creature firmly grabs ahold of your left arm and pulls.',

    helpArrives: 'the old man comes running, the glint of a revolver catches your eye just as the creature yanks you down- a muffled flash and \'Blam! Blam! Blam!\'...the bloody hand around your arm loosens and falls.',

    fin: 'Thank you so much! you gasp, "yer alright now" the man retorts as he helps you to your feet. "What was that thing?" as you both turn to where the dead creature lays. The body is gone, glancing around the creature is nowhere to be found, and the air is silent.'
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
const cursorBlink = document.querySelector('p span');


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

