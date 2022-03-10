const marked = require("marked");
const hljs = require("highlight.js");

(async () => {
    let text = await fetch("static/test.md");
    text = await text.text();
    marked.setOptions({
        highlight: function(code, lang, callback) {
            let res = hljs.highlight(code, { language: lang});
            callback(undefined, res.value);
        }
    });
    marked.parse(text, (err,html)=> {
        let styleElem = document.createElement("link");
        styleElem.href = "static/md.css";
        styleElem.rel = "stylesheet"
        document.getElementById("md").contentDocument.head.appendChild(styleElem);
        document.getElementById("md").contentDocument.body.innerHTML = html;
    });
})();