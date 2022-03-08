import "../node_modules/marked/marked.min.js";

function render(ctx) {
    let canvas = ctx.canvas;
    canvas.width = Math.floor(canvas.offsetWidth);
    ctx.fillStyle = "#be01fe";
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle = "#000";
    ctx.font = "35px Arial";
    ctx.fillText("Top space",0,30,canvas.width);
    requestAnimationFrame(()=>{render(ctx)});
}

(async () => {
    let canvas = document.getElementById("gameCanvas");
    let context = canvas.getContext("2d");
    canvas.height = window.innerHeight;
    let text = await fetch("usr/test.md");
    text = await text.text();
    let html = marked.parse(text);
    let styleElem = document.createElement("link");
    styleElem.href = "usr/md.css";
    styleElem.rel = "stylesheet"
    document.getElementById("md").contentDocument.head.appendChild(styleElem);
    document.getElementById("md").contentDocument.body.innerHTML = html;
    requestAnimationFrame(()=>{render(context)});
})()