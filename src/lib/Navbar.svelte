<script>
	import { writable } from 'svelte/store';

	function onMenuClick() {
		var btnRow = document.getElementById('navbar-btn-row-mobile');
		if (btnRow.style.right === '-500px') {
			btnRow.style.right = '0';
		} else {
			btnRow.style.right = '-500px';
		}
	}
</script>

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
	<img src="/menu-button.png" class="navbar-menu-button" alt="menu button" on:click={onMenuClick} />
	<div class="navbar-btn-row-mobile" id="navbar-btn-row-mobile">
		<a href="#skills-section">Skills</a>
		<a href="#projects-section">Projects</a>
		<a href="#personal-corner-section">Hobbies</a>
		<a href="#contact-section">Contact</a>
		<a download="kielsa-cv.pdf" href="/kielsa-cv.pdf">CV</a>
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
	.navbar-menu-button {
		height: 70%;
		display: none;
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
	.navbar-btn-row-mobile {
		display: none;
		position: absolute;
		right: -500px;
		border-bottom-left-radius: 1rem;
		height: 300px;
		padding: 20px;
		background-color: var(--primary);
		transition: all 0.5s;
	}
	.navbar-btn-row-mobile a {
		color: var(--primary-font-light);
		text-decoration: none;
		font-size: 24px;
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

	@media screen and (max-width: 950px) and (max-height: 1400px) {
		.navbar-btn-row {
			width: 400px;
		}
	}
	@media screen and (max-width: 500px) {
		.navbar-btn-row {
			width: 400px;
		}
		.cv-download-btn {
			display: none;
		}
		.navbar-btn-row {
			display: none;
		}
		.navbar-btn-row-mobile {
			position: absolute;
			top: 6vh;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
		}
		.navbar-menu-button {
			display: block;
			position: absolute;
			right: 20px;
			top: 15%;
		}
	}
</style>
