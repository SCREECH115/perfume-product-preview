const button = document.querySelector(".addToCard");
const popup = document.querySelector(".popup");
const price = document.querySelector(".actualPrice");
const pricePopup = document.querySelector(".pricePopup");
const title = document.querySelector(".title");

button.addEventListener("click", () => {
  // Get the price from the button
  const actualPrice = price.innerHTML;
  const text = title.innerHTML;

  pricePopup.innerHTML = `${text} ${actualPrice}`;

  popup.classList.add("active");
});

popup.addEventListener("click", () => {
  popup.classList.remove("active");
});
