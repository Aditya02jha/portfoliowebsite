/* Contact: direct channels + project enquiry form */
window.Sections = window.Sections || {};

Sections.contact = (S) => {
  const d = S.contactSection;
  const c = S.contact;
  // No phone digits are written into the HTML — effects.js assembles them on tap.
  const hasWa = (c.whatsappParts || []).length > 0;
  const hasPhone = (c.phoneParts || []).length > 0;
  const chip = (name, v, i) =>
    `<label class="choice"><input type="radio" name="${name}" value="${U.esc(v)}" ${i === 0 ? "" : ""}><span>${U.esc(v)}</span></label>`;

  return `
  <section class="section contact" id="contact">
    <div class="contact__glow" aria-hidden="true"></div>
    <div class="container contact__grid">
      <div class="contact__info">
        ${U.head(d)}
        <div class="channels reveal" style="--d:3">
          <a href="mailto:${U.esc(c.email)}" class="channel" data-cursor>
            <span class="channel__icon">${U.icon("mail")}</span>
            <span><small>Email</small>${U.esc(c.email)}</span>${U.icon("arrowUpRight")}
          </a>
          ${hasWa ? `<a href="#contact" class="channel channel--wa" data-wa data-cursor>
            <span class="channel__icon">${U.icon("whatsapp")}</span>
            <span><small>WhatsApp</small>Chat instantly</span>${U.icon("arrowUpRight")}
          </a>` : ""}
          ${hasPhone ? `<a href="#contact" class="channel" data-call data-cursor>
            <span class="channel__icon">${U.icon("call")}</span>
            <span><small>Call</small><span data-call-label>Tap to call</span></span>${U.icon("arrowUpRight")}
          </a>` : ""}
        </div>
        <ul class="contact__facts reveal" style="--d:4">
          ${c.location ? `<li>${U.icon("pin")}${U.esc(c.location)}</li>` : ""}
          ${c.responseTime ? `<li>${U.icon("clock")}${U.esc(c.responseTime)}</li>` : ""}
        </ul>
      </div>

      <form class="form card reveal" style="--d:2" novalidate>
        <div class="form__row">
          <label class="field"><span>Your name</span><input name="name" required autocomplete="name" placeholder="Priya Sharma"></label>
          <label class="field"><span>Email</span><input name="email" type="email" required autocomplete="email" placeholder="you@business.com"></label>
        </div>
        <label class="field"><span>Business name <i>(optional)</i></span><input name="business" placeholder="Bloom Café"></label>

        <fieldset class="field"><legend>What do you need?</legend>
          <div class="choices">${U.list(d.projectTypes, (v, i) => chip("type", v, i))}</div>
        </fieldset>
        <fieldset class="field"><legend>Budget</legend>
          <div class="choices">${U.list(d.budgets, (v, i) => chip("budget", v, i))}</div>
        </fieldset>

        <label class="field"><span>Tell me about your project</span><textarea name="message" rows="4" required placeholder="What does your business do, and what should the website achieve?"></textarea></label>

        <button type="submit" class="btn btn--primary btn--lg btn--block" data-magnetic data-cursor>
          <span>Send my enquiry</span>${U.icon("arrow")}
        </button>
        <p class="form__status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </section>`;
};
