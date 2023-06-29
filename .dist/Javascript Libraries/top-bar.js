const topBar = document.querySelector('.desktop-bar');
function renderTopBar() {
  topBar.innerHTML = `
<nav class="navbar">
  <div class="nav-logo">
    <a href="index.html" class="logo-link"><img src="images/impact-logo-2023.jpeg" alt="IMPACT 2023 logo" /></a>
  </div>
  <ul class="nav-list">
    <li class="nav-item">
      <a href="about.html"} "> About </a>
    </li>
    <li class="nav-item">Program</li>
    <li class="nav-item">Gallery</li>
    <li class="nav-item">Our Speakers</li>
  </ul>
  <a class="cc-campaign">Register</a>
</nav>`;
}
window.onload = renderTopBar();
