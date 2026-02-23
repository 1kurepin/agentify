(function () {
  var body = document.body;
  if (!body) {
    return;
  }

  body.classList.add("has-js");

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var mobileNavBreakpoint = 860;
  var navToggle = document.querySelector("[data-nav-toggle]");
  var siteNav = document.getElementById("site-nav");

  if (navToggle && siteNav) {
    var setNavOpen = function (open, options) {
      var behavior = options || {};

      if (open) {
        siteNav.classList.add("is-open");
      } else {
        siteNav.classList.remove("is-open");
      }

      navToggle.setAttribute("aria-expanded", open ? "true" : "false");

      if (!open && behavior.restoreFocus) {
        navToggle.focus();
      }
    };

    setNavOpen(false);

    navToggle.addEventListener("click", function () {
      var isOpen = siteNav.classList.contains("is-open");
      setNavOpen(!isOpen);
    });

    siteNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        if (window.innerWidth <= mobileNavBreakpoint) {
          setNavOpen(false);
        }
      });
    });

    document.addEventListener("click", function (event) {
      if (window.innerWidth > mobileNavBreakpoint) {
        return;
      }

      if (!siteNav.classList.contains("is-open")) {
        return;
      }

      if (siteNav.contains(event.target) || navToggle.contains(event.target)) {
        return;
      }

      setNavOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && siteNav.classList.contains("is-open")) {
        event.preventDefault();
        setNavOpen(false, { restoreFocus: true });
      }
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > mobileNavBreakpoint) {
        setNavOpen(false);
      }
    });
  }

  var docContent = document.querySelector("[data-doc-content]");
  var tocContainer = document.querySelector(".doc-toc-rail");
  var tocList = document.querySelector("[data-doc-toc-list]");

  if (
    body.classList.contains("page-doc") &&
    docContent &&
    tocContainer &&
    tocList
  ) {
    var headings = Array.prototype.slice.call(docContent.querySelectorAll("h2, h3"));

    if (!headings.length) {
      tocContainer.classList.add("is-empty");
    } else {
      var slugify = function (text) {
        return text
          .toLowerCase()
          .trim()
          .replace(/[^a-z0-9\s-]/g, "")
          .replace(/\s+/g, "-")
          .replace(/-+/g, "-") || "section";
      };

      headings.forEach(function (heading) {
        if (!heading.id) {
          var base = slugify(heading.textContent || "section");
          var candidate = base;
          var index = 2;

          while (document.getElementById(candidate)) {
            candidate = base + "-" + index;
            index += 1;
          }

          heading.id = candidate;
        }

        var listItem = document.createElement("li");
        var link = document.createElement("a");
        var level = heading.tagName.toLowerCase() === "h3" ? "3" : "2";

        link.className = "doc-toc-link";
        link.href = "#" + heading.id;
        link.setAttribute("data-level", level);
        link.textContent = (heading.textContent || "").trim();

        listItem.appendChild(link);
        tocList.appendChild(listItem);
      });

      var tocLinks = Array.prototype.slice.call(tocList.querySelectorAll(".doc-toc-link"));

      var setActiveLink = function (id) {
        tocLinks.forEach(function (link) {
          var isActive = link.getAttribute("href") === "#" + id;
          link.classList.toggle("is-active", isActive);

          if (isActive) {
            link.setAttribute("aria-current", "true");
          } else {
            link.removeAttribute("aria-current");
          }
        });
      };

      var getCurrentHeading = function () {
        var threshold = window.innerHeight * 0.24;
        var current = headings[0];

        headings.forEach(function (heading) {
          var top = heading.getBoundingClientRect().top;
          if (top <= threshold) {
            current = heading;
          }
        });

        return current;
      };

      var updateActiveFromScroll = function () {
        var current = getCurrentHeading();
        if (current) {
          setActiveLink(current.id);
        }
      };

      updateActiveFromScroll();
      window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
      window.addEventListener("resize", updateActiveFromScroll);
    }
  }

  var revealTargets = document.querySelectorAll(
    ".home-hero, .feature-card, .quick-link-group, .doc-content > h1, .doc-content > h2, .doc-content > h3"
  );

  revealTargets.forEach(function (node, index) {
    node.classList.add("reveal");
    node.style.transitionDelay = Math.min(index, 5) * 35 + "ms";
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach(function (node) {
      node.classList.add("in-view");
      node.style.transitionDelay = "0ms";
    });
    return;
  }

  var revealObserver = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  revealTargets.forEach(function (node) {
    revealObserver.observe(node);
  });
})();