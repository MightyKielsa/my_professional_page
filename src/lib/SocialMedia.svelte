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

	@media screen and (max-width: 550px) and (max-height: 800px) {
		img {
			height: 32px;
		}
		.social-media-card {
			width: 140px;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 2vh;
			font-size: 14px;
		}
	}
	@media screen and (max-width: 450px) and (max-height: 920px) {
		img {
			height: 24px;
		}
		.social-media-card {
			width: 25vw;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-top: 2vh;
			font-size: 11px;
		}
	}
</style>
