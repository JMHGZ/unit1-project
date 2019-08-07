/*----- constants -----*/
    $("#btn1").click(function () {
        $("p").fadeIn(3000);
       
    });

const storyline = {
    begin: '',

    stroll: 'It was a beautiful night, cool and brisk, the light of the street lanterns cascading across the cobblestone street as Ada and Henry walked through the park. Ada gripped tighter to Henry\'s arm, he was a good one, quick to anger sometimes sure- but under that rough exterior was a kind man; she knew it. Lightning flashed and cracked across the sky, some distance away. "Should we head home?" Henry muttered',

    bushNoises: 'As you turn around and start making your way back home, the green and overgrown bushes on your right begin to shake violently...',

    husbandDeath1: 'You continue to walk... but you begin to notice the silence... that\'s strange, not a soul in sight. Suddenly a thundering and a flash. Where is Henry?? You glance down and see only his...legs? Blood spouts from his lower torso as Henry\'s bottom half collapsed in a heap in front of you',

    grabHenry: 'you let out a blood curdling scream as you grab and clutch at Henry\'s remaining half, as the monster rounds back and rips your body to shreds as you stand there in utter shock',

    ripHenryRun: 'In shock, you scream "RUN HENRY!!!" at what is left of Henry\'s lower half, you attempt to run, but the creature easily outpaces you in your current state and rips you to shreds.',

    investigateBush: 'you slowly approach the bush- in your experience, "curiosity killed the cat" is a myth... Just as you finish the thought, a man bursts from the bushes screaming',

    run: 'you run away, nothing good has ever come from bushes and noises',

    chasingYou: 'you are running, but before long, you realize that something, some creature is now on the path behind you and is now galloping after you on all fours, gaining fast.',

    strangerDeath: 'Are you ok??! You choke out in utter shock, your eyes start to take in his current condition: he appears to have gashes and long cuts all over his body. Before he can answer further, there\'s a loud noise- and there protruding from his chest is a clawed hand',

    fight: 'the dying stranger\'s eyes roll back in his head, as you grab this "things" hand yelling "You won\'t get away with this you fiend!!!!!" The creature grabs your shirt, and the top of your head with it\'s other hand, and pop!! You die from a mild head tear.',

    turnAndFight: 'You face your fears, and decide to turn around and fight whatever this thing is. As you do this, the creature runs through you from such speed and velocity, you explode into hundreds of pieces.',

    run2: 'running for dear life, you trip on a loose stone, smashing your face hard against the pavement, the world goes dark just for a moment, but your gaze falls upon what appears to be a large stick just off the path.',  
    
    noticeStick: 'you notice a large stick to the side of the path, it\'s big but not too big to wield.',

    stick: 'you trip on your feet little, but grab the stick, you blindly swing back at the whirlwind of noise that is fast approaching you.  You are greeted with a sickening thud.',

    run3: 'there\'s no time to spare, you get your feet under you as best you can, and start running away... but you are far too slow now, defenseless and realize this too late as two strong hands rip your head from your body',

    stickAgain: 'you swing down upon the creature again, another sickening thud but this time accompanied by a loud cry from this...thing. Warm blood splashes your arms and face.',

    stickAgain2: 'you bring the stick down- again and again, the creature starts to will itself up as you begin to tire- someone shouts behind you "ahoy there! ye\'kay mate??!?"',

    youGotThis: 'I got this!! You yell with a big grin as you playfully brandish your stick at the downed creature, attempting to make your best Captain Morgan over the body, you fail to notice the monster whipping around and tearing off both your arms from their sockets. You bleed out and die.',

    callForHelp: '"Somebody, please help!!" you gutter as best you can, you look all around you, but the night is still and empty other than the creature and yourself. Meanwhile you took too long, and the creature got up and grabs you, using your head as a starter dish.',

    helpArrives: 'the old man can see the terror in your eyes and comes running, the glint of a revolver catches your eye just as the creature yanks you down- a muffled flash and \'Blam! Blam! Blam!\'...the bloody hand around your arm loosens and falls.',

    fin: 'Thank you so much! you gasp, "yer alright now" the man retorts as he helps you to your feet. "What was that thing?" as you both turn to where the dead creature lays. The body is gone, glancing around the creature is nowhere to be found, and the air is still.'
};

const pickedChoice = {

    begin: {'btn1': 'LET US BEGIN', 'btn2': ''},
    stroll: {'btn1': 'head home early', 'btn2': 'let\'s keep walking'},
    bushNoises: {'btn1': 'investigate', 'btn2': 'let\'s go'},
    chasingYou: {'btn1': 'Turn and fight!', 'btn2': 'this running thing is working'},
    husbandDeath1: {'btn1': 'Look around you', 'btn2': 'RUN!'},
    investigateBush: {'btn1': 'get away from this psycho', 'btn2': 'help him'},
    strangerDeath: {'btn1': 'fight the attacker', 'btn2': 'time to run?'},
    noticeStick: {'btn1': 'eh, better yet, RUN!', 'btn2': 'grab the stick'},
    run: {'btn1': 'keep running', 'btn2': 'YOU NEED TO RUN FASTER!'},
    run2: {'btn1': 'grab stick', 'btn2': 'keep running you fool!'},
    run3: {'btn1': 'I can make it', 'btn2': 'keep running you fool!'},
    stick: {'btn1': 'hit it again!', 'btn2': 'ok, now time to run...'},
    stickAgain: {'btn1': 'AGAIN!!', 'btn2': 'I need help!'},
    stickAgain2: {'btn1': 'I got this bro!', 'btn2': 'I need help!'},
    callForHelp: {'btn1': '', 'btn2': ''},
    helpArrives: {'btn1': 'analyze the beast', 'btn2': 'thank the man'},
    youDied: {'btn1': 'YOU WERE TASTY', 'btn2': 'MEAT FOR THE CREATURE'},
    fin: {'btn1': 'to be continued...', 'btn2': '...'},
};



/*----- app's state (variables) -----*/
let story;
// let i = 0;
// let txt = story;
// let speed = 50;

/*----- cached element references -----*/
const msgElem = document.getElementById('game-msg');
const buttonOne = document.getElementById('btn1');
const buttonTwo = document.getElementById('btn2');
const cursorBlink = document.querySelector('span');




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



// function typeTxt() {
//     if (i < txt.length) {
//         document.getElementById('game-msg').innerHTML += txt.charAt(i); 
//         i++;
//         setTimeout(typeTxt, speed);
//     }
// }
/*-----------------------------------------*/


function storyChoice1(evt) {
    if (story === storyline.stroll) {
        story = storyline.bushNoises;
    } else {
        if (story === storyline.bushNoises) {
            story = storyline.investigateBush;
        } else {
            if (story === storyline.investigateBush) {
                story = storyline.chasingYou;
            } else {
                if (story === storyline.chasingYou) {
                    story = storyline.turnAndFight;
                } else {
                    if (story === storyline.noticeStick) {
                        story = storyline.run3;
                    } else {
                        if (story === storyline.run2) {
                            story = storyline.stick;
                        } else {
                            if (story === storyline.stick) {
                                story = storyline.stickAgain;
                            } else {
                                if (story === storyline.stickAgain) {
                                    story = storyline.stickAgain2; 
                                } else {
                                    if (story === storyline.stickAgain2) {
                                        story = storyline.youGotThis;
                                    } else {
                                        if (story === storyline.husbandDeath1) {
                                            story = storyline.noticeStick;
                                        } else {
                                            if (story === storyline.run) {
                                                story = storyline.chasingYou;
                                            } else {
                                                if (story === storyline.strangerDeath) {
                                                    story = storyline.fight;
                                                } else {
                                                    if (story === storyline.helpArrives) {
                                                        story = storyline.fin;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    render();
}

function storyChoice2(evt) {
    if (story === storyline.stroll) {
        story = storyline.husbandDeath1;
    } else {
        if (story === storyline.husbandDeath1) {
            story = storyline.ripHenryRun;
        } else {
            if (story === storyline.run) {
                story = storyline.run2;
            } else {
                if (story === storyline.bushNoises) {
                    story = storyline.run;
                } else {
                    if (story === storyline.chasingYou) {
                        story = storyline.run2;
                    } else {
                        if (story === storyline.run2) {
                            story = storyline.run3;
                        } else {
                            if (story === storyline.stick) {
                                story = storyline.run3;
                            } else {
                                if (story === storyline.stickAgain) {
                                    story = storyline.callForHelp; 
                                } else {
                                    if (story === storyline.stickAgain2) {
                                        story = storyline.helpArrives;
                                    } else {
                                        if (story === storyline.noticeStick) {
                                            story = storyline.stick;
                                        } else {
                                            if (story === storyline.investigateBush) {
                                                story = storyline.strangerDeath;
                                            } else {
                                                if (story === storyline.strangerDeath) {
                                                    story = storyline.run2;
                                                } else {
                                                    if (story === storyline.helpArrives) {
                                                        story = storyline.fin;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    render();
}

function storySwitch() {
    switch (story) {
        case storyline.begin:
            buttonOne.textContent = pickedChoice.begin['btn1'];
            buttonTwo.textContent = pickedChoice.begin['btn2'];
            break;
        case storyline.bushNoises:
            buttonOne.textContent = pickedChoice.bushNoises['btn1'];
            buttonTwo.textContent = pickedChoice.bushNoises['btn2'];
            break;    
        case storyline.husbandDeath1:
            buttonOne.textContent = pickedChoice.husbandDeath1['btn1'];
            buttonTwo.textContent = pickedChoice.husbandDeath1['btn2'];
            break;
        case storyline.noticeStick:
            buttonOne.textContent = pickedChoice.noticeStick['btn1'];
            buttonTwo.textContent = pickedChoice.noticeStick['btn2'];
            break;     
        case storyline.ripHenryRun:
            buttonOne.textContent = pickedChoice.youDied['btn1'];
            buttonTwo.textContent = pickedChoice.youDied['btn2'];
            break;     
        case storyline.stroll:
            buttonOne.textContent = pickedChoice.stroll['btn1'];
            buttonTwo.textContent = pickedChoice.stroll['btn2'];
            break; 
        case storyline.investigateBush:
            buttonOne.textContent = pickedChoice.investigateBush['btn1'];
            buttonTwo.textContent = pickedChoice.investigateBush['btn2'];
            break;
        case storyline.strangerDeath:
            buttonOne.textContent = pickedChoice.strangerDeath['btn1'];
            buttonTwo.textContent = pickedChoice.strangerDeath['btn2'];
            break;
        case storyline.fight:
            buttonOne.textContent = pickedChoice.youDied['btn1'];
            buttonTwo.textContent = pickedChoice.youDied['btn2'];
            break;
        case storyline.chasingYou:
            buttonOne.textContent = pickedChoice.chasingYou['btn1'];
            buttonTwo.textContent = pickedChoice.chasingYou['btn2'];
            break;
        case storyline.turnAndFight:
            buttonOne.textContent = pickedChoice.youDied['btn1'];
            buttonTwo.textContent = pickedChoice.youDied['btn2'];
            break; 
        case storyline.run:
            buttonOne.textContent = pickedChoice.run['btn1'];
            buttonTwo.textContent = pickedChoice.run['btn2'];
            break;    
        case storyline.run2:
            buttonOne.textContent = pickedChoice.run2['btn1'];
            buttonTwo.textContent = pickedChoice.run2['btn2'];
            break;
        case storyline.run3:
            buttonOne.textContent = pickedChoice.youDied['btn1'];
            buttonTwo.textContent = pickedChoice.youDied['btn2'];
            break;
        case storyline.stick:
            buttonOne.textContent = pickedChoice.stick['btn1'];
            buttonTwo.textContent = pickedChoice.stick['btn2'];
            break;
        case storyline.stickAgain:
            buttonOne.textContent = pickedChoice.stickAgain['btn1'];
            buttonTwo.textContent = pickedChoice.stickAgain['btn2'];
            break;    
        case storyline.stickAgain2:
            buttonOne.textContent = pickedChoice.stickAgain2['btn1'];
            buttonTwo.textContent = pickedChoice.stickAgain2['btn2'];
            break;
        case storyline.youGotThis:
            buttonOne.textContent = pickedChoice.youDied['btn1'];
            buttonTwo.textContent = pickedChoice.youDied['btn2'];
            break; 
        case storyline.callForHelp:
            buttonOne.textContent = pickedChoice.youDied['btn1'];
            buttonTwo.textContent = pickedChoice.youDied['btn2'];
            break;
        case storyline.helpArrives:
            buttonOne.textContent = pickedChoice.helpArrives['btn1'];
            buttonTwo.textContent = pickedChoice.helpArrives['btn2'];
            break;    
        case storyline.fin:
            buttonOne.textContent = pickedChoice.fin['btn1'];
            buttonTwo.textContent = pickedChoice.fin['btn2'];
            break;
          default:  
    }
}

