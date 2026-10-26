/* Interactions: cursor, magnetic buttons, reveals, counters, spotlight,
   tilt, nav state, mobile menu, FAQ animation, contact form.
   Each feature is an independent function — delete any you don't want. */
(function () {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const lerp = (a, b, t) => a + (b - a) * t;

  /* ---------- Custom cursor ---------- */
  function cursor() {
    if (!finePointer || reduce) return;
    const dot = document.createElement("div");
    const ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    ring.innerHTML = "<span>View</span>";
    document.body.append(dot, ring);
    document.documentElement.classList.add("has-cursor");

    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("pointermove", (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
    });
    (function loop() {
      rx = lerp(rx, mx, 0.18); ry = lerp(ry, my, 0.18);
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    })();

    document.addEventListener("pointerover", (e) => {
      const t = e.target.closest("[data-cursor], a, button, summary, input, textarea, label");
      ring.classList.toggle("is-hover", !!t);
      ring.classList.toggle("is-view", !!(t && t.dataset.cursor === "view"));
    });
    document.addEventListener("pointerdown", () => ring.classList.add("is-down"));
    document.addEventListener("pointerup", () => ring.classList.remove("is-down"));
    document.addEventListener("pointerleave", () => ring.classList.add("is-hidden"));
    document.addEventListener("pointerenter", () => ring.classList.remove("is-hidden"));
  }

  /* ---------- Magnetic elements ---------- */
  function magnetic() {
    if (!finePointer || reduce) return;
    $$("[data-magnetic]").forEach((el) => {
      const strength = 0.3;
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        const x = e.clientX - (r.left + r.width / 2);
        const y = e.clientY - (r.top + r.height / 2);
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
      el.addEventListener("pointerleave", () => (el.style.transform = ""));
    });
  }

  /* ---------- Scroll reveals ---------- */
  function reveals() {
    const els = $$(".reveal, .hero__title, .process");
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("in");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Number counters ---------- */
  function counters() {
    const els = $$("[data-count]");
    const run = (el) => {
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const fmt = (v) => v.toLocaleString("en-IN", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (reduce) return (el.textContent = fmt(target));
      const dur = 1800, t0 = performance.now();
      const tick = (t) => {
        const p = Math.min((t - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 4);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => en.isIntersecting && (run(en.target), io.unobserve(en.target))),
      { threshold: 0.6 }
    );
    els.forEach((el) => io.observe(el));
  }

  /* ---------- Spotlight hover on cards ---------- */
  function spotlight() {
    if (!finePointer) return;
    $$(".spot").forEach((el) =>
      el.addEventListener("pointermove", (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${e.clientX - r.left}px`);
        el.style.setProperty("--my", `${e.clientY - r.top}px`);
      })
    );
  }

  /* ---------- 3D tilt on hero mockup ---------- */
  function tilt() {
    if (!finePointer || reduce) return;
    const el = $("[data-tilt]");
    const hero = $(".hero");
    if (!el || !hero) return;
    hero.addEventListener("pointermove", (e) => {
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;
      el.style.transform = `perspective(1200px) rotateY(${x * 10 - 8}deg) rotateX(${-y * 8 + 4}deg)`;
    });
    hero.addEventListener("pointerleave", () => (el.style.transform = ""));
  }

  /* ---------- Nav: scrolled state, active link, progress ---------- */
  function navState() {
    const nav = $("#nav");
    const links = $$(".nav__link");
    const progress = document.createElement("div");
    progress.className = "progress";
    document.body.append(progress);

    let last = 0;
    const onScroll = () => {
      const y = scrollY;
      nav.classList.toggle("is-scrolled", y > 20);
      nav.classList.toggle("is-hidden", y > 400 && y > last && !document.body.classList.contains("menu-open"));
      last = y;
      const max = document.documentElement.scrollHeight - innerHeight;
      progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    };
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (!en.isIntersecting) return;
          links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + en.target.id));
        }),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    $$("main section[id]").forEach((s) => io.observe(s));
  }

  /* ---------- Mobile menu ---------- */
  function mobileMenu() {
    const btn = $(".nav__burger");
    const sheet = $(".nav__sheet");
    if (!btn) return;
    const set = (open) => {
      document.body.classList.toggle("menu-open", open);
      btn.setAttribute("aria-expanded", open);
      sheet.setAttribute("aria-hidden", !open);
    };
    btn.addEventListener("click", () => set(!document.body.classList.contains("menu-open")));
    $$("a", sheet).forEach((a) => a.addEventListener("click", () => set(false)));
    addEventListener("keydown", (e) => e.key === "Escape" && set(false));
  }

  /* ---------- FAQ: one open at a time, smooth height ---------- */
  function faq() {
    const items = $$(".qa");
    items.forEach((d) => {
      const sum = $("summary", d);
      const body = $(".qa__a", d);
      sum.addEventListener("click", (e) => {
        e.preventDefault();
        const opening = !d.open;
        items.forEach((o) => o !== d && o.open && close(o));
        opening ? open(d, body) : close(d);
      });
    });
    function open(d, body) {
      d.open = true;
      const h = body.scrollHeight;
      body.animate([{ height: "0px", opacity: 0 }, { height: h + "px", opacity: 1 }], { duration: reduce ? 0 : 380, easing: "cubic-bezier(.16,1,.3,1)" });
    }
    function close(d) {
      const body = $(".qa__a", d);
      const a = body.animate([{ height: body.offsetHeight + "px", opacity: 1 }, { height: "0px", opacity: 0 }], { duration: reduce ? 0 : 280, easing: "ease-in" });
      a.onfinish = () => (d.open = false);
    }
  }

  /* ---------- Hidden phone & WhatsApp ----------
     Numbers live only as pieces in the config and are joined on tap,
     so they never sit in the page for scrapers to harvest.
     Phones: tap → dialer opens. Desktop: 1st click reveals, 2nd click calls. */
  function protectedContacts(S) {
    const c = S.contact;
    const join = (parts) => (parts || []).join("");
    const touch = window.matchMedia("(hover: none), (pointer: coarse)").matches;

    $$("[data-call]").forEach((el) => {
      let revealed = false;
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const num = join(c.phoneParts);
        const tel = "tel:" + num.replace(/[^\d+]/g, "");
        if (touch || revealed) return (location.href = tel);
        revealed = true;
        const label = $("[data-call-label]", el);
        if (label) label.textContent = (c.phoneParts || []).join(" ");
        el.classList.add("is-revealed");
        el.setAttribute("title", "Click again to call");
      });
    });

    $$("[data-wa]").forEach((el) =>
      el.addEventListener("click", (e) => {
        e.preventDefault();
        const digits = join(c.whatsappParts).replace(/\D/g, "");
        const url = `https://wa.me/${digits}?text=${encodeURIComponent(c.whatsappMessage || "")}`;
        window.open(url, "_blank", "noopener");
      })
    );
  }

  /* ---------- Pricing → contact pre-fill ---------- */
  function planPrefill() {
    $$("[data-plan]").forEach((b) =>
      b.addEventListener("click", () => {
        const msg = $(".form textarea[name=message]");
        if (msg && !msg.value) msg.value = `Hi! I'm interested in the ${b.dataset.plan} plan. `;
      })
    );
  }

  /* ---------- Contact form ---------- */
  function contactForm(S) {
    const form = $(".form");
    if (!form) return;
    const status = $(".form__status", form);
    const say = (txt, type) => {
      status.textContent = txt;
      status.className = "form__status " + (type ? "is-" + type : "");
    };

    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      const missing = ["name", "email", "message"].filter((k) => !String(data[k] || "").trim());
      $$("[name]", form).forEach((i) => i.closest(".field")?.classList.toggle("is-error", missing.includes(i.name)));
      if (missing.length) return say("Please fill in your name, email and a short message.", "error");
      if (!/^\S+@\S+\.\S+$/.test(data.email)) return say("That email doesn't look quite right.", "error");

      const endpoint = S.contact.formEndpoint;
      const btn = $("button[type=submit]", form);
      btn.disabled = true;
      try {
        if (endpoint) {
          const res = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: new FormData(form) });
          if (!res.ok) throw new Error("Request failed");
        } else {
          const body = [
            `Name: ${data.name}`, `Email: ${data.email}`, `Business: ${data.business || "-"}`,
            `Project: ${data.type || "-"}`, `Budget: ${data.budget || "-"}`, "", data.message,
          ].join("\n");
          location.href = `mailto:${S.contact.email}?subject=${encodeURIComponent("New project enquiry — " + data.name)}&body=${encodeURIComponent(body)}`;
        }
        say(S.contactSection.successMessage, "ok");
        form.reset();
      } catch {
        say(`Something went wrong. Please email me directly at ${S.contact.email}.`, "error");
      } finally {
        btn.disabled = false;
      }
    });
  }

  window.Effects = {
    init(S) {
      [cursor, magnetic, reveals, counters, spotlight, tilt, navState, mobileMenu, faq, planPrefill, protectedContacts].forEach((fn) => {
        try { fn(S); } catch (err) { console.warn("[effects]", fn.name, err); }
      });
      contactForm(S);
      $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
    },
  };
})();
