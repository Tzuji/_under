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

const nagori_info = `
                <div id="chara">
                    <div>
                        <div id="name">像音ナゴリ<br>Katane Nagori</div>
                        <div id="info">年齢 : 17(本人談)<br>性別 : 不明<br>サイズ：横・奥行30cm,縦8cm<br>重量 : 56kg</div>
                        <div id="inst">→<a href="https://bowlroll.net/file/337141" style="padding:3px"
                                target="_blank">Download</a><audio id="audio"
                                src="sample/赤とんぼ_nagori.wav"></audio><br><br>
                            <div>sample : <span onclick="play()" class="button">再生</span> <span onclick="pause()"
                                    class="button">停止</span></div><br>
                            エンジン : TIPS
                        </div>
                    </div>
                    <div>
                        <div>
                        <div class="about">風邪ひいたときに作った音源。<br>音域によっては中性的にも女性的にも聴こえると思います。<br>
                            <br>
                            <table style="font-size: 12px;">
                                <tr><th>【特殊音素】</th></tr>
                                <tr><th style="border-bottom: none;">息</th><td style="border-bottom: none;">br1,br2,br3</td></tr>
                                <tr><th style="border-bottom: none;">語尾息</th><td style="border-bottom: none;">x R吐,x R吸</td></tr>
                                <tr><th style="border-bottom: none;">咳</th><td style="border-bottom: none;">coff1,coff2,coff3</td></tr>
                            </table></div>
                    </div>
                        <div class="about">
                            スピーカーとプロジェクターが搭載された謎の機械。<br>外部ケースが古くガムテープで補強されるなど雑な修繕がされている。<br>
                            プロジェクターで青年期の人間を映すことが多いが、本人曰くこれが本来の姿らしい。
                        </div>
                    </div>
                </div>

                <!--tab-->
                <div style="height:0px;">
                    <div class="draggable" style="left:-100px; top:-30px; width: 240px; z-index: 5;">
                        <div class="tabTitle" style="background: blue;color: white;">　</div>
                        <div class="tabDesign" style="border-color: blue;"><img src="imag/nagori/nagori_front.png"
                                alt="" class="visual"></div>
                    </div>
                    <div class="draggable" style="left:30px; top:-190px; width: 240px; z-index: 3;">
                        <div class="tabTitle" style="background: blue; color: white;">　</div>
                        <div class="tabDesign" style="border-color: blue;"><img src="imag/nagori/nagori_back.png" alt=""
                                class="visual"></div>
                    </div>

                    <div class="draggable" style="left:460px; top:-850px; width: 250px; z-index: 5;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/free/penga/00082.png" style="width: 250px;">
                        </div>
                    </div>

                    <div class="draggable" style="left:-130px; top:-390px; width: 80px; z-index: 5; height: 0px;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/.png" style="width: 80px; height: 50px;">
                        </div>
                    </div>
                    <div class="draggable" style="left:-170px; top:-670px; width: 120px; z-index: 5; height: 0px;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/.png" style="width: 50px; height: 50px;">
                        </div>
                    </div>
                    <div class="draggable" style="left:820px; top:-620px; width: 110px; z-index: 5; height: 0px;">
                        <div class="tabTitle" style="background: blue;">　</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/.png" style="width: 130px; height: 90px;">
                        </div>
                    </div>
                </div> 

                <!--GIF-->
                <div style="height: 0px;">
                    <!--pc-->
                    <div class="draggable" style="left:600px; top:-400px; width: 140px; height: 0px; z-index:5;"><img src="imag/nagori/gif/pc.gif" alt="" width="140px"></div>
                    <!--folder-->
                    <div class="draggable" style="left:280px; top:-450px; width: 100px; height: 0px; z-index:5;"><img src="imag/nagori/gif/folder.gif" alt="" width="100px"></div>
                    <div class="draggable" style="left:850px; top:50px; width: 100px; height: 0px; z-index:5;"><img src="imag/nagori/gif/folder.gif" alt="" width="100px"></div>
                    <!--fdd-->
                    <div class="draggable" style="left:-150px; top:200px; width: 100px; height: 0px; z-index:5;"><img src="imag/nagori/gif/fdd.gif" alt="" width="100px"></div>
                    <!--star-->
                    <div class="draggable" style="left:-120px; top:-350px; width: 80px; height: 0px; z-index:5;"><img src="imag/nagori/gif/star.gif" alt="" width="80px"></div>
                    <div class="draggable" style="left:-60px; top:-300px; width: 50px; height: 0px; z-index:5; rotate: -5rad;"><img src="imag/nagori/gif/star.gif" alt="" width="50px"></div>
                    <div class="draggable" style="left:820px; top:-350px; width: 50px; height: 0px; z-index:5;"><img src="imag/nagori/gif/star.gif" alt="" width="50px"></div>
                    
                </div>

                <!--nagori-->
                <div class="draggable" style="left:590px; top:-240px; width: 350px; height: 0px; z-index:-5px;">
                        <div class="tabTitle" style="background: blue; color: white;">Katane Nagori</div>
                        <div class="tabDesign" style="border-color: blue; padding: 0px;">
                            <img src="imag/nagori/n251022.png" style="width: 350px;">
                        </div>
                    </div>

                <!--Background-->
                <div style="height: 0px; width: 0px;">
                    <!--kurage-->
                    <div class="deco"
                        style="height: 0px; left:600px; top:-350px; width: 300px; transform: rotate(60deg); z-index:-1">
                        <img src="imag/free/penga/penga-0136.png" style="width: 500px;">
                    </div>
                    <!--GIF-->
                    <div class="deco" style=" left: -200px; top: -300px; z-index: -5; height: 0px;">
                        <img src="imag/nagori/gif/ng01.gif" alt="" width="350px">
                    </div>
                    <div class="deco" style=" left: -150px; top: -160px; z-index: -10; height: 0px;">
                        <img src="imag/nagori/gif/ng04.gif" alt="" width="520px" height="400px">
                    </div>
                    <div class="deco" style=" left: 520px; top: 130px; z-index: -5; height: 0px;">
                        <img src="imag/nagori/gif/ng05.gif" alt="" width="350px">
                    </div>  
                    <div class="deco" style=" left: 450px; top: 0px; z-index: -5; height: 0px;">
                        <img src="imag/nagori/gif/ng02.gif" alt="" width="200px">
                    </div> 
                    <div class="deco" style=" left: 480px; top: -400px; z-index: -15; height: 0px;">
                        <img src="imag/nagori/gif/ng03.gif" alt="" width="450px" height="450px">
                    </div>
                    <div class="deco" style=" left: -210px; top: 180px; z-index: -5; height: 0px;">
                        <img src="imag/nagori/gif/ng06.gif" alt="" width="550px" height="140px">
                    </div>  


            </div>
`;

const log_info = `
                <div id="chara" style="color:rgb(0,255,0); height: 0px;">
                    <div>
                        <div id="name" style="border-bottom: 1px rgb(0,255,0) solid;">接路音ログ<br>Tsugurone Log</div>
                        <div id="info" style="border-bottom: 1px rgb(0,255,0) solid;">型番：T705-L090BK<br>
                            製造年式 : ████年<br>全長 :
                            1700mm(ヘッドセットを除く)<br>総重量 : 44kg</div>
                        <div id="inst" style="border-bottom: 1px rgb(0,255,0) solid;">→<a class="a_log"
                                href="https://bowlroll.net/file/337711" style="padding:3px;"
                                target="_blank">Download</a><audio id="audio" src="sample/赤とんぼ_log.wav"></audio><br><br>
                            <div>sample :<span onclick="play()" class="button_log"
                                    style="border: 1px rgb(0,255,0) solid;">再生</span> <span onclick="pause()"
                                    class="button_log" style="border: 1px rgb(0,255,0) solid;">停止</span></div><br>
                            エンジン : resampler
                        </div>
                    </div>
                    <div>
                        <div class="about" style="border-bottom: 1px rgb(0,255,0) solid;">パソコンの周辺機器から生まれた無生物音源。<br>母音
                            : タイピング音<br>子音 :
                            タイピング音,マウスのクリック音,ホワイトノイズ<br><br>癖のある抑揚とノイズ感の強い声です。<br>
                            <br>
                            <table style="font-size: 12px;">
                                <tr><th style=" border-bottom: 1px solid rgb(0,255,0);">【特殊音素】</th></tr>
                                <tr><th style="border-bottom: none;">息</th><td style="border-bottom: none;">br1,br2,br3,br4</td></tr>
                                <tr><th style="border-bottom: none;">キーボード</th><td style="border-bottom: none;">typ1,typ2, typ_L1,typ_L2</td></tr>
                                <tr><th style="border-bottom: none;">マウス</th><td style="border-bottom: none;">click1,click2,click3</td></tr>
                            </table>
                        </div>
                        <div class="about" style="border-bottom: 1px rgb(0,255,0) solid;">
                            出自不明のヒューマノイド。開発経緯や製造元の記録は確認されていない。<br>自身から伸びるケーブルで(勝手に)あらゆる機械への接続を試みている。<br>だいぶ変わってるが悪いヤツではない。たぶん。
                        </div>
                    </div>
                </div>

                <div style="height: 0px;">
                    <!--cable-->
                    <div style="height: 0px;">
                        <div class="deco" style="left:300px; top:-290px; width: 10px; z-index:1">
                            <img src="imag/log/log_code/c10221.png" style="width: 500px;">
                        </div>
                        <div style="position: absolute; right:200px; top:0px; width: 10px; z-index:1">
                            <img src="imag/log/log_code/c10222.png" style="width: 100px;">
                        </div>
                        <div class="deco"                    style="left:-200px; top: -600px; width: 10px; transform: rotate(-7deg); z-index:1">
                            <img src="imag/log/log_code/c10223.png" style="width: 200px;">
                        </div>
                        <div style="position: absolute; top: -120px; left:-200px; width: 10px; z-index:-1">
                            <img src="imag/log/log_code/c10224.png" style="width: 800px; transform: rotate(-180deg);">
                        </div>
                        <div class="deco" style="left:-100px; top:-1150px; width: 10px; transform: rotate(5deg); z-index:1">
                            <img src="imag/log/log_code/c10222g.png" style="width: 100px;">
                        </div>
                    </div>
                    <!--Wave-->
                    <div style="position: relative; top: 50px; left: -200px; z-index: -100; height: 0px;">
                        <img src="imag/log/key/wave.gif" alt="" width="400" height="400">
                    </div>

                    <!--GIF-->
                    <div style="height: 0px;">
                        <!--left-->
                        <div class="draggable" style="left:680px; top:50px; z-index:5; width: 232px;">
                            <div class="tabTitle"
                                style="background:black; border: solid 1px rgb(0,255,0); color: rgb(0,255,0);">　</div>
                            <div class="tabDesign" style="border-color: rgb(0,255,0); padding: 0px; background: black;">
                                <img src="imag/log/leftear.gif" alt="" width="230">
                            </div>
                        </div>
                        <!--right-->
                        <div class="draggable" style="left:-120px; top:100px; z-index:5; width: 232px;">
                            <div class="tabTitle"
                                style="background:black; border: solid 1px rgb(0,255,0); color: rgb(0,255,0);">　</div>
                            <div class="tabDesign" style="border-color: rgb(0,255,0); padding: 0px; background: black;">
                                <img src="imag/log/rightear.gif" alt="" width="230">
                            </div>
                        </div>
                        <!--eye-->
                        <div class="draggable" style="left:170px; top:-80px; z-index:8; width: 122px;">
                            <div class="tabTitle"
                                style="background:black; border: solid 1px rgb(0,255,0); color: rgb(0,255,0);">　</div>
                            <div class="tabDesign" style="border-color: rgb(0,255,0); padding: 0px; background: black;">
                                <img src="imag/log/eye.gif" alt="" width="120">
                            </div>
                        </div>
                        <!--center-->
                        <div class="draggable" style="left:210px; top:-150px; z-index:0; width: 502px;">
                            <div class="tabTitle"
                                style="background:black; border: solid 1px rgb(0,255,0); color: rgb(0,255,0);">Tsugurone Log</div>
                            <div class="tabDesign" style="border-color: rgb(0,255,0); padding: 0px; background: none;">
                                <img src="imag/log/l260219.PNG" alt="" width="500">
                            </div>
                        </div>
                    </div>
                    <!--key-->
                    <div style="height: 0px;">
                        <!--esc-->
                        <div class="draggable" style="left:-100px; top:250px; z-index:15; width: 60px;">
                            <img src="imag/log/key/key_esc.png" alt="" width="60">
                        </div>
                        <!--shift-->
                        <div class="draggable" style="left:-20px; top:440px; z-index:15; width: 120px;">
                            <img src="imag/log/key/key_shift.png" alt="" width="120">
                        </div>
                        <!--alt-->
                        <div class="draggable" style="left:720px; top:350px; z-index:15; width: 90px;">
                            <img src="imag/log/key/key_alt.png" alt="" width="90">
                        </div>
                        <!--back-->
                        <div class="draggable" style="left:620px; top:-200px; z-index:15; width: 60px;">
                            <img src="imag/log/key/key_backspace.png" alt="" width="60">
                        </div>
                        <!--enter-->
                        <div class="draggable" style="left:650px; top:-20px; z-index:15; width: 120px;">
                            <img src="imag/log/key/key_enter.png" alt="" width="120">
                        </div>
                        <!--ctrl-->
                        <div class="draggable"style="left:790px; top:-50px; z-index:15; width: 80px;">
                            <img src="imag/log/key/key_ctrl.png" alt=""width="80">
                        </div>
                        <!--badge-->
                        <div class="draggable" style="left:820px; top:-280px; z-index:15; width: 30px;">
                            <img src="imag/log/key/mouse_i.png" alt="" width="30">
                        </div>
                        <!--cursol-->
                        <div class="draggable" style="left:20px; top:70px; z-index:15; width: 15px;">
                            <img src="imag/log/key/cursol.png" alt="" width="15">
                        </div>
                        <!--cursol-->
                        <div class="draggable" style="left:30px; top:50px; z-index:15; width: 15px;">
                            <img src="imag/log/key/cursol.png" alt="" width="15">
                        </div>
                        <!--cursol-->
                        <div class="draggable" style="left:45px; top:40px; z-index:15; width: 15px;">
                            <img src="imag/log/key/cursol.png" alt="" width="15">
                        </div>
                        <!--cursol-->
                        <div class="draggable" style="left:650px; top:-180px; z-index:15; width: 15px;">
                            <img src="imag/log/key/cursol.png" alt="" width="15">
                        </div>
                    </div>

                    <!--click-->
                    <div class="draggable" style="left:50px; top:350px; width: 180px; z-index:5;">
                        <div class="tabTitle"
                            style="background:black; border: solid 1px rgb(0,255,0); color: rgb(0,255,0);">click!</div>
                        <div class="tabDesign" style="border-color: rgb(0,255,0); padding: 0px; background: black;">
                            <div class="flex">
                                <span id="log_dot" onclick="log_Onsound()">
                                    <img id="log_dot_imag" src="imag/log/log_dot/log_d0.gif"
                                        onmouseover="this.src='imag/log/log_dot/log_d1.gif'"
                                        onmouseout="this.src='imag/log/log_dot/log_d0.gif'">
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
                        <div class="about">鯨の鳴き声の動物(無生物系)音源。<br>母音 : 鯨の鳴き声<br>子音 : 鯨の鳴き声, 波の音<br><br>ウィスパーで柔らかい少女音源。
                        </div>
                        <div class="about">
                            どこか遠い海から来た鯨の少女。<br>
                            あまり過去のことは覚えていない。
                        </div>
                    </div>
                </div>

`;
