import {
  e as p,
  j as r,
  F as o,
  a as n,
  V as s,
  H as u,
  T as i,
  I as f,
  B as h,
  R as m,
  b as g,
  C as b,
} from "./vendor.4d884994.js";
const y = function () {
  const a = document.createElement("link").relList;
  if (a && a.supports && a.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) c(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const l of t.addedNodes)
          l.tagName === "LINK" && l.rel === "modulepreload" && c(l);
  }).observe(document, { childList: !0, subtree: !0 });
  function d(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerpolicy && (t.referrerPolicy = e.referrerpolicy),
      e.crossorigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossorigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function c(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = d(e);
    fetch(e.href, t);
  }
};
y();
var w = p({
    styles: {
      global: {
        body: {
          bg: "gray.800",
          color: "white",
          fontFamily: "'Inter', sans-serif",
          fontSize: "15px",
        },
      },
    },
  }),
  x = "./assets/image-header-desktop.c3703b29.jpg";
function v() {
  return r(o, {
    w: "100%",
    minH: "100vh",
    justifyContent: "center",
    alignItems: "flex-start",
    wrap: "wrap",
    children: n(o, {
      my: 10,
      bg: "purple.900",
      w: "80%",
      wrap: "wrap",
      children: [
        n(s, {
          p: "60px",
          w: { base: "100%", lg: "60%" },
          order: { base: 2, lg: 1 },
          children: [
            n(u, {
              children: [
                "Get \xA0",
                r(i, { as: "span", color: "purple.400", children: "insights" }),
                "\xA0 that help your business grow.",
              ],
            }),
            r(i, {
              children:
                "Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.",
            }),
            n(o, {
              w: "100%",
              justifyContent: "space-between",
              wrap: "wrap",
              children: [
                n(s, {
                  children: [
                    r(i, { children: "10k+" }),
                    r(i, { children: "companies" }),
                  ],
                }),
                n(s, {
                  children: [
                    r(i, { children: "314" }),
                    r(i, { children: "templates" }),
                  ],
                }),
                n(s, {
                  children: [
                    r(i, { children: "12m+" }),
                    r(i, { children: "queries" }),
                  ],
                }),
              ],
            }),
          ],
        }),
        n(o, {
          w: { base: "100%", lg: "40%" },
          position: "relative",
          order: { base: 1, lg: 2 },
          children: [
            r(f, { src: x, w: "100%" }),
            r(h, {
              position: "absolute",
              top: "0",
              right: "0",
              left: "0",
              bottom: "0",
              bg: "rgba(50,38,89,0.3)",
            }),
          ],
        }),
      ],
    }),
  });
}
m.render(
  r(g.StrictMode, { children: r(b, { theme: w, children: r(v, {}) }) }),
  document.getElementById("root")
);
