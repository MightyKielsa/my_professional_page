<script>
	export let socialObj;
</script>

<a href={socialObj.socialUrl}>
	<main>
		<img src={socialObj.socialImg} alt="social media icon" />
		<p><strong>{socialObj.socialUser}</strong></p>
	</main>
</a>

<style></style>
