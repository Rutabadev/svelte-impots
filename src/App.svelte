<script lang="ts">
  import { onMount } from "svelte";
  import { tick } from "svelte";
  import Paliers from "./Paliers.svelte";
  import Switch from "./Switch.svelte";

  let revenu: number = 0;
  const currencyFormatter = new Intl.NumberFormat("fr-FR", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
    style: "currency",
    currency: "EUR",
  });
  let impot: number = 0;
  $: formattedImpot = currencyFormatter.format(impot);
  let net: number = 0;
  $: formattedNet = currencyFormatter.format(net);
  let inCouple: boolean = false;
  let nbChildren: number = 0;
  let darkTheme: boolean;
  // When darkTheme changes, toggleTheme()
  $: (darkTheme = false), toggleTheme();
  let ready = false;
  const paliersByYear = {
    "2019": [
      {
        limit: 10064,
        tax: 0,
        due: 0,
      },
      {
        limit: 27794,
        tax: 14,
        due: 0,
      },
      {
        limit: 74517,
        tax: 30,
        due: 0,
      },
      {
        limit: 157806,
        tax: 41,
        due: 0,
      },
      {
        limit: Infinity,
        tax: 45,
        due: 0,
      },
    ],
    "2020": [
      {
        limit: 10064,
        tax: 0,
        due: 0,
      },
      {
        limit: 25659,
        tax: 11,
        due: 0,
      },
      {
        limit: 73369,
        tax: 30,
        due: 0,
      },
      {
        limit: 157806,
        tax: 41,
        due: 0,
      },
      {
        limit: Infinity,
        tax: 45,
        due: 0,
      },
    ],
    "2021": [
      {
        limit: 10084,
        tax: 0,
        due: 0,
      },
      {
        limit: 25710,
        tax: 11,
        due: 0,
      },
      {
        limit: 73516,
        tax: 30,
        due: 0,
      },
      {
        limit: 158122,
        tax: 41,
        due: 0,
      },
      {
        limit: Infinity,
        tax: 45,
        due: 0,
      },
    ],
  };
  let year: string = "2021";
  $: paliers = paliersByYear[year];

  onMount(() => {
    if (localStorage.getItem("darkTheme")) {
      darkTheme = JSON.parse(localStorage.getItem("darkTheme"));
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkTheme = true;
    }
    document.documentElement.setAttribute(
      "data-dark-theme",
      darkTheme.toString()
    );
    ready = true;
  });

  async function toggleTheme() {
    if (!ready) {
      return;
    }
    document.documentElement.setAttribute(
      "data-dark-theme",
      darkTheme.toString()
    );
    localStorage.setItem("darkTheme", darkTheme.toString());
  }

  async function calcImpots(): Promise<void> {
    // Adding a one tick timeout to let update paliers computed value
    await tick();
    document.querySelector("form").reportValidity();
    const quotient = calcQuotientFamilial({ inCouple, nbChildren });
    const effectiveRevenu = revenu / quotient;
    paliers = paliers.map((palier: any) => {
      palier.due = 0;
      return palier;
    });
    for (
      let i = 0;
      i < paliers.filter(({ limit }) => limit < effectiveRevenu).length + 1;
      i++
    ) {
      const currentPalier = paliers[i];
      const previousPalier = paliers[i - 1] || { limit: -1 };
      currentPalier.due =
        Math.max(
          Math.min(currentPalier.limit, effectiveRevenu) -
            (previousPalier.limit + 1),
          0
        ) *
        (currentPalier.tax / 100) *
        quotient;
    }

    impot = Math.max(
      paliers.reduce((acc: number, palier: any) => acc + palier.due, 0) || 0,
      0
    );
    net = Math.max(revenu - impot, 0) || 0;
  }

  function calcQuotientFamilial({ inCouple, nbChildren }) {
    let quotient = 1;
    if (inCouple) quotient += 1;
    for (let i = 0; i < nbChildren; i++) {
      if (i < 3) quotient += 0.5;
      else quotient += 1;
    }

    return quotient;
  }
</script>

<main>
  <Switch
    class="theme-switch"
    left="☀️"
    right="🌕"
    on:change={toggleTheme}
    bind:value={darkTheme} />
  <form>
    <div class="wrapper">
      <div class="subwrapper">
        <label for="revenu">Revenu</label>
        <input
          id="revenu"
          type="number"
          min="0"
          step="1"
          list="defaultNumbers"
          bind:value={revenu}
          on:input={calcImpots} />
      </div>
      <datalist id="defaultNumbers">
        <option value="33000" />
        <option value="55000" />
        <option value="178000" /></datalist>
      <div class="subwrapper checkbox">
        <label for="inCouple">En couple</label>
        <input
          id="inCouple"
          type="checkbox"
          bind:checked={inCouple}
          on:change={calcImpots} />
      </div>
      <div class="subwrapper">
        <label for="nbChildren">Nombre d'enfants</label>
        <input
          id="nbChildren"
          type="number"
          min="0"
          bind:value={nbChildren}
          on:input={calcImpots} />
      </div>
    </div>
    <div class="subwrapper">
      <label for="impot">Impôt</label>
      <input id="impot" type="text" readonly value={formattedImpot} />
    </div>
    <div class="subwrapper">
      <label for="net">Après impôt</label>
      <input id="net" type="text" readonly value={formattedNet} />
    </div>
  </form>
  <div class="infos">
    <select
      class="year-select"
      name="year"
      bind:value={year}
      on:input={calcImpots}>
      {#each Object.keys(paliersByYear).reverse() as year}
        <option value={year}>{year}</option>
      {/each}
    </select>
    <div>
      Taux final: {new Intl.NumberFormat('fr-FR', { style: 'percent', minimumFractionDigits: 2 }).format(impot / revenu || 0)}
    </div>
    <Paliers {paliers} />
  </div>
</main>

<style lang="css">
  main {
    height: 100%;
    margin-top: 4rem;
    grid-template-columns: 1fr;
    place-items: center;
  }

  @media (min-width: 640px) {
    main {
      width: 88%;
      display: grid;
      gap: 1rem;
      grid-template-columns: 1fr 1fr;
      margin: auto;
    }
  }

  :global(.theme-switch) {
    position: absolute;
    top: 1rem;
    right: 1rem;

    border-radius: 50%;
    text-align: center;
  }

  :global([data-dark-theme="true"] .theme-button) {
    background-color: #333;
    filter: var(--filter);
  }

  .wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    gap: 0;
  }

  @media (min-width: 1300px) {
    .wrapper {
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
    }
  }

  .subwrapper {
    margin-bottom: 0.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  input:invalid {
    border: 2px solid red;
  }

  .checkbox {
    align-items: center;
    text-align: center;
  }

  label {
    margin-bottom: 0.3rem;
  }

  input[type="checkbox"] {
    height: 25px;
    width: 25px;
  }

  .infos {
    display: grid;
    gap: 1rem;
  }
  .infos :not(table) {
    text-align: center;
  }

  .year-select {
    max-width: min-content;
    margin: auto;
  }
</style>
