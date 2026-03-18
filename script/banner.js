const banners = document.getElementsByClassName('banner');

for (let i = 0; i < banners.length; i++) {
    banners[i].addEventListener("click", function () {
        if (confirm("バナーを保存しますか？🐟")) {
            const link = document.createElement("a");
            link.href = this.src;
            if (i == 1) link.download = 'd20040.gif';
            if (i == 2) link.download = 'd8831.gif';
            link.click();
        }
    });
}

function copyText() {
    let text = document.getElementById("siteURL").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("URLをコピーしました🐟");
    });
}