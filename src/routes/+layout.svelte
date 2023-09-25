<script>
	import { assets } from '$app/paths'
</script>

<div class="name-plus-avatar mt-5">
	<img alt="Lin Team" class="avatar" src={assets + "/favicon.png"} />
	<span class="fs-1 text-center fw-bold">LIN TEAM</span>
</div>

<main>
    <slot />
</main>

<style>
    @import '../styles/main.css';
    @import '../styles/mobile.css';
</style>