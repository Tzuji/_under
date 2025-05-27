const utauchara = document.getElementById("utau");
const nagori_info = '<div id="chara"><div><div id="name">像音ナゴリ<br>Katane Nagori</div><div id="info">年齢 : 17(推定)<br>性別 : 不明<br>サイズ : 横・奥行30cm前後 縦8cm前後<br>重量 : 50kg</div><div id="inst">→<a href="">Download</a><audio id="audio" src="sample/赤とんぼ-nagori.wav"></audio><br><br><div>sample : <span onclick="play()" class="button">再生</span> <span onclick="pause()" class="button">停止</span></div></div></div><div><div class="about">風邪ひいたときに作った音源(単独音)。<br>音域によっては中性的にも女性的にも聴こえると思います。<br>やや滑舌が甘いです。</div><div class="about">スピーカーとプロジェクターが搭載された謎の機械。<br>ボロいのでガムテープで補強されるなど少し雑な修繕がされている。ちなみに移動機能も無いので結構困っている。プロジェクターで様々なホログラムを映し出すことが出来る。青年期の人間を映すことが多いが、本人曰くこれが本来の姿らしい。</div></div></div><div><img src="imag/nagori.png" alt="" class="visual"><img src="imag/nagori_back.png" alt="" class="visual"></div>';

const log_info = '<div id="chara"><div><div id="name">接路音ログ<br>Tsugurone Log</div><div id="info">製造年月日 : 不明<br>全長 : 1710mm<br>総重量 : 38kg</div><div id="inst">→<a href="">Download</a><audio id="audio" src="sample/赤とんぼ-log.wav"></audio><br><br><div>sample :<span onclick="play()" class="button">再生</span><span onclick="pause()" class="button">停止</span></div></div></div><div><div class="about">パソコンの周辺機器から生まれた無生物音源(単独音)。<br>母音 : タイピング音<br>子音 : タイピング音,マウスのクリック音,ホワイトノイズ<br><br>癖のある抑揚と無生物音源特有の機械感の強い声をしている。<br>滑舌は良くないが高音域は結構叫ぶ。</div><div class="about">ケーブルがたくさん生えているヒューマノイド。<br>目の模様は都度変化する。自分が接続出来そうな機械を見つけると喜ぶ。人に限らず積極的にコミュニケーションを取ろうとするためキーボードやマウスを見つけると挨拶する。<br>だいぶ変わってるが悪いヤツではない。たぶん。</div></div></div>'

function nagori(){
    utauchara.innerHTML = nagori_info;
    audio = document.getElementById("audio");
}

function log(){
    utauchara.innerHTML = log_info;
    audio = document.getElementById("audio");
}