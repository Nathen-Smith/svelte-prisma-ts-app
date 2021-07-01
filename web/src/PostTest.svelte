<script lang="ts">
  // let foo = "baz";
  let result = null;
  let link = "";

  async function doPost() {
    const res = await fetch("http://localhost:3000/test", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        url: link,
      }),
    });
    const json = await res.json();
    result = JSON.stringify(json);
  }
</script>

<input bind:value={link} placeholder="enter a link" />
<button type="button" on:click={doPost}> Submit </button>
<p>
  {result || "hmmmmmm"}
</p>
