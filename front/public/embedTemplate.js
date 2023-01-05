!(function () {
  "use strict";
  function t() {
    // const t = document.createElement("script");
    // (t.src = "https://widget.senja.io/js/iframeResizer.min.js"),
    //   (t.type = "text/javascript"),
    //   (t.async = !0);
    const e = document.querySelectorAll(".loya-frame-embed");
    let i = [],
      r = [];
    for (let t = 0; t < e.length; t++) {
      const n = e[t],
        s = n.getAttribute("data-id");
      if (null == n) return;
      if (n.children.length > 0) return;
      const a = document.createElement("iframe"),
        // c = s.split("-")[0] ?? "widget",
        d = `loya-frame-${s}`;
      (a.id = d),
        a.setAttribute("loading", "lazy"),
        a.setAttribute("data-src", `http://35.170.73.191:3000/widgets/p/${s}`),
        a.setAttribute("scrolling", "no"),
        a.setAttribute("frameborder", "0"),
        a.setAttribute("width", "400px"),
        a.setAttribute("height", "400px"),
        a.setAttribute("title", "Loya Testimonial Widget"),
        n.appendChild(a),
        i.push(a),
        r.push(d);
    }
    window.onload = () => {
      for (let t = 0; t < e.length; t++) {
        const e = i[t],
          n = r[t],
          s = e.getAttribute("data-src");
        e.setAttribute("src", s);
        // iFrameResize({ log: !1, checkOrigin: !1 }, `#${n}`);
      }
    };
    //document.body.appendChild(t);
  }
  t();
})();
