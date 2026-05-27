/* Shared nav + footer for inner pages (auto-injected) */
(function () {
  const D = window.ASFS_DATA;
  const active = document.body.dataset.page || "";
  const link = (h, k, t) =>
    `<li><a href="${h}" class="${active === k ? "is-active" : ""}">${t}</a></li>`;

  const nav = `
  <header class="nav nav--inner">
    <div class="container nav__inner">
      <a href="index.html" class="nav__logo">
        <img src="assets/logo.png" alt="Asian Security & Facility Services" />
        <span>Asian Security &amp;
  <small>Facility Services</small>
</span>
      </a>
      <nav>
        <ul class="nav__links">
          ${link("index.html","home","Home")}
          ${link("about-us.html","about","About")}
          ${link("services.html","services","Services")}
          ${link("industries-we-serve.html","industries","Industries")}
          ${link("clients.html","clients","Clients")}
          ${link("gallery.html","gallery","Gallery")}
          ${link("why-choose-us.html","why","Why Choose Us")}
        </ul>
      </nav>
      <a href="contact-us.html" class="nav__cta">Get a Quote →</a>
      <button class="nav__burger" aria-label="Menu"><span></span></button>
    </div>
  </header>`;

  const waNum = D.company.whatsapp.replace(/[^0-9]/g, "");
  const footer = `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div>
          <div class="footer__brand">
            <img src="assets/logo.png" alt="" />
            <strong>Asian Security & <br/>&amp; Facility Services</strong>
          </div>
          <p>Integrated facility management with 3000+ trained professionals serving 100+ clients across India. Your safety is our priority.</p>
          <div class="socials">
            
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l.5-4H13V7.5c0-1.2.3-2 2-2h2V2.1C16.7 2 15.5 2 14.2 2 11.4 2 9.5 3.7 9.5 6.9V10H6.5v4h3v8z"/></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/></svg></a>
           
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="about-us.html">About Us</a></li>
            <li><a href="services.html">Services</a></li>
            <li><a href="industries-we-serve.html">Industries</a></li>
            <li><a href="clients.html">Clients</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            
            <li><a href="contact-us.html">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4>Services</h4>
          <ul>${D.services.map(s=>`<li><a href="services.html">${s.title}</a></li>`).join("")}</ul>
        </div>
        <div>
          <h4>Get In Touch</h4>
          <ul>
            <li>📞 ${D.company.phone}</li>
            <li>✉ ${D.company.email}</li>
            <li>🌐 <a href="${D.company.website}" target="_blank">${D.company.website.replace("https://","")}</a></li>
            <li>📍 ${D.company.hq}</li>
          </ul>
          
        </div>
      </div>
      <div class="footer__bottom">
        <span>© <span data-year></span> Asian Security &amp; Facility Services Pvt Ltd. All rights reserved.</span>
        <span>Hyderabad, India</span>
      </div>
    </div>
  </footer>

  <button class="to-top" aria-label="Back to top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
  </button>`;

  document.getElementById("nav-mount")?.insertAdjacentHTML("beforebegin", nav);
  document.getElementById("nav-mount")?.remove();
  document.getElementById("footer-mount")?.insertAdjacentHTML("beforebegin", footer);
  document.getElementById("footer-mount")?.remove();
})();