<script lang="ts">
import { createEventDispatcher } from 'svelte';

    import {fade} from 'svelte/transition'
    // import { createEventDispatcher } from 'svelte';

    export let checked: boolean;
    export let value: string;
    export let left = 'off';
    export let right = 'on';
    const dispatch = createEventDispatcher();
    let isHovered = false;
    let isFocused = false;
    const onHover = () => isHovered = true;
    const onLeave = () => isHovered = false;
    const onFocus = () => isFocused = true;
    const onBlur = () => isFocused = false;
    const onClick = () => {
        checked = !checked
        value = checked ? right : left
        dispatch('change');
    }
    const handleKeypress = ({key}) => {
        if (isFocused && key === 'Enter') {
            onClick()
        }
    }
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label 
    on:click={onClick}
    on:mouseenter={onHover}
    on:mouseleave={onLeave}
    tabindex=0
    on:keypress={handleKeypress}
    on:focus={onFocus}
    on:blur={onBlur}
>
    <span color={!checked ? 'orange' : 'white'}>{left}</span>
    <svg
        width="40"
        height="24"
        aria-hidden="true"
        style="margin-rigth: 4">
        <rect
            x="4"
            y="4"
            width="32"
            height="16"
            rx="8"
            fill={checked ? 'orange' : 'gray'}/>
        <circle
            cx={checked ? 28 : 12}
            cy="12"
            r="5"
            fill="white"/>
        {#if isHovered}
            <rect transition:fade="{{duration: 50}}"
                x="1"
                y="1"
                width="38"
                height="22"
                rx="11"
                fill="none"
                stroke="orange"
                stroke-width="2"
            />
        {/if}
    </svg>
    <span color={checked ? 'orange' : 'white'}>{right}</span>
</label>

<style>
    label {
        display: flex;
        align-items: center;
        margin: auto;
        user-select: none;
    }
    rect, circle {
        transition: all 100ms ease;
    }
</style>