<script lang="ts">
  import { fade } from "svelte/transition";
  import { user } from "../firebase/auth";
</script>

{#if $user}
  <img in:fade src={$user.photoURL} alt={$user.displayName} class="w-10 h-10"/>
{:else}
  <button on:click={user.login}>Login</button>
{/if}
