function redirectToSection(url) {
    window.location.href = url;
  }
function handleArrowClick() {
  const nameInput = document.querySelector('.area');
  const name = nameInput.value;

  if (name) {
    window.location.href = `section3.html?name=${name}`;
  } else {
    alert("Please enter a name.");
  }
}
function GotenFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const name = params.get('name'); 

  if (name) {
    const gotenSpan = document.querySelector('.goten');
    if (gotenSpan) {
      gotenSpan.textContent = name; 
    }
  }
}

GotenFromUrl();
function redirectToSection5After3Seconds() {
  if (window.location.pathname.includes('section4.html')) {
    setTimeout(() => {
      window.location.href = 'section5.html';
    }, 3000);
  }
}


redirectToSection5After3Seconds();