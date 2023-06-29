const topBar = document.querySelector('.desktop-bar');
function renderTopBar() {
  topBar.innerHTML = `
<nav class="navbar">
  <div class="nav-logo">
    <a href="index.html" class="logo-link"><img src="images/impact_header.png" alt="IMPACT 2023 logo" /></a>
    <p>IMPACT 2023</p>
  </div>
  <ul class="nav-list">
    <li class="nav-item">
      <a href="about.html"} "> About </a>
    </li>
    <li class="nav-item">Program</li>
    <li class="nav-item">Join</li>
    <li class="nav-item">Sponsor</li>
    <li class="nav-item">News</li>
  </ul>
  <p class="cc-campaign">Register</p>
</nav>`;
}
window.onload = renderTopBar();
