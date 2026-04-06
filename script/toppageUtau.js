const uta_array = ['<img src="imag/nagori/n_top.png" alt="" width="350px" style="position: relative; top: 450px; left: -200px; filter:blur(60px);"><img id="top_utau" src="imag/nagori/n_top.png" alt="" width="350px" style="position: relative; top: 200px; left: -200px; filter:none;">', 
    '<img id="top_utau" src="imag/log/l_top.png" alt="" width="420px" style="position: relative; top: 50px; left: 300px;">', 
    '<img id="top_utau" src="imag/ushio/u_top.png" alt="" width="420px" style="position: relative; left: 200px; top: 400px; z-index:3;">'];
const uta_imgId = document.getElementById("uta_img");
let num = Math.floor(Math.random() * uta_array.length);

uta_imgId.innerHTML = uta_array[num];

