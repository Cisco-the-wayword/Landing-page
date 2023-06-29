const form = document.querySelector('#formspree');
const nameInput = document.getElementById('name');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name_error');
const messageError = document.getElementById('message_error');

form.addEventListener('submit', (event) => {
  if (nameInput.value.trim() === '') {
    nameError.style.display = 'block';
    event.preventDefault();
  } else {
    nameError.style.display = 'none';
  }

  if (messageInput.value.trim() === '') {
    messageError.style.display = 'block';
    event.preventDefault();
  } else {
    messageError.style.display = 'none';
  }
});

form.addEventListener('input', () => {
  if (nameInput.value.trim() !== '') {
    nameError.style.display = 'none';
  }

  if (messageInput.value.trim() !== '') {
    messageError.style.display = 'none';
  }
});





const footer = document.querySelector('footer');

function renderFooter() {
  const footerTemp = document.createElement('footerTemp');
  footerTemp.innerHTML = `
  <article class="partner">
    <div class="logos">
      <img  class="partner-logo" src="images/partners/mozilla.png" , alt="mozilla-icon" />
      <img  class="partner-logo"  src="images/partners/Google.png" , alt="google-icon" />
      <img  class="partner-logo"  src="images/partners/navar.png" , alt="naver-icon" />
      <img  class="partner-logo"  src="images/partners/daumkakao.svg" , alt="daum-icon" />
      <img  class="partner-logo"  src="images/partners/airbnb.png" , alt="airbnb-icon" />
    </div>
  </article>
  <article class="copy-rights">
  <p class="copyrights"> For further information,<br/>
  Kindly reach out to us at <br/>
  impact2023@techfolder.org.ng </p>
    <img src="images/impact_footer.png" alt="cc logo" class="footer-logo" class="copyrights" />
    <div class="copyrights">
    <p>FOLLOW US ON SOCIAL MEDIA </p>
    <img
    class="tool-bar-item"
    src="images/social/facebook.png"
    alt="facebook-icon"
  />
  <img
    class="tool-bar-item"
    src="images/social/twitter.png"
    alt="twitter-icon"
  />
  <img
    class="tool-bar-item"
    src="images/social/instagram.png"
    alt="facebook-icon"
  />
  <img
    class="tool-bar-item"
    src="images/social/whatsapp.png"
    alt="twitter-icon"
  />
    </div>
    <p class="copyrights">
      IMPACT 2023, April. <br />
      All Rights Reserved.
    </p>
  </article>`;
  footer.innerHTML = footerTemp.innerHTML;
}

window.onload = renderFooter();
