/* Footer with giant wordmark */
window.Sections = window.Sections || {};

Sections.footer = (S) => `
  <div class="container footer">
    <div class="footer__top">
      <div>
        <p class="footer__tagline">${U.esc(S.footer.tagline)}</p>
        <a href="mailto:${U.esc(S.contact.email)}" class="footer__mail" data-cursor>${U.esc(S.contact.email)} ${U.icon("arrowUpRight")}</a>
      </div>
      <nav class="footer__nav" aria-label="Footer">
        ${U.list(S.nav, (l) => `<a href="${U.esc(l.href)}" data-cursor>${U.esc(l.label)}</a>`)}
      </nav>
      <div class="footer__socials">
        ${U.list(S.socials, (s) => `<a ${U.linkAttrs(s.url)} aria-label="${U.esc(s.label)}" data-magnetic data-cursor>${U.icon(s.icon)}</a>`)}
      </div>
    </div>
    <p class="footer__word" aria-hidden="true">${U.esc(S.brand.name)}</p>
    <div class="footer__bottom">
      <span>© <span data-year></span> ${U.esc(S.brand.name)}. ${U.esc(S.footer.note)}</span>
      <a href="#top" class="footer__top-link" data-cursor>Back to top ${U.icon("arrowUp")}</a>
    </div>
  </div>`;
