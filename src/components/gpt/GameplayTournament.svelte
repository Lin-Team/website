<script>
    import Battle from './Battle.svelte';
    import Winner from './Winner.svelte';

    let gptPage = 0;

    export let gptData;
</script>

{ #if gptData === null }
    Loading...
{ :else }

<div class="card team-gpt my-4 p-3">
    <h3 class="card-title fw-bold">Турнир по геймплею</h3>
    <h4 class="card-title fw-medium">Хост - {gptData.host}</h4>
    <div class="team-gpt-body card-text">
        { #each gptData.stages as stage, index }
            <div class={"gpt-stage px-2 mx-2" + (index !== gptPage ? " mobile-hidden" : "") + (gptData.current_stage == index ? " active" : "")}>
                { #each stage.battles as battle }
                    <Battle battleData={battle} />
                { /each }
            </div>
        { /each }
        <div class={"gpt-stage mx-2" + (gptPage !== 3 ? " mobile-hidden" : "")}>
            <Winner winnerData={gptData.winner} />
        </div>
    </div>
    <nav class="w-100 d-flex justify-content-center desktop-hidden" aria-label="...">
        <ul class="pagination">
            { #each [0, 1, 2] as page }
                <li class="page-item">
                    <a 
                        class="page-link" 
                        href="#" 
                        on:click|preventDefault={() => {gptPage = page}}
                        >
                        { page + 1 }
                    </a>
                </li>
            { /each }
            <li class="page-item">
                <a 
                    class="page-link" 
                    href="#" 
                    on:click|preventDefault={() => {gptPage = 3}}
                    >
                    Winner
                </a>
            </li>
        </ul>
    </nav>
</div>

{ /if }


<style>
    .team-gpt-body {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
    }
    .team-gpt {
        display: flex;
        transition: 0.3s;
    }
    .team-gpt:hover {
    	background-color: var(--bs-tertiary-bg);
    }
    .gpt-stage {
        display: flex;
        flex-direction: column;
        height: 100vh;
        justify-content: space-around;
    }
    .gpt-stage.active {
        background-color: var(--bs-tertiary-bg);
    }
</style>