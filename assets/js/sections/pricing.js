/* Pricing plans — CTA pre-fills the contact form with the plan name */
window.Sections = window.Sections || {};

Sections.pricing = (S) => {
  const d = S.pricing;
  return `
  <section class="section" id="pricing">
    <div class="container">
      ${U.head(d, "sec-head--center")}
      <div class="plans">
        ${U.list(
          d.plans,
          (p, i) => `
          <article class="plan spot ${p.featured ? "plan--featured" : ""} reveal" style="--d:${i}">
            ${p.featured ? `<span class="plan__badge">Most popular</span>` : ""}
            <h3 class="plan__name">${U.esc(p.name)}</h3>
            <p class="plan__desc">${U.esc(p.desc)}</p>
            <p class="plan__price">${U.esc(p.price)}${p.cadence ? `<span>/ ${U.esc(p.cadence)}</span>` : ""}</p>
            <ul class="plan__features">${U.list(p.features, (f) => `<li>${U.icon("check")}${U.esc(f)}</li>`)}</ul>
            <a href="#contact" class="btn ${p.featured ? "btn--primary" : "btn--ghost"} btn--block" data-plan="${U.esc(p.name)}" data-magnetic data-cursor>
              <span>${U.esc(p.featured ? "Choose " + p.name : p.cta)}</span>${U.icon("arrow")}
            </a>
          </article>`
        )}
      </div>
      ${d.note ? `<p class="plans__note reveal">${U.esc(d.note)}</p>` : ""}
    </div>
  </section>`;
};
