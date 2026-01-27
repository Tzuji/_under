let audioCtx;
let analyser;
let source;
let dataArray;
let animationId;

function startVisualizer(audioElement) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    source = audioCtx.createMediaElementSource(audioElement);

    analyser = audioCtx.createAnalyser();
    analyser.fftSize = 1024; 
    const bufferLength = analyser.fftSize;
    dataArray = new Uint8Array(bufferLength);

    source.connect(analyser);
    analyser.connect(audioCtx.destination);

    const canvas = document.getElementById("visualizer");
    const ctx = canvas.getContext("2d");

    canvas.width = 150;
    canvas.height = 50;

    let lastTime = 0;
    const fps = 12;
    const interval = 1000 / fps;

    function draw(time) {
        animationId = requestAnimationFrame(draw);

        if (time - lastTime < interval) return; 
        lastTime = time;

        analyser.getByteTimeDomainData(dataArray);
        
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.lineWidth = 1;
        ctx.strokeStyle = "white";
        ctx.beginPath();

        const sliceWidth = canvas.width / bufferLength;
        let x = 0;

        const amplitudeMultiplier = 3.5;

        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            let y = (v * canvas.height) / 2;
            y = ((y - canvas.height / 2) * amplitudeMultiplier) + canvas.height / 2;

            if (i === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            x += sliceWidth;
        }

        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.stroke();
    }

    draw();
}

function stopVisualizer() {
    if (animationId) cancelAnimationFrame(animationId);
    if (audioCtx) audioCtx.close();
}

document.addEventListener("DOMContentLoaded", () => {
    const bgm = document.getElementById("bgm");

    if (bgm && !bgm.paused) {
        startVisualizer(bgm);
    }

    bgm.addEventListener("play", () => {
        startVisualizer(bgm);
    });
});