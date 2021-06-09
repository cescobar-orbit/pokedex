<script>
    import { Route } from 'svelte-router-spa';
    export let currentRoute;
    const params = {};
</script>

<style>
</style>

<div class="container">
  <br/>
  <section class="section">
    <Route {currentRoute} {params} />
  </section>
  <footer>
      <br/><br/><br/>
  </footer>
</div>