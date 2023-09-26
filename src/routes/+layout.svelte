<script>
	import { assets } from '$app/paths'

	const fuckyou = false;
</script>

<div class="name-plus-avatar mt-5">
	<img alt="Lin Team" class="avatar" src={assets + "/favicon.png"} />
	<span class="fs-1 text-center fw-bold">LIN TEAM</span>
</div>

{ #if fuckyou } 
	<h1>Site disabled</h1>
	<h2>Reason: meon + collabo</h2>
{ :else }
	<main>
	    <slot />
	</main>
{ /if }


<style>
    @import '../styles/main.css';
    @import '../styles/mobile.css';
</style>