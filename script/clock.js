const dayId = document.getElementById("day");

function dayUpdate(){
    let now = new Date();
    let month = String(now.getMonth() + 1).padStart(2, '0'),
        day = String(now.getDate()).padStart(2, '0'),
        hour = String(now.getHours()).padStart(2, '0'),
        minute = String(now.getMinutes()).padStart(2, '0'),
        seconds = String(now.getSeconds()).padStart(2, '0'),
        year = now.getFullYear();

        year = randomDay(year);    

    dayId.innerHTML = `${year}/${month}/${day} <br> ${hour}:${minute}:${seconds}`;
};

function randomDay(r){
    let rand_dif = 0;
    rand_dif = Math.floor(Math.random()*10);
    if(Math.floor(Math.random()*2)) rand_dif = -rand_dif;
    r += rand_dif;
    return String(r).padStart(2, '0')
}

setInterval(() => { dayUpdate() }, 100);