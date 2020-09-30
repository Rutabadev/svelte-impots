<script lang="ts">
  import { fade } from "svelte/transition";
  import type { Palier } from "./types";
  export let paliers: Array<Palier>;
  const numberFormatter = new Intl.NumberFormat("fr-FR");
</script>

<div>
  <table>
    <thead>
      <tr>
        <th>Tranche</th>
        <th>Taxe</th>
        <th>Montant à payer</th>
      </tr>
    </thead>
    <tbody>
      {#each paliers as palier, i}
        <tr transition:fade>
          <td>
            {numberFormatter.format((paliers[i - 1] || { limit: 0 }).limit)} - {numberFormatter.format(palier.limit)}
          </td>
          <td>{palier.tax} %</td>
          {#if palier.due}
            <td transition:fade>{palier.due.toFixed(2)}</td>
          {/if}
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>
  table * {
    border: 1px solid white;
    padding: 1rem;
  }
</style>
