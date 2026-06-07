const rankings = [
  {
    "id": "semester-1",
    "division": "GPA SEMESTER 1",
    "weight": "",
    "image": "assets/images/orang.png",
    "fighters": [
      {
        "rank": 1,
        "name": "NO NAME",
        "change": null,
        "tag": "GPA 4.00"
      },
      {
        "rank": 2,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 3,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 4,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "down"
      },
      {
        "rank": 5,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 6,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "down"
      },
      {
        "rank": 7,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 8,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 9,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "down"
      },
      {
        "rank": 10,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      }
    ]
  },
  {
    "id": "semester-2",
    "division": "GPA SEMESTER 2",
    "weight": "",
    "image": "assets/images/orang.png",
    "fighters": [
      {
        "rank": 1,
        "name": "NO NAME",
        "change": null,
        "tag": "GPA 4.00"
      },
      {
        "rank": 2,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 3,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 4,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "down"
      },
      {
        "rank": 5,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 6,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "down"
      },
      {
        "rank": 7,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 8,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 9,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "down"
      },
      {
        "rank": 10,
        "name": "NO NAME",
        "gpa": "GPA 4.00",
        "change": 1,
        "movement": "up"
      }
    ]
  }
];
const movementIcons = {
  up: "assets/icons/movement/up-clean.png?v=20260607130104",
  down: "assets/icons/movement/down-clean.png?v=20260607130104"
};
const grid = document.querySelector("#rankingGrid");
const filters = document.querySelector("#rankingFilters");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

function renderFilters() {
  if (!filters) return;
  filters.innerHTML = "";
  filters.style.display = "none";
}

function createFilterButton(label, id) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "filter-button";
  button.textContent = label;
  button.dataset.filter = id;

  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach((current) => current.classList.remove("is-active"));
    button.classList.add("is-active");
    renderCards(id);
  });

  return button;
}

function renderCards(filter = "all") {
  grid.innerHTML = rankings.map(createRankingCard).join("");
}

function createRankingCard(item) {
  const champion = item.fighters[0];
  const challengers = item.fighters.slice(1);

  return `
    <article class="ranking-card">
      <div class="card-header">
        <h3>${item.division}</h3>
      </div>

      <div class="featured-fighter">
        <div class="featured-meta">
          <div class="featured-rank">
  <span>#${champion.rank}</span>
  <a class="title-badge-link" href="#tittle-by-gland-siahaan" title="Tittle by Gland Siahaan" aria-label="Tittle by Gland Siahaan">
    <img class="title-badge" src="assets/icons/title/tittle-by-gland.png" alt="Tittle by Gland Siahaan">
  </a>
</div>
          <div class="featured-name">${champion.name}</div>
          ${champion.tag ? `<span class="featured-tag">${champion.tag}</span>` : ""}
        </div>
        <a class="featured-image-link" href="#no-name" title="No Name" aria-label="No Name">
  <img class="featured-image" src="${item.image}" alt="No Name">
</a>
      </div>

      <ol class="fighter-list">
        ${challengers.map(createFighterRow).join("")}
      </ol>
    </article>
  `;
}

function createFighterRow(fighter) {
  const movement = fighter.movement === "up" ? "up" : "down";

  const movementMarkup = fighter.change
    ? `<span class="change-pill change-${movement}">
        <img class="movement-icon" src="${movementIcons[movement]}" alt="${movement} movement">
        <span>${fighter.change}</span>
      </span>`
    : `<span class="change-pill"></span>`;

  const hoverText = fighter.gpa || "GPA 4.00";

  return `
    <li class="fighter-row">
      <span class="rank-number">${fighter.rank}</span>
      <span class="fighter-name" data-hover="${hoverText}">${fighter.name}</span>
      ${movementMarkup}
    </li>
  `;
}

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

renderFilters();
renderCards();


// GPA_HOVER_REVEAL_START
(function () {
  function enhanceGpaHoverReveal() {
    document.querySelectorAll(".fighter-row .fighter-name").forEach(function (item) {
      if (item.classList.contains("hover-gpa")) {
        return;
      }

      const currentName = item.textContent.trim() || "NO NAME";

      item.classList.add("hover-gpa");
      item.setAttribute("title", "GPA 4.00");
      item.innerHTML = `
        <span class="name-text">${currentName}</span>
        <span class="gpa-text">GPA 4.00</span>
      `;
    });
  }

  document.addEventListener("DOMContentLoaded", enhanceGpaHoverReveal);
  window.addEventListener("load", enhanceGpaHoverReveal);

  const observer = new MutationObserver(enhanceGpaHoverReveal);
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });

  enhanceGpaHoverReveal();
})();
// GPA_HOVER_REVEAL_END


// SEO_DYNAMIC_START
(function () {
  const SEO_BASE = {
    siteName: "Page Leaderboard GPA",
    developer: "Gland Jermano Blessed Siahaan",
    canonical: "https://gblessshn-boop.github.io/page-leaderboard-gpa-vibe-coding/",
    image: "https://gblessshn-boop.github.io/page-leaderboard-gpa-vibe-coding/docs/readme/web-landing-page-leaderboard.png"
  };

  function cleanText(value) {
    return String(value || "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function upsertMetaByName(name, content) {
    if (!content) return;

    let tag = document.querySelector(`meta[name="${name}"]`);

    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", name);
      document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
  }

  function upsertMetaByProperty(property, content) {
    if (!content) return;

    let tag = document.querySelector(`meta[property="${property}"]`);

    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("property", property);
      document.head.appendChild(tag);
    }

    tag.setAttribute("content", content);
  }

  function getLeaderboardSeoData() {
    const items = [];

    if (typeof rankings !== "undefined" && Array.isArray(rankings)) {
      rankings.forEach((semester) => {
        const semesterName = cleanText(semester.division);

        if (Array.isArray(semester.fighters)) {
          semester.fighters.forEach((fighter) => {
            items.push({
              semester: semesterName,
              rank: fighter.rank,
              name: cleanText(fighter.name),
              gpa: cleanText(fighter.gpa || fighter.tag || "GPA 4.00"),
              movement: cleanText(fighter.movement || "")
            });
          });
        }
      });
    }

    document.querySelectorAll(".ranking-card").forEach((card) => {
      const semester = cleanText(card.querySelector("h3")?.textContent);

      card.querySelectorAll(".fighter-row").forEach((row) => {
        const rank = cleanText(row.querySelector(".rank-number")?.textContent);
        const name = cleanText(row.querySelector(".name-text")?.textContent || row.querySelector(".fighter-name")?.textContent);
        const gpa = cleanText(row.querySelector(".gpa-text")?.textContent || "GPA 4.00");

        if (rank && name) {
          items.push({
            semester,
            rank,
            name,
            gpa
          });
        }
      });
    });

    return items;
  }

  function syncGpaLeaderboardSeo() {
    const items = getLeaderboardSeoData();
    const visibleNames = [...new Set(items.map((item) => item.name).filter(Boolean))].slice(0, 8);
    const visibleSemesters = [...new Set(items.map((item) => item.semester).filter(Boolean))];

    const title = "Page Leaderboard GPA - GPA Semester 1 and GPA Semester 2";
    const description = `Responsive GPA leaderboard page featuring ${visibleSemesters.join(", ") || "semester ranking boards"}, GPA score display, movement indicators, and interactive ranking rows by Gland Siahaan.`;
    const keywords = [
      "GPA leaderboard",
      "leaderboard GPA",
      "GPA semester",
      "student ranking",
      "academic leaderboard",
      "semester ranking page",
      "HTML CSS JavaScript",
      "vibe coding",
      "Gland Siahaan",
      ...visibleNames
    ].join(", ");

    document.title = title;

    upsertMetaByName("description", description);
    upsertMetaByName("keywords", keywords);
    upsertMetaByName("author", SEO_BASE.developer);
    upsertMetaByName("robots", "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
    upsertMetaByName("theme-color", "#430808");

    upsertMetaByProperty("og:title", title);
    upsertMetaByProperty("og:description", description);
    upsertMetaByProperty("og:type", "website");
    upsertMetaByProperty("og:site_name", SEO_BASE.siteName);
    upsertMetaByProperty("og:url", SEO_BASE.canonical);
    upsertMetaByProperty("og:image", SEO_BASE.image);

    upsertMetaByName("twitter:card", "summary_large_image");
    upsertMetaByName("twitter:title", title);
    upsertMetaByName("twitter:description", description);
    upsertMetaByName("twitter:image", SEO_BASE.image);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "name": SEO_BASE.siteName,
      "description": description,
      "url": SEO_BASE.canonical,
      "creator": {
        "@type": "Person",
        "name": SEO_BASE.developer,
        "sameAs": [
          "https://github.com/GblessSHN-boop",
          "https://www.instagram.com/glandsiahaan",
          "https://www.linkedin.com/in/glandsiahaan/"
        ]
      },
      "itemListElement": items.slice(0, 20).map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": `${item.semester || "GPA Semester"} Rank ${item.rank} - ${item.name}`,
        "description": `${item.name} holds ${item.gpa || "GPA 4.00"} in ${item.semester || "GPA leaderboard"}.`
      }))
    };

    let script = document.querySelector("#seo-jsonld");

    if (!script) {
      script = document.createElement("script");
      script.id = "seo-jsonld";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(jsonLd, null, 2);
  }

  function syncFooterYear() {
    const yearTarget = document.querySelector("#currentYear");

    if (yearTarget) {
      yearTarget.textContent = new Date().getFullYear();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    syncFooterYear();
    syncGpaLeaderboardSeo();
  });

  window.addEventListener("load", function () {
    syncFooterYear();
    syncGpaLeaderboardSeo();
  });

  window.syncGpaLeaderboardSeo = syncGpaLeaderboardSeo;

  const seoObserver = new MutationObserver(function () {
    window.clearTimeout(window.__gpaSeoTimer);
    window.__gpaSeoTimer = window.setTimeout(syncGpaLeaderboardSeo, 150);
  });

  seoObserver.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true
  });
})();
// SEO_DYNAMIC_END
