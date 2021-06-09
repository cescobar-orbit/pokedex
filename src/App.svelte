<script>
	import {onMount} from 'svelte';
    import { envConfig } from './envConfig';
    import Dashboard from './views/pokemon/index.svelte';
	export let name;

	onMount(async() => {
		try {
            let ctx = isProduction ? envConfig['production'] : envConfig['development'];
            localStorage.clear();
			localStorage.setItem('cfg', JSON.stringify(ctx));
        } catch(e) { console.error(e); }
	});
	
</script>

<style>
    :global(body) {
        font-size: small !important;
	}
	:global(html), :global(body) {
        margin: 5px;
        padding: 0;
        font-size: small
    }
</style>

<Dashboard />