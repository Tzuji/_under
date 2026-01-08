const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = 'title.png';

let x = Math.random() * (canvas.width - 100); // 初期位置X
let y = Math.random() * (canvas.height - 100); // 初期位置Y
let dx = 1; // X方向速度
let dy = 1; // Y方向速度

img.onload = () => {
    const imgWidth = img.width;
    const imgHeight = img.height;

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y);

        x += dx;
        y += dy;

        // 端で跳ね返り
        if (x + imgWidth > canvas.width || x < 0) dx = -dx;
        if (y + imgHeight > canvas.height || y < 0) dy = -dy;

        requestAnimationFrame(animate);
    }

    animate();
};

// ウィンドウサイズ変更時にキャンバスを更新
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});