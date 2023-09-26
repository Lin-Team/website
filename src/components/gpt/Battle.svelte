<script>
	export let battleData;
</script>

<div class="card p-2 battle mt-2">
	<div class="card-body">
		{ @html battleData.participants.map(ppant => `<b>${ppant}</b>`).join(" vs ") }
	</div>
	<div class="card-footer">
		Song: { @html battleData.song }
	</div>
</div>