/* Boot: applies meta + theme from the config, renders sections in order,
   then starts the interaction layer. You shouldn't need to edit this. */
(function () {
  const S = window.SITE;

  // Meta
  document.title = S.meta.title;
  const setMeta = (sel, attr, val) => {
    if (!val) return;
    let el = document.head.querySelector(sel);
    if (!el) {
      el = document.createElement("meta");
      const [k, v] = sel.match(/\[(\w+)="([^"]+)"\]/).slice(1);
      el.setAttribute(k, v);
      document.head.append(el);
    }
    el.setAttribute(attr, val);
  };
  setMeta('meta[name="description"]', "content", S.meta.description);
  setMeta('meta[property="og:title"]', "content", S.meta.title);
  setMeta('meta[property="og:description"]', "content", S.meta.description);
  setMeta('meta[property="og:url"]', "content", S.meta.url);
  setMeta('meta[property="og:image"]', "content", S.meta.ogImage);

  // Theme overrides
  const root = document.documentElement.style;
  const t = S.theme || {};
  if (t.accent) root.setProperty("--accent", t.accent);
  if (t.accent2) root.setProperty("--accent-2", t.accent2);
  if (t.accent3) root.setProperty("--accent-3", t.accent3);

  // Render
  document.getElementById("nav").innerHTML = Sections.nav(S);
  document.getElementById("app").innerHTML = S.sections
    .map((key) => {
      const fn = Sections[key];
      if (!fn) {
        console.warn(`[site] No section module named "${key}"`);
        return "";
      }
      return fn(S);
    })
    .join("");
  document.getElementById("footer").innerHTML = Sections.footer(S);

  // Interactions
  requestAnimationFrame(() => {
    document.documentElement.classList.add("is-ready");
    Effects.init(S);
  });
})();
