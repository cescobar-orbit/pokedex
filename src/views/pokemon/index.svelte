<script>
	import {onMount, beforeUpdate, afterUpdate} from 'svelte';
    import PokemonList from './pokemonList.svelte';
    import {getPokemons, getPokemonItem} from './commons.js';

    const cfg = JSON.parse(localStorage.getItem('cfg'));
    let pokemons = [];
	let data = [];
    let offset = 0;
    
    const parseData = async(results) => {
		try 
		{
            for(let index=0; index < results.length; index++)
            {  
                let item = await getPokemonItem(results[index].url);
    
                pokemons.push({
                    id: item.id,
                    name: item.name,
                    order: item.order,
                    height: item.height,
                    baseExperience: item.base_experience, 
                    types: item.types,
                    abilities: item.abilities,
                    sprites: item.sprites
                });
            }
        return pokemons;
        }
        catch(e) { console.error(e); }
    };

    onMount(async() => {
		try {			
			data  = await getPokemons(cfg, offset);
            pokemons = await parseData(data.results);
           
            console.log(pokemons);
            
        } catch(e) { console.error(e); }
	});

</script>

<style>
</style>


<PokemonList pokemons={pokemons} />


