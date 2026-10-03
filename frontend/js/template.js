
function createPokemonCard(pokemon, i) {
  return `
    <li>
      <button class="pokemon-card-button" onclick="openPkmDialog(${i})">

        <h2 class="pokemon-title">
          <span class="id">#${pokemon.id}</span>
          ${pokemon.name.toUpperCase()}
        </h2>

        <div class="img-bg ${pokemon.types[0].type.name}">
          <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" class="pokemon-image">
        </div>

        <div class="pokemon-types">
          ${pokemon.types.map(type => `<span>${type.type.name}</span>`).join(" ")}
        </div>

      </button>
    </li>
  `;
}

function emptyMessage() {
  return `
    <p class="empty-message">
      No matching Pokémon found.
    </p>
  `;
}

function searchErrorMessage() {
    return `
        <p class="search-error">
            Please enter at least 3 characters to search.
        </p>
    `;
}

function createPokemonDialog(pokemon) {
  return `

    <h1 class="pokemon-title">
      <span class="id">#${pokemon.id}</span> ${pokemon.name}
    </h1>

    <div class="img-bg ${pokemon.types[0].type.name}">
      <img
        src="${pokemon.sprites.other["official-artwork"].front_default}"
        alt="${pokemon.name}"
        class="pokemon-image">
    </div>

    <div class="tabs">

      <button onclick="showTab('main', this)" class="active">Main</button>
      <button onclick="showTab('stats', this)">Stats</button>
      <button onclick="showTab('abilities', this)">Abilities</button>

    </div>

    <div id="tab-main" class="tab-content active">
      ${createMainTab(pokemon)}
    </div>

    <div id="tab-stats" class="tab-content">
      ${createStatsTab(pokemon)}
    </div>

    <div id="tab-abilities" class="tab-content">
     ${createAbilitiesTab(pokemon)}
    </div>

  `;
}

function createMainTab(pokemon) {
  return `

    <div class="main-tab">

      <p>
        <strong>Height:</strong>
        <span class="stat-value">${pokemon.height}</span>
      </p>

      <p>
        <strong>Weight:</strong>
        <span class="stat-value">${pokemon.weight}</span>
      </p>

      <p>
        <strong>Base XP:</strong>
        <span class="stat-value">${pokemon.base_experience}</span>
      </p>

    </div>

  `;
}

function createStatsTab(pokemon) {
  return pokemon.stats
    .filter((stat) => ["attack", "defense", "speed"].includes(stat.stat.name))
    .map(
      (stat) => `
      <div class="stat">
        <span>${stat.stat.name}</span>
        <div class="bar">
          <div class="fill" style="width:${stat.base_stat}%"></div>
        </div>
      </div>
    `
    )
    .join("");
}

function createAbilitiesTab(pokemon) {
  return `

    <div class="abilities-tab">

      <div class="abilities-list">
        ${pokemon.abilities
          .map(
            (ability) => `
              <div class="ability">
                ${ability.ability.name}
              </div>
            `,
          )

          .join("")}

      </div>

    </div>
  `;
}