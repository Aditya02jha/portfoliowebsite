/* About: portrait/initials card + story + reasons */
window.Sections = window.Sections || {};

Sections.about = (S) => {
  const d = S.about;
  const portrait = d.photo
    ? `<img src="${U.esc(d.photo)}" alt="${U.esc(S.brand.name)}" loading="lazy">`
    : `<span class="portrait__initials">${U.initials(S.brand.name)}</span>`;
  return `
  <section class="section" id="about">
    <div class="container about">
      <div class="about__side reveal">
        <div class="portrait">
          <div class="portrait__frame">${portrait}</div>
          <div class="portrait__meta">
            <p class="portrait__name">${U.esc(S.brand.name)}</p>
            <p class="portrait__role">${U.esc(S.brand.role)}</p>
            <span class="pill pill--sm"><span class="live-dot"></span>${U.esc(S.brand.status)}</span>
          </div>
        </div>
        <div class="tags tags--skills">${U.list(d.skills, (t) => `<span class="tag">${U.esc(t)}</span>`)}</div>
      </div>

      <div class="about__main">
        ${U.head(d)}
        ${U.list(d.paragraphs, (p, i) => `<p class="about__p reveal" style="--d:${i + 2}">${U.esc(p)}</p>`)}
        <div class="reasons">
          ${U.list(
            d.reasons,
            (r, i) => `
            <div class="reason reveal" style="--d:${i}">
              <span class="reason__icon">${U.icon(r.icon)}</span>
              <div><h4>${U.esc(r.title)}</h4><p>${U.esc(r.desc)}</p></div>
            </div>`
          )}
        </div>
      </div>
    </div>
  </section>`;
};
