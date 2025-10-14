const utauchara = document.getElementById("utau");
const utauchara2 = document.getElementById("utau2");

function nagori(){
    utauchara.innerHTML = nagori_info;
    utauchara2.innerHTML = "";
    audio = document.getElementById("audio");
    makeDraggableAll("draggable");
}

function log(){
    utauchara.innerHTML = log_info;
    utauchara2.innerHTML = log_dot_hanasu;
    log_update();
    loopMabataki();
    audio = document.getElementById("audio");
}

function ushio(){
    utauchara.innerHTML = ushio_info;
    utauchara2.innerHTML = "";
    audio = document.getElementById("audio");
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
                            スピーカーとプロジェクターが搭載された謎の機械。<br>ボロいためガムテープで補強されるなど少し雑な修繕がされている。加えて移動機能も無いので結構困っている。<br>
                            プロジェクターで様々なホログラムを映し出すことが出来る。青年期の人間を映すことが多いが、本人曰くこれが本来の姿らしい。
                        </div>
                    </div>
                </div>
                <div style="height:0px;">
                    <div class="draggable" style="left:-100px; top:0px; width: 240px; z-index: 5;">
                        <div class="tabTitle" style="background: blue;">front</div>
                        <div class="tabDesign" style="border-color: blue;"><img src="imag/nagori.png" alt=""
                                class="visual"></div>
                    </div>
                    <div class="draggable" style="left:0px; top:-150px; width: 240px; z-index: 3;">
                        <div class="tabTitle" style="background: blue;">back</div>
                        <div class="tabDesign" style="border-color: blue;"><img src="imag/nagori_back.png" alt=""
                                class="visual"></div>
                    </div>

                    <div class="draggable" style="left:460px; top:-830px; width: 250px;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/free/penga/00082.png" style="width: 250px;">
                        </div>
                    </div>
                    <div class="draggable" style="left:380px; top:-650px; width: 300px; z-index:5px;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="" style="width: 250px;">not found
                        </div>
                    </div>
                    <div class="draggable" style="left:250px; top:-1050px; width: 400px;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; color: blue; font-weight: bold;">
                            　<•)))))>
                                <　　　　>
                                    <((((・>　　<•)))))>
                                            <　<•)))))>
                                                < </div>
                        </div>
                        <div class="deco" style="left:300px; top:-1100px; width: 300px; transform: rotate(60deg); z-index:-1">
                            <img src="imag/free/penga/penga-0136.png" style="width: 500px;">
                        </div>
                    </div>
                    `;

const log_info = `<div id="chara">
    <div>
        <div id="name">接路音ログ<br>Tsugurone Log</div>
        <div id="info">製造年月日 : 不明<br>全長 : 1700mm(ヘッドセットを除く)<br>総重量 : 44kg</div>
        <div id="inst">→<a href="https://bowlroll.net/file/337711" style="padding:3px"
                target="_blank">Download</a><audio id="audio" src="sample/赤とんぼ_log.wav"></audio><br><br>
            <div>sample :<span onclick="play()" class="button">再生</span> <span onclick="pause()" class="button">停止</span></div><br>
            エンジン : resampler
        </div>
    </div>
    <div>
        <div class="about">パソコンの周辺機器から生まれた無生物単独音源。<br>母音 : タイピング音<br>子音 :
            タイピング音,マウスのクリック音,ホワイトノイズ<br><br>癖のある抑揚と無生物音源特有の機械感の強い声です。</div>
        <div class="about">
            ケーブルがたくさん生えているヒューマノイド。<br>自分が接続出来そうな機械を見つけると喜ぶ。人に限らず積極的にコミュニケーションを取ろうとするためキーボードやマウスを見つけると挨拶する。Bluetoothに憧れを抱いているとか・・・。<br>だいぶ変わってるが悪いヤツではない。たぶん。
        </div>
    </div>
</div>`;

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

                <div style="height: 10px;">
                    <div class="deco" style="top: -500px; left: -500px; z-index: -10;">
                        <img src="imag/free/penga/penga-0298.png" style="width: 1200px; opacity: 0.7;">
                    </div>
                </div>`;

const log_dot_hanasu = `<div class="flex">
                    <span id="log_dot" onclick="log_Onsound()">
                        <img id="log_dot_imag" src="imag/log_dot/log_d0.PNG" onmouseover="this.src='imag/log_dot/log_d1.PNG'" onmouseout="this.src='imag/log_dot/log_d0.PNG'">
                    </span>
                    　　
                    <div id="log_sound_hanasu">
                    </div>
                </div>`;