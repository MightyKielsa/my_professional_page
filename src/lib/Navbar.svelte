<script></script>

<nav class="nav-bar">
	<a class="cv-download-btn" download="kielsa-cv.pdf" href="/kielsa-cv.pdf"
		><img src="/download-doc.png" alt="download icon" /> CV</a
	>
	<div class="navbar-btn-row">
		<a href="#skills-section">Skills</a>
		<a href="#projects-section">Projects</a>
		<a href="#personal-corner-section">Hobbies</a>
		<a href="#contact-section">Contact</a>
	</div>
</nav>

<style>
	.nav-bar {
		height: 8vh;
		background-color: var(--primary);
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 100;
		box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.5);
	}

	.navbar-btn-row {
		display: flex;
		width: 500px;
		height: 8vh;
		justify-content: space-around;
		align-items: center;
		position: absolute;
		right: 0;
	}

	.navbar-btn-row a {
		color: var(--primary-font-light);
		text-decoration: none;
	}

	.cv-download-btn {
		position: absolute;
		height: 100%;
		left: 10px;
		color: var(--primary-font-light);
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	.cv-download-btn img {
		height: 5vh;
		margin: 5px;
	}
</style>
