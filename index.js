const piano = document.querySelector('.piano');
const pianoКeys = document.querySelectorAll('.piano-key');
const openFullScreen = document.querySelector('.openfullscreen');
const switchButtonsContainer = document.querySelector('.btn-container');
const switchButtons = document.querySelectorAll('.btn');


piano.addEventListener('click', (e) => pianoWithMouse(e));


function pianoWithMouse(e) {

    // on click on piano key, the corresponding key is played
        if (e.target.classList.contains('piano-key')) {

            const pianoNote = e.target.dataset.note;
            const audioSrc = `assets/audio/notes/${pianoNote}.mp3`;
            playPianoAudio(audioSrc);
    

        //on click on piano key, the key goes into active state 
        pianoКeys.forEach((element) => {
            if (element.classList.contains('active')) {
                element.classList.remove('active');
            }
        });
        e.target.classList.add('active');
    }
}



// on keydown on piano key, a note is played 
window.addEventListener('keydown', (e) => {
    if (e.repeat) { return } 
    playKeyAudio(e); 
});

//full screen mode
openFullScreen.addEventListener('click', () => activateFullscreen());

//active and inactive state of the switch buttons differ in style
switchButtonsContainer.addEventListener('click', (e) => {

    if (e.target.classList.contains('btn')) {

        switchButtons.forEach((element) => {
            if (element.classList.contains('btn-active')) {
                element.classList.remove('btn-active');
            }
        });
        e.target.classList.add('btn-active');
    }

});


//functions
function playKeyAudio(e) {

    const audio = new Audio();
    audio.src = `assets/audio/letters/${e.key}.mp3`;
    audio.currentTime = 0;
    audio.play();

}

function playPianoAudio(audioSrc) {

    const pianoAudio = new Audio();
    pianoAudio.src = audioSrc;
    pianoAudio.currentTime = 0;
    pianoAudio.play();

}

function activateFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.webkitRequestFullscreen();
    } else if (document.fullscreenEnabled) {
            document.webkitExitFullscreen();
        }
    }



