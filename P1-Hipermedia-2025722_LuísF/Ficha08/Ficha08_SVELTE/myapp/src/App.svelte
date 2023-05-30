<script>
  // import svelteLogo from './assets/svelte.svg'
  // import Counter from './lib/Counter.svelte'
  
  import { onMount } from 'svelte';

  let refeicoes = [];

  onMount(async ()=> {
    const res = await fetch('https://final-project-recording-817f4.firebaseio.com/cardapio/.json');
    refeicoes = await res.json();
  });

</script>

<main class="bg-white">
  <div class="d-flex flex-wrap">
    {#each refeicoes as refeicao }
    <div class="p-4">
      <h3 class="cor-principal">{refeicao.prato}</h3>
      <p class="obs">{refeicao.obs}</p>
      <p class="cor-principal preco">{refeicao.total} euros</p>
    </div>
    {/each}
  </div>
</main>

<style lang="postcss">
  @layer base {
    .preco {
      font-weight: 700;
      
      &:hover: 2rem;
    }
  }
  .obs{
    width: 12em;
    word-wrap: break-word;
    height: 5em;
    overflow: hidden;
  }
</style>
 
 
 
 
 
 
 
 
 
  <!-- <div>
    <a href="https://vitejs.dev" target="_blank" rel="noreferrer"> 
      <img src="/vite.svg" class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer"> 
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style> -->
