/* Services bento grid */
window.Sections = window.Sections || {};

Sections.services = (S) => {
  const d = S.services;
  return `
  <section class="section" id="services">
    <div class="container">
      ${U.head(d)}
      <div class="bento">
        ${U.list(
          d.items,
          (s, i) => `
          <article class="card spot bento__item ${s.size ? "bento__item--" + s.size : ""} reveal" style="--d:${i % 3}">
            <div class="card__icon">${U.icon(s.icon)}</div>
            <h3 class="card__title">${U.esc(s.title)}</h3>
            <p class="card__desc">${U.esc(s.desc)}</p>
            <div class="tags">${U.list(s.tags, (t) => `<span class="tag">${U.esc(t)}</span>`)}</div>
            <span class="card__num">0${i + 1}</span>
          </article>`
        )}
      </div>
    </div>
  </section>`;
};
