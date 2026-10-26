/* Hero: headline, CTAs, decorative browser mockup */
window.Sections = window.Sections || {};

Sections.hero = (S) => {
  const h = S.hero;
  const m = h.mockup || {};
  return `
  <section class="hero" id="top">
    <div class="hero__bg" aria-hidden="true">
      <div class="blob blob--1"></div><div class="blob blob--2"></div><div class="blob blob--3"></div>
      <div class="hero__grid"></div>
    </div>

    <div class="container hero__inner">
      <div class="hero__copy">
        ${h.eyebrow ? `<a href="#contact" class="pill hero__pill" data-cursor><span class="live-dot"></span>${U.esc(h.eyebrow)}<span class="pill__arrow">${U.icon("arrow")}</span></a>` : ""}

        <h1 class="hero__title">
          ${U.list(h.titleLines, (l, i) => `<span class="line"><span class="line__in" style="--i:${i}">${U.rich(l)}</span></span>`)}
        </h1>

        <p class="hero__sub reveal" style="--d:4">${U.esc(h.subtitle)}</p>

        <div class="hero__ctas reveal" style="--d:5">
          <a ${U.linkAttrs(h.primaryCta.href)} class="btn btn--primary btn--lg" data-magnetic data-cursor>
            <span>${U.esc(h.primaryCta.label)}</span>${U.icon("arrow")}
          </a>
          <a ${U.linkAttrs(h.secondaryCta.href)} class="btn btn--ghost btn--lg" data-magnetic data-cursor>
            <span>${U.esc(h.secondaryCta.label)}</span>
          </a>
        </div>

        <ul class="hero__trust reveal" style="--d:6">
          ${U.list(h.trust, (t) => `<li>${U.icon("check")}${U.esc(t)}</li>`)}
        </ul>
      </div>

      <div class="hero__visual reveal" style="--d:3" aria-hidden="true">
        <div class="mock" data-tilt>
          <div class="mock__bar">
            <span class="mock__dots"><i></i><i></i><i></i></span>
            <span class="mock__url">${U.icon("shield")}${U.esc(m.url || "")}</span>
          </div>
          <div class="mock__body">
            <div class="mock__nav"><b>${U.esc(m.siteName || "")}</b><span></span><span></span><span></span><em>Book</em></div>
            <div class="mock__hero">
              <div>
                <p class="mock__h">${U.esc(m.headline || "")}</p>
                <span class="mock__line"></span><span class="mock__line mock__line--s"></span>
                <span class="mock__btn">Book a table</span>
              </div>
              <div class="mock__img"><div class="mock__sun"></div></div>
            </div>
            <div class="mock__row">
              <div class="mock__card">
                <p class="mock__label">This week</p>
                <div class="mock__bars">${[38, 52, 44, 70, 62, 86, 78].map((v, i) => `<i style="--h:${v}%;--i:${i}"></i>`).join("")}</div>
              </div>
              <div class="mock__card mock__card--slots">
                <p class="mock__label">Today</p>
                <span class="slot">10:00</span><span class="slot slot--on">12:30</span><span class="slot">15:00</span><span class="slot">18:30</span>
              </div>
            </div>
          </div>
        </div>
        ${U.list(m.chips, (c, i) => `<div class="float-chip float-chip--${i + 1}">${U.icon(c.icon)}<span>${U.esc(c.text)}</span></div>`)}
      </div>
    </div>

    <a href="#services" class="scroll-hint" aria-label="Scroll down"><span></span></a>
  </section>`;
};
