# Markdown browser Rendering

---

## code block

this is to test a block of js code (highlighting comming soon)

```js
alert("lol")

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
```

## image
![ein bild](https://i.imgur.com/aMyAUlp.png)

[link]: https://google.com (google bay)