/* Top navigation + mobile menu */
window.Sections = window.Sections || {};

Sections.nav = (S) => `
  <div class="nav__bar container">
    <a href="#top" class="nav__logo" data-cursor aria-label="${U.esc(S.brand.name)} — home">
      <span class="nav__mark">${U.esc(S.brand.logoText)}</span>
      <span class="nav__name">${U.esc(S.brand.name)}</span>
    </a>
    <nav class="nav__links" aria-label="Primary">
      ${U.list(S.nav, (l) => `<a href="${U.esc(l.href)}" class="nav__link" data-cursor>${U.esc(l.label)}</a>`)}
    </nav>
    <div class="nav__right">
      <a href="${U.esc(S.navCta.href)}" class="btn btn--sm btn--primary" data-magnetic data-cursor>
        <span>${U.esc(S.navCta.label)}</span>${U.icon("arrowUpRight")}
      </a>
      <button class="nav__burger" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    </div>
  </div>
  <div class="nav__sheet" aria-hidden="true">
    <div class="nav__sheet-inner container">
      ${U.list(
        S.nav,
        (l, i) =>
          `<a href="${U.esc(l.href)}" class="nav__sheet-link" style="--i:${i}"><span>0${i + 1}</span>${U.esc(l.label)}</a>`
      )}
      <a href="${U.esc(S.navCta.href)}" class="btn btn--primary btn--lg nav__sheet-cta">${U.esc(S.navCta.label)} ${U.icon("arrow")}</a>
    </div>
  </div>`;
