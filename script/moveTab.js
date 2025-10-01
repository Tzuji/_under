function makeDraggableAll(className) {
    document.querySelectorAll("." + className).forEach(el => {
        if (!el.style.left) el.style.left = el.offsetLeft + "px";
        if (!el.style.top)  el.style.top  = el.offsetTop  + "px";

        el.onpointermove = function(event) {
            if (event.buttons) {
                let left = parseInt(this.style.left) + event.movementX;
                let top  = parseInt(this.style.top)  + event.movementY;

                this.style.left = left + "px";
                this.style.top  = top  + "px";

                this.setPointerCapture(event.pointerId);
            }
        };
    });
}

makeDraggableAll("draggable");