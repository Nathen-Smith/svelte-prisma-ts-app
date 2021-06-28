<script lang="ts">
  // let foo = "baz";
  let result = null;

  async function doPost() {
    const res = await fetch("http://localhost:3000/test", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        pls: "why",
      }),
    });
    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<button type="button" on:click={doPost}> Post it. </button>
<p>
  {result}
</p>
