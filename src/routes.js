import Pokemon from "./views/pokemon/index.svelte";
import PokedexLayout  from "./views/layouts/PokedexLayout.svelte";

const routes = [
    {
      name: '/',
      component: PokedexLayout,
      redirectTo: 'pokemon'
    },
    {
      name: 'pokemon',
      component: Pokemon,
      layout: PokedexLayout
    }
  ];
  
export { routes };