<script>
	export let winnerData;
</script>

<div class="card p-2 battle mt-2">
	<h4 class="card-title fw-bold text-center">Winner</h4>
	<div class="card-body text-center">
		<a class="winner" href={ winnerData.link }>{ winnerData.name }</a>
	</div>
</div>

<style>
	.winner {
		text-decoration: none;
	}
</style>