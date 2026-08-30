
const limit = 24;
let offset = 0;
let currentPokemonIndex = 0;
let allPokemons = [];
let currentAllPokemons = [];

async function init() {
  showSpinner();

  allPokemons = await loadPokemons(offset);
  currentAllPokemons = [...allPokemons];

  renderAllPokemons();

  hideSpinner();
}

async function loadPokemons(offset) {
  const pokemonUrl = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;

  const pokemonResponse = await fetch(pokemonUrl);
  const data = await pokemonResponse.json();

  const pokemonDetails = await Promise.all(
    data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      return await res.json();
    }),
  );

  return pokemonDetails;
}

async function loadMorePokemons() {
  const loadMoreBtn = document.getElementById("loadMoreBtn");

  loadMoreBtn.disabled = true;
  showSpinner();

  offset += limit;

  const newPokemons = await loadPokemons(offset);

  allPokemons.push(...newPokemons);
  currentAllPokemons = [...allPokemons];

  renderNewPokemons(newPokemons);

  hideSpinner();
  loadMoreBtn.disabled = false;
}

function renderAllPokemons() {
  const pokemonContainerRef = document.getElementById("pokemonContainer");
  pokemonContainerRef.innerHTML = "";

  if (currentAllPokemons.length === 0) {
    pokemonContainerRef.innerHTML = emptyMessage();
    return;
  }

  for (let i = 0; i < currentAllPokemons.length; i++) {
    pokemonContainerRef.innerHTML += createPokemonCard(
      currentAllPokemons[i],
      i,
    );
  }
}

function renderNewPokemons(pokemons) {
  const pokemonContainerRef = document.getElementById("pokemonContainer");

  for (let i = 0; i < pokemons.length; i++) {
    pokemonContainerRef.innerHTML += createPokemonCard(pokemons[i]);
  }
}

function showSpinner() {
  document.getElementById("loadingSpinner").classList.remove("d-none");
}

function hideSpinner() {
  document.getElementById("loadingSpinner").classList.add("d-none");
}

function searchPkm() {
  const searchInput = document.getElementById("searchInput").value.trim().toLowerCase();

  if (searchInput.length === 0) {
    currentAllPokemons = [...allPokemons];
    renderAllPokemons();
    return;
  }

  if (searchInput.length < 3) {
    document.getElementById("pokemonContainer").innerHTML = minSearchMessage();
    return;
  }

  currentAllPokemons = allPokemons.filter((pkm) =>
    pkm.name.toLowerCase().includes(searchInput),
  );

  renderAllPokemons();
}

function openPkmDialog(index) {
  currentPokemonIndex = index;

  const pokemon = currentAllPokemons[index];

  const pkmDialogRef = document.getElementById("pkmDialog");
  const pkmBodyRef = document.getElementById("pkmDialogBody");

  pkmBodyRef.innerHTML = createPokemonDialog(pokemon);

  pkmDialogRef.classList.remove("d-none");

  document.body.classList.add("no-scroll");
}

function closePkmDialog() {
  const pkmDialogRef = document.getElementById("pkmDialog");

  pkmDialogRef.classList.add("d-none");
  pkmDialogRef.className = "pkm-dialog d-none";

  document.body.classList.remove("no-scroll");
}

function closeBackdrop(event) {
  if (event.target.id === "pkmDialog") {
    closePkmDialog();
  }
}

function showTab(tabName, btn) {
  document.querySelectorAll(".tab-content").forEach((el) => {
    el.classList.remove("active");
  });

  document.getElementById(`tab-${tabName}`).classList.add("active");

  document.querySelectorAll(".tabs button").forEach((b) => {
    b.classList.remove("active");
  });

  btn.classList.add("active");
}

function renderNewPokemons(pokemons) {
  const pokemonContainerRef = document.getElementById("pokemonContainer");

  const startIndex = currentAllPokemons.length - pokemons.length;

  for (let i = 0; i < pokemons.length; i++) {
    pokemonContainerRef.innerHTML += createPokemonCard(
      pokemons[i],
      startIndex + i
    );
  }
}

function nextPokemon() {
  currentPokemonIndex++;

  if (currentPokemonIndex >= currentAllPokemons.length) {
    currentPokemonIndex = 0;
  }

  const pokemon = currentAllPokemons[currentPokemonIndex];
  document.getElementById("pkmDialogBody").innerHTML = createPokemonDialog(pokemon);
}

function prevPokemon() {
  currentPokemonIndex--;

  if (currentPokemonIndex < 0) {
    currentPokemonIndex = currentAllPokemons.length - 1;
  }

  const pokemon = currentAllPokemons[currentPokemonIndex];
  document.getElementById("pkmDialogBody").innerHTML = createPokemonDialog(pokemon);
}