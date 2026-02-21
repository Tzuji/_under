let dotImage = null; //document.getElementById("log_dot");
let logSound = document.getElementsByClassName("sound");
let loghanasu = null; //document.getElementById("log_sound_hanasu");

const beforeImage = `<img id="log_dot_imag" src="./imag/log/log_dot/log_d0.gif" onmouseover="this.src='./imag/log/log_dot/log_d1.gif'" onmouseout="this.src='./imag/log/log_dot/log_d0.gif'">`;
const mabatakiImage = `<img id="log_dot_imag" src="./imag/log/log_dot/log_d2.gif">`;

const logImage = ["log_d3.gif", "log_d4.gif", "log_d5.gif"];
const SampleSound = ["sample_k0.wav", "sample_k1.wav", "sample_m0.wav", "sample_m1.wav", "sample_m2.wav"];

let soundNum;
let isLooping = false;

function RandInt(max) {
  return Math.floor(Math.random() * max);
}

function log_update(){
    dotImage = document.getElementById("log_dot");
    loghanasu = document.getElementById("log_sound_hanasu");
}

function choiceSound(){
    dotImage.innerHTML = `<img id="log_dot_imag" src="imag/log/log_dot/${logImage[RandInt(3)]}">`;
    soundNum = RandInt(5);
    const audioSrc = `sample/log_samp/${SampleSound[soundNum]}`;

    const audio = document.createElement('audio');
    audio.src = audioSrc;
    audio.className = "sound";
    audio.autoplay = true;
    hanasu();

    audio.onended = (event) => {
        dotImage.innerHTML = beforeImage;
        loghanasu.innerHTML = "";
    };
}

function hanasu(){
    if(soundNum <= 2){
        loghanasu.innerHTML = `<br><br><br>
                        <div id="log_hanasu">キーボード.wav</div>`;
    }else{
        loghanasu.innerHTML = `<br><br><br>
                        <div id="log_hanasu">マウス.wav</div>`;
    }
}

function log_Onsound(){
    choiceSound();
}

function mabataki(){
    dotImage.innerHTML = mabatakiImage;
    setTimeout(() => {
        dotImage.innerHTML = beforeImage;
    }, 200);
}

function loopMabataki(){
        mabataki();
        const next = RandInt(7)*1000;
        setTimeout(loopMabataki, next);
}
loopMabataki();

