/* Infinite scrolling strip of services */
window.Sections = window.Sections || {};

Sections.marquee = (S) => {
  const row = U.list(S.marquee, (t) => `<span class="marquee__item">${U.esc(t)}</span><span class="marquee__star">✦</span>`);
  return `
  <section class="marquee" aria-label="Services overview">
    <div class="marquee__track">${row}${row}</div>
  </section>`;
};
