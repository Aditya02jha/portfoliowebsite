/* Testimonials — renders nothing until real reviews are added in the config */
window.Sections = window.Sections || {};

Sections.testimonials = (S) => {
  const items = S.testimonials || [];
  if (!items.length) return "";
  return `
  <section class="section" id="testimonials">
    <div class="container">
      ${U.head({ kicker: "Kind words", title: "Clients who *came back for more.*" })}
      <div class="quotes">
        ${U.list(
          items,
          (t, i) => `
          <figure class="quote card reveal" style="--d:${i % 3}">
            <span class="quote__mark">“</span>
            <blockquote>${U.esc(t.quote)}</blockquote>
            <figcaption><span class="quote__avatar">${U.initials(t.name)}</span><span><b>${U.esc(t.name)}</b>${U.esc(t.role || "")}</span></figcaption>
          </figure>`
        )}
      </div>
    </div>
  </section>`;
};
