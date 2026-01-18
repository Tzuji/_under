const utauchara = document.getElementById("utau");

function nagori() {
    utauchara.innerHTML = nagori_info;
    audio = document.getElementById("audio");
    makeDraggableAll("draggable");
}

function log() {
    utauchara.innerHTML = log_info;

    let log_dot = 0;
    if (log_dot == 0) {
        log_update();
        loopMabataki();
        log_dot++;
    }

    audio = document.getElementById("audio");
    makeDraggableAll("draggable");
}

function ushio() {
    utauchara.innerHTML = ushio_info;
    audio = document.getElementById("audio");
    makeDraggableAll("draggable");
}

const nagori_info = `<div id="chara">
                    <div>
                        <div id="name">像音ナゴリ<br>Katane Nagori</div>
                        <div id="info">年齢 : 17(本人談)<br>性別 : 不明<br>サイズ : 横・奥行30cm前後 縦8cm前後<br>重量 : 56kg</div>
                        <div id="inst">→<a href="https://bowlroll.net/file/337141" style="padding:3px"
                                target="_blank">Download</a><audio id="audio"
                                src="sample/赤とんぼ_nagori.wav"></audio><br><br>
                            <div>sample : <span onclick="play()" class="button">再生</span> <span onclick="pause()"
                                    class="button">停止</span></div><br>
                            エンジン : TIPS
                        </div>
                    </div>
                    <div>
                        <div class="about">風邪ひいたときに作った単独音源。<br>音域によっては中性的にも女性的にも聴こえると思います。</div>
                        <div class="about">
                            スピーカーとプロジェクターが搭載された謎の機械。<br>外部ケースが古くガムテープで補強されるなど雑な修繕がされている。移動機能も無く自分で動くことも出来ないので結構困っている。<br>
                            プロジェクターで様々なホログラムを映し出すことが出来る。青年期の人間を映すことが多いが、本人曰くこれが本来の姿らしい。
                        </div>
                    </div>
                </div>
                <div style="height:0px;">
                    <div class="draggable" style="left:-100px; top:0px; width: 240px; z-index: 5;">
                        <div class="tabTitle" style="background: blue;color: white;">front</div>
                        <div class="tabDesign" style="border-color: blue;"><img src="imag/nagori/nagori_front.png"
                                alt="" class="visual"></div>
                    </div>
                    <div class="draggable" style="left:0px; top:-150px; width: 240px; z-index: 3;">
                        <div class="tabTitle" style="background: blue; color: white;">back</div>
                        <div class="tabDesign" style="border-color: blue;"><img src="imag/nagori/nagori_back.png" alt=""
                                class="visual"></div>
                    </div>

                    <div class="draggable" style="left:460px; top:-850px; width: 250px; z-index: 5;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/free/penga/00082.png" style="width: 250px;">
                        </div>
                    </div>

                    <div class="deco"
                        style="left:300px; top:-1100px; width: 300px; transform: rotate(60deg); z-index:-1">
                        <img src="imag/free/penga/penga-0136.png" style="width: 500px;">
                    </div>


                    <div class="draggable" style="left:680px; top:-1860px; width: 200px; z-index:-5px;">
                        <div class="tabTitle" style="background: blue; color: white;">Igaku</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/nagori/nagori_igaku.gif" style="width: 200px; height: 170px;" >
                        </div>
                    </div>
                    
                    <div class="draggable" style="left:-160px; top:-1550px; width: 150px; z-index:-5px;">
                        <div class="tabTitle" style="background: blue; color: white;">Meguru</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/nagori/nagori_meguru.gif" style="width: 150px; height: 150px;">
                        </div>
                    </div>

                    <div class="draggable" style="left:440px; top:-2080px; width: 350px; z-index:-5px;">
                        <div class="tabTitle" style="background: blue; color: white;">Katane Nagori</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/nagori/n251022.png" style="width: 350px;">
                        </div>
                    </div>

                </div>               
                    `;

const log_info = `
                <div id="chara" style="color:rgb(0,255,0);">
                    <div>
                        <div id="name" style="border-bottom: 1px rgb(0,255,0) solid;">接路音ログ<br>Tsugurone Log</div>
                        <div id="info" style="border-bottom: 1px rgb(0,255,0) solid;">製造年月日 : 不明<br>全長 :
                            1700mm(ヘッドセットを除く)<br>総重量 : 44kg</div>
                        <div id="inst" style="border-bottom: 1px rgb(0,255,0) solid;">→<a
                                href="https://bowlroll.net/file/337711" style="padding:3px; color:rgb(0,255,0);"
                                target="_blank">Download</a><audio id="audio" src="sample/赤とんぼ_log.wav"></audio><br><br>
                            <div>sample :<span onclick="play()" class="button"
                                    style="border: 1px rgb(0,255,0) solid;">再生</span> <span onclick="pause()"
                                    class="button" style="border: 1px rgb(0,255,0) solid;">停止</span></div><br>
                            エンジン : resampler
                        </div>
                    </div>
                    <div>
                        <div class="about" style="border-bottom: 1px rgb(0,255,0) solid;">パソコンの周辺機器から生まれた無生物単独音源。<br>母音
                            : タイピング音<br>子音 :
                            タイピング音,マウスのクリック音,ホワイトノイズ<br><br>癖のある抑揚と無生物音源特有の機械感の強い声です。</div>
                        <div class="about" style="border-bottom: 1px rgb(0,255,0) solid;">
                            出自不明のヒューマノイド。開発経緯や製造元の記録は確認されていない。<br>自身から伸びるケーブルで(勝手に)あらゆる機械への接続を試みている。人に限らず積極的にコミュニケーションを取ろうとするためキーボードやマウスを見つけると挨拶する。<br>だいぶ変わってるが悪いヤツではない。たぶん。
                        </div>
                    </div>
                </div>
                
                

                <div style="height: 0px; top: 20px;">
                    <div class="deco" style="left:300px; top:-580px; width: 10px; z-index:1">
                        <img src="imag/log/log_code/c10221.png" style="width: 500px;">
                    </div>
                    <div style="position: absolute; right:200px; top:0px; width: 10px; z-index:1">
                        <img src="imag/log/log_code/c10222.png" style="width: 100px;">
                    </div>
                    <div class="deco"
                        style="left:-200px; top: -910px; width: 10px; transform: rotate(-7deg); z-index:1">
                        <img src="imag/log/log_code/c10223.png" style="width: 200px;">
                    </div>
                    <div style="position: absolute; top: -120px; left:-200px; width: 10px; z-index:-1">
                        <img src="imag/log/log_code/c10224.png" style="width: 800px; transform: rotate(-180deg);">
                    </div>
                    <div class="deco" style="left:-100px; top:-1470px; width: 10px; transform: rotate(5deg); z-index:1">
                        <img src="imag/log/log_code/c10222g.png" style="width: 100px;">
                    </div>
                    
                    <img class="draggable" src="imag/log/LowPoli_log.gif" alt="" style="position: relative; top: -1750px; right: 200px; width: 300px; z-index: 100;">

                    <div class="draggable" style="left:-100px; top:-1700px; width: 180px; z-index:15;">
                        <div class="tabTitle"
                            style="background:black; border: solid 1px rgb(0,255,0); color: rgb(0,255,0);">click!</div>
                        <div class="tabDesign" style="border-color: rgb(0,255,0); padding: 0px; background: black;">
                            <div class="flex">
                                <span id="log_dot" onclick="log_Onsound()">
                                    <img id="log_dot_imag" src="imag/log_dot/log_d0.PNG"
                                        onmouseover="this.src='imag/log_dot/log_d1.PNG'"
                                        onmouseout="this.src='imag/log_dot/log_d0.PNG'">
                                </span>
                                　　
                                <div id="log_sound_hanasu">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

`;

const ushio_info = `<div id="chara">
                    <div>
                        <div id="name">鯨歌うしお<br>Geika Ushio</div>
                        <div id="info">年齢 : おぼえてない<br>性別 : メス<br>全長 : 約4m<br>体重 : ひみつ</div>
                        <div id="inst">→<a href="" style="padding:3px" target="_blank"></a><audio id="audio"
                                src="sample/赤とんぼ_ushio.wav"></audio><br><br>
                            <div>sample :<span onclick="play()" class="button">再生</span> <span onclick="pause()"
                                    class="button">停止</span></div><br>
                            エンジン : tn_fnds
                        </div>
                    </div>
                    <div>
                        <div class="about">鯨の鳴き声の無生物系(動物)単独音源。<br>母音 : 鯨の鳴き声<br>子音 : 鯨の鳴き声, 波の音<br><br>ウィスパーで柔らかい少女音源。
                        </div>
                        <div class="about">
                            どこか遠い海から来た鯨の少女。<br>
                            あまり過去のことは覚えていない。
                        </div>
                    </div>
                </div>

`;
