/* Animated number strip */
window.Sections = window.Sections || {};

Sections.stats = (S) => `
  <section class="stats" aria-label="Experience in numbers">
    <div class="container stats__grid">
      ${U.list(
        S.stats,
        (s, i) => `
        <div class="stat reveal" style="--d:${i}">
          <p class="stat__num"><span data-count="${s.value}" data-decimals="${s.decimals || 0}">0</span><span class="stat__suf">${U.esc(s.suffix || "")}</span></p>
          <p class="stat__label">${U.esc(s.label)}</p>
        </div>`
      )}
    </div>
  </section>`;
