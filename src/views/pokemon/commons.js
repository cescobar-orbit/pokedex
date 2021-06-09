

    const generateRandomizedOffset = (cfg) => {
        // Ramdomize page number to get integers between 1 to 10
        let randSeed = Math.random();
        let page = Math.floor(randSeed * cfg.limit) + 1;
        return (cfg.limit * page) - cfg.limit;
    };

    const getPokemons = async(cfg, offset) => {
        /* Getting pokemons into steps 10 in 10 */
        offset = generateRandomizedOffset(cfg);
        const url = cfg.endpoint+'?limit='+cfg.limit+'&offset='+offset;
        console.log(url);
        const response = await fetch(url, {
            method: 'GET',
            //mode:  'cors',
            cache: 'no-cache',
            headers: {'Content-Type': 'application/json'}
      });
      return await response.json();
    };

    const getPokemonItem = async(endpoint) => {
        const item = await fetch(endpoint, {
            method: 'GET',
            //mode:  'cors',
            cache: 'no-cache',
            headers: {'Content-Type': 'application/json'}
        });
        return await item.json();
    };

    exports.generateRandomizedOffset = generateRandomizedOffset;
    exports.getPokemons = getPokemons;
    exports.getPokemonItem = getPokemonItem;
