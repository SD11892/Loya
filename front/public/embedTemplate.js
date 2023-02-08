// !(function () {
//   'use strict';
//   function t() {
//     const t = document.createElement('script');
//     (t.src = 'https://35.170.73.191:3000/iframeResizer.min.js'),
//       (t.type = 'text/javascript'),
//       (t.async = !0);
//     const i = document.querySelectorAll('.loya-frame-embed');
//     (t.onload = () => {
//       e(i);
//       var t = new MutationObserver(function (t) {
//         const i = document.querySelectorAll('.loya-frame-embed');
//         e(i);
//       });
//       t.observe(document, {
//         attributes: !1,
//         childList: !0,
//         characterData: !1,
//         subtree: !0,
//       });
//     }),
//       document.body.appendChild(t);
//   }
//   function e(t) {
//     let e = [],
//       i = [];
//     for (let n = 0; n < t.length; n++) {
//       const r = t[n];
//       if (null == r) continue;
//       const s = r.getAttribute('data-id');
//       if (r.children.length > 0) continue;
//       const a = document.createElement('iframe'),
//         o = s.split('-')[0] ?? 'widget',
//         c = `loya-frame-${o}`;
//       // console.log('var=', div);

//       (a.id = c),
//         a.setAttribute('data-src', `https://35.170.73.191:3000/widgets/p/${s}`),
//         a.setAttribute('frameborder', '0'),
//         a.setAttribute(
//           'style',
//           `width:1px; min-width:100%; margin-bottom:10px;`
//         ),
//         a.setAttribute('height', '500px'),
//         a.setAttribute('scrolling', 'yes'),
//         a.setAttribute('title', 'Loya Testimonial Widget'),
//         r.appendChild(a),
//         e.push(a),
//         i.push(c);
//     }
//     window.onload = () => {
//     for (let t = 0; t < e.length; t++) {
//       for (let t = 0; t < e.length; t++) {
//         const n = e[t];
//         if (!n) continue;
//         const r = i[t],
//           s = n.getAttribute('data-src');

//         s &&
//           0 != s?.trim().length &&
//           (n.setAttribute('src', s),
//           n.setAttribute('data-src', ''),
//           window.iFrameResize &&
//             iFrameResize(
//               {
//                 log: !1,
//                 checkOrigin: !1,
//                 heightCalculationMethod: 'taggedElement',
//                 enablePublicMethods: true,
//               },
//               `#${r}`
//             ));
//       }
//   }
//   t();
// })();

!(function () {
  https: 'use strict';
  function t() {
    const e = document.querySelectorAll('.loya-frame-embed');
    const userId = localStorage.getItem('userId');
    const projectId = localStorage.getItem('projectId');
    let i = [],
      r = [];
    for (let t = 0; t < e.length; t++) {
      const n = e[t],
        s = n.getAttribute('data-id');
      console.log('sssssssssssssssssss=', s);
      if (null == n) return;
      if (n.children.length > 0) return;
      const a = document.createElement('iframe'),
        // c = s.split("-")[0] ?? "widget",
        d = `loya-frame-${s}`;
      const div = document.querySelectorAll(`${d}`);
      a.style.transition = 'scale(1)';
      console.log('divdvidivdivdi=', div);
      (a.id = d),
        a.setAttribute('loading', 'lazy'),
        a.setAttribute(
          'data-src',
          `https://dashboard.tryloya.com/walls/p/${userId}-${projectId}/testimonials/${s}`
        ),
        a.setAttribute('scrolling', 'no'),
        a.setAttribute('frameborder', '0'),
        a.setAttribute('width', '100%'),
        a.setAttribute('height', '100vh'),
        a.setAttribute('title', 'Loya Testimonial Widget'),
        n.appendChild(a),
        i.push(a),
        r.push(d);
      console.log('aaaaaaaaaaaaaaaaaaaaaa=', a);
      console.log('iiiiiiiiiiiiiiiiiiiii=', i);
      console.log('iframeiframeiframeiframe=', iframe);
    }
    window.onload = () => {
      for (let t = 0; t < e.length; t++) {
        const e = i[t],
          n = r[t],
          s = e.getAttribute('data-src');
        e.setAttribute('src', s);
      }
    };
  }
  t();
})();
