(() => {
  const DRIVE_BASE = "https://drive.google.com/drive/folders/1W7migXzMvtxKfO4mZLlyr8NzNVoUTQh0";

  const portfolio = [
    { key: "rollup", en: "Roll Up", ar: "ستاند أب", image: "./src/assets/portfolio/rollup.jpg" },
    { key: "snapAds", en: "Snap Ads", ar: "إعلانات سناب", image: "./src/assets/portfolio/snap-ads.jpg" },
    { key: "otherWorks", en: "Other Works", ar: "أعمال أخرى", image: "./src/assets/portfolio/other-works.jpg" },
    { key: "misc", en: "Miscellaneous", ar: "أعمال متنوعة", image: "./src/assets/portfolio/miscellaneous.jpg" },
    { key: "profiles", en: "Profiles & Reports", ar: "بروفايلات وتقارير", image: "./src/assets/portfolio/profiles-reports.jpg" },
    { key: "posters", en: "Posters", ar: "بوسترات", image: "./src/assets/portfolio/posters.jpeg" },
    { key: "ads", en: "Advertising Designs", ar: "تصاميم إعلانية متنوعة", image: "./src/assets/portfolio/advertising.jpg" },
    { key: "training", en: "Training Courses", ar: "دورات تدريبية", image: "./src/assets/portfolio/training.jpg" },
    { key: "social", en: "Social Media", ar: "سوشيال ميديا", image: "./src/assets/portfolio/social-media.jpg" },
    { key: "cv", en: "CV", ar: "سيرة ذاتية", image: "./src/assets/portfolio/cv.jpg" },
    { key: "logo", en: "Logo & Identity", ar: "شعارات وهويات", image: "./src/assets/portfolio/logo-identity.png" },
    { key: "present", en: "Presentations", ar: "عروض تقديمية", image: "./src/assets/portfolio/presentations.jpg" },
    { key: "business", en: "Business Cards", ar: "كروت أعمال", image: "./src/assets/portfolio/business-cards.jpg" },
    { key: "grad", en: "Graduation Magazines", ar: "مجلات تخرج", image: "./src/assets/portfolio/graduation-magazines.jpg" },
    { key: "realestate", en: "Real Estate Ads", ar: "إعلانات عقارية", image: "./src/assets/portfolio/real-estate.jpg" }
  ];

  const copy = {
    en: {
      navHome: "Home",
      navAbout: "About",
      navPortfolio: "Portfolio",
      navContact: "Contact",
      firstName: "Najeeb",
      lastName: "Al-Kholani",
      heroTagline: "Crafting visual stories that captivate, inspire, and elevate brands",
      exploreWork: "Explore Work",
      scrollLabel: "Scroll",
      aboutTitleSmall: "About Me",
      aboutHeadingStart: "Design is ",
      aboutHeadingAccent: "Thinking",
      aboutHeadingEnd: " Made Visual",
      aboutParagraph1: "I'm Najeeb Al-Kholani, a passionate graphic designer dedicated to transforming ideas into powerful visual experiences. I help brands stand out and communicate clearly.",
      aboutParagraph2: "From social campaigns to complete brand identities, every project gets the same attention to detail and creative direction.",
      statProjects: "Projects Completed",
      statClients: "Happy Clients",
      statYears: "Years Experience",
      service1Title: "Brand Identity",
      service1Desc: "Logos, visual systems, and brand guidelines.",
      service2Title: "Advertising Design",
      service2Desc: "Print and digital ads for campaigns that convert.",
      service3Title: "Creative Solutions",
      service3Desc: "Presentations, reports, and publication design.",
      portfolioSmall: "Portfolio",
      portfolioHeadingStart: "Selected ",
      portfolioHeadingAccent: "Works",
      viewMore: "View More",
      contactSmall: "Get in Touch",
      contactHeadingStart: "Let's ",
      contactHeadingAccent: "Create",
      contactHeadingEnd: " Together",
      contactText: "Have a project in mind? Let's work together to bring your vision to life.",
      contactWhatsapp: "WhatsApp",
      contactWhatsappValue: "Chat Now",
      contactEmail: "Email",
      contactLocation: "Location",
      contactLocationValue: "KSA",
      footerText: "© 2026 Najeeb Al-Kholani. All rights reserved."
    },
    ar: {
      navHome: "الرئيسية",
      navAbout: "عني",
      navPortfolio: "أعمالي",
      navContact: "تواصل",
      firstName: "نجيب",
      lastName: "الخولاني",
      heroTagline: "أصنع قصصًا بصرية تأسر الأنظار وتُلهم وترتقي بالعلامات التجارية",
      exploreWork: "استعرض الأعمال",
      scrollLabel: "انزل",
      aboutTitleSmall: "عني",
      aboutHeadingStart: "التصميم هو ",
      aboutHeadingAccent: "تفكير",
      aboutHeadingEnd: " بصري",
      aboutParagraph1: "أنا نجيب الخولاني، مصمم جرافيك شغوف أحول الأفكار إلى تجارب بصرية قوية تساعد العلامات التجارية على التميز.",
      aboutParagraph2: "من حملات السوشيال ميديا إلى بناء الهوية الكاملة، كل مشروع ينال نفس مستوى العناية والإبداع.",
      statProjects: "مشروع مُنجز",
      statClients: "عميل سعيد",
      statYears: "سنوات خبرة",
      service1Title: "الهوية البصرية",
      service1Desc: "شعارات، أنظمة بصرية، ودليل استخدام الهوية.",
      service2Title: "تصميم إعلاني",
      service2Desc: "إعلانات مطبوعة ورقمية لحملات فعالة.",
      service3Title: "حلول إبداعية",
      service3Desc: "عروض تقديمية، تقارير، ومطبوعات احترافية.",
      portfolioSmall: "معرض الأعمال",
      portfolioHeadingStart: "أعمال ",
      portfolioHeadingAccent: "مختارة",
      viewMore: "مشاهدة المزيد",
      contactSmall: "تواصل معي",
      contactHeadingStart: "لنصنع ",
      contactHeadingAccent: "إبداعًا",
      contactHeadingEnd: " معًا",
      contactText: "لديك مشروع في ذهنك؟ يسعدني أن أسمع تفاصيله ونعمل معًا لتحويل الرؤية إلى واقع.",
      contactWhatsapp: "واتساب",
      contactWhatsappValue: "تواصل الآن",
      contactEmail: "البريد",
      contactLocation: "الموقع",
      contactLocationValue: "المملكة العربية السعودية",
      footerText: "© 2026 نجيب الخولاني. جميع الحقوق محفوظة."
    }
  };

  const typingWords = {
    en: ["Graphic Designer", "Brand Identity Expert", "Visual Storyteller", "Creative Director"],
    ar: ["مصمم جرافيك", "خبير هوية بصرية", "صانع قصص بصرية", "مدير إبداعي"]
  };

  const html = document.documentElement;
  const body = document.body;
  const nav = document.getElementById("top-nav");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const portfolioGrid = document.getElementById("portfolioGrid");

  const state = {
    lang: localStorage.getItem("portfolio-lang") || "ar",
    theme: localStorage.getItem("portfolio-theme") || "dark"
  };

  function applyTheme() {
    html.classList.remove("dark", "light");
    html.classList.add(state.theme);
    body.classList.toggle("font-arabic", state.lang === "ar");

    const isDark = state.theme === "dark";
    const icon = isDark ? "🌙" : "☀";
    const t1 = document.getElementById("themeToggle");
    const t2 = document.getElementById("themeToggleMobile");
    if (t1) t1.textContent = icon;
    if (t2) t2.textContent = icon;
  }

  function renderPortfolio() {
    if (!portfolioGrid) return;
    portfolioGrid.innerHTML = "";

    const lang = state.lang;
    portfolio.forEach((item) => {
      const label = lang === "ar" ? item.ar : item.en;
      const viewMore = copy[lang].viewMore;

      const card = document.createElement("article");
      card.className = "port-card fade-up";
      card.innerHTML = `
        <img src="${item.image}" alt="${label}" loading="lazy" />
        <div class="port-overlay">
          <h3 class="font-display text-lg">${label}</h3>
          <a href="${DRIVE_BASE}" target="_blank" rel="noopener noreferrer" class="gold-btn text-xs">${viewMore}</a>
        </div>
        <div class="port-tag font-display">${label}</div>
      `;

      portfolioGrid.appendChild(card);
    });

    revealOnScroll();
  }

  function applyLanguage() {
    const langPack = copy[state.lang];
    const isAr = state.lang === "ar";

    html.setAttribute("lang", isAr ? "ar" : "en");
    html.setAttribute("dir", isAr ? "rtl" : "ltr");
    body.classList.toggle("font-arabic", isAr);

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (key && langPack[key] !== undefined) {
        el.textContent = langPack[key];
      }
    });

    const langLabel = isAr ? "EN" : "عربي";
    const l1 = document.getElementById("langToggle");
    const l2 = document.getElementById("langToggleMobile");
    if (l1) l1.textContent = langLabel;
    if (l2) l2.textContent = langLabel;

    renderPortfolio();
    startTyping();
  }

  function revealOnScroll() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".fade-up:not(.visible)").forEach((el) => observer.observe(el));
  }

  function setupScrollButtons() {
    document.querySelectorAll("[data-scroll]").forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = document.querySelector(btn.getAttribute("data-scroll"));
        if (target) target.scrollIntoView({ behavior: "smooth" });
        mobileMenu?.classList.add("hidden");
      });
    });
  }

  let typingTimer;
  function startTyping() {
    const textEl = document.getElementById("typingText");
    if (!textEl) return;

    clearTimeout(typingTimer);

    const words = typingWords[state.lang];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function type() {
      const current = words[wordIndex];
      if (!deleting) {
        charIndex += 1;
        textEl.textContent = current.slice(0, charIndex);
        if (charIndex >= current.length) {
          deleting = true;
          typingTimer = setTimeout(type, 1500);
          return;
        }
        typingTimer = setTimeout(type, 85);
      } else {
        charIndex -= 1;
        textEl.textContent = current.slice(0, Math.max(charIndex, 0));
        if (charIndex <= 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
        }
        typingTimer = setTimeout(type, 50);
      }
    }

    type();
  }

  function initEvents() {
    window.addEventListener("scroll", () => {
      nav?.classList.toggle("scrolled", window.scrollY > 35);
    });

    mobileMenuBtn?.addEventListener("click", () => {
      mobileMenu?.classList.toggle("hidden");
    });

    ["themeToggle", "themeToggleMobile"].forEach((id) => {
      document.getElementById(id)?.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        localStorage.setItem("portfolio-theme", state.theme);
        applyTheme();
      });
    });

    ["langToggle", "langToggleMobile"].forEach((id) => {
      document.getElementById(id)?.addEventListener("click", () => {
        state.lang = state.lang === "ar" ? "en" : "ar";
        localStorage.setItem("portfolio-lang", state.lang);
        applyLanguage();
        applyTheme();
      });
    });
  }

  applyTheme();
  applyLanguage();
  setupScrollButtons();
  initEvents();
  revealOnScroll();

  const cursor = document.getElementById("typingCursor");
  setInterval(() => {
    if (cursor) cursor.style.opacity = cursor.style.opacity === "0" ? "1" : "0";
  }, 500);
})();
