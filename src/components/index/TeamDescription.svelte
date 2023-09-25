<script>
    /** @type {string} */
    export let descriptionText;
</script>

<div class="card team-desc my-4 p-3">
    <h3 class="card-title fw-bold">О нас</h3>
    <p class="card-text">
        { @html descriptionText }
    </p>
</div>


<style>
    .team-desc {
        display: flex;
        transition: 0.3s;
    }
    .team-desc:hover {
    	background-color: var(--bs-tertiary-bg);
    }
</style>