const range = document.getElementById("range");

range.addEventListener("input", (e) => {
  const range = +e.target.value;
  const value = e.target.nextElementSibling;
  value.innerHTML = range;
});
