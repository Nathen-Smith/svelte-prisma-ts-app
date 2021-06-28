<script lang="ts">
  // const { default: App } = require("./App.svelte");
  const users = (async () => {
    const res = await fetch("http://localhost:3000/users");
    return await res.json();
  })();
</script>

{#await users}
  <p>loading...</p>
{:then data}
  {#each data as { id, email, name }}
    <p>{name} {email} {id}</p>
  {/each}
{/await}
