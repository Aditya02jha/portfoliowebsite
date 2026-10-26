/* Four-step process timeline */
window.Sections = window.Sections || {};

Sections.process = (S) => {
  const d = S.process;
  return `
  <section class="section" id="process">
    <div class="container">
      ${U.head(d)}
      <ol class="process">
        <span class="process__line" aria-hidden="true"><i></i></span>
        ${U.list(
          d.steps,
          (s, i) => `
          <li class="step reveal" style="--d:${i}">
            <div class="step__num">${i + 1}</div>
            <span class="step__time">${U.esc(s.time)}</span>
            <h3 class="step__title">${U.esc(s.title)}</h3>
            <p class="step__desc">${U.esc(s.desc)}</p>
          </li>`
        )}
      </ol>
    </div>
  </section>`;
};
