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
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 3,
        "name": "NO NAME",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 4,
        "name": "NO NAME",
        "change": 1,
        "movement": "down"
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
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 3,
        "name": "NO NAME",
        "change": 1,
        "movement": "up"
      },
      {
        "rank": 4,
        "name": "NO NAME",
        "change": 1,
        "movement": "down"
      }
    ]
  }
];
const movementIcons = {
  up: "assets/icons/movement/up.png?v=2",
  down: "assets/icons/movement/down.png?v=2"
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

  return `
    <li class="fighter-row">
      <span class="rank-number">${fighter.rank}</span>
      <span class="fighter-name">${fighter.name}</span>
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













