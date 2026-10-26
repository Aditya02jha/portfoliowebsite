/* Case studies with generated visuals (or a screenshot if `image` is set) */
window.Sections = window.Sections || {};

(function () {
  const patterns = {
    chart: () => `
      <div class="viz viz--chart">
        <div class="viz__head"><span></span><b>+24.8%</b></div>
        <svg viewBox="0 0 300 120" preserveAspectRatio="none"><path class="viz__area" d="M0 100 L30 88 L60 92 L90 70 L120 74 L150 52 L180 58 L210 36 L240 40 L270 18 L300 22 L300 120 L0 120Z"/><path class="viz__stroke" d="M0 100 L30 88 L60 92 L90 70 L120 74 L150 52 L180 58 L210 36 L240 40 L270 18 L300 22"/></svg>
        <div class="viz__rows">${[1, 2, 3].map(() => `<span><i></i><i></i><i></i></span>`).join("")}</div>
      </div>`,
    code: () => `
      <div class="viz viz--code">
        ${[["k", 32], ["v", 54], ["f", 44], ["v", 66], ["s", 28], ["k", 48], ["f", 60], ["v", 36]]
          .map(([c, w], i) => `<span class="cl" style="--w:${w}%;--x:${i % 3}"><i class="c-${c}"></i></span>`)
          .join("")}
        <div class="viz__badge">${U.icon("check")} Build passed</div>
      </div>`,
    toggles: () => `
      <div class="viz viz--toggles">
        ${["new-checkout", "dark-mode", "beta-search", "promo-banner"]
          .map((n, i) => `<div class="tg"><span>${n}</span><i class="${i % 3 === 1 ? "" : "on"}"></i></div>`)
          .join("")}
      </div>`,
  };

  Sections.work = (S) => {
    const d = S.work;
    return `
    <section class="section" id="work">
      <div class="container">
        ${U.head(d)}
        <div class="work">
          ${U.list(d.items, (w, i) => {
            const v = w.visual || {};
            const visual = w.image
              ? `<img src="${U.esc(w.image)}" alt="${U.esc(w.title)} screenshot" loading="lazy">`
              : (patterns[v.pattern] || patterns.chart)();
            const Tag = w.link ? "a" : "div";
            return `
            <${Tag} ${w.link ? U.linkAttrs(w.link) : ""} class="case reveal ${i % 2 ? "case--flip" : ""}" data-cursor="view">
              <div class="case__visual" style="--from:${v.from || "#111"};--to:${v.to || "#c8ff3d"}">
                <span class="case__index">0${i + 1}</span>
                ${visual}
              </div>
              <div class="case__body">
                <p class="case__cat">${U.esc(w.category)}</p>
                <h3 class="case__title">${U.esc(w.title)}</h3>
                <p class="case__summary">${U.esc(w.summary)}</p>
                <div class="case__metrics">
                  ${U.list(w.metrics, (m) => `<div><b>${U.esc(m.value)}</b><span>${U.esc(m.label)}</span></div>`)}
                </div>
                <div class="tags">${U.list(w.stack, (t) => `<span class="tag">${U.esc(t)}</span>`)}</div>
                ${w.link ? `<span class="case__link">View project ${U.icon("arrowUpRight")}</span>` : ""}
              </div>
            </${Tag}>`;
          })}
        </div>
      </div>
    </section>`;
  };
})();
