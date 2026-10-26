/* FAQ accordion (native <details>, animated in effects.js) */
window.Sections = window.Sections || {};

Sections.faq = (S) => {
  const d = S.faq;
  return `
  <section class="section" id="faq">
    <div class="container faq">
      <div class="faq__head">${U.head(d)}</div>
      <div class="faq__list">
        ${U.list(
          d.items,
          (f, i) => `
          <details class="qa reveal" style="--d:${i}">
            <summary data-cursor><span>${U.esc(f.q)}</span><i class="qa__icon">${U.icon("plus")}</i></summary>
            <div class="qa__a"><p>${U.esc(f.a)}</p></div>
          </details>`
        )}
      </div>
    </div>
  </section>`;
};
