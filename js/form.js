(() => {
  const refs = {
    input: document.querySelector('input[type="checkbox"]'),
    btn: document.querySelector('button[type="submit"]'),
  };

  refs.input.addEventListener("click", (event) => {
    const checkbox = event.target;

    if (checkbox.checked) {
      refs.btn.disabled = false;
    } else {
      refs.btn.disabled = true;
    }
  });
})();
