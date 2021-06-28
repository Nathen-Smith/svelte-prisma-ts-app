<script lang="ts">
  export let name: string;
  import FetchUsers from "./FetchUsers.svelte";
  // const users = (async () => {
  //   const res = await fetch("http://localhost:3000/users");
  //   return await res.json();
  // })();
</script>

<main>
  <h1>Hello {name}!</h1>
  <p>
    Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn
    how to build Svelte apps.
  </p>
</main>

<FetchUsers />

<!-- {#await users}
  <p>loading...</p>
{:then data}
  {#each data as { id, email, name }}
    <p>{name} {email} {id}</p>
  {/each}
{/await} -->
<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
