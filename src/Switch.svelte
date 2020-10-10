<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let checked: boolean;
  export let value: string;
  export let left = "off";
  export let right = "on";
  const dispatch = createEventDispatcher();
  let isHovered = false;
  let isFocused = false;
  const onHover = () => (isHovered = true);
  const onLeave = () => (isHovered = false);
  const onFocus = () => (isFocused = true);
  const onBlur = () => (isFocused = false);
  const onClick = () => {
    checked = !checked;
    value = checked ? right : left;
    dispatch("change");
  };
  const handleKeydown = ({ key }) => {
    if (!isFocused) return;
    switch (key) {
      case "Enter":
        onClick();
        break;
      case "ArrowLeft":
        checked && onClick();
        break;
      case "ArrowRight":
        !checked && onClick();
        break;
      default:
        break;
    }
  };
</script>

<div
  on:click={onClick}
  on:mouseenter={onHover}
  on:mouseleave={onLeave}
  tabindex="0"
  on:keydown={handleKeydown}
  on:focus={onFocus}
  on:blur={onBlur}>
  <span color={!checked ? 'orange' : 'white'}>{left}</span>
  <svg width="60" height="36" aria-hidden="true" style="margin-rigth: 4">
    <rect
      x="6"
      y="6"
      width="48"
      height="24"
      rx="12"
      fill={checked ? 'orange' : 'gray'} />
    <circle cx={checked ? 42 : 18} cy="18" r="7.5" fill="white" />
    {#if isHovered}
      <rect
        transition:fade={{ duration: 50 }}
        x="1.5"
        y="1.5"
        width="57"
        height="33"
        rx="16.5"
        fill="none"
        stroke="orange"
        stroke-width="3" />
    {/if}
  </svg>
  <span color={checked ? 'orange' : 'white'}>{right}</span>
</div>

<style>
  div {
    display: flex;
    align-items: center;
    margin: auto;
    user-select: none;
    cursor: pointer;
  }
  rect,
  circle {
    transition: all 100ms ease;
  }
</style>
