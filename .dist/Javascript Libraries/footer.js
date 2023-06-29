document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#formspree');
  const errorEmail = document.querySelector('#email_error');

  function validateEmail(input) {
    const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
    return emailRegex.test(input);
  }

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const emailValid = validateEmail(form.elements.email.value);
    if (!emailValid) {
      errorEmail.style.display = 'block';
    } else {
      errorEmail.style.display = 'none';

      // Perform AJAX form submission
      const formData = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          // Form submission successful
          console.log('Form submitted successfully');
        } else {
          // Form submission failed
          console.error('Form submission failed');
        }
      };
      xhr.send(formData);
    }
  });
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
      2022 TPPS Conference, April. <br />
      All Rights Reserved.
    </p>
  </article>`;
  footer.innerHTML = footerTemp.innerHTML;
}

window.onload = renderFooter();
