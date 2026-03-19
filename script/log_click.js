//鳴る
function Onsound(){
    const log_img_id = document.getElementById("log_dot");
    const log_flex = document.getElementsByClassName("flex");
    //通常
    const img_before = `<img id="log_dot_imag" src="./imag/log/log_dot/log_d0.gif" onmouseover="this.src='./imag/log/log_dot/log_d1.gif'" onmouseout="this.src='./imag/log/log_dot/log_d0.gif'">`;
    
    //鳴るとき
    const img_soundOn = ["imag/log/log_dot/log_d3.gif",
                        "imag/log/log_dot/log_d4.gif",
                        "imag/log/log_dot/log_d5.gif"];
    //原音
    const SampleSound = ["sample/log_samp/sample_k0.wav",
                            "sample/log_samp/sample_k1.wav",
                            "sample/log_samp/sample_m0.wav",
                            "sample/log_samp/sample_m1.wav",
                            "sample/log_samp/sample_m2.wav"];

    if (!log_img_id || !log_flex[0]) return;

    //表情をランダムで決める
    log_img_id.innerHTML = `<img id="log_dot_imag" src="${img_soundOn[rand(3)]}">`;
    
    //原音をランダムで決める
    let soundNum = rand(5);
    const audio = document.createElement('audio');
    audio.src = `${SampleSound[soundNum]}`;
    audio.autoplay = true;

    const log_fukidashi = document.createElement('div'); 
    const tail = document.createElement("div");
    fukidashi(soundNum, log_fukidashi, tail);

    //鳴ったら元の画像に戻す
    audio.onended = (event) => {
        log_img_id.innerHTML = img_before;
        log_fukidashi.remove();
        tail.remove();
    };
}

//乱数
function rand(n){
    return Math.floor(Math.random()*n);
}

//吹き出し
function fukidashi(n, f, t){
    const log_flex = document.getElementsByClassName("flex");
    f.id = "fukidashi";
    log_flex[0].appendChild(f);
    log_flex[0].appendChild(t);
    
    if(n <= 2){
        f.innerHTML = `<br><br><br>
                        <div id="serifu">キーボード.wav</div>`;
    }else{
        f.innerHTML = `<br><br><br>
                        <div id="serifu">マウス.wav</div>`;
    }
}

//まばたきする
function mabataki(){
    const id = document.getElementById("log_dot");
    const img_before = `<img id="log_dot_imag" src="./imag/log/log_dot/log_d0.gif" onmouseover="this.src='./imag/log/log_dot/log_d1.gif'" onmouseout="this.src='./imag/log/log_dot/log_d0.gif'">`;
    //まばたき
    const img_mabataki = `<img id="log_dot_imag" src="./imag/log/log_dot/log_d2.gif">`;

    if (!id) return;

    id.innerHTML = img_mabataki;

    setTimeout(() => {
        id.innerHTML = img_before;
        let randTime = Math.random() * 4000 + 4000;
        setTimeout(mabataki, randTime);
    }, 200);
}

//マウスストーカー
function mouse_stalker(){
    if(!document.getElementById('log_cursor')){
        const cursol = document.createElement('img');
        cursol.id = "log_cursor";
        cursol.src = "imag/log/key/cursol.png";
        cursol.width = "15";
        document.addEventListener('mousemove', function (e) {
            const x = e.clientX ;
            const y = e.clientY ;
            cursol.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
            cursol.style.transition = 'transform 2s linear';
        });
        cursol.style.position = "fixed";
        document.body.appendChild(cursol);
    }
}