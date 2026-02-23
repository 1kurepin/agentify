(function () {
  var body = document.body;
  if (!body) {
    return;
  }
  body.classList.add("has-js");

  var navToggle = document.querySelector("[data-nav-toggle]");
  var siteNav = document.getElementById("site-nav");
  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  requestAnimationFrame(function () {
    body.classList.add("is-ready");
  });

  if (navToggle && siteNav) {
    var setNavOpen = function (open) {
      if (open) {
        siteNav.classList.add("is-open");
      } else {
        siteNav.classList.remove("is-open");
      }
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.contains("is-open");
      setNavOpen(!isOpen);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= 840) {
          setNavOpen(false);
        }
      });
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 840) {
        setNavOpen(false);
      }
    });
  }

  var revealTargets = document.querySelectorAll(
    ".home-hero, .feature-card, .quick-link-group, .doc-content > h2, .doc-content > h3, .doc-content > p, .doc-content > ul, .doc-content > ol, .doc-content > table, .doc-content > pre, .doc-content > blockquote, .doc-content > hr"
  );

  revealTargets.forEach(function (node, index) {
    node.classList.add("reveal");
    node.style.transitionDelay = Math.min(index, 8) * 45 + "ms";
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (node) {
      node.classList.add("in-view");
    });
    return;
  }

  var observer = new IntersectionObserver(
    function (entries, obs) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -8% 0px"
    }
  );

  revealTargets.forEach(function (node) {
    observer.observe(node);
  });
})();
