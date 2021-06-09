<script>
    import {onMount} from 'svelte';
    import jQuery from 'jquery';

    export let pokemons;
    let pokemon = {};
    
    const detail = (poke) => {
        console.log(poke.name);
        pokemon = poke;
        jQuery( document ).ready(function( $ ) {
            $('#detailModal').modal('show');
        });
    };

    onMount(()=>{
        console.log('pokemonslist: ', pokemons);
    });
</script>

<style>
</style>

{#if pokemons.length > 0}
<div class="container">
    <div class="row">
        <div class="col-md-5 text-center">
             <h4>pokemonslist</h4> &nbsp; &nbsp; 
            <button type="button" class="btn btn-outline-dark">Pokedex</button>
        </div>
    </div>
    <div class="row">
        {#each pokemons as poke, i}
    
            <div class="col-md-5">
                <figure class="figure">
                    <a href="#" on:click|preventDefault={detail(poke)}><img src="{poke.sprites.front_default}" class="figure-img img-fluid rounded" alt="{poke.name}"> </a>
                    <figcaption class="figure-caption"><h5><b>{poke.name}</b>&nbsp; #{poke.order}</h5></figcaption>
                </figure>
                <div class="row">
                    <ul>
                        {#each poke.abilities as a}
                            <li>{a.ability.name}</li>
                        {/each}
                    </ul>
                </div>
            </div>
        {/each}
    </div>
</div>
{:else}
<div class="text-center">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="sr-only">Loading...</span>
     </div>
</div>
{/if}

