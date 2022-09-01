<script>
	export let socialObj;
</script>

<a href={socialObj.socialUrl}>
	<main class="social-media-card">
		<img src={socialObj.socialImg} alt="social media icon" />
		<p><strong>{socialObj.socialUser}</strong></p>
	</main>
</a>

<style>
	a {
		text-decoration: none;
	}
	.social-media-card {
		color: var(--primary-font-dark);
		width: 200px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 2vh;
	}
</style>
