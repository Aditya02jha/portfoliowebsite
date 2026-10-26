/* Small helpers shared by every section module. */
(function () {
  const esc = (s = "") =>
    String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");

  window.U = {
    esc,

    /** Escapes text and turns *word* into the italic accent style. */
    rich: (s = "") => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>"),

    /** Joins arrays produced by .map() inside template literals. */
    list: (arr, fn) => (arr || []).map(fn).join(""),

    /** Renders an inline SVG icon by name (see icons.js). */
    icon: (name) => (window.ICONS && window.ICONS[name]) || "",

    /** External links open in a new tab; in-page anchors don't. */
    linkAttrs: (href = "") =>
      /^https?:\/\//.test(href) ? `href="${esc(href)}" target="_blank" rel="noopener"` : `href="${esc(href)}"`,

    /** Standard section heading block. */
    head: ({ kicker, title, intro }, extraClass = "") => `
      <div class="sec-head ${extraClass}">
        ${kicker ? `<p class="kicker reveal"><span class="kicker__dot"></span>${esc(kicker)}</p>` : ""}
        ${title ? `<h2 class="sec-title reveal" style="--d:1">${U.rich(title)}</h2>` : ""}
        ${intro ? `<p class="sec-intro reveal" style="--d:2">${esc(intro)}</p>` : ""}
      </div>`,

    initials: (name = "") =>
      name
        .split(/\s+/)
        .map((p) => p[0])
        .join("")
        .slice(0, 2)
        .toUpperCase(),
  };
})();
