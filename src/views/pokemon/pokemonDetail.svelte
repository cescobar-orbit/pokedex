<script>
</script>

<style>
</style>


<div class="modal fade" id="detailModal" tabindex="-1" aria-labelledby="detailModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-xl">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">POKEDEX &nbsp;<small class="text-muted">pokemons packed.</small></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               <div class="container">
                    <figure class="figure">
                        <img src="{poke.sprites.front_default}" class="figure-img img-fluid rounded" alt="{poke.name}">
                        <figcaption class="figure-caption"><h5><b>{poke.name}</b>&nbsp; #{poke.order}</h5></figcaption>
                    </figure>
                  
               </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" on:click|preventDefault={saveChanges}>Save changes</button>
            </div>
        </div>
    </div>
</div>
